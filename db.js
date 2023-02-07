const { createPool } = require('mysql2/promise')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'hf749tGUDH3904',
    port: 3306,
    database: 'companydb'
})

module.exports = pool