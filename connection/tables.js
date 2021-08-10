class Tables { 
    init(conexao) {
      this.conexao = conexao;

      this.criaTableAtendimentos()
    }

    criaTableAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS tblAtendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar (50), servico varchar(50) not NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela atendimento criada com sucesso.')
            }
        })
    }
}

module.exports = new Tables;