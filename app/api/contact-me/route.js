import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, sender_email, message } = body;

  if (!name || !sender_email || !message) {
    return new Response(JSON.stringify({ status: "error", message: "Please fill all fields." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || process.env.USER,
      pass: process.env.EMAIL_PASS || process.env.PASS
    }
  });

  const mailOptions = {
    from: `${name} <${sender_email}>`,
    to: `oluwasheun9721@gmail.com`,
    subject: `DevWithTobi ( ${name} )`,
    html: `<div>${message}<br><br> This message was from ${sender_email}</div>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "success", type: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "error", type: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
