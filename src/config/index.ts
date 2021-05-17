import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT || 3300,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET || 'jwtmeister',
  jwtExpirationHours: process.env.JWT_EXPIRATION_HOURS,
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
  },
}
