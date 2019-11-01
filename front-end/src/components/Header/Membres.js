import React, { Component } from 'react';

import './Membres.css';

class Membres extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            
                <div className= "carte_connexion">
                    <div class="card text-center">
                        <div class="card-header">
                            Bienvenue ! 
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Maud Leal</h5>
                            <p class="card-text">Produits préférés : thé rouge</p>
                            <a href="/accueil" class="btn btn-primary">Healthy</a>
                        </div>
                        <div class="card-footer text-muted">
                            Dernière connexion : il y a 2 jours
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default Membres;