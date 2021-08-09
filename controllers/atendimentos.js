module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Você está na rota de atendimentos e está em um get.')
    })

    app.post('/atendimentos', (req, res) => {
        
        res.send('Você está na rota de atendimentos e está realizando um post')
    })
}