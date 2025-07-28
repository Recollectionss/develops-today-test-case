import { registerAs } from '@nestjs/config';
import * as process from "node:process";

export default registerAs('app', () => ({
    nager_api: String(process.env.NAGER_API),
}));
