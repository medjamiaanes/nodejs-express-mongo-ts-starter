import bcrypt from 'bcrypt'
import config from '../config'

class BcryptService {
  private saltRounds
  constructor() {
    this.saltRounds = config.bcryptSaltRounds || 10
  }

  hash = (password: string): string =>
    bcrypt.hashSync(password, this.saltRounds)

  compare = (plainPassword: string, hashedPassword: string): boolean =>
    bcrypt.compareSync(plainPassword, hashedPassword)
}

export default new BcryptService()
