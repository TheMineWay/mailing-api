import { MailAgents, MailServices } from '@prisma/client';
import { SendEmailOptions } from '../../types/mail-agent/send-email.options.type';
import { MailAgentType } from '../../types/mail-agent/mail-agent-type.enum';
import { IMailAgent } from '../../types/mail-agent/mail-agent.interface';
import { ResendMailAgent } from '../../types/mail-agent/agents/resend.mail-agent';
import { InternalServerErrorException } from '@nestjs/common';

export class MailAgent {
  private readonly mailAgent: IMailAgent;
  constructor(
    private readonly mailAgentData: MailAgents,
    private readonly mailServiceData: MailServices,
  ) {
    switch (this.mailServiceData.type) {
      case MailAgentType.RESEND:
        this.mailAgent = new ResendMailAgent(mailServiceData);
        break;
      default:
        throw new InternalServerErrorException();
    }
  }

  async sendEmail(options: Omit<SendEmailOptions, 'from'>) {
    this.mailAgent.send({ ...options, from: this.mailAgentData.address });
  }
}
