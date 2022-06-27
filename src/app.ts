import express from 'express'
import { V1Route } from './api/v1/v1.route'

/**
 * アプリケーション本体
 *
 * @module app
 */
export const app = express()
app.use('/api/v1', new V1Route().router)
