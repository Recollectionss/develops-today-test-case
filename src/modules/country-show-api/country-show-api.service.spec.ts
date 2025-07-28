import { Test, TestingModule } from '@nestjs/testing';
import { CountryShowApiService } from './country-show-api.service';

describe('CountryShowApiService', () => {
  let service: CountryShowApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryShowApiService],
    }).compile();

    service = module.get<CountryShowApiService>(CountryShowApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
