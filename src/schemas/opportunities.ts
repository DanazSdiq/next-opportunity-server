import { z } from "zod";

const opportunitySchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  company: z.string(),
  description: z.string(),
  labels: z.array(z.string()),
  commitment: z.string(),
  url: z.string().url(),

  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  deleted_at: z.coerce.date() || z.null()
});

export type Opportunity = z.infer<typeof opportunitySchema>;

const createOpportunitiesSchema = z.array(
  opportunitySchema.omit({ id: true, updated_at: true, deleted_at: true })
);
export const parseCreateOpportunitiesData = (opportunities: Opportunity[]) =>
  createOpportunitiesSchema.safeParse(opportunities);
