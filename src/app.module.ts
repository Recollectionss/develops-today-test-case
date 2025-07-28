import { Module } from '@nestjs/common';
import {PostgresModule} from "./modules/postgres/postgres.module";
import { CountryModule } from './modules/country/country.module';
import { NagerApiModule } from './modules/nager-api/nager-api.module';
import { CountryShowApiModule } from './modules/country-show-api/country-show-api.module';

@Module({
  imports: [PostgresModule, CountryModule, NagerApiModule, CountryShowApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
