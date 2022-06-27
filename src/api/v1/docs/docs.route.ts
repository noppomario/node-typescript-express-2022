import { Router } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Routes } from '../../../interfaces/routes.interface'
import { swaggerDefinition } from '../../../docs/swaggerDef'

/**
 * API仕様書のルーティング設定
 */
export class DocsRoute implements Routes {
  public readonly path = '/docs'

  public readonly router = Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    const specs = swaggerJsdoc({
      swaggerDefinition,
      apis: ['src/docs/*.yml', 'src/api/v1/**/*.route.ts']
    })

    this.router.use('/', swaggerUi.serve)
    this.router.get(
      '/',
      swaggerUi.setup(specs, {
        explorer: true
      })
    )
  }
}
