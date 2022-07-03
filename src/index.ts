/**
 * アプリケーションのエントリポイント
 */

import { app } from './app'
import { config } from './config/config'
import { logger } from './config/logger'

const server = app.listen(config.port, () => {
  logger.info('server start.')
  if (config.env === 'development') {
    logger.debug(
      `API documentation: http://localhost:${config.port}/api/v1/docs`
    )
  }
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error: unknown) => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  logger.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
