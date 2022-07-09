import express from 'express'
import { ApiControllerAbs } from '../../api-common/api.controller.abs'
import { UserResponse } from './user.response'

export class UsersController extends ApiControllerAbs {
  private users: UserResponse[] = [
    {
      name: 'hoge',
      age: 10
    }
  ]

  /**
   * ユーザの全体取得
   *
   * @param req
   * @param res
   * @returns
   */
  public async getUsers(req: express.Request, res: express.Response) {
    return res.send(this.users)
  }
}
