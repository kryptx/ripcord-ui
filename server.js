const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const config = require('./config')

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use('/json-rpc', proxy(config.get('ripcord_url')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = config.get('port');
app.listen(port);

console.log(`Listening on port ${port}`);
