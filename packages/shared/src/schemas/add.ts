import { z } from "zod";

export const addBodySchema = z.object({
	label: z.string().min(1).max(255),
	username: z.string().min(1).max(2048),
	password: z.string().min(1).max(4096)
});

export type AddBody = z.infer<typeof addBodySchema>;
