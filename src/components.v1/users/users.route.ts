import express from 'express'
import { injectable, inject } from 'tsyringe'
import { UsersController } from './users.controller'

/**
 * /usersのルータ
 */
@injectable()
export class UsersRoute {
  readonly path = '/users'

  readonly router = express.Router()

  constructor(
    @inject('UsersController')
    private readonly usersController: UsersController
  ) {
    this.initializeRoutes()
  }

  protected initializeRoutes(): void {
    this.router.route('/').get(
      // auth('getUsers'),
      // validate(this.userValidation.getUsers),
      this.usersController.getUsers
    )
  }
}
