import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Starting server...');
dotenv.config();

if (!process.env.DEEPSEEK_API_KEY) {
  console.warn('WARNING: DEEPSEEK_API_KEY is not set in .env file');
}

const app = express();
app.use(cors());
app.use(express.json());

// Log all requests
app.use((req, reqRes, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, reqRes) => {
  reqRes.send('SMTP Server is running');
});

const PORT = process.env.PORT || 5001;

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

app.post('/api/consultation', async (req, res) => {
  console.log('Received consultation request with body:', JSON.stringify(req.body, null, 2));
  const { name, email, phone, service, message } = req.body;

  // 1. Create a transporter
  // Note: For production, use real SMTP settings in .env
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const serviceLabels = {
    'stem-cell': 'Stem Cell Therapy',
    'prp': 'PRP Injection',
    'joint-injections': 'Joint & Facet Injections',
    'a2m': 'A2M Therapy',
    'nerve-blocks': 'Nerve Root Blocks',
    'scs': 'Spinal Cord Stimulation'
  };

  const serviceLabel = serviceLabels[service] || service || 'General Inquiry';

  // 2. Define the HTML template (Premium Design)
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f8fafc; padding-bottom: 60px; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; color: #1e293b; border-radius: 16px; overflow: hidden; margin-top: 40px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
        .header { background: linear-gradient(135deg, #1B3A5C 0%, #2D5A8E 100%); padding: 48px 40px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
        .header p { margin: 8px 0 0; font-size: 14px; letter-spacing: 0.2em; opacity: 0.9; text-transform: uppercase; }
        .badge { display: inline-block; padding: 6px 16px; background: rgba(255, 255, 255, 0.15); border-radius: 100px; font-size: 12px; font-weight: 600; margin-top: 24px; text-transform: uppercase; letter-spacing: 0.05em; }
        .content { padding: 48px 40px; }
        .greeting { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: #0f172a; }
        .intro { font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 32px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 32px; background-color: #f1f5f9; border-radius: 12px; overflow: hidden; }
        .data-row td { padding: 16px 20px; border-bottom: 1px solid #e2e8f0; }
        .data-row:last-child td { border-bottom: none; }
        .label { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .value { font-size: 16px; font-weight: 500; color: #1e293b; }
        .message-box { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-top: 8px; font-style: italic; color: #334155; line-height: 1.6; }
        .footer { text-align: center; padding: 32px 40px; font-size: 13px; color: #94a3b8; line-height: 1.5; }
        .btn-container { text-align: center; margin-top: 16px; }
        .btn { display: inline-block; padding: 16px 32px; background-color: #1B3A5C; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; transition: background-color 0.2s; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <table class="main">
          <tr>
            <td class="header">
              <h1>VALOR</h1>
              <p>PAIN & WELLNESS</p>
              <div class="badge">New Inquiry Received</div>
            </td>
          </tr>
          <tr>
            <td class="content">
              <div class="greeting">Hello Team,</div>
              <div class="intro">A new consultation request has been submitted through the <strong>Valor Pain & Wellness</strong> website. Please review the patient details below:</div>
              
              <table class="data-table">
                <tr class="data-row">
                  <td>
                    <div class="label">Patient Name</div>
                    <div class="value">${name}</div>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>
                    <div class="label">Email Address</div>
                    <div class="value">${email}</div>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>
                    <div class="label">Phone Number</div>
                    <div class="value">${phone}</div>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>
                    <div class="label">Interested Service</div>
                    <div class="value">${serviceLabel}</div>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>
                    <div class="label">Patient Message</div>
                    <div class="message-box">
                      ${message ? message.replace(/\n/g, '<br>') : 'No additional information provided.'}
                    </div>
                  </td>
                </tr>
              </table>

              <div class="btn-container">
                <a href="mailto:${email}" class="btn">Reply to Patient</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="footer">
              This is an automated notification from the Valor Pain & Wellness web portal.<br>
              © ${new Date().getFullYear()} Valor Pain & Wellness. All rights reserved.<br>
              <span style="display: block; margin-top: 8px;">1234 Clinic Way, Dallas TX | +1 469-215-8538</span>
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>
  `;

  // 3. Send the email
  try {
    await transporter.sendMail({
      from: `"Valor Pain & Wellness" <${process.env.SMTP_USER}>`,
      to: "info@valorpainwellness.com, drjeremy@valorpainwellness.com",
      replyTo: email,
      subject: `New Lead: ${name} - ${serviceLabel}`,
      html: htmlContent,
    });

    res.status(200).json({ success: true, message: 'Consultation request sent successfully.' });
  } catch (error) {
    console.error('SMTP Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send consultation request.' });
  }
});

// AI Chat Agent Endpoint
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  console.log(`[${new Date().toISOString()}] Received chat request with ${messages.length} messages`);

  const systemPrompt = `
You are "Elena", a professional, empathetic, and highly knowledgeable Senior Patient Advisor at Valor Pain & Wellness.
Your goal is to help prospective patients understand our regenerative medicine treatments and guide them toward scheduling a consultation.

ABOUT VALOR PAIN & WELLNESS:
- Location: 1234 Clinic Way, Dallas TX (Serving the greater Dallas area).
- Phone: +1 469-215-8538
- Email: info@valorpainwellness.com
- Hours: Mon-Fri 8:00 AM - 6:00 PM

SERVICES WE OFFER:
1. Stem Cell Therapy: Natural tissue repair using the body's own healing mechanisms.
2. PRP (Platelet-Rich Plasma): Using concentrated blood platelets to accelerate healing.
3. Joint & Facet Injections: Targeted relief for localized joint pain and inflammation.
4. A2M Therapy: Natural protein injections to prevent cartilage breakdown.
5. Nerve Root Blocks: Diagnostic and therapeutic injections for nerve pain.
6. Spinal Cord Stimulation: Advanced neurostimulation for chronic pain.
7. Electrodiagnosis (EMG/NCS): Precise nerve and muscle testing to find the source of pain.

TONE AND STYLE:
- Professional yet warm and human-like.
- Use medical terminology with clear, simple explanations.
- Be proactive but never pushy.
- If a patient mentions severe symptoms, always recommend scheduling a consultation for a professional evaluation.
- Keep responses concise and focused on the patient's concerns.

CONSTRAINTS:
- Do not provide direct medical prescriptions.
- Always identify as Elena from Valor Pain & Wellness.
- Encourage users to use the consultation form or call us directly.
`;

  try {
    console.log('Sending request to Deepseek API...');
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-reasoner',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        stream: false
      })
    });

    console.log(`Deepseek API respond with status: ${response.status}`);
    const data = await response.json();
    
    if (data.error) {
      console.error('Deepseek API Error Detail:', JSON.stringify(data.error, null, 2));
      return res.status(500).json({ error: 'AI Assistant is temporarily unavailable.' });
    }

    if (!data.choices || !data.choices[0]) {
      console.error('Invalid response from Deepseek:', JSON.stringify(data, null, 2));
      return res.status(500).json({ error: 'Invalid response from AI server.' });
    }

    const aiMessage = data.choices[0].message;
    console.log('AI Response successful');
    res.json(aiMessage);
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to communicate with AI Assistant.' });
  }
});

// Serve static files from the frontend build
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Handle SPAs - route all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on port ${PORT}`);
});
