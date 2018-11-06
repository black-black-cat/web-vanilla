const devConf = require('../webpack.config')

const pathResolve = (part) => {
  return path.resolve(__dirname, '../', part)
}

module.exports = {
  ...devConf,
  mode: 'production',
  devtool: false
}
