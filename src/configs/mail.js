
const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "b98889c3fd5807", // generated ethereal user
    pass: "0736ea0589e638", // generated ethereal password
  },
});