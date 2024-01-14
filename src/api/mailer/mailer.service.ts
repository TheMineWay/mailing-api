import { Inject, Injectable } from '@nestjs/common';
import { MailAgentService } from '../../providers/mail-agents/mail-agent.service';
import { MAIL_AGENT_SERVICE_PROVIDER } from '../../providers/mail-agents/mail-agents.provider';
import { SendEmailOptions } from '../../types/mail-agent/send-email.options.type';

@Injectable()
export class MailerService {
  constructor(
    @Inject(MAIL_AGENT_SERVICE_PROVIDER)
    private readonly mailAgentService: MailAgentService,
  ) {}

  async sendEmail(options: SendEmailOptions) {
    return this.mailAgentService.getByEmail(options.from);
  }
}
