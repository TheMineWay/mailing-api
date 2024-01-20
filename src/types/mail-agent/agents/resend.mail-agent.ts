import { Resend } from 'resend';
import { IMailAgent } from '../mail-agent.interface';
import { SendEmailOptions } from '../send-email.options.type';
import { MailServices } from '@prisma/client';
import { InternalServerErrorException, Logger } from '@nestjs/common';

export class ResendMailAgent implements IMailAgent {
  readonly resendService: Resend;
  constructor(private readonly mailService: MailServices) {
    this.resendService = new Resend(mailService.apiKey);
  }

  send = async (options: SendEmailOptions) => {
    const res = await this.resendService.emails.send({
      from: options.from,
      to: options.to,
      cc: options.cc,
      bcc: options.bcc,
      subject: options.subject,
      html: options.body,
    });

    if (res.error) {
      Logger.error(res.error);
      throw new InternalServerErrorException();
    }
  };
}
