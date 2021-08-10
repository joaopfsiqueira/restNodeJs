const moment = require('moment');
const conexao = require('../connection/index');

class Atendimento {
    adiciona(atendimento, res) {

        //formatando a data que está sendo enviada para o banco de dados para que não dê erro de formato ao inserir na tabela.
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {nome: 'data',
               valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'    
            },

            {nome: 'cliente',
                valido: clienteEhValido,
                    mensagem: 'Cliente deve ter pelo menos cinco caracteres'
        }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        }else {
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        const sql = 'INSERT INTO tblatendimentos SET ?'
        
        conexao.query(sql, atendimentoDatado), atendimento, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        }
    }
    }
}

module.exports = new Atendimento;