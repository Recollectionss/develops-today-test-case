import { Test, TestingModule } from '@nestjs/testing';
import { NagerApiService } from './nager-api.service';

describe('NagerApiService', () => {
  let service: NagerApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NagerApiService],
    }).compile();

    service = module.get<NagerApiService>(NagerApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
