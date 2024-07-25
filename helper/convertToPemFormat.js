module.exports = (privateKeyBase64) => {
    const privateKeyPEM = `-----BEGIN PRIVATE KEY-----\n${privateKeyBase64}\n-----END PRIVATE KEY-----`
    return privateKeyPEM
};