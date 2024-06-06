import { prisma } from "../../constantsBack";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") as string;
  const userById = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!userById) {
    return Response.json({ error: "User not found" });
  }
  return Response.json({ user: userById });
};
