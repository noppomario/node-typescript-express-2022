import express from 'express'
import { container } from 'tsyringe'
import { V1Route } from './components.v1/v1.route'
import { config } from './config/config'
import { accessLogHandler, errorLogHandler } from './config/morgan'
import { logger } from './config/logger'

import { UsersControllerImpl } from './components.v1/users/users.controller.impl'

/**
 * アプリケーション本体
 *
 * @module app
 */
export const app = express()

/*
 * 依存関係の登録
 *
 * injectしたクラスとその実体を適宜追加する
 * ex:) container.register('xxx', {useClass: xxxImpl})
 *
 * TODO: 別ファイルに定数定義して追加不要にする/命名規則から自動化し定数定義もなしでOKに等検討する
 */
container.register('UsersController', {
  useClass: UsersControllerImpl
})

// development時のみAPIドキュメントページを有効化
if (config.env === 'development') {
  app.use(express.static('docs'))
  logger.debug(`API documentation: http://localhost:${config.port}/openapi/v1/`)
}

// アクセスログ/エラーログ有効化
if (config.env !== 'test') {
  app.use(accessLogHandler)
  app.use(errorLogHandler)
}

// ルーティング設定
app.use('/api/v1', new V1Route().router)

// 404エラー設定
app.use((req, res) => {
  res.status(404).send({ code: 404, message: 'URL不正' })
})
