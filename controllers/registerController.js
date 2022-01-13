let path = require('path');
let registerController = {
    index: (req, res)=>{ //analiza la ruta ./ para saber que hacer ahi.
        res.render(path.resolve('./views/register'))
    }
}

module.exports = registerController;