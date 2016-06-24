module.exports = {
    env: process.env.NODE_ENV || '',
    port: process.env.PORT || '4242',
    baseUrl: process.env.BASE_URL || 'http://localhost:4242/',
    path: process.env.REQUEST_PATH || ''
};
