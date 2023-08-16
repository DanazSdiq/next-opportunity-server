import { z } from "zod";

const opportunitySchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  company: z.string(),
  description: z.string(),
  labels: z.array(z.string()),
  commitment: z.string(),
  url: z.string().url()
});

export type Opportunity = z.infer<typeof opportunitySchema>;

const createOpportunitiesSchema = z.array(opportunitySchema.omit({ id: true }));
export const parseCreateOpportunitiesData = (opportunities: Opportunity[]) =>
  createOpportunitiesSchema.safeParse(opportunities);
