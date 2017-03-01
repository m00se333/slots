var express = require("express");
var app = express();
var stormpath = require("express-stormpath");
var request = require("request");

app.use(stormpath.init(app));