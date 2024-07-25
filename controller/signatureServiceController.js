const errorResponse = require('../responder/errorResponse');
const successResponse = require('../responder/successResponse')
const hashRequestBody = require('../helper/hashRequestBody');
const generateSignatureService = require('../helper/generateSignatureService')
const credentialConfig = require('../config/credentialConfig');

const getSignatureService = (req, res) => {
    try {       
        const stringToSign = `${req.body.HttpMethod}:${req.body.EndpointUrl}:${req.body.AccessToken}:${hashRequestBody(req.body.Body)}:${req.body.Timestamp}`;
        const signature = generateSignatureService(credentialConfig.clientSecret, stringToSign)
    
        res.status(200).json(successResponse({signature:signature, timestamps:req.body.Timestamp}, 'Generate signature service success'))
    } catch (error) {
        console.error(error.stack)
        res.status(500).json(errorResponse(error.message, 'Error Create Signature'), 500)
    }
   
}

module.exports = { getSignatureService }