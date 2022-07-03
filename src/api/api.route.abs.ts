import express from 'express'

/**
 * ルータの抽象クラス
 */
export abstract class ApiRouteAbs {
  /*
   * エンドポイントURL
   */
  readonly path?: string

  /**
   * ExpressのRouter
   */
  readonly router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  /*
   * ルータの初期化処理
   */
  protected abstract initializeRoutes(): void
}
