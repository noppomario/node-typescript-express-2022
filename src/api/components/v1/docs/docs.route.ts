import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { ApiRouteAbs } from '../../../api.route.abs'
import { swaggerDefinition } from '../../../../docs/swagger-def-v1'

/**
 * /docsのルータ
 */
export class DocsRoute extends ApiRouteAbs {
  readonly path = '/docs'

  protected initializeRoutes(): void {
    const specs = swaggerJsdoc({
      swaggerDefinition,
      apis: ['src/docs/*.yml', 'src/api/components/v1/**/*.route.ts']
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
