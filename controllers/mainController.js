let path = require ('path')
let mainController = {
    index: (req, res)=>{
        res.render(path.resolve('./views/home'));
    },
    list: function (req,res) {
        let users = [
            'Dario',
            'Javier',
            'Maru',
            'Ale',
            'Alan'
        ];
        res.render(path.resolve('./views/userList'),{'users': users});
    }
}

module.exports = mainController;