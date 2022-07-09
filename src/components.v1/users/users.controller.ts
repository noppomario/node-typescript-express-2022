import express from 'express'

export interface UsersController {
  getUsers: (req: express.Request, res: express.Response) => void
}
