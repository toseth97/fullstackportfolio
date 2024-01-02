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
    console.log(req.body);
    const { name, email, message } = req.body;
    if (!name && !email && !message)
        return res.send({
            status: "error",
            message: "Please fill all fields.",
        });
    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL.USER, // generated ethereal email
            pass: process.env.EMAIL.PASS, // generated ethereal password
        },
    });
    let mailOptions = {
        from: `${name} <${email}>`,
        to: `oluwasheun9721@gmail.com`,
        subject: `Message From ${name}`,
        text: message,
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log("Email sent");
        res.json({ status: "success" });
    });
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
