/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/jedi", function(req, res) {
    setTimeout(() => res.send([
        {name: 'Qui-Gon Jinn'},
        {name: 'Mace Windu'},
        {name: 'Yoda'},
        {name: 'Luke Skywalker'},
        {name: 'Obi-Wan Kenobi'},
    ]), 5000);
});

app.get("/api/sith", function(req, res) {
    setTimeout(() => res.send([
        {name: 'Darth Plagueis'},
        {name: 'Darth Sidious'},
        {name: 'Darth Maul'},
        {name: 'Darth Tyranus'},
        {name: 'Darth Vader'},
    ]), 300);
});


app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
