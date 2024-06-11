import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  checkHealth(): string {
    this.logger.debug('check health');
    return 'check health';
  }
}
