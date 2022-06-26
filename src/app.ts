import express from 'express'
import { v1Router } from './routes/v1/index'

/**
 * アプリケーション本体
 *
 * @module app
 */
export const app = express()
app.use('/api/v1', v1Router)
