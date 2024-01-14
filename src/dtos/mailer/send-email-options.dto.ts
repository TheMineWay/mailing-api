import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsString,
  MaxLength,
} from 'class-validator';
import { SendEmailOptions } from '../../types/mail-agent/send-email.options.type';
import { Optional } from '@nestjs/common';

export class SendEmailOptionsDTO implements SendEmailOptions {
  @IsArray()
  @ArrayMaxSize(512)
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsEmail({}, { each: true })
  @MaxLength(128, { each: true })
  to: string[];

  @Optional()
  @IsArray()
  @ArrayMaxSize(512)
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsEmail({}, { each: true })
  @MaxLength(128, { each: true })
  cc?: string[];

  @Optional()
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
