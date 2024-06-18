import { Controller } from '@nestjs/common';
import { BaseOauthController } from './oauth-base.controller';

@Controller('google')
export class GoogleOauthController extends BaseOauthController {
  protected getProviderName(): string {
    return 'google';
  }
}
