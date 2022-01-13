let path = require('path');
let loginController = {
    index: (req, res)=>{ //analiza la ruta ./ para saber que hacer ahi.
        res.render(path.resolve('./views/login'))
    }
}

module.exports = loginController;