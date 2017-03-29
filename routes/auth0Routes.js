module.exports.register = (username, email, password ) => {


  return {  method: "POST",
            url: process.env.AUTH0_ROUTE_SIGNUP,
            headers: {"content-type": "application/x-www-form-urlencoded"},
            form: {

              client_id: process.env.AUTH0_CLIENT_ID,
              username: username,
              email: email,
              password: password,
              connection: "Username-Password-Authentication"

            }

          }


}

module.exports.authenticate = (username, password) => {

  return { method: "POST",
           url: process.env.AUTH0_ROUTE_USER_ACCESS_TOKEN,
           headers: {"content-type": "application/x-www-form-urlencoded"},
           form: {
              client_id: process.env.AUTH0_CLIENT_ID,
              username: username,
              password: password,
              connection: 'Username-Password-Authentication' 
            }
          }

}

module.exports.getUserInfo = (token) => {

  return { method: "GET",
           url: process.env.AUTH0_ROUTE_USER_INFO,
          headers: { "authorization": "Bearer " + token }
         }


}