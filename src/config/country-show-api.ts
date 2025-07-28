import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('app', () => ({
  country_show_api: String(process.env.COUNTRY_SHOW_API),
}));
