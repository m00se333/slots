var MongoClient = require("mongodb").MongoClient
var assert = require("assert");

module.exports.record = (name) => {

    MongoClient.connect("mongodb://localhost:27017/slots", function(err, db){

      db.collection("users").insert({user: name});
    })
}

module.exports.addNewUser = (username, email) => {

  

    MongoClient.connect("mongodb://localhost:27017/slots", function(err, db){

      db.collection("users").insert({user: username, email: email});

    })
}