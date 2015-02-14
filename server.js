var express = require('express'),
    app = express();

app.use(express.static(__dirname));

app.route('*').all(function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);