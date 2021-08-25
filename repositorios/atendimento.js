const query = require('../connection/db/queries')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO tblatendimentos SET ?'
        return query(sql, atendimento)
    }

    lista(){
        const sql = 'SELECT * FROM tblatendimentos'
        return query(sql)
    }
}

module.exports = new Atendimento()