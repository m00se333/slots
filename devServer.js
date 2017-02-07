var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 7887;
var webpack = require("webpack");
var config = require("./webpack.config");
var app = express();
var compiler = webpack(config);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


app.use(express.static(path.join(__dirname + "/_build")));

// sending React stuff
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


//route handling
app.post("/login", function(req, res){
  
  var userInfo = {
    name: req.body.username,
    password: req.body.password
  }

  console.log(userInfo.name);
  console.log(userInfo.password);

    if (userInfo.name === "" || userInfo.password === ""){
      res.send({success: false, message: userInfo})
    } else {
      res.send({success: true, message: userInfo});
    }
});






app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});