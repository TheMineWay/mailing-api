import { NotFoundException } from '@nestjs/common';
import { MailAgents, MailServices } from '@prisma/client';

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
    return this.mailAgentValues[email];
  };
}
