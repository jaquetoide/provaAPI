import mysql2 from 'mysql2/promise'

const con = await mysql.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PSW,
    database: process.env.MYSQL_DB
})

export { con }