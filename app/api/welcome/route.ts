import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Welcome from "../../emails/Welcome";

const resend = new Resend(process.env.EMAIL_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    const data = await resend.sendEmail({
      from: "sani@kaculoss.tech",
      to: email,
      subject: `Thank You for Contacting Me, ${name}`,
      react: Welcome({ name }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
