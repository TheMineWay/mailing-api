import { SendEmailOptions } from './send-email.options.type';

export interface IMailAgent {
  send: (options: SendEmailOptions) => Promise<void>;
}
