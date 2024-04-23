const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.post('/All',async(req,res) => {

    const lookForItem = await Item.findOne({_id: req.body._id})

    const updatedItem = await Item.findByIdAndUpdate({_id: lookForItem._id}, { 
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Cantidad: req.body.Cantidad,
        Precio: req.body.Precio
    })

    res.json(updatedItem);
});

module.exports=router;