import { otpGeneration, transport, mailOptions, prisma } from "@/app/constants";
import { Twilio } from "twilio";

export const POST = async (req: Request) => {
  const { email, phone, role } = await req.json();
  if (phone) {
    const client = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    const phoneOtp = otpGeneration;
    await client.messages.create({
      from: "+13309702819",
      to: `+2${phone}`,
      body: `Your OTP is ${phoneOtp}`,
    });
    await prisma.user.create({
      data: {
        phoneOtp,
        phone,
        role,
      },
    });
    return Response.json({ message: "Phone sent", otp: phoneOtp });
  }

  if (email) {
    const emailOtp = otpGeneration;
    try {
      await transport.sendMail({
        ...mailOptions,
        to: email,
        text: `Your OTP is ${emailOtp}`,
      });
      await prisma.user.create({
        data: {
          emailOtp,
          email,
          role,
        },
      });
      return Response.json({ message: "Email sent", otp: emailOtp });
    } catch (error) {
      console.log(error);
    }
  }

  return Response.json({
    error: "Please provide an email or phone number",
  });
};
