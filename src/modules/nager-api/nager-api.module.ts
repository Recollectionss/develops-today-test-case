import { Module } from '@nestjs/common';
import { NagerApiService } from './nager-api.service';
import { ConfigModule } from '@nestjs/config';
import nagerApiConfig from '../../config/nager-api.config';

@Module({
  imports: [ConfigModule.forRoot({ load: [nagerApiConfig] })],
  providers: [NagerApiService],
})
export class NagerApiModule {}
