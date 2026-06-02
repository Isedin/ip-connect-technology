import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { firstname, lastname, email, phone, message } = req.body;

    if (!firstname || !lastname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    await resend.emails.send({
      from: "IP-Connect Kontakt <info@ip-connect.ch>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Neue Anfrage von ${firstname} ${lastname}`,
      html: `
        <h2>Neue Kontaktanfrage über ip-connect.ch</h2>

        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>

        <hr />

        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Resend error:", error);

    return res.status(500).json({
      success: false,
      message: "Email could not be sent",
    });
  }
}
