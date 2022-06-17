const nodemailer = require("nodemailer");

function sendMail(subject, body, to) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: "yahoo",
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  message = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    text: body,
  };
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var hour = a.getHours() - 2;
  return hour;
}

const stringBetweenParentheses = (st) => {
  var regExp = /\(([^)]+)\)/;
  var matches = regExp.exec(st);
  return matches[1];
};
module.exports = { makeid, timeConverter, stringBetweenParentheses,sendMail };
