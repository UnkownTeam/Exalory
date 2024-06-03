import { prisma } from "@/app/constants";
import bcrypt from "bcrypt";
export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") as string;
  const { password } = await req.json();
  if (!password) return Response.json({ error: "Please enter a password" });
  const hashPassword = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      password: hashPassword,
    },
  });
  return Response.json({ message: "Password updated" });
};
