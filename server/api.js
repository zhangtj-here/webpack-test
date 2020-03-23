const express = require('express')
const app = express()
// const cors = require('cors')
// app.use(cors())
// '/toto/getUserInfo'
// '/api/getUserInfo'
app.get('/api/getUserInfo', (req, res) => {
  res.send({
    name: '幸运儿',
    age: 15
  })
});

app.listen(8080, () => {
  console.log('http://localhost:8080!');
});