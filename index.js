const customExpress = require("./config/customExpress")
const conexao = require('./connection/index');
const port = 3000;


//se a conexão com o bd n der erro, vai retornar um log e ai vai fazer a conexão do NODE
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }else {
        console.log('Conectado com sucesso.')
        const app = customExpress()
        app.listen(port, () => console.log(`Listen on port ${port}`)); 
    }
})

