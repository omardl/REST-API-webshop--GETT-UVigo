const express = require('express');
const router = express.Router();
const Item = require('../models/item');


router.post('/One',async(req,res) => {
    const result = await Item.findOneAndDelete({_id: req.body._id});
    res.json(result);
});

module.exports=router;