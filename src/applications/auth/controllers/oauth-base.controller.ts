import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export abstract class BaseOauthController {
  protected abstract getProviderName(): string;

  @Get('auth')
  //   @UseGuards(AuthGuard(this.getProviderName()))
  async auth() {
    // initiates the Google OAuth2 login flow
  }

  @Get('callback')
  //   @UseGuards(AuthGuard(this.getProviderName()))
  async authRedirect(@Req() req) {
    return req.user;
  }
}
