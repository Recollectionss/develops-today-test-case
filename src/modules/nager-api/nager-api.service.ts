import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import nagerApiConfig from '../../config/nager-api.config';
import { ConfigType } from '@nestjs/config';
import { CountryDto } from '../../shared/dto/country.dto';
import { BorderCountriesDto } from '../../shared/dto/border-countries.dto';
import { PublicHolidayDto } from '../../shared/dto/public-holiday.dto';

@Injectable()
export class NagerApiService {
  constructor(
    @Inject(nagerApiConfig.KEY)
    private readonly api: ConfigType<typeof nagerApiConfig>,
  ) {}

  async getAvailableCountries(): Promise<CountryDto[]> {
    try {
      return this.fetch(this.api.nager_api + 'AvailableCountries');
    } catch (error) {
      throw new InternalServerErrorException(
        `Nager API error: ${error.message}`,
      );
    }
  }

  async getBorderCountries(code: string): Promise<BorderCountriesDto> {
    try {
      return this.fetch(this.api.nager_api + `CountryInfo/${code}`);
    } catch (error) {
      throw new InternalServerErrorException(
        `Nager API error: ${error.message}`,
      );
    }
  }

  async getPublicHolidays(
    year: number,
    countryCode: string,
  ): Promise<PublicHolidayDto[]> {
    try {
      return this.fetch(
        this.api.nager_api + `PublicHolidays/${year}/${countryCode}`,
      );
    } catch (error) {
      throw new InternalServerErrorException(
        `Nager API error: ${error.message}`,
      );
    }
  }

  private async fetch(url: string): Promise<any> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new InternalServerErrorException(
        `Failed to fetch countries: ${res.statusText}`,
      );
    }
    return await res.json();
  }
}
