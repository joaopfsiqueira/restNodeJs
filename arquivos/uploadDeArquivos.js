const fs = require('fs');

//pipe transforma a leitura em escrita.
fs.createReadStream('./assets/salsicha.jpg')
    .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))