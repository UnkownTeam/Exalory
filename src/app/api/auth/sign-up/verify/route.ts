import { prisma } from "@/app/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

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
    const secret = process.env.JWT_SECRET;
    const MAX_AGE = 60 * 60 * 24 * 30;
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
    const token = sign(
      { email: user?.email, phone: user?.phone },
      secret as string,
      {
        expiresIn: MAX_AGE,
      }
    );
    const serialized = serialize("access-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });
    return Response.json(
      { message: "Email Verified", token: serialized },
      {
        headers: {
          "Set-Cookie": serialized,
        },
      }
    );
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
    return Response.json({ message: "Phone Verified" });
  }

  return Response.json({ message: "Please provide an email or phone code" });
};
