const conexao = require('./index')


const Query = (query, params = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, params, (erros, results, campos) => {
            if(erro){
                reject(erros);
            } else {
                resolve(results);
            }
        })
    })

}