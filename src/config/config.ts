import dotenv from 'dotenv'
import path from 'path'
import Joi from 'joi'

// 環境変数読み込み
dotenv.config({ path: path.join(__dirname, '../../.env') })

// バリデーションルール定義
const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    PORT: Joi.number().default(3000)
  })
  .unknown()

// バリデーション
const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

/**
 * バリデーション済/デフォルト値設定済の環境変数
 *
 * @module config
 */
export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT
}
