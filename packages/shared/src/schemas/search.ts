import { z } from "zod";

export const searchBodySchema = z.object({
	label: z.string().min(1).max(255),
});

export const searchResultSchema = z.object({
	id: z.number(),
	label: z.string(),
	username: z.string(),
	password: z.string(),
});

export const searchResponseSchema = z.object({
	results: z.array(searchResultSchema),
});

export type SearchBody = z.infer<typeof searchBodySchema>;
export type SearchResult = z.infer<typeof searchResultSchema>;
export type SearchResponse = z.infer<typeof searchResponseSchema>;
