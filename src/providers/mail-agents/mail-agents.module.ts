import { DynamicModule, Logger, Module } from '@nestjs/common';
import {
  MAIL_AGENTS_PROVIDER,
  MailAgentsProviderType,
} from './mail-agents.provider';
import { PrismaService } from '../../database/prisma.service';
import { MailAgentRepository } from '../../database/repository/mail-agent.repository';
import { reduce } from 'lodash';

@Module({})
export class MailAgentsModule {
  static async forRoot(): Promise<DynamicModule> {
    const repo = new MailAgentRepository(new PrismaService());

    const agents = await repo.findAllIncludingMailServices();

    const providers = [
      {
        provide: MAIL_AGENTS_PROVIDER,
        useValue: reduce(
          agents,
          (result, value) => {
            result[value.address] = result[value.address] || value;
            return result;
          },
          {},
        ) satisfies MailAgentsProviderType,
      },
    ];

    Logger.log('Initialized', 'Mail agents');

    return {
      module: MailAgentsModule,
      providers,
      exports: providers,
    };
  }
}
