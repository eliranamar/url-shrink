const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/url_shrink', {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shrinkUrl', (req, res) => {

});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started');
});
