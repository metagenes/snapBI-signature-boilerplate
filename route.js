const express = require('express')
const router = express.Router()
const signatureAuthController = require('./controller/signatureAuthController')
const signatureServiceController = require('./controller/signatureServiceController')

router.get('/signature-auth', signatureAuthController.getSignatureAuth)
router.post('/signature-service', signatureServiceController.getSignatureService)

module.exports = router