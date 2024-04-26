import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findByUsername(username: string) {
    const queryBuilder = this.userRepository.createQueryBuilder('users');
    const user = await queryBuilder
      .where('users.username = :username', { username })
      .getOne();
    return user;
  }

  async createUser(dto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(dto.password, 10);
    const newUser = this.userRepository.create({
      ...dto,
      password: hashPassword,
    });
    return this.userRepository.save(newUser);
  }
}
