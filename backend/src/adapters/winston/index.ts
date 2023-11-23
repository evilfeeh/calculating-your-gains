import winston from 'winston';
import loggerInterface from '../../ports/logger'; 

export default class Logger implements loggerInterface {
  private readonly logger: any;
  
  constructor () {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console()
      ]
    });

  }
  log (message: string, status?: string) {
    this.logger.log('info', message, status);
  }

  error (message: string, status?: string) {
    this.logger.log('error', message, status);
  }
}
