const pg = require('pg')
require('dotenv').config()

const pool = new pg.Pool({
    connectionString: process.env.URL_DATA
})

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectar con PostgreSQL:', err);
    }
    console.log('Conexión establecida con PostgreSQL');

});


module.exports = pool
