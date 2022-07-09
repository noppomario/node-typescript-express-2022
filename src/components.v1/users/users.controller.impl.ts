import express from 'express'
import { UsersController } from './users.controller'

export class UsersControllerImpl implements UsersController {
  /**
   * ユーザの全体取得
   *
   * @param req
   * @param res
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  public getUsers = async (req: express.Request, res: express.Response) =>
    res.send('user list.')
}
