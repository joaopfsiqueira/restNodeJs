# restNodeJs
Repositório criado para arquivos do curso de rest com nodejs, realizado na plataforma Alura.

Se trata de uma database chamada "agenda_petshop" com uma tabela "tblatendimentos" 



## O que foi aprendido.
- Rota com express;
- Consign
- Body-parser para conseguir ler os dados que são recebidos no body.
- Conexão com mysql2 (de uma forma mais simples)
- Diferente do outro projeto, foi feito conexão e criação sem utilizar sequelize, eu diria que é o mesmo que fazer "na mão"
- Tabelas no mysql usando um script node;
- Utilizando a biblioteca "momentjs" para formatar datas que serão enviadas ao bd.
- Validação de entrada.
- Quando usar PUT e quando usar PATCH;
- Retornar objeto para o cliente.



## Diversos NPM utilizados.
- bodyParser
- consign
- momentjs
- express
- mysql2


## Request

- Endpoint - `http://localhost:3000/`

## Uso

Pesquisar todos os atendimentos.
```
 /atendimentos

```

Pesquisar pelo id do atendimento.
```
 /atendimentos/1

```
Inserir um atendimento.
```
    No postman: body -> url encoded-> cria as keys (SÃO ELAS: "cliente", "pet", "servico", "status", "observacoes, "data"): 

    cliente = "Joao"
    pet = "Koda"
    servico = "banho"
    status = "agendado"
    observacoes = "manso"
    data = "11/08/2021"
    
```

Atualizar um atendimento.
```
    No postman: body -> url encoded-> informa o dado que deseja alterar do id em questão dentro das keys.

    /atendimentos/1

    data = "20/08/2021"

```
Deletar um atendimento.
```
    Basta selecionar o id da pessoa a ser deletada.

  /atendimentos/3


```


## Retorno

Pesquisar todos os atendimentos.
```
Retorna um array com todos os objetos da tabela.

    [
    {
        "id": 1,
        "cliente": "Joao",
        "pet": "Sonic",
        "servico": "tosa",
        "status": "agendado",
        "observacoes": "muito bonzinho",
        "data": "2019-10-22T03:10:00.000Z",
        "dataCriacao": null
    },
     {
        "id": 2,
        "cliente": "Joao Siqueira",
        "pet": "Koda",
        "servico": "tosa",
        "status": "agendado",
        "observacoes": "muito bonzinho",
        "data": "2020-05-25T03:05:00.000Z",
        "dataCriacao": "2021-08-10T17:08:34.000Z"
    }
    ]

```


Pesquisar um atendimento.
```
Retorna o objeto selecionado.

    {
        "id": 1,
        "cliente": "Joao",
        "pet": "Sonic",
        "servico": "tosa",
        "status": "agendado",
        "observacoes": "muito bonzinho",
        "data": "2019-10-22T03:10:00.000Z",
        "dataCriacao": null
    }

```

Inserir um atendimento.
```
    Retorna o objeto criado.

    {
        "id": 5,
        "cliente": "Joao Pedro",
        "pet": "Sonic",
        "servico": "tosa",
        "status": "agendado",
        "observacoes": "tranquilo",
        "data": "2019-10-22T03:10:00.000Z",
        "dataCriacao": "2021-08-10T17:08:34.000Z"
    }
    
```

Atualizar um atendimento.
```
    Retorna os valores alterados e o id do atendimento.

    {
    "data": "2020-10-22 00:10:00",
    "id": 1
    }

```

Deletar um atendimento.
```
    Retorna uma mensagem.

    "4 deletado com sucesso"


```