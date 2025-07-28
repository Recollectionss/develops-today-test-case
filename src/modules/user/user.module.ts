import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt/bcrypt.service';
import { UserProvider } from './entity/user.provider';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    { provide: HashingService, useClass: BcryptService },
    ...UserProvider,
  ],
})
export class UserModule {}
