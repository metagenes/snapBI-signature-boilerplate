const crypto = require('crypto')

module.exports = (requestBodys) => {
    const MinifyJson = JSON.stringify(JSON.parse(requestBodys))
    const SHA256 = crypto.createHash('sha256').update(MinifyJson).digest('hex')
    const XRequestBody = SHA256.toLowerCase()
    return XRequestBody
}