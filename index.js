fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
.then(data => data.json())
.then(coin => {
  console.log(`Current Bitcoin price: $${coin.market_data.current_price.usd} `);
})
.catch(err => {
  console.error("Something went really wrong: ", err);
}) 


// fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
// .then(data => data.json())
// .then(coin => {
//   console.log(`Here's today's price of bitcoin in the market: `, coin.market_data.current_price.usd, `USD`);
// })
// .catch(error => {
//   console.log("Something went really wrong: ", error);
// }) 