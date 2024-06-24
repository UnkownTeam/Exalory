import { prisma, tokenGenerate } from "@/app/api/constantsBack";
import { signInEmail } from "@/validations";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  const requestBody = signInEmail.safeParse(await req.json());

  if (!requestBody.success)
    return Response.json({
      statusCode: 402,
      success: false,
      message: requestBody.error,
    });

  const { email, password } = requestBody.data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "Email Or Password Is Incorrect",
    });

  const match = await bcrypt.compare(password, user?.password!);

  if (!match)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "Email Or Password Is Incorrect",
    });

  const token = tokenGenerate(user);
  return Response.json(
    {
      statusCode: 200,
      success: true,
      message: "Authenticated with email Successfully",
    },
    {
      headers: {
        "Set-Cookie": token,
      },
    }
  );
};
