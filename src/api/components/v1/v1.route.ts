import { UsersRoute } from './users/users.route'
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
  }
}
