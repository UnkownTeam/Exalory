import { z } from "zod";

export const signInPhone = z.object({
  phone: z
    .string()
    .length(10, "Phone Must be 10 characters")
    .regex(/^(10|11|12|15)\d{8}$/, "(10, 11, 12, 15) Only Numbers Are Allowed"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
