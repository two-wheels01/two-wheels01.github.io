const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.mailbox.org',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'steffen.kludt@mailbox.org',
    pass: 'P8m25*w3iJl*SR*swMOgTE9ft',
  },
});

let mailOptions = {
  from: 's.kludt@mailbox.org',
  to: 'steffen.kludt@mailbox.org  ',
  subject: 'Test',
  text: 'Hello World!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error.message);
  }
  console.log('success');
});
