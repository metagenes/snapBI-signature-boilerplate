const crypto = require('crypto')

module.exports = (ClientKey, timestamps, privateKey) => {
        return signature = crypto.createSign('SHA256')
                .update(`${ClientKey}|${timestamps}`)
                .sign(privateKey, 'base64');
}