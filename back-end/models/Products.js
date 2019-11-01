/*
*Listes des produits Healthy Model
*/

/* Mongoose import*/
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number,
    descritpion: String,
});

module.exports = mongoose.model('Product', ProductSchema);
//'Product' nom du modèle qu'on exporte