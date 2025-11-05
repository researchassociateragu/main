# Futryx Website

A professional, modern website for Futryx - an IT and innovation startup building smart technology solutions for modern businesses.

## Overview

Futryx is a full-stack website featuring:
- **Multi-page structure**: Home, About, Services, Join Futryx, Contact
- **Modern design**: Gradient purple-pink branding (#A020F0 → #FF007F)
- **Functional forms**: Contact inquiries and career applications
- **Email notifications**: Automatic confirmations and admin alerts
- **Google Sheets integration**: Optional automatic data storage
- **File uploads**: Resume submissions for career applications

## Features

### Pages
1. **Home**: Hero section with gradient background, services preview, company overview
2. **About Us**: Mission, vision, company values, and culture
3. **Services**: 6 core services (Web Dev, App Dev, Software Dev, Cloud & DevOps, UI/UX, Tech Consulting)
4. **Join Futryx**: Career application form with resume upload
5. **Contact**: Contact inquiry form with company information

### Forms
- **Contact Form**: Name, Email, Message
- **Career Application**: Name, Email, Phone, Role (Intern/Developer/Designer/Other), Message, Resume Upload

### Integrations
- **Email System**: Sends confirmations to users and notifications to admin
- **Google Sheets**: Automatically saves form submissions to spreadsheet
- **File Storage**: Handles resume uploads (PDF, DOC, DOCX)

## Setup Instructions

### 1. Email Configuration (Required for production)

The website sends email confirmations and notifications. Configure your SMTP settings:

**Option A: Gmail**
1. Create a Gmail account or use existing
2. Enable 2-factor authentication
3. Generate an App Password: https://myaccount.google.com/apppasswords
4. Add to Secrets:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   COMPANY_EMAIL=hello@futryx.com
   ```

**Option B: SendGrid, Mailgun, or other SMTP service**
- Follow your provider's documentation for SMTP credentials
- Update the environment variables accordingly

### 2. Google Sheets Integration (Optional)

To automatically save form submissions to Google Sheets:

1. **Create a Google Cloud Project**
   - Go to https://console.cloud.google.com
   - Create a new project

2. **Enable Google Sheets API**
   - In your project, go to "APIs & Services" > "Library"
   - Search for "Google Sheets API" and enable it

3. **Create Service Account**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Download the JSON key file

4. **Create and Share Google Sheet**
   - Create a new Google Sheet
   - Copy the spreadsheet ID from the URL
   - Share the sheet with the service account email (from JSON)

5. **Add to Secrets**
   ```
   GOOGLE_SHEETS_ID=your-spreadsheet-id-from-url
   GOOGLE_CREDENTIALS={"type":"service_account",...} 
   ```
   (Paste the entire JSON credentials as a single line)

### 3. Running the Application

The application runs automatically with the "Start application" workflow which executes `npm run dev`.

- Frontend: Vite dev server
- Backend: Express server with API routes
- Both served on the same port for seamless integration

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── layout/   # Header, Footer
│   │   │   └── ui/       # Shadcn components
│   │   ├── pages/        # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Join.tsx
│   │   │   └── Contact.tsx
│   │   └── App.tsx       # Main app with routing
├── server/                # Backend Express application
│   ├── routes.ts         # API endpoints
│   ├── storage.ts        # In-memory data storage
│   ├── email.ts          # Email sending functionality
│   └── googleSheets.ts   # Google Sheets integration
├── shared/
│   └── schema.ts         # Shared TypeScript types
└── uploads/              # Resume file storage
```

## API Endpoints

- `POST /api/contact` - Submit contact inquiry
- `POST /api/career-applications` - Submit career application (with file upload)
- `GET /api/contact` - Get all contact inquiries (admin)
- `GET /api/career-applications` - Get all career applications (admin)

## Technologies Used

**Frontend:**
- React + TypeScript
- Vite (build tool)
- Wouter (routing)
- TanStack Query (data fetching)
- React Hook Form (form handling)
- Shadcn UI (component library)
- Tailwind CSS (styling)
- Lucide React (icons)

**Backend:**
- Express.js
- Multer (file uploads)
- Nodemailer (email)
- Google Sheets API
- Zod (validation)

## Design System

**Colors:**
- Primary Gradient: #A020F0 → #FF007F
- Deep Charcoal: #0F172A (header/footer)
- Off White: #F8FAFC (background)
- Cyan Blue: #00CFFD (accents)
- Light Gray: #E2E8F0 (borders)

**Typography:**
- Primary: Inter
- Secondary: Space Grotesk

## Development Notes

- Forms validate using Zod schemas from `shared/schema.ts`
- All form submissions are saved to in-memory storage
- Email confirmations sent to both users and admin
- Google Sheets integration is optional and fails gracefully if not configured
- Resume uploads are stored in the `uploads/` directory
- Mobile-responsive design optimized for all devices

## Deployment Preparation

For GitHub Pages or static hosting:
1. Build the application: `npm run build`
2. The `dist/` folder will contain the static files
3. Configure environment variables in your hosting platform

For production with forms:
- Set up SMTP credentials for email functionality
- Configure Google Sheets integration (optional)
- Set up cloud storage for resume files (AWS S3, Cloudinary, etc.)
- Consider using a database instead of in-memory storage

## Support

For questions or issues with the website, contact the development team.
