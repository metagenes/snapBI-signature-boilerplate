const crypto = require('crypto')

module.exports = (clientSecret, stringToSign) => {
    return signature = crypto.createHmac('sha512', clientSecret).update(stringToSign).digest('hex')
}