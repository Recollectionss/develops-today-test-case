import { registerAs } from '@nestjs/config';
import * as process from "node:process";

export default registerAs('app', () => ({
    nager_api: String(process.env.NAGER_API),
    country_show_api: String(process.env.COUNTRY_SHOW_API)
}));
