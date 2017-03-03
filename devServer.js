var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 7887;
var webpack = require("webpack");
var config = require("./webpack.config");
var app = express();
var compiler = webpack(config);
var stormpath = require("express-stormpath");
var request = require("request");


// app.use(stormpath.init(app, {
//     web: {
//       spa: {
//         enabled: true,
//         view: path.join(__dirname, "index.html")
//       },
//       produces: ["applicaton/json"],
//       login: {
//         view: path.join(__dirname, "/")
//       },
//       register: {
//         view: path.join(__dirname, "/register")
//       }
//     }
// }));

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

  var urlString = "grant_type=password&username="+encodeURIComponent(username)+"&password="+encodeURIComponent(password);
  console.log(urlString)
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

    console.log(body)
    
    var data = response.body;
  
    console.log(data)

    res.send(data);
  })
});

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



app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});





