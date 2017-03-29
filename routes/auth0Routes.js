

module.exports.register = (username, email, password ) => {


  return {  method: "POST",
            url: "https://moose333.auth0.com/dbconnections/signup",
            headers: {"content-type": "application/x-www-form-urlencoded"},
            form: {

              client_id: "hpU4GbTT1ZHyzdRPoNEDGk0kbfdQIQRA",
              username: username,
              email: email,
              password: password,
              connection: "Username-Password-Authentication"

            }

          }


}

// var options = { method: 'POST',
//   url: 'https://moose333.auth0.com/dbconnections/signup',
//   headers: 
//    { 'postman-token': '92491822-5e4b-acf3-4a4d-410370d8ed23',
//      'cache-control': 'no-cache',
//      'content-type': 'application/x-www-form-urlencoded' },
//   form: 
//    { client_id: 'hpU4GbTT1ZHyzdRPoNEDGk0kbfdQIQRA',
//      email: 'testemail@test.com',
//      password: 'testPassword333',
//      connection: 'Username-Password-Authentication' } };