import { Inject, Injectable } from '@nestjs/common';
import { MailAgentStoreService } from '../../providers/mail-agents/mail-agent-store.service';
import { MAIL_AGENT_SERVICE_PROVIDER } from '../../providers/mail-agents/mail-agents.provider';
import { SendEmailOptions } from '../../types/mail-agent/send-email.options.type';

@Injectable()
export class MailerService {
  constructor(
    @Inject(MAIL_AGENT_SERVICE_PROVIDER)
    private readonly mailAgentService: MailAgentStoreService,
  ) {}

  async sendEmail(options: SendEmailOptions) {
    return await this.mailAgentService
      .getByEmail(options.from)
      .sendEmail(options);
  }
}
