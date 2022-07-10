import { container } from 'tsyringe'
import express from 'express'
import { UsersRoute } from './users/users.route'
import { ApiRoute } from '../api-common/api.route'

/**
 * /api/v1/配下の全ルータを結合したルータ
 */
export class V1Route implements ApiRoute {
  router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes(): void {
    const userRoute = container.resolve(UsersRoute)

    // /api/v1/配下の全ルータ
    const defaultRoutes = [userRoute]

    defaultRoutes.forEach((route) => {
      this.router.use(route.path, route.router)
    })
  }
}
