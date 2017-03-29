require("dotenv").config();
var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 7887;
var webpack = require("webpack");
var config = require("./webpack.config");
var app = express();
var compiler = webpack(config);
var stormpath = require("express-stormpath");
var request = require("request");

var auth0 = require("./routes/auth0routes.js");
var mongoMethod = require("./routes/mongoroutes.js");


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


app.use(express.static(path.join(__dirname + "/_build")));

// sending React files
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Get User Data
app.post("/getUser", function(req, res){
  const { token } = req.body;
  const options = auth0.getUserInfo(token);
  let userInfo;

  console.log(token);

  request(options, function(error, response, body){
    if (error) throw new Error(error);
    
    userInfo = response.body;

    res.send(userInfo);

  })

})

// Authenticate username and password
app.post("/authenticateUser", function(req, res){
    const {username, password} = req.body;
    const options = auth0.authenticate(username, password);
    let tokenObject;

    request(options, function(error, response, body){
      if (error) throw new Error(error);

      tokenObject = response.body;

      res.send(tokenObject);

    });

});

// User Registration
app.post("/registerNewUser", function(req,res){
  
    const { username, password, email, pin } = req.body;
    const options = auth0.register(username, email, password);

    // add user to Mongo
    //mongoMethod.addNewUser(username, email)

    //off to Auth0
    request(options, function(error, response, body){
      if (error) throw new Error(error);
      console.log(body);
    })

    console.log(req.body);
    console.log(options);

})



app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});





