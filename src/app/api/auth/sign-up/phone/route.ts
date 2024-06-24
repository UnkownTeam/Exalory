import { otpGeneration, prisma } from "@/app/api/constantsBack";
import { PhoneValidations } from "@/validations";
import { Twilio } from "twilio";

export const POST = async (req: Request) => {
  const requestBody = PhoneValidations.safeParse(await req.json());

  if (!requestBody.success)
    return Response.json({ statusCode: 402,success:false, message: requestBody.error });

  const { phone } = requestBody.data;

  const findUser = await prisma.user.findUnique({
    where: {
      phone,
    },
  });

  if (findUser)
    return Response.json({ statusCode: 402,success:false ,message: "User already exists" });

  try {
    const client = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    const phoneOtp = otpGeneration;
    await client.messages.create({
      from: "+13309702819",
      to: `+20${phone}`,
      body: `Your OTP is ${phoneOtp}`,
    });
    const newUser = await prisma.user.create({
      data: {
        phoneOtp,
        phone,
      },
    });
    return Response.json({
      statusCode: 200,
      success: true,
      message: "User created successfully and Phone OTP sent",
      otp: phoneOtp,
      user: newUser,
    });
  } catch (error) {
    return Response.json({ statusCode: 402, message: error });
  }
};
