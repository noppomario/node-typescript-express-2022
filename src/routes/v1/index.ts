import { Router } from 'express'
import { userRoute } from './user.route'
import { docsRoute } from './docs.route'
import { config } from '../../config/config'

/**
 * 全ルーティング設定を結合したルータ
 *
 * @module v1Router
 */
export const v1Router = Router()

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute
  }
]

// development専用のルーティング設定
const devRoutes = [
  {
    path: '/docs',
    route: docsRoute
  }
]

defaultRoutes.forEach((route) => {
  v1Router.use(route.path, route.route)
})

// development専用のルーティングを追加設定
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    v1Router.use(route.path, route.route)
  })
}
