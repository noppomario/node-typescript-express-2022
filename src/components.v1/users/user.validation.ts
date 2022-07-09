import Joi from 'joi'

// import { password, objectId } from '../../validations/custom.validation'

/**
 * Userのバリデーションルールの定義
 */
export class UserValidation {
  /**
   * ユーザ新規作成
   */
  public readonly createUser = {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      // password: Joi.string().required().custom(password),
      name: Joi.string().required(),
      role: Joi.string().required().valid('user', 'admin')
    })
  }
}
