const winston = require('winston');
const now = new Date();
const date = now.toISOString().slice(0,10).replace(/-/g,"");
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: `./storage/logs/${date}_info.log`,
            level: 'info'
        }),
        new winston.transports.File({
            filename: `./storage/logs/${date}_errors.log`,
            level: 'error'
        })
    ]
});

module.exports = {logger};
