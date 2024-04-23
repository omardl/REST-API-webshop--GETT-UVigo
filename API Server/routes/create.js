const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.post('/', async (req,res) => {
    
    const newItem =  new Item({
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Cantidad: req.body.Cantidad,
        Precio: req.body.Precio,
    });

    await newItem.save();

    res.json(newItem);
});

    
module.exports=router;