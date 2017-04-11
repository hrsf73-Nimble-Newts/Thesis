const express = require('express');
const dotenv = require('dotenv').config();
const trail = require('../db/scripts/storeTrails.js')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
  trail.storeTrails();
  res.status(200);
});


app.listen(process.env.PORT || port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = app;
