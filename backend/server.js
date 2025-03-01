/*
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: true,
  methods: ['GET', 'POST']
}));
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agnesye153@gmail.com',     
    pass: 'cgve ibmo fvix rqua',          
  },
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const mailOptions = {
    from: 'agnesye153@gmail.com',  
    replyTo: email,                
    to: 'agnesye153@gmail.com',    
    subject: `New Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
};

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending failed:", error);
      return res.status(500).json({ message: "Failed to send email", error: error.message });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
*/