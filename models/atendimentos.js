//Models conecta na base da dados para pesquisar, alterar, adicionar ou remover.

const moment = require('moment');
const conexao = require('../connection/db/index');
const axios = require('axios');
const repositorio = require('../repositorios/atendimento');

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
            return new Promise((resolve, reject) => reject(erros))
        }else {
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
        return repositorio.adiciona(atendimentoDatado)
            .then(results => {
                const id = results.insertId
                return { ...atendimento,id}
            })
    }
    }

    lista(res) {
        const sql = 'SELECT * FROM tblatendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM tblatendimentos WHERE id = ${id}`

        conexao.query(sql, async (erro, resultados) => {
            //CÓDIGO ABAIXO PARA DEVOLVER APENAS UM OBJETO, PARA QUE NÃO RETORNE UM ARRAY.
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if(erro){
                res.status(400).json(erro)
            } else {
                const {data} = await axios.get(`http://localhost:8082/${cpf}`)
                atendimento.cliente = data
                res.status(200).json(atendimento)
            }
        })
    }
 
    altera(id, valores, res) {
        //se o valor data for alterado, formatar a data:
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        //O "?" utilizado na query abaixo diz que espera um determinado valor.
        const sql = 'UPDATE tblatendimentos SET ? WHERE id = ?'

        //os valores de "?" estão dentro do array abaixo, onde informamos o que os ? vão receber.
        conexao.query(sql, [valores, id], (erro) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                //vai retornar os valores que foram adicionados.
                res.status(200).json({...valores, id})
            }
        } )
    }

    deleta(id, res) {
        const sql = 'DELETE FROM tblatendimentos WHERE id= ?'

        conexao.query(sql, [id], (erro) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(`${id} deletado com sucesso`)
            }
        })
    }
}

module.exports = new Atendimento;