import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import http from 'http'
import config from './config'
import DatabaseService from './services/database.service'
import LoggerService from './services/logger.service'

const app = express()
const server = new http.Server(app)

app.use(cors())
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

server.listen(config.port, () => {
  DatabaseService.connectDB()
  console.log(
    `Server up and running in ${process.env.NODE_ENV} on port ${config.port}`
  )

  LoggerService.customLogger('info', { config })
})
