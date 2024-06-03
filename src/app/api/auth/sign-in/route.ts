import { prisma } from "@/app/constants";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
export const POST = async (req: Request) => {
  const { email, phone, password } = await req.json();
  if (email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user)
      return Response.json({ error: "Email or password is incorrect" });
    if (!user.password)
      return Response.json({ error: "Please enter a password" });
    const match = await bcrypt.compare(password, user?.password);
    if (!match)
      return Response.json({ error: "Email or password is incorrect" });
    const secret = process.env.JWT_SECRET;
    const MAX_AGE = 60 * 60 * 24 * 30;
    const token = sign({ email: user?.email }, secret as string, {
      expiresIn: MAX_AGE,
    });
    const serialized = serialize("access-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: MAX_AGE,
      sameSite: "strict",
      path: "/",
    });
    return Response.json(
      { message: "Authenticated with email" },
      { headers: { "Set-Cookie": serialized } }
    );
  }

  if (phone) {
    const user = await prisma.user.findUnique({
      where: {
        phone,
      },
    });
    if (!user)
      return Response.json({ error: "Phone or password is incorrect" });
    if (!user.password)
      return Response.json({ error: "Please enter a password" });
    const match = await bcrypt.compare(password, user?.password);
    if (!match)
      return Response.json({ error: "Phone or password is incorrect" });
    const secret = process.env.JWT_SECRET;
    const MAX_AGE = 60 * 60 * 24 * 30;
    const token = sign({ phone: user?.phone }, secret as string, {
      expiresIn: MAX_AGE,
    });
    const serialized = serialize("access-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: MAX_AGE,
      sameSite: "strict",
      path: "/",
    });
    return Response.json(
      { message: "Authenticated with email" },
      { headers: { "Set-Cookie": serialized } }
    );
  }

  return Response.json({ error: "Please enter email or phone" });
};
