/*
 * Products controller
 */

/* Models imports */
var Product = require('../models/Products');


var productsController = {

    createProduct: (req, res) => {
        var productData = req.body.product;

        var newProduct = new Product ({
            name: productData.name,
            category: productData.category,
            price: productData.price,
            quantity: productData.quantity,
            description: productData.description,
        });

        newProduct.save((error) => {
            if(error){
                console.log(error);
                res.status(500).json({message: "Une erreur s'est produite"});
                return;
            }

            res.json({message: "Produit créé"});
        });

        return true;
    },

    listProducts: (req, res) => {
        Product.find({}, function(error, result) {
            if(error) {
                console.log(error);
                res.status(500).json({products: []});
                return;
            }
            console.log(result);
            res.json({products: result});
        });
    },

    listProductsByCategory: (req, res) => {
        var category = req.body.category;

        if(!category) {
            res.status(500).json({products: []});
        }

        Product.find({category: category}, function(error, result) {
            if(error) {
                console.log(error);
                res.status(500).json({products: []});
                return;
            }
            console.log(result);
            res.json({products1: result});
        });
    }
    
}

module.exports = productsController;