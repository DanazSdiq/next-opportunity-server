import { z } from "zod";

const opportunitySchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  company: z.string(),
  description: z.string(),
  labels: z.array(z.string()),
  commitment: z.string(),
  url: z.string()
});

export type Opportunity = z.infer<typeof opportunitySchema>;
