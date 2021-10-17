const request = require('request')

module.exports = {
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true, headers: {
                "hibp-api-key": "195be73864154e71b48f0f8ea61e89bc",
                "user-agent": "lifeworks-advisors",
                "cache-control": "no-cache"
            } }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }
}