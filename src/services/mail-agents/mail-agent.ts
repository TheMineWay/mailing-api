import { MailAgents, MailServices } from '@prisma/client';
import { SendEmailOptions } from '../../types/mail-agent/send-email.options.type';

export class MailAgent {
  constructor(
    private readonly mailAgentData: MailAgents,
    private readonly mailServiceData: MailServices,
  ) {}

  async sendEmail(options: SendEmailOptions) {
    switch (this.mailServiceData.type) {
      case 'resend':
        return null;
    }
  }
}
