const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'santi',
    password: '',
    database: 'Images'
});

connection.connect(error => {
    if (error) throw error;
    console.log('database running!!!')
})

module.exports = connection;