const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Testing SMTP connection with:');
console.log('Host:', process.env.SMTP_HOST);
console.log('Port:', process.env.SMTP_PORT);
console.log('User:', process.env.SMTP_USER);
console.log('Secure:', process.env.SMTP_SECURE);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  timeout: 5000 // 5 seconds timeout
});

transporter.verify(function (error, success) {
  if (error) {
    console.log('Verification Error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
  process.exit();
});
