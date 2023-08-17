import { z } from "zod";

const opportunitySchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  organization_id: z.string().uuid(),
  description: z.string(),
  labels: z.array(z.string()),
  commitment: z.string(),
  url: z.string().url(),

  created_at: z.coerce.date().default(new Date()),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional()
});

export type Opportunity = z.infer<typeof opportunitySchema>;

const createOpportunitiesSchema = z.intersection(
  opportunitySchema.omit({
    organization_id: true,
    updated_at: true,
    deleted_at: true
  }),
  z.object({ organization_name: z.string() })
);
export type OpportunityRequest = z.infer<typeof createOpportunitiesSchema>;
export const parseCreateOpportunitiesData = (
  opportunities: OpportunityRequest
) => z.array(createOpportunitiesSchema).safeParse(opportunities);
