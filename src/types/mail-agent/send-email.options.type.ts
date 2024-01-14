export interface SendEmailOptions {
  to: string[];
  cc?: string[];
  bcc?: string[];
  from: string;

  body: string;
  subject: string;
}
