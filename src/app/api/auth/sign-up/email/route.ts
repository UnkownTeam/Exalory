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
    return Response.json({
      statusCode: 402,
      success: false,
      message: requestBody.error,
    });

  const { email } = requestBody.data;

  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (findUser)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "User already exists",
    });

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
      statusCode: 200,
      message: "User Created Successfully and Email OTP Sent",
      success: true,
      otp: emailOtp,
      user: newUser,
    });
  } catch (error) {
    return Response.json({ statusCode: 402, success: false, message: error });
  }
};
