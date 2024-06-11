import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export enum ConnectionName {
  Test = 'Test',
}

export const DBConfig: DataSourceOptions = {
  type: `${process.env.DB_TYPE}` || ('postgres' as any),
  host: `${process.env.DB_HOST}`,
  port: +process.env.DB_PORT,
  username: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  synchronize: false,
  entities: [__dirname + '/../applications/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../databases/migrations/*{.ts,.js}'],
};

export default registerAs('database', () => ({
  [ConnectionName.Test]: DBConfig,
}));
