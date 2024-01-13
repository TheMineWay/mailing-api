import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './constants/env/env.constant';
import helmet from 'helmet';
import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    ENV.https
      ? {
          httpsOptions: {
            key: fs.readFileSync('/app/certificates/key.pem'),
            cert: fs.readFileSync('/app/certificates/cert.pem'),
          },
        }
      : {},
  );

  app.enableCors();
  app.use(helmet());

  await app.listen(ENV.port);
}
bootstrap();
