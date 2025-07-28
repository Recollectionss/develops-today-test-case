import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { postgresTestConnection } from './modules/postgres/postgres.test.connection';
import { ConfigService, ConfigType } from '@nestjs/config';
import postgresConfig from './config/postgres.config';
import appConfig from './config/app.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const postgresConf: ConfigType<typeof postgresConfig> =
    configService.get('postgres');
  const appConf: ConfigType<typeof appConfig> = configService.get('app');

  if (!postgresConf || !appConf) {
    throw new Error('Missing configuration values');
  }

  await postgresTestConnection(postgresConf, appConf);
  await app.listen(appConf.port);
}
bootstrap();
