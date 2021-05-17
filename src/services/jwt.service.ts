import jwt from 'jsonwebtoken'
import config from '../config'

class JwtService {
  private secret
  private expirationHours

  constructor() {
    this.secret = config.jwtSecret
    this.expirationHours = config.jwtExpirationHours
  }

  sign = (payload: any) =>
    jwt.sign(payload, this.secret, {
      expiresIn: this.expirationHours || 24 * 3600,
    })

  signUnexpired = (payload: any) => jwt.sign(payload, this.secret)

  verify = (token: string) => jwt.verify(token, this.secret)
}

export default new JwtService()
