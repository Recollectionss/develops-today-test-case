import { Module } from '@nestjs/common';
import {PostgresModule} from "./modules/postgres/postgres.module";

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
