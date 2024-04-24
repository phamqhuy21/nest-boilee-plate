import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { importDefaultModules } from 'src/common/utils/importModules';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: importDefaultModules(__dirname, [/(config\.(js|ts))$/g]),
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
})
export class GlobalConfigModule {}
