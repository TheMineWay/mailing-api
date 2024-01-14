import { Body, Controller, Post } from '@nestjs/common';
import { SendEmailOptionsDTO } from '../../dtos/mailer/send-email-options.dto';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendEmail(@Body() body: SendEmailOptionsDTO) {
    return await this.mailerService.sendEmail(body);
  }
}
