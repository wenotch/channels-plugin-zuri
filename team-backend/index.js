const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/zuri', function (req, res) {
  res.sendFile(__dirname + '/views/admin.ejs');
});

app.listen(port, function () {
  console.log('server is running at port 8000');
});
