const ora = require('ora')
const stockprice = require('../utils/stockprice')
const cTable = require('console.table')

module.exports =  async (args) => {
  const spinner = ora().start()
  console.log(`\t   stock price change `)
  let data=await printStockValue([4,9,19,23,34,35,38,39,40,41,43,44,48,50,51,52,53,79])
  console.table(data)
  spinner.stop()
}
async  function printStockValue(list){
  let output=[]
   for(let i=0;i<list.length;i++){
    let value = await stockprice(list[i])
    let info={
      "index name":value.indices.stkexchg,
      "last updated time":value.indices.lastupdated,
      "current value":value.indices.lastprice,
      "change from open":value.indices.change
    }
    output.push(info)
   }
   return (output) 
}
