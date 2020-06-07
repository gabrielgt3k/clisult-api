const dbConfig = require('../config/database')
const mysql = require('mysql')

const dbconn = mysql.createConnection(dbConfig);

dbconn.connect((err) => {
    if(!err) {
        console.log('mysql conected!...');
    } else {
        console.log('error ao conectar ao banco.')
    }
})

module.exports = dbconn;