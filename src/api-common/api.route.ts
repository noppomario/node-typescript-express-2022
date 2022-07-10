import express from 'express'

/**
 * ルータの抽象クラス
 */
export interface ApiRoute {
  /*
   * エンドポイントURL
   */
  readonly path?: string

  /**
   * ExpressのRouter
   */
  readonly router: express.Router

  /*
   * ルータの初期化処理
   */
  initializeRoutes(): void
}
