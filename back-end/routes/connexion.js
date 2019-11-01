/*Route bouton connexion*/

/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var connexion = require('../controllers/ConnexionPage');


/* Connexion register */
router.post('/create', function(req, res, next) {
    console.log('yes');
    connexion.createUserConnexion(req, res);
  });

module.exports = router;