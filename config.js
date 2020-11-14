const convict = require('convict');

module.exports = convict({
  ripcord_url: {
    doc: 'Ripcord Host',
    format: String,
    default: 'http://ripcord:3000',
    env: 'RIPCORD_URL',
    arg: 'ripcord-url'
  },
  port: {
    doc: 'The port to bind to the express server.',
    format: 'port',
    default: 5000,
    env: 'EXPRESS_PORT',
    arg: 'port'
  }
});
