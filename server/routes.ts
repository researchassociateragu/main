import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import { storage } from "./storage";
import { insertContactInquirySchema, insertCareerApplicationSchema } from "@shared/schema";
import { sendContactConfirmation, sendCareerApplicationConfirmation, sendAdminNotification } from "./email";
import { saveToGoogleSheets } from "./googleSheets";

// Configure multer for file uploads
const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Save to storage
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send confirmation email to user
      await sendContactConfirmation(validatedData.email, validatedData.name);
      
      // Send notification to admin
      await sendAdminNotification('contact', validatedData);
      
      // Save to Google Sheets
      await saveToGoogleSheets('Contact Inquiries', [
        inquiry.id,
        inquiry.name,
        inquiry.email,
        inquiry.message,
        inquiry.submittedAt.toISOString(),
      ]);
      
      res.json({ success: true, inquiry });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Failed to submit contact form" 
      });
    }
  });

  // Career application submission
  app.post("/api/career-applications", upload.single('resume'), async (req, res) => {
    try {
      const { name, email, phone, role, message } = req.body;
      
      const validatedData = insertCareerApplicationSchema.parse({
        name,
        email,
        phone,
        role,
        message,
      });
      
      // Handle resume file
      let resumeUrl: string | undefined;
      if (req.file) {
        // In production, you'd upload to cloud storage (S3, etc.)
        // For now, we'll store the local path
        resumeUrl = `/uploads/${req.file.filename}`;
      }
      
      // Save to storage
      const application = await storage.createCareerApplication({
        ...validatedData,
        resumeUrl,
      });
      
      // Send confirmation email to applicant
      await sendCareerApplicationConfirmation(validatedData.email, validatedData.name);
      
      // Send notification to admin with resume
      await sendAdminNotification('career', {
        ...validatedData,
        resumePath: req.file?.path,
        resumeFilename: req.file?.originalname,
      });
      
      // Save to Google Sheets
      await saveToGoogleSheets('Career Applications', [
        application.id,
        application.name,
        application.email,
        application.phone,
        application.role,
        application.message,
        application.resumeUrl || 'N/A',
        application.submittedAt.toISOString(),
      ]);
      
      res.json({ success: true, application });
    } catch (error) {
      console.error("Career application error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Failed to submit application" 
      });
    }
  });

  // Get all contact inquiries (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Get inquiries error:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Get all career applications (admin endpoint)
  app.get("/api/career-applications", async (req, res) => {
    try {
      const applications = await storage.getAllCareerApplications();
      res.json(applications);
    } catch (error) {
      console.error("Get applications error:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
