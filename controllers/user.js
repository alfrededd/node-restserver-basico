const { response } = require('express');


const usuarioGet= (req, res= response) => {
    const query = req.query ;

    res.json({
        msg: "get API- controlador",
        query
    })
}


const usuarioPut=(req, res=response) => {
    const {id} = req.params;
    res.status(400).json({
        msg: "put API desde el controlador",
        id
    })
}

const usuarioPost=(req, res) => {
    const {nombre,edad} = req.body;

    res.json({
        msg: "post API desde el controlador",
        nombre,
        edad
    })
}

const usuarioDelete=(req, res) => {
    res.json({
        msg: "delete  API desde el controlador"
    })
}
const usuarioPatch=(req, res) => {
    res.json({
        msg: "Patch  API desde el controlador"
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPatch
}