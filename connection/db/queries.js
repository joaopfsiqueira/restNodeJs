const conexao = require('./index')


const Query = (query, params = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, params, (erros, results, campos) => {
            if(erros){
                reject(erros);
            } else {
                resolve(results);
            }
        })
    })

}

module.exports = Query;