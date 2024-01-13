import { Module } from '@nestjs/common';
import { ApiKeyGuard, ApiKeysModule } from 'nestjs-api-keys';
import { ENV } from './constants/env/env.constant';
import { APP_GUARD } from '@nestjs/core';
import { MailAgentsModule } from './providers/mail-agents/mail-agents.module';

const API_KEY_PERMISSION = 'api.use';

@Module({
  imports: [
    MailAgentsModule.forRoot(),
    ApiKeysModule.register({
      apiKeys: [
        {
          keys: ENV.apiKeys,
          name: 'Keys',
          permissions: [API_KEY_PERMISSION],
        },
      ],
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard({ permissions: [API_KEY_PERMISSION] }),
    },
  ],
})
export class AppModule {}
