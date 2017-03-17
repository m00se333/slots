var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 7887;
var webpack = require("webpack");
var config = require("./webpack.config");
var app = express();
var compiler = webpack(config);
var stormpath = require("express-stormpath");
var request = require("request");

var routes = require("./routes/auth0routes.js");
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


//route handling
app.post("/loginUser", function(req, res){
  
  var {username, password} = req.body;

  var tokenObject;

  var urlString = "grant_type=password&username="+encodeURIComponent(username)+"&password="+encodeURIComponent(password);
 
  var options = { method: "POST",
                  url: "https://excellent-badger.apps.stormpath.io/oauth/token",
                  headers: 
                  { host: "excellent-badger.apps.stormpath.io",
                    "content-type": "application/x-www-form-urlencoded",
                    accept: "application/json"
                  },
                  body: urlString}
          

    request(options, function(error, response, body){
        if (error) throw new Error(error);

        tokenObject = response.body;
        res.send(tokenObject);
          
  
      })

});

// Get user info and reroute
app.post("/getUser", function(req, res){
  var {token} = req.body;
  console.log(token);

  var options = { method: "GET",
                     url: "https://excellent-badger.apps.stormpath.io/me",
                     headers: {
                      host: "excellent-badger.apps.stormpath.io",
                      "content-type": "application/json",
                      authorization: "Bearer " + token
                     }
                }

          request(options, function(error, response, body){
            if (error) throw new Error(error);
            console.log(body);
            res.send(body);
          })
})

app.post("/registerNewUser", function(req,res){
  var {email, password} = req.body;



  var options = { method: 'POST',
                  url: 'https://excellent-badger.apps.stormpath.io/register',
                  headers: 
                   { host: 'excellent-badger.apps.stormpath.io',
                     'content-type': 'application/json' },
                  body: {email, password},
                  json: true };

  request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });

})

app.post("/caleanderPopulate", function(req,res){
  mongoMethod.record(req.body);
})



app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});





