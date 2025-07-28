import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { USER_REPOSITORY } from './constants/user.constants';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly hashingService: HashingService,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
  ) {}

  async register(email: string, password: string): Promise<{ id: string }> {
    const existing = await this.userRepository.findOne({ where: { email } });
    if (existing) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.hashingService.setHash(password);
    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
    });
    return { id: user.id };
  }

  async login(email: string, password: string): Promise<{ id: string }> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await this.hashingService.compareHash(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }

    return { id: user.id };
  }
}
