import express from 'express'
import { ApiController } from '../../api-common/api.controller'

export interface UsersController extends ApiController {
  getUsers: (req: express.Request, res: express.Response) => void
}
