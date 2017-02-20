var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 7887;
var app = express();
var stormpath = require("express-stormpath");

// stormpath 
app.use(stormpath.init(app));

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname + "/_build")));

// sending React files
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));

// test stormpath register
app.post("/register", function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    console.log(email, password);
  })

// more stormpath
app.on("stormpath.ready", function(){
  console.log("Stormpath Ready");
})

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});

