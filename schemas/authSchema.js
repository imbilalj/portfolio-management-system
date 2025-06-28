import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email must be provided" })
    .email("Please provide correct email"),

  password: z
    .string({ required_error: "Password must be provided" })
    .min(8, "Invalid Password"),
});

export const registerSchema = z.object({
  firstName: z.string({ required_error: "First name must be provided" }),

  lastName: z.string({ required_error: "Last name must be provided" }),

  email: z
    .string({ required_error: "Email must be provided" })
    .email("Please provide correct email"),

  password: z
    .string({ required_error: "Password must be provided" })
    .min(8, "Password must be at least 8 character"),
});
