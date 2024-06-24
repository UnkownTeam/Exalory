import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export const secret = process.env.JWT_SECRET;
export const MAX_AGE = 60 * 60 * 24 * 30;
export const tokenGenerate = (user: any) => {
  const token = sign(
    { id: user?.id, email: user?.email, phone: user?.phone },
    secret as string,
    {
      expiresIn: MAX_AGE,
    }
  );
  const serialized = serialize("access-token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + MAX_AGE * 1000),
  });

  return serialized;
};
