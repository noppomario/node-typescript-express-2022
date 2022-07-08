import morgan from 'morgan'
import { config } from './config'
import { logger } from './logger'

// TODO: statusCodeではなくレスポンスのエラー詳細(or'')をログ出力する
morgan.token('message', (req, res) => res.statusCode.toString() || '')

const getIpFormat = () => (config.env === 'production' ? ':remote-addr - ' : '')
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`

/**
 * HTTPリクエストロガー(morgan)
 * - アクセスログ
 *
 * @module successHandler
 */
export const successHandler = morgan(successResponseFormat, {
  skip: (req, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.info(message.trim()) }
})

/**
 * HTTPリクエストロガー(morgan)
 * - エラーログ
 *
 * @module successHandler
 */
export const errorHandler = morgan(errorResponseFormat, {
  skip: (req, res) => res.statusCode < 400,
  stream: { write: (message) => logger.error(message.trim()) }
})
