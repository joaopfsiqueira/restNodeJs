const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
        const app = express();  

        //bodyParser serve para passar o que tem no body da requisição do determinado tipo, seja json ou urlenconded(form normal) ou qualquer outro.
        //fazendo com que o back esteja pronto para receber informações desse tipo.
        app.use(bodyParser.urlencoded({ extended: true}));
        app.use(bodyParser.json());

        //o consign serve para agrupar os "app" dentro dos códigos.
        //especificamos onde estão os app, no caso, dentro da pasta de controller, e ai colocamos dentro de app.
        consign()
            .include('controllers')
            .into(app)

        return app;
}