module.exports = (data, message = '') => {
    return {
        status: "ERROR",
        message: message,
        data: data,
        timestamp: new Date().toISOString()
    }
}