const query = require('../connection/db/queries')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO tblatendimentos SET ?'
        return query(sql, atendimento)
    }
}

module.exports = new Atendimento()