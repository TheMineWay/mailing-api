import { DynamicModule, Global, Logger, Module } from '@nestjs/common';
import { MAIL_AGENT_SERVICE_PROVIDER } from './mail-agents.provider';
import { PrismaService } from '../../database/prisma.service';
import { MailAgentRepository } from '../../database/repository/mail-agent.repository';
import { reduce } from 'lodash';
import { MailAgents, MailServices } from '@prisma/client';
import { MailAgentStoreService } from './mail-agent-store.service';

@Global()
@Module({})
export class MailAgentsModule {
  static async forRoot(): Promise<DynamicModule> {
    const repo = new MailAgentRepository(new PrismaService());

    const agents = await repo.findAllIncludingMailServices();

    const providers = [
      {
        provide: MAIL_AGENT_SERVICE_PROVIDER,
        useValue: new MailAgentStoreService(
          reduce(
            agents,
            (result, value) => {
              result[value.address] = result[value.address] || value;
              return result;
            },
            {},
          ) satisfies Record<
            string,
            {
              MailService: MailServices;
            } & MailAgents
          >,
        ),
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
