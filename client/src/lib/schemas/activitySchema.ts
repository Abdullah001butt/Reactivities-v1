  import { z } from "zod";

  export const activitySchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    category: z.string(),
    date: z.instanceof(Date),
    location: z.object({
      venue: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      city: z.string().optional(),
    }),
  });

  export type ActivitySchema = z.infer<typeof activitySchema>;
