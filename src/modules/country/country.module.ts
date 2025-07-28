import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { NagerApiModule } from '../nager-api/nager-api.module';
import { CountryShowApiModule } from '../country-show-api/country-show-api.module';

@Module({
  imports: [NagerApiModule, CountryShowApiModule],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
