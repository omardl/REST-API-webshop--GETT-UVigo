const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.post('/One',async(req,res) => {
    const item = await Item.findOne({_id: req.body._id});
    res.json(item);
});


router.get('/all',async(req,res) => {
    const items = await Item.find();
    res.json(items)
});

module.exports=router;