const { fetchPrices } = require('../src/index');

(async () => {
  if (typeof fetchPrices !== 'function') {
    console.error('fetchPrices is not exported');
    process.exit(1);
  }
  console.log('Basic smoke test: export exists');
  process.exit(0);
})();
