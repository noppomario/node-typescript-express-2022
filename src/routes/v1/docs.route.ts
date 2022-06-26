import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerDefinition } from '../../docs/swaggerDef'

/**
 * API仕様書のルーティング設定
 *
 * @module docsRoute
 */
export const docsRoute = express.Router()

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['src/docs/*.yml', 'src/routes/v1/*.ts']
})

docsRoute.use('/', swaggerUi.serve)
docsRoute.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true
  })
)
