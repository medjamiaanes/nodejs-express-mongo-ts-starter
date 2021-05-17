import mongoose from 'mongoose'
import dbConnection from '../config/db.connection'

class DatabaseService {
  private uri: string

  constructor() {
    this.uri = dbConnection()

    if (!this.uri) {
      console.error('Invalid database uri !')
      return process.exit(1)
    }
  }

  connectDB = (): void => {
    console.log(`Connecting to ${process.env.NODE_ENV} database ....`)
    mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () =>
      console.log('Connection to DB established successfully')
    )
    mongoose.connection.on('error', (err) =>
      console.log('DB connection error', { err })
    )
  }
}

export default new DatabaseService()
