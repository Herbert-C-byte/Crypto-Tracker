const axios = require('axios');

async function postExample() {
  try {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('POST response status:', res.status);
    console.log('POST response data:', res.data);
  } catch (err) {
    console.error('POST error:', err.message);
  }
}

async function getExample() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('GET response status:', res.status); // Should be 200
    console.log('GET response data:', res.data);
  } catch (err) {
    console.error('GET error:', err.message);
    // Note: jsonplaceholder returns 404 for non-existent posts, so this is expected for invalid IDs
  }
}

async function run() {
  console.log('Running jsonplaceholder examples...');
  await postExample();
  await getExample();
  // Note: To test error handling, you can modify the getExample URL to an invalid endpoint, e.g. 'https://jsonplaceholder.typicode.com/posts/9999'
}

if (require.main === module) run();

module.exports = { postExample, getExample };
