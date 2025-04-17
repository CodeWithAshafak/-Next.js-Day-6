const {z} = require('zod');

const schema = z.object({
  username: z
  .string({required_error: "Username is required"})
  .trim()
  .min(3, { message: "Username must be at least 3 characters" })
  .max(20, { message: "Username must be at most 20 characters" }),
  email: z
  .string({required_error: "Email is required"})
  .trim()
  .email({ message: "Invalid email address" })
  .min(3, { message: "Email must be at least 3 characters" })
  .max(50, { message: "Email must be at most 50 characters" }),
  phone: z
  .string({required_error: "Phone number is required"})
  .trim()
  .min(3, { message: "Phone number must be at least 3 characters" })
  .max(20, { message: "Phone number must be at most 20 characters" }),
  password: z
  .string({required_error: "Password is required"})
  .min(3, { message: "Password must be at least 3 characters" })
  .max(20, { message: "Password must be at most 20 characters" })
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{8,}$/, 'Password must contain at least one letter, one number, and one special character'),
});

export default schema