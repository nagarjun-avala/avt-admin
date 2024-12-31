import { z } from "zod";

export const CreateAdminSchema = z.object({
    avatar: z.string().optional(),
    username: z.string(),
    password: z.string(),
    fullname: z.string(),
    email: z.string().optional(),
    mobile: z.string().optional(),
    roleId: z.string(),
    isActive: z.boolean().default(false),
    theme: z.union([
        z.literal("light"),
        z.literal("dark"),
        z.literal("system")
    ]).default("system"),
    currency: z.string().default("INR"),
})

export type CreateAdminSchemaType = z.infer<typeof CreateAdminSchema>