const request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true, headers: {
                "hibp-api-key": "195be73864154e71b48f0f8ea61e89bc",
                "user-agent": "lifeworks-advisors"
            } }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }
}