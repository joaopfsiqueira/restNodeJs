const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Listen on port ${port}`)); 

app.get('/atendimentos', (req, res) => {
    res.send('Você está na rota de atendimentos e está em um get.')
})