const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
// console.log(process.env.MAIL_USER);
// console.log(process.env.MAIL_TO);
// console.log(process.env.MAIL_PASS);
// console.log(process.env.MAIL_HOST);
// console.log(process.env.MAIL_PORT);

const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

const PORT = process.env.PORT || 3001;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({

  service: 'gmail',
  auth: {
      user: "testd1312@gmail.com",
      pass: "xwsz cxne zbua emfj",
      // user: process.env.MAIL_USER,
      // pass: process.env.MAIL_PASS,
  },
});

app.use((req, res, next) => {

  console.log(req.body);

  next();

});



// Define the API route to handle email submissions
app.post('/api/messages', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
 console.log('req.body:', req.body);
  // Validate input data
  if (!name || !email || !message) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  if (!req.body.email) {
    return res.status(400).send({error: 'Email required'});
  }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).send({ error: 'Invalid email address' });
    }
  

  // Send the email
  try {
    await transporter.sendMail({
      from: `Portfolio Contact Form <${process.env.MAIL_USER}>`,
      to: "testd1312@gmail.com", // Your email address
      // to: process.env.MAIL_TO, // Your email address
      subject: `${subject}`,
      text: `Message from: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
    console.log("Recipient email:", process.env.MAIL_TO);
    console.log("Recipient user:",process.env.MAIL_USER);
    console.log("Recipient to:",process.env.MAIL_TO);
    console.log("Recipient pass:",process.env.MAIL_PASS);
    console.log("Recipient host:",process.env.MAIL_HOST);
    console.log("Recipient port:",process.env.MAIL_PORT);

    res.status(200).send({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
        // Handle the error and send an appropriate response to the client
        if (error.code === 'EENVELOPE') {
          return res.status(400).send({ error: 'No recipients defined' });
        } else {
          return res.status(500).send({ error: 'Internal server error' });
        }
    
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
