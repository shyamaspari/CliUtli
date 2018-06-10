const { version } = require('../package.json')

module.exports = (args) => {
  console.log(args)
  console.log(`v${version}`)
}
