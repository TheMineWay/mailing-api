import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsString,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { SendEmailOptions } from '../../types/mail-agent/send-email.options.type';

export class SendEmailOptionsDTO implements SendEmailOptions {
  @IsArray()
  @ArrayMaxSize(512)
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsEmail({}, { each: true })
  @MaxLength(128, { each: true })
  to: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(512)
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsEmail({}, { each: true })
  @MaxLength(128, { each: true })
  cc?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(512)
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsEmail({}, { each: true })
  @MaxLength(128, { each: true })
  bcc?: string[];

  @IsString()
  @IsEmail()
  @MaxLength(128)
  from: string;

  @IsString()
  body: string;

  @IsString()
  @MaxLength(256)
  subject: string;
}
