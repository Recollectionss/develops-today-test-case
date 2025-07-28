import postgresConfig from '../../config/postgres.config';
import appConfig from '../../config/app.config';
import { ConfigType } from '@nestjs/config';
import { POSTGRES, SEQUELIZE } from './constants';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/entity/user.entity';
import { CalendarEvent } from '../calendar-event/entity/calendar-event.entity';

export const postgresProviders = [
  {
    provide: SEQUELIZE,
    inject: [postgresConfig.KEY, appConfig.KEY],
    useFactory: async (
      postgresConf: ConfigType<typeof postgresConfig>,
      appConf: ConfigType<typeof appConfig>,
    ) => {
      const sequelize = new Sequelize({
        logging: console.log,
        dialect: POSTGRES,
        host: postgresConf.host,
        port: postgresConf.port,
        database: postgresConf.db,
        username: postgresConf.user,
        password: postgresConf.pass,
      });

      sequelize.addModels([User, CalendarEvent]);

      if (appConf.node_dev === 'testing') {
        await sequelize.sync({ force: true });
      }

      return sequelize;
    },
  },
];
