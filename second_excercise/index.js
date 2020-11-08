const express = require('express')

var app = express();
app.use(express.json());

app.post('/palindrome', (req, res) => {
  if(!req.body.phrase) res.send('A phrase attribute is required');

  phrase = req.body.phrase + ''.replace(' ', '');
  result = phrase.split('').join() === phrase.split('').reverse().join();
  res.send({
    palindrome: result
  });
})


app.listen(3000);