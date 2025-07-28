import { Injectable } from '@nestjs/common';
import { CountryShowApiService } from '../country-show-api/country-show-api.service';
import { NagerApiService } from '../nager-api/nager-api.service';
import { CountryDto } from '../../shared/dto/country.dto';

@Injectable()
export class CountryService {
  constructor(
    private readonly countryShowApiService: CountryShowApiService,
    private readonly nagerApiService: NagerApiService,
  ) {}

  async getAll(): Promise<CountryDto[]> {
    return this.nagerApiService.getAvailableCountries();
  }

  async getCountryInfo(countryCode: string) {
    const countryInfo =
      await this.nagerApiService.getBorderCountries(countryCode);

    const countryName = countryInfo.officialName;

    const populationData =
      await this.countryShowApiService.getPopulationDate(countryName);
    const flagUrl = await this.countryShowApiService.getFlag(countryName);
    return { countryInfo, populationData, flagUrl };
  }
}
