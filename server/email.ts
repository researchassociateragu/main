import nodemailer from "nodemailer";

// Email configuration
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "hello@futryx.com";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

// Create transporter
const createTransporter = () => {
  // If no SMTP credentials are provided, use a test account
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn("⚠️  No SMTP credentials provided. Emails will be logged to console only.");
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const transporter = createTransporter();

// Send contact form confirmation to user
export async function sendContactConfirmation(email: string, name: string) {
  const mailOptions = {
    from: `Futryx <${COMPANY_EMAIL}>`,
    to: email,
    subject: "Thank you for contacting Futryx",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #A020F0 0%, #FF007F 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">FUTRYX</h1>
        </div>
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #0F172A;">Hi ${name},</h2>
          <p style="color: #64748b; line-height: 1.6;">
            Thank you for reaching out to Futryx! We've received your message and will get back to you as soon as possible.
          </p>
          <p style="color: #64748b; line-height: 1.6;">
            Our team typically responds within 24-48 hours. In the meantime, feel free to explore our website to learn more about our services.
          </p>
          <p style="color: #64748b; line-height: 1.6;">
            Best regards,<br/>
            The Futryx Team
          </p>
        </div>
        <div style="background: #0F172A; padding: 20px; text-align: center; color: white; font-size: 12px;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Futryx. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  if (!transporter) {
    console.log("📧 Contact Confirmation Email (not sent):", { to: email, name });
    return;
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact confirmation email sent to:", email);
  } catch (error) {
    console.error("❌ Failed to send contact confirmation email:", error);
  }
}

// Send career application confirmation to applicant
export async function sendCareerApplicationConfirmation(email: string, name: string) {
  const mailOptions = {
    from: `Futryx <${COMPANY_EMAIL}>`,
    to: email,
    subject: "Your application to join Futryx has been received",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #A020F0 0%, #FF007F 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">FUTRYX</h1>
        </div>
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #0F172A;">Hi ${name},</h2>
          <p style="color: #64748b; line-height: 1.6;">
            Thank you for your interest in joining the Futryx team! We've received your application and are excited to review it.
          </p>
          <p style="color: #64748b; line-height: 1.6;">
            Our hiring team will carefully review your application and reach out if there's a good match. This process typically takes 1-2 weeks.
          </p>
          <p style="color: #64748b; line-height: 1.6;">
            We appreciate your patience and look forward to potentially working together!
          </p>
          <p style="color: #64748b; line-height: 1.6;">
            Best regards,<br/>
            The Futryx Team
          </p>
        </div>
        <div style="background: #0F172A; padding: 20px; text-align: center; color: white; font-size: 12px;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Futryx. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  if (!transporter) {
    console.log("📧 Career Application Confirmation Email (not sent):", { to: email, name });
    return;
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Career application confirmation email sent to:", email);
  } catch (error) {
    console.error("❌ Failed to send career application confirmation email:", error);
  }
}

// Send notification to admin
export async function sendAdminNotification(type: 'contact' | 'career', data: any) {
  const isContact = type === 'contact';
  const subject = isContact ? "New Contact Form Submission" : "New Career Application";
  
  let htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0F172A; padding: 20px;">
        <h2 style="color: white; margin: 0;">${subject}</h2>
      </div>
      <div style="padding: 30px; background: #f8f9fa;">
  `;

  if (isContact) {
    htmlContent += `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p style="background: white; padding: 15px; border-left: 4px solid #A020F0;">${data.message}</p>
    `;
  } else {
    htmlContent += `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Role:</strong> ${data.role}</p>
      <p><strong>Message:</strong></p>
      <p style="background: white; padding: 15px; border-left: 4px solid #A020F0;">${data.message}</p>
      ${data.resumeFilename ? `<p><strong>Resume:</strong> ${data.resumeFilename} (attached)</p>` : ''}
    `;
  }

  htmlContent += `
      </div>
    </div>
  `;

  const mailOptions: any = {
    from: `Futryx Website <${COMPANY_EMAIL}>`,
    to: COMPANY_EMAIL,
    subject: subject,
    html: htmlContent,
  };

  // Attach resume if it exists
  if (!isContact && data.resumePath) {
    mailOptions.attachments = [
      {
        filename: data.resumeFilename,
        path: data.resumePath,
      },
    ];
  }

  if (!transporter) {
    console.log("📧 Admin Notification Email (not sent):", { type, data });
    return;
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Admin notification email sent for:", type);
  } catch (error) {
    console.error("❌ Failed to send admin notification email:", error);
  }
}
