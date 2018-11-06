const devConf = require('../webpack.config')

module.exports = {
  ...devConf,
  mode: 'production',
  devtool: false
}
