import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    port: Number(process.env.APP_PORT),
    node_dev: String(process.env.NODE_ENV),
}));
