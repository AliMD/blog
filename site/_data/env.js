module.exports = {
  // ...process.env,
  SITE_URL: process.env.SITE_URL || 'http://localhost:8080',
  NO_INDEX: process.env.NO_INDEX == 1 ? true : false,
}
