import { prisma } from "@/app/api/constantsBack";

export const POST = async (req: Request) => {
  const { emailCode, phoneCode } = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") as string;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (emailCode) {
    const emailOtp = user?.emailOtp;
    if (emailOtp === emailCode) {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          emailVerified: true,
        },
      });
    }
    return Response.json({ message: "Email Verified", user: user });
  }

  if (phoneCode) {
    const phoneOtp = user?.phoneOtp;
    if (phoneOtp === phoneCode) {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          phoneVerified: true,
        },
      });
    }
    return Response.json({
      message: "Phone Verified",
      user: user,
    });
  }

  return Response.json({ message: "Please provide an email or phone code" });
};
