import express from 'express'
import { container } from 'tsyringe'
import { UsersRoute } from './users/users.route'

/**
 * /api/v1/配下の全ルータを結合したルータ
 */
export class V1Route {
  readonly router = express.Router()

  protected initializeRoutes(): void {
    const userRoute = container.resolve(UsersRoute)

    // /api/v1/配下の全ルータ
    const defaultRoutes = [userRoute]

    defaultRoutes.forEach((route) => {
      this.router.use(route.path, route.router)
    })
  }
}
