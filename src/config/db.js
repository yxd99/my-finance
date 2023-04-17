const mongoose = require('mongoose');
const config = require('.')
const database = config.common.database;

const connectionCnn = `mongodb://${database.user}:${database.password}@${database.host}:${database.port}/${database.name}`;

const connectionDB = async () => {
    try {
        await mongoose.connect(connectionCnn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connect to database: ${database.name}`);
    } catch(e) {
        console.log(`Error to connect to database: ${e}`);
    }
}

module.exports = {
    connectionDB
}
