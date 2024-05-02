import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ROLE } from '../declare.type';

export class CreateUserDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  username: string;

  @Expose()
  @IsString()
  @IsOptional()
  displayname!: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(ROLE)
  @IsOptional()
  role!: ROLE;
}
