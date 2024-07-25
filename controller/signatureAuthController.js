const errorResponse = require('../responder/errorResponse');
const successResponse = require('../responder/successResponse')
const generateTimestampHeaders = require('../helper/generateTimestampsHeader')
const createSignatureAuth = require('../helper/generateSignatureAuth')
const convertToPemFormat = require('../helper/convertToPemFormat');
const credentialConfig = require('../config/credentialConfig');

const getSignatureAuth = (req, res) => {
    try {
        const timestamps = generateTimestampHeaders()
        const privateKey = convertToPemFormat(credentialConfig.privateKey)
        const signature = createSignatureAuth(credentialConfig.clientID, timestamps, privateKey)

        res.status(200).json(successResponse({signature:signature, timestamp:timestamps}, 'Get Signature Success'))

    } catch (error) {
        console.error(error.stack)
        res.status(500).json(errorResponse(error.message, 'Error Create Signature'), 500)
    }

}

module.exports = { getSignatureAuth }