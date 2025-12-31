const axios = require('axios');

async function fetchPrices(ids = ['bitcoin', 'ethereum'], vs = 'usd') {
  const idsParam = ids.join(',');
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=${vs}`;
  const res = await axios.get(url, { timeout: 10000 });
  return res.data;
}

async function main() {
  const args = process.argv.slice(2);
  const ids = args.length ? args : ['bitcoin', 'ethereum'];
  try {
    const prices = await fetchPrices(ids);
    for (const [id, val] of Object.entries(prices)) {
      console.log(`${id}: ${Object.entries(val).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' ')}`);
    }
  } catch (err) {
    console.error('Error fetching prices:', err.message);
    process.exitCode = 1;
  }
}

module.exports = { fetchPrices, main };

if (require.main === module) main();
