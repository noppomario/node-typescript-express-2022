import { config } from '../config/config'

/**
 * API仕様書の共通部分
 *
 * @module swaggerDefinition
 */
export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API documentation',
    version: '1.0.0',
    license: {
      name: '',
      url: ''
    }
  },
  servers: [
    {
      url: `https://example.com:${config.port}/api/v1`
    }
  ]
}
