const express = require('express');
const app = express();
const api_helper = require('./API_helper');
const url = require('url');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/breaches', (req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const account = queryObject.account;
  api_helper.make_API_call(`https://haveibeenpwned.com/api/v3/breachedaccount/${account}?truncateResponse=false`)
  .then(response => {  
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
    res.json(response)
  })
  .catch(error => {
    res.send(error)
  })
})

app.listen(3000, () => console.log(`Listening on: 3000`));