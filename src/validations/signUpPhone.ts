import { z } from "zod";

export const PhoneValidations = z.object({
  phone: z
    .string({ message: "Enter a Valid Number" })
    .length(10, "Phone Must be 10 characters")
    .regex(/^(10|11|12|15)\d{8}$/, "(10, 11, 12, 15) Only Numbers Are Allowed"),
});
