class Tables { 
    init(conexao) {
      this.conexao = conexao;

      this.criaTableAtendimentos()
      this.criarPets()
    }

    criaTableAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS tblatendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela atendimento criada com sucesso.')
            }
        })
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS tblpets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), primary key (id))'
        this.conexao.query(query, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela pet criada com sucesso.')
            }
        })
    }
}

module.exports = new Tables;