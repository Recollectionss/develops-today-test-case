import { User } from './user.entity';
import { USER_REPOSITORY } from '../constants/user.constants';

export const UserProvider = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
