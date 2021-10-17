const express = require('express');
const app = express();
const api_helper = require('./API_helper');

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
  api_helper.make_API_call('https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com')
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    res.send(error)
  })
})


// app.get('/api/breaches', (req, res) => {
//   var options = {
//     // host: "haveibeenpwned.com",
//     url: "https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com",
//     method: "GET",
//     headers: {
//       "hibp-api-key": "195be73864154e71b48f0f8ea61e89bc",
//       "user-agent": "lifeworks-advisors",
//       "Cache-Control": "no-cache"
//     },
//   };
//   // http.get(options, (msg) => {
//   //   // res.send(hibpResponse);
//   //   // console.log(hibpResponse);
//   //   res.on('end')
//   // })
// })



app.listen(3000, () => console.log(`Listening on: 3000`));