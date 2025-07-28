import { Module } from '@nestjs/common';
import {PostgresModule} from "./modules/postgres/postgres.module";
import { CountryModule } from './modules/country/country.module';

@Module({
  imports: [PostgresModule, CountryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
