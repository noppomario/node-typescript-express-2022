import { config } from '../../../config/config'
import { UsersRoute } from './users/users.route'
import { DocsRoute } from './docs/docs.route'
import { ApiRouteAbs } from '../../api.route.abs'

/**
 * /api/v1/配下の全ルータを結合したルータ
 */
export class V1Route extends ApiRouteAbs {
  protected initializeRoutes(): void {
    const defaultRoutes = [new UsersRoute()]

    defaultRoutes.forEach((route) => {
      this.router.use(route.path, route.router)
    })

    // development専用のルーティング設定を追加
    if (config.env === 'development') {
      const devRoutes = [new DocsRoute()]
      devRoutes.forEach((route) => {
        this.router.use(route.path, route.router)
      })
    }
  }
}
