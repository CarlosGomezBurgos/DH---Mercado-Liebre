let productosController = {
    listado: function(){},
    crear: function(){},
    detalle: (req,res)=>{
        res.render('Bienvenidos el detalle del producto ' + req.params.idProducto);
    },
    detalleComentarios: function(req,res){
        if(req.params.idComentario == undefined) {
            res.render('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
        } else {
            res.render('Bienvenidos a los comentarios del producto ' + req.params.idProducto +
         ' y estas enfocado en el comentario ' + req.params.idComentario);
        }    
    }
}


module.exports = productosController;