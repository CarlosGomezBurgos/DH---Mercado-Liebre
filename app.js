const express = require ('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3001, () => {
    console.log('El servidor esta funcionando en el puerto:',3001)
})

app.set('view engine','ejs');
app.use(express.static('public'));

let rutasProductos = require('./routes/productos.js');
let rutasMain = require('./routes/main.js');
let rutasLogin = require('./routes/login.js');
let rutasRegister = require('./routes/register.js');

app.use('/productos', rutasProductos);
app.use('/', rutasMain);
app.use('/userList', rutasMain);
app.use('/login', rutasLogin);
app.use('/register', rutasRegister);


