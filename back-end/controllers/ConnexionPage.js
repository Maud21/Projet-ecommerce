/*
 * Controller ConnexionPage 
 */

/*récupération de la page dans models*/
var Connexion = require('../models/ConnexionId');


    var ConnexionPage = {
        
        createUserConnexion: (req, res) => {
            var connexionData = req.body.connexion;
    
            if(!connexionData.identifiant || !connexionData.mot_de_passe) {
                res.status(400).json({message: 'Veuillez compléter tous les champs'});
                return;
            }

            var newConnexion = new Connexion ({
                identifiant: connexionData.identifiant,
                mot_de_passe: connexionData.mot_de_passe,
                
            });
    
            newConnexion.save((error) => {
                if(error){
                    res.status(502).json({message: "Une erreur s'est produite"});
                return;
                }

                res.status(200).json({message: 'Utilisateur créé'});
            });
        }
        
    }


module.exports = ConnexionPage;