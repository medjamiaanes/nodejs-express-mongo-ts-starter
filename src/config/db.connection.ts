const connection = (): string => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return process.env.MONGO_URI_DEV || ''
    case 'staging':
      return process.env.MONGO_URI_STAGING || ''
    default:
      return process.env.MONGO_URI || ''
  }
}

export default connection
