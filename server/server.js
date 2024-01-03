require("dotenv").config();
const express = require("express");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3300 | process.env.PORT;
const corsOption = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));

app.post("/contact-me", (req, res) => {
    const { name, sender_email, message } = req.body;
    if (!name && !sender_email && !message)
        return res.send({
            status: "error",
            message: "Please fill all fields.",
        });
    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER, // generated ethereal email
            pass: process.env.PASS, // generated ethereal password
        },
    });
    let mailOptions = {
        from: sender_email,
        to: `oluwasheun9721@gmail.com`,
        subject: `Message From Your Portfolio Website`,
        html: `<div>${message}<br><br> This message was from ${sender_email}</div>`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err.message);
            return res.status(500).json({ message: "error", type: false });
        } else {
            console.log("Email sent");
            return res.status(200).json({ message: "success", type: true });
        }
    });
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
