import { z } from "zod";

export const PhoneValidations = z.object({
  phone: z
    .string({ message: "Enter a Valid Number" })
    .length(10, "Phone Must be 10 characters"),
});
