import { config } from '../config/config'
/**
 * [v1]API仕様書の共通部分
 *
 * @module swaggerDefinition
 */
export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: '[v1]API documentation',
    description: '[v1]Template of OpenAPI documents.',
    // termsOfService: '',
    // contact: {
    //   name: '',
    //   url: '',
    //   email: ''
    // },
    // license: {
    //   name: '',
    //   url: ''
    // },
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://127.0.0.1:{port}/{basePath}',
      description: 'Development server',
      variables: {
        port: {
          default: config.port
        },
        basePath: {
          default: 'api/v1'
        }
      }
    },
    {
      url: 'https://{domain}:{port}/{basePath}',
      description: 'Production server',
      variables: {
        domain: {
          default: 'example.com'
        },
        port: {
          default: 100000
        },
        basePath: {
          default: 'api/v1'
        }
      }
    }
  ]
}
