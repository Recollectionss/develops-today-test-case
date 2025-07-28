import { Module } from '@nestjs/common';
import { CountryShowApiService } from './country-show-api.service';
import {ConfigModule} from "@nestjs/config";
import countryShowApi from "../../config/country-show-api";

@Module({
  imports: [ConfigModule.forRoot({load: [countryShowApi]})],
  providers: [CountryShowApiService],
})
export class CountryShowApiModule {}
