/*BON PLAN produits*/


import React, { Component } from 'react';

import './Nav3.css';


class Nav3 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="bon_plan_produits">
                <div className="titre2">Bon plan</div>
                    <div class="card">
                        <img src="images/cafe.jpeg" class="card-img-top" alt="cafe"/>
                        <div class="card-body">
                        <h5 class="card-title">Café Michel</h5>
                        <p class="card-text">Le Pérou et l'Inde se rencontrent dans un mélange puissant et unique. Un café au corps plein aux saveurs intenses et robustes. Parfait pour commencer la journée de bon pied !</p>
                        <a href="/Panier" class="btn btn-primary background">Acheter</a>
                        </div>
                    </div>

                    <div class="card">
                        <img src="images/dentifrice_bebe.jpeg" class="card-img-top" alt="dentifrice"/>
                        <div class="card-body">
                        <h5 class="card-title">Dentifrice pour bébé</h5>
                        <p class="card-text">Ce dentifrice a été spécialement formulé pour les dents de lait. Faiblement abrasif, il assure un brossage qui nettoie les dents en douceur. </p>
                        <a href="#" class="btn btn-primary background">Acheter</a>
                        </div>
                    </div>

                    <div class="card">
                        <img src="images/romarin.jpeg" class="card-img-top" alt="romarin"/>
                        <div class="card-body">
                        <h5 class="card-title">Romarin</h5>
                        <p class="card-text">Connues pour ses vertues digestives, le romarin c'est LA plante santé à utiliser !</p>
                        <a href="#" class="btn btn-primary bouton_bon_plan background">Acheter</a>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Nav3;

