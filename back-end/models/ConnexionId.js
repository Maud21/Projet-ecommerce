/*
 * Models connexion, Ids
 */

/* Mongoose import */
const mongoose = require('mongoose');

const RecupIds = new mongoose.Schema({
    identifiant: String,
    mot_de_passe: Number,
});

module.exports = mongoose.model('Connexion', RecupIds);