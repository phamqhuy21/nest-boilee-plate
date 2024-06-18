import { registerAs } from '@nestjs/config';
import { config } from 'dotenv';
config();

export enum OAuthName {
  Google = 'Google',
}

const GoogleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
};

export default registerAs('oauth', () => ({
  [OAuthName.Google]: GoogleConfig,
}));
