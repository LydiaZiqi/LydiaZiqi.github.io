const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: "OAuth2",
      user: "ziqiliu998@gmail.com",
      clientId: "880413455050-5dfi1kmdkt2fro56kfhmvj8cp6cfcc99.apps.googleusercontent.com",
      clientSecret: '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',
      refreshToken: "1//04zfZXClWTJciCgYIARAAGAQSNwF-L9Ir2N5IRRQgT7WIdUCtA5jUYpYSJ9_tGXKh1JWQWWAEsF6EVNMILcGdhJqHJ_DtChD6Ps0",
    },
  });


transporter.on('token', token => {
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
  });

  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  router.post("/contact", (req, res) => {
    // ... rest of the code ...
    transporter.sendMail(mail, (error, info) => { // Changed from contactEmail to transporter
      if (error) {
        console.error(error);
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ status: "Success", message: "Message Sent" });
      }
    });
});