import { google } from "googleapis";

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;
const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS;

// Initialize Google Sheets client
let sheetsClient: any = null;

const initSheetsClient = async () => {
  if (!GOOGLE_CREDENTIALS || !SPREADSHEET_ID) {
    console.warn("⚠️  No Google Sheets credentials provided. Data will be stored in memory only.");
    return null;
  }

  try {
    const credentials = JSON.parse(GOOGLE_CREDENTIALS);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const authClient = await auth.getClient();
    sheetsClient = google.sheets({ version: "v4", auth: authClient as any });
    console.log("✅ Google Sheets client initialized");
    return sheetsClient;
  } catch (error) {
    console.error("❌ Failed to initialize Google Sheets client:", error);
    return null;
  }
};

// Save data to Google Sheets
export async function saveToGoogleSheets(sheetName: string, data: any[]) {
  if (!sheetsClient) {
    sheetsClient = await initSheetsClient();
  }

  if (!sheetsClient || !SPREADSHEET_ID) {
    console.log("📊 Google Sheets data (not saved):", { sheetName, data });
    return;
  }

  try {
    // Append row to the specified sheet
    await sheetsClient.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:Z`,
      valueInputOption: "RAW",
      resource: {
        values: [data],
      },
    });

    console.log(`✅ Data saved to Google Sheet: ${sheetName}`);
  } catch (error) {
    console.error("❌ Failed to save to Google Sheets:", error);
    
    // If sheet doesn't exist, try to create it
    try {
      await sheetsClient.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        resource: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        },
      });

      // Add headers
      const headers = sheetName === 'Contact Inquiries'
        ? ['ID', 'Name', 'Email', 'Message', 'Submitted At']
        : ['ID', 'Name', 'Email', 'Phone', 'Role', 'Message', 'Resume URL', 'Submitted At'];

      await sheetsClient.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A1:Z1`,
        valueInputOption: "RAW",
        resource: {
          values: [headers],
        },
      });

      // Try appending data again
      await sheetsClient.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A:Z`,
        valueInputOption: "RAW",
        resource: {
          values: [data],
        },
      });

      console.log(`✅ Created sheet "${sheetName}" and saved data`);
    } catch (createError) {
      console.error("❌ Failed to create sheet and save data:", createError);
    }
  }
}
