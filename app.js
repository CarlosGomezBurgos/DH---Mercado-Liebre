const express = require ('express');
const app = express();
const path = require('path');
app.use(express.static('public'))
const port = 3030;
app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto:',port)
})

app.get('/', (req, res)=>{ //analiza la ruta ./ para saber que hacer ahi.
    res.sendFile(path.resolve('./views/home.html'))
})
