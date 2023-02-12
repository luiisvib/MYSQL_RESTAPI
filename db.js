const { createPool } = require('mysql2/promise')

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DATABASE
})

module.exports = pool
