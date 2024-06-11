import { Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @Post('register')
  async register(dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Get('me')
  async getMe() {
    return this.authService.getMe();
  }
}
