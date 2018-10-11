const ora = require('ora')
const stockprice = require('../utils/stockprice')

module.exports =  async (args) => {
  const spinner = ora().start()
  console.log(`\t   stock price change `)
  await printStockValue([4,9,19,23,34,35,38,39,40,41,43,44,48,50,51,52,53,79],args.t)
  spinner.stop()
}
 function printStockValue(list,time){
  list.forEach(async val=>{
    let value = await stockprice(val)
    if(time){
      console.log(value.indices.stkexchg+"( "+value.indices.lastupdated+" )"+" : "+value.indices.change)
    }else{
      console.log(value.indices.stkexchg+" : "+value.indices.change)
    }
  })
}
