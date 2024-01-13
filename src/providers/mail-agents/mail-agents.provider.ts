import { MailAgents, MailServices } from '@prisma/client';

export const MAIL_AGENTS_PROVIDER = 'MAIL_AGENTS_PROVIDER';

export type MailAgentsProviderType = Record<
  string,
  ({
    MailService: MailServices;
  } & MailAgents)[]
>;
