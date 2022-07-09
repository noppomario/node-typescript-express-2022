import { ApiRouteAbs } from '../../../api-common/api.route.abs'

/**
 * /usersのルータ
 */
export class UsersRoute extends ApiRouteAbs {
  readonly path = '/users'

  // eslint-disable-next-line class-methods-use-this
  protected initializeRoutes(): void {
    // TODO: ルーティング実装
    // this.router
    //   .route('/')
    //   .post(
    //     auth('manageUsers'),
    //     validate(userValidation.createUser),
    //     userController.createUser
    //   )
    //   .get(
    //     auth('getUsers'),
    //     validate(userValidation.getUsers),
    //     userController.getUsers
    //   )
    // this.router
    //   .route('/:userId')
    //   .get(
    //     auth('getUsers'),
    //     validate(userValidation.getUser),
    //     userController.getUser
    //   )
    //   .patch(
    //     auth('manageUsers'),
    //     validate(userValidation.updateUser),
    //     userController.updateUser
    //   )
    //   .delete(
    //     auth('manageUsers'),
    //     validate(userValidation.deleteUser),
    //     userController.deleteUser
    //   )
  }
}
