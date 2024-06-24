import { prisma } from "@/app/api/constantsBack";
import { passwordValidations } from "@/validations";
import bcrypt from "bcrypt";
export const PATCH = async (req: Request) => {
  const requestBody = await passwordValidations.safeParseAsync(
    await req.json()
  );
  if (!requestBody.success)
    return Response.json({
      statusCode: 402,
      success: false,
      message: requestBody.error,
    });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") as string;
  if (!id)
    return Response.json({
      statusCode: 402,
      success: false,
      message: "Please provide an id",
    });

  const { password } = requestBody.data;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashPassword,
      },
    });
    return Response.json({
      statusCode: 200,
      success: true,
      message: "Password Created",
    });
  } catch (error) {
    return Response.json({
      statusCode: 402,
      success: false,
      message: error,
    });
  }
};
