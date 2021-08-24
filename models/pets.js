const moment = require('moment');
const conexao = require('../connection/db/index');
const uploadDeArquivo = require('../connection/arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO tblpets SET?'

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if(erro){
                res.status(400).json({ erro })
            } else {
                const novoPet = {nome: pet.nome, imagem: novoCaminho }
                conexao.query(query, novoPet, erro => {
                if(erro){
                    console.log(erro)
                    res.status(400).json(erro)
                }else{
                    res.status(200).json(pet)
                }
        })
    }})
}}

module.exports = new Pet()