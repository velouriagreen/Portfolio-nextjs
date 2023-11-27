const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));


// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({

  service: 'gmail',
  auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
  },
});

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// API route to handle email submissions
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate input data
    if (!name || !email || !message) {
      return res.status(400).send({ error: 'Missing required fields' });
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).send({ error: 'Invalid email address' });
    }

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: `<${process.env.MAIL_USER}>`,
      subject: subject || 'No Subject',
      text: `Message from: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`,
    });
    res.status(200).send({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);

    let errorMessage;

    switch (error.code) {
      case 'EENVELOPE':
        errorMessage = 'No recipients defined';
        break;
      case 'ECONNECTION':
        errorMessage = 'Could not connect to the email server';
        break;
      default:
        errorMessage = error.message || 'Internal server error';
    }

    return res.status(error.responseCode || 500).send({ error: errorMessage });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
