import sendGridMailer from '@sendgrid/mail'
import config from '../config'

class MailerService {
  constructor() {
    sendGridMailer.setApiKey(config.sendgrid.apiKey || 'no_token')
  }
}

export default new MailerService()
