var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = new Schema({
    Nombre : String,
    Descripcion : String,
    Cantidad : Number,
    Precio : Number,
});

module.exports = mongoose.model('Item', itemSchema)