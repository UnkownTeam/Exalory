import {
  otpGeneration,
  transport,
  mailOptions,
  prisma,
} from "@/app/api/constantsBack";
import { EmailValidation } from "@/validations";

export const POST = async (req: Request) => {
  const requestBody = EmailValidation.safeParse(await req.json());

  if (!requestBody.success)
    return Response.json({ statusCode: 402, error: requestBody.error });

  const { data } = requestBody;
  const { email } = data;

  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (findUser)
    return Response.json({ statusCode: 402, error: "User already exists" });

  const emailOtp = otpGeneration;
  try {
    await transport.sendMail({
      ...mailOptions,
      to: email,
      text: `Your OTP is ${emailOtp}`,
    });
    const newUser = await prisma.user.create({
      data: {
        emailOtp,
        email,
      },
    });
    return Response.json({
      message: "Email sent",
      otp: emailOtp,
      user: newUser,
    });
  } catch (error) {
    return Response.json({ statusCode: 402, message: error });
  }
};
