import { z } from "zod";

export const EmailValidation = z.object({
  email: z.string().email("Please enter a valid email"),
});
