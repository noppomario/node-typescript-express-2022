import { Router } from 'express'
import { config } from '../../config/config'
import { Routes } from '../../interfaces/routes.interface'
import { UserRoute } from './users/users.route'
import { DocsRoute } from './docs/docs.route'

/**
 * /api/v1/配下の全ルーティング設定を結合したルータ
 */
export class V1Route implements Routes {
  public readonly router = Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    const defaultRoutes = [new UserRoute()]

    defaultRoutes.forEach((route) => {
      this.router.use(route.path, route.router)
    })

    // development専用のルーティング設定を追加
    const devRoutes = [new DocsRoute()]
    if (config.env === 'development') {
      devRoutes.forEach((route) => {
        this.router.use(route.path, route.router)
      })
    }
  }
}
