import { app } from './app'
import { config } from './config/config'

const server = app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${config.port}`)
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = () => {
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  if (server) {
    server.close()
  }
})
