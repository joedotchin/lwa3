const express = require('express');
const app = express();
const api_helper = require('./API_helper');
const url = require('url');
const http = require('http');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
  res.send({ application: 'lwa3', version: '1.0' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

app.get('/getAPIResponse', (req, res) => {
  api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

app.get('/api/breaches', (req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const account = queryObject.account;
  api_helper.make_API_call(`https://haveibeenpwned.com/api/v3/breachedaccount/${account}?truncateResponse=false`)
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    res.send(error)
  })
})

app.listen(3000, () => console.log(`Listening on: 3000`));