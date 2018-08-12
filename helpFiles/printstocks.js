const ora = require('ora')
const axios = require('axios')
async function printstocks()
{
  let flag=0;
  let k=1
  const spinner = ora().start()
  let output=[]
  for (let i=1;i<200;i++)
  {
    var options ={
       method: 'GET',
       url: 'http://appfeeds.moneycontrol.com/jsonapi/market/indices&ind_id='+i,
       headers: { accept: 'application/json' }
     }
   let results = await axios(options)
   if(results.data.indices.stkexchg==='S&P BSE India Infra' && flag===1){

   }else{
    let res={}
    res.url=options.url
    res.name=results.data.indices.stkexchg
    res.indix=k++
    output.push(res)
  }
  if(results.data.indices.stkexchg==='S&P BSE India Infra'){
   flag=1
  }
 }
 spinner.stop()
console.log("output:"+JSON.stringify(output));
}

printstocks()
