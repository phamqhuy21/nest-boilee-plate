import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}
