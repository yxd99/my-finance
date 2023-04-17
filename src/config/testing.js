exports.config = {
    environment: 'testing',
    common: {
        database: {
            name: process.env.DB_NAME_TEST
        }
    },
    isTesting: true
}
