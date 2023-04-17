exports.config = {
    environment: 'production',
    common: {
        database: {
            name: process.env.DB_NAME_PROD
        }
    },
    isProduction: true
}
