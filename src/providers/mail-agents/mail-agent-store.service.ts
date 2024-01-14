import { NotFoundException } from '@nestjs/common';
import { MailAgents, MailServices } from '@prisma/client';
import { MailAgent } from '../../services/mail-agents/mail-agent';

export class MailAgentStoreService {
  constructor(
    private readonly mailAgentValues: Record<
      string,
      {
        MailService: MailServices;
      } & MailAgents
    >,
  ) {}

  getByEmail = (email: string) => {
    if (!Object.keys(this.mailAgentValues).includes(email))
      throw new NotFoundException('Email agent not present/available');

    const item = this.mailAgentValues[email];
    return new MailAgent(item, item.MailService);
  };
}
