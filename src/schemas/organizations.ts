import { z } from "zod";

const organizationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  main_url: z.string().url(),
  created_at: z.coerce.date().default(new Date())
});

export type Organization = z.infer<typeof organizationSchema>;

const createOrganizationSchema = z.array(organizationSchema.omit({ id: true }));
export const parseCreateOrganizationsData = (organizations: Organization[]) =>
  createOrganizationSchema.safeParse(organizations);
