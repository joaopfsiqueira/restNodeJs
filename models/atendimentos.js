const conexao = require('../connection/index');


class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO tblatendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento;