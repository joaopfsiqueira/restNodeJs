//controllers vão decidir o que cada rota vai fazer.

const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
        .then(results => res.json(results)) //isso já retorna 200 no res, só de n informar, por ser o padrão!
        .catch(erros => res.status(400).json(erros))
    })

    app.get('/atendimentos/:id', (req, res) => {
        //convertendo id para string
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento)
        .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
        .catch(erros => res.status(400).json(erros))
    })

    app.patch('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}