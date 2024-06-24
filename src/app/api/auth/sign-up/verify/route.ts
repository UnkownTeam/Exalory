import { prisma } from "@/app/api/constantsBack";

export const POST = async (req: Request) => {
  const { emailCode, phoneCode } = await req.json();
  if (!emailCode && !phoneCode)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "Please provide an email or phone code",
    });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") as string;
  if (!id)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "Please provide an id",
    });

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "User not found",
    });

  if (emailCode) {
    const emailOtp = user?.emailOtp;
    if (emailOtp === emailCode) {
      try {
        const userVerified = await prisma.user.update({
          where: {
            id,
          },
          data: {
            emailVerified: true,
          },
        });
        return Response.json({
          statusCode: 200,
          success: true,
          message: "Email Verified Successfully",
          user: userVerified,
        });
      } catch (error) {
        return Response.json({
          statusCode: 402,
          success: false,
          message: error,
        });
      }
    }
  }

  if (phoneCode) {
    const phoneOtp = user?.phoneOtp;
    if (phoneOtp === phoneCode) {
      try {
        const userVerified = await prisma.user.update({
          where: {
            id,
          },
          data: {
            phoneVerified: true,
          },
        });
        return Response.json({
          message: "Phone Verified Successfully",
          statusCode: 200,
          success: true,
          user: userVerified,
        });
      } catch (error) {
        return Response.json({
          statusCode: 402,
          success: false,
          message: error,
        });
      }
    }
  }
};
