import { prisma } from "../../constantsBack";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") as string;
  const userById = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!userById) {
    return Response.json({ error: "User not found" });
  }
  return Response.json({ user: userById });
};
