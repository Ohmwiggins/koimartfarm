import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const { name, company, topic, details } = await req.json();

        if (!name || !company || !topic || !details) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        console.log(name)
        console.log(company)
        console.log("buggggg")
        const user = process.env.NODEMAILER_GMAIL_USER;
        const appPass = process.env.NODEMAILER_APP_PASSWORD;

        if (!user || !appPass) {
            return NextResponse.json(
                { ok: false, error: "Server email credentials are not configured" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: { user, pass: appPass },
        });

        const subject = `${name} - ${company}`
        const html = `<div><p><b>From:</b> ${name}</p>
          <p><b>Company:</b> ${company}</p>
          <p><b>Topic:</b> ${topic}</p>
          <p><b>Details:</b> ${details}</p><div>`;

        const info = await transporter.sendMail({
            from: user,
            to: process.env.TARGET_EMAIL,
            subject,
            html: html ?? undefined,
        });

        return NextResponse.json({
            ok: true,
            messageId: info.messageId
        });
    } catch (err: any) {
        console.error("Email send failed:", err);
        return NextResponse.json(
            { ok: false, error: err?.message ?? "Send failed" },
            { status: 500 }
        );
    }
}
