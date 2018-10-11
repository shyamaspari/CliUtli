const axios = require('axios')

module.exports = async (Tickers) => {
  const results = await axios({
    method: 'get',
    url: 'http://appfeeds.moneycontrol.com/jsonapi/market/indices&ind_id='+Tickers
  })

  return results.data
}
