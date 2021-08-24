const mysql2 = require('mysql2');

//dados da conexao
const conexao = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'IBMADM@753951',
    database: 'agenda_petshop'
})


module.exports = conexao;