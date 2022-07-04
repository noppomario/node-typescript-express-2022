// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerUi from 'swagger-ui-express'
// eslint-disable-next-line import/no-extraneous-dependencies
import YAML from 'yamljs'
import path from 'path'
import { ApiRouteAbs } from '../../../api.route.abs'

/**
 * /docsのルータ
 */
export class DocsRoute extends ApiRouteAbs {
  readonly path = '/docs'

  protected initializeRoutes(): void {
    const openapiPath = path.resolve(
      __dirname,
      '../../../../docs/openapi/v1/openapi-v1.yml'
    )
    const swaggerDocument = YAML.load(openapiPath)

    this.router.use('/', swaggerUi.serve)
    this.router.get(
      '/',
      swaggerUi.setup(swaggerDocument, {
        explorer: true
      })
    )
  }
}
