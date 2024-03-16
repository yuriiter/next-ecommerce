import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+]).*$/,
    "Password must contain at least one lowercase letter, one uppercase letter and one digit"
  );

export const credentialsSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    fullName: z.string().min(1).max(50),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpData = z.infer<typeof signUpSchema>;
