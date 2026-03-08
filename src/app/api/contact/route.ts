import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Send FROM the firm's email
      replyTo: email, // Reply TO the user who filled the form
      to: "contact@clausesandcrowns.com", // Recipient email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        New message from the contact form:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5dbca; padding: 32px; border-radius: 8px;">
          <h2 style="color: #1a2a47; border-bottom: 2px solid #c29d6d; padding-bottom: 12px; font-size: 24px;">New Contact Inquiry</h2>
          <div style="margin-top: 24px; font-family: sans-serif; line-height: 1.6;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #c29d6d;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 24px; background-color: #f9f7f4; padding: 20px; border-radius: 4px; border-left: 4px solid #c29d6d;">
              <p style="margin-top: 0;"><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 32px; border: 0; border-top: 1px solid #e5dbca;" />
            <p style="font-size: 12px; color: #71717a; text-align: center; margin-top: 16px;">
              This inquiry was sent from the Clauses & Crowns website contact form.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send email. Ensure environment variables are set correctly.",
      },
      { status: 500 },
    );
  }
}
