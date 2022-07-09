import express from 'express'
import { V1Route } from './components.v1/v1.route'
import { config } from './config/config'
import { successHandler, errorHandler } from './config/morgan'
import { logger } from './config/logger'

/**
 * アプリケーション本体
 *
 * @module app
 */
export const app = express()

if (config.env === 'development') {
  app.use(express.static('docs'))
  logger.debug(`API documentation: http://localhost:${config.port}/openapi/v1/`)
}

if (config.env !== 'test') {
  app.use(successHandler)
  app.use(errorHandler)
}

app.use('/api/v1', new V1Route().router)
