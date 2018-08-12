const axios = require('axios')

module.exports = async (Tickers) => {
  console.log(Tickers)
  const results = await axios({
    method: 'get',
    url: 'http://appfeeds.moneycontrol.com/jsonapi/market/indices&ind_id=9'
  })

  return results.data
}
