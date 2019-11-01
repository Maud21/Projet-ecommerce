//liste front dynamique

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ListeProduits.css';

class ListeProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorieProducts: {
                Epicerie: {
                    name: "Epicerie",
                    subCategories: ["Amarante", "Miel de provence","Huile de coco"]
                },
                Thé: {
                    name: "Thé",
                    subCategories: ["Red Apple", "Limon Ginger", "Mexico té"]
                },
                Soins: {
                    name: "Soins",
                    subCategories: ["Aloe Vera", "Bave d'escargot", "Crème d'orties"]
                },
                Contacts: {
                    name: "Contacts",
                    subCategories: ["Healty Team", "Notre philosophie", "Nous contacter"]
                }
            }
        }
    }
    render() {
        return (
            <div className="containerProduits">
                <div className="produitsList">
                    {this.state.categorieProducts.map((Epicerie) => (
                        <Link to="{`/products/Epicerie/${subCategories}`}">{Epicerie.name.subCategories}</Link>
                    ))}

                     {this.state.categorieProducts.map((Thé) => (
                        <Link to="{`/products/Thé/${subCategories}`}">{Thé.name.subCategories}</Link>
                    ))}

                    {this.state.categorieProducts.map((Soins) => (
                        <Link to="{`/products/Soins/${subCategories}`}">{Soins.name.subCategories}</Link>
                    ))}

                    {this.state.categorieProducts.map((Contacts) => (
                        <Link to="{`/products/Contacts/${subCategories}`}">{Contacts.name.subCategories}</Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListeProduits;

