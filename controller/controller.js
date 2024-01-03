const nodemailer = require("nodemailer");

exports.mailDetails = (email, orderId, name) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.USER_EMAIL}`,
    to: `${process.env.EMAIL_PER}`,
    subject: "Regarding Your Order",
    text: orderId,
    html: `<p>Hi, ${name}. Your order with id ${orderId} is received. We will ship the same as soon as possible.</p>`,
  };

  const messageRes = transporter
    .sendMail(message)

    .then((messageRes) => {
      //   response.status(200).json({
      //     message: "Mail Sent",
      //     msgId: messageRes.messageId,
      //     preview: nodemailer.getTestMessageUrl(messageRes),
      //   });
      console.log(messageRes);
    })
    .catch((error) => {
      //   response.status(500).json({ message: error });
      console.log(error.message);
    });
};
