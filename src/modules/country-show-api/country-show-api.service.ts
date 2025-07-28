import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import countryShowApi from '../../config/country-show-api';
import { ConfigType } from '@nestjs/config';
import { PopulationDto } from '../../shared/dto/population-data.dto';

@Injectable()
export class CountryShowApiService {
  constructor(
    @Inject(countryShowApi.KEY)
    private readonly api: ConfigType<typeof countryShowApi>,
  ) {}

  async getPopulationDate(country: string): Promise<PopulationDto> {
    try {
      return await this.fetch<PopulationDto>(
        `${this.api.country_show_api}population`,
        'POST',
        { country },
      );
    } catch (error) {
      throw new InternalServerErrorException(
        `Country Show API error: ${error.message}`,
      );
    }
  }

  async getFlag(country: string): Promise<string> {
    try {
      const flag = await this.fetch(
        `${this.api.country_show_api}flag/images`,
        'POST',
        { country },
      );
      return flag?.data?.flag;
    } catch (error) {
      throw new InternalServerErrorException(
        `Country Show API error: ${error.message}`,
      );
    }
  }

  private async fetch<T = any>(
    url: string,
    method: 'GET' | 'POST' = 'GET',
    body?: any,
  ): Promise<T> {
    const options: RequestInit = {
      method,
      headers: { 'Content-Type': 'application/json' },
    };

    if (body && method !== 'GET') {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new InternalServerErrorException(
        `Failed to fetch: ${res.statusText}`,
      );
    }

    return await res.json();
  }
}
