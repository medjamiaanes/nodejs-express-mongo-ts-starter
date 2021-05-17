import { createLogger, format, transports } from 'winston'

class LoggerService {
  private logger

  constructor() {
    this.logger = createLogger({
      format: format.combine(
        format.json(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.prettyPrint({ colorize: true })
      ),
      transports: [new transports.Console()],
    })
  }

  serverError = (error: any) => {
    this.logger.error('[Server Error]', {
      tags: 'server error, code 500',
      error,
    })
  }

  customLogger = (level: string, message: any) =>
    this.logger.log(level, message)
}

export default new LoggerService()
