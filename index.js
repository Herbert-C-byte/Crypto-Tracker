// POST a new post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'POST',
  headers: {'COntent-Type: '}
}
.then(res => {

})

// GET a list of posts
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
  console.log('Status: ', res.status);  // Should be 200
})
.then(data => {
  console.log('GET result: ', data);
})
.catch(err => {
  console.log('Something went really wrong bro: ', err);
})