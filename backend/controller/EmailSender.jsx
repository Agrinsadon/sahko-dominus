const nodemailer = require('nodemailer');
require('dotenv').config();

function sendEmail(name, email, phone, address, postcode, city, message, callback) {
  const emailContent = `Nimi: ${name}\nSähköposti: ${email}\nPuhelin: ${phone}\nOsoite: ${address}\nPostinumero: ${postcode}\nKaupunki: ${city}\nViesti: ${message}`;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, 
    secure: true,
    auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: "Asiakkaan yhteenotto",
    text: emailContent
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('Email sent: ' + info.response);
      callback(null, { message: 'Email sent successfully' }); 
    }
  });
}

module.exports = { sendEmail };
