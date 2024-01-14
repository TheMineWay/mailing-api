import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './constants/env/env.constant';
import helmet from 'helmet';
import fs from 'fs';
import { ValidationPipe } from '@nestjs/common';

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

  // Use CORS
  app.enableCors();

  // Enable security headers
  app.use(helmet());

  // Use DTO validation
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  await app.listen(ENV.port);
}
bootstrap();
