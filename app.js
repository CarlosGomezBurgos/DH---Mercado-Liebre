const express = require ('express');
const app = express();
const path = require('path');
app.use(express.static('public'))

app.listen(process.env.PORT || 3001, () => {
    console.log('El servidor esta funcionando en el puerto:',3001)
})

app.get('/', (req, res)=>{ //analiza la ruta ./ para saber que hacer ahi.
    res.sendFile(path.resolve('./views/home.html'))
})

