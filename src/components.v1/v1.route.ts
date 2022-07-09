import { container } from 'tsyringe'
import { UsersRoute } from './users/users.route'
import { ApiRouteAbs } from '../api-common/api.route.abs'

/**
 * /api/v1/配下の全ルータを結合したルータ
 */
export class V1Route extends ApiRouteAbs {
  protected initializeRoutes(): void {
    const userRoute = container.resolve(UsersRoute)

    // /api/v1/配下の全ルータ
    const defaultRoutes = [userRoute]

    defaultRoutes.forEach((route) => {
      this.router.use(route.path, route.router)
    })
  }
}
