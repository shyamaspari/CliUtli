const ora = require('ora')
const stockprice = require('../utils/stockprice')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const stocks = args.stocks || args.s
    const value = await stockprice(stocks)

    spinner.stop()

    console.log(`\t\t stock price `)
    console.log("\tstock name:"+value.indices.stkexchg)
    console.log("\tcurrent value:"+value.indices.lastprice)
    console.log("\tchange:"+value.indices.change)
    console.log("\ttime :"+value.indices.lastupdated)
    console.log("\topen:"+value.indices.open)
    console.log("\thigh:"+value.indices.high)
    console.log("\tlow:"+value.indices.low)
    console.log("\tprevclose:"+value.indices.prevclose)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
