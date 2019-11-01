//page générique d'affichage d'un produit

import React, { Component } from 'react';

import './PageGenerique.css';

class PageGenerique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            description: '',
            id:''
        }
    }

    componentDidMount() {
        this._fiche_product();
    }

    _fiche_product = () => {
    
        var options = {
          method: 'GET',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          }
        }
    
        fetch('http://localhost:8080/product-details', options)
        .then((res) => (res.json()))
        .then((result) => {
                this.setState({
                name: result.name,
                description: result.description
            }, (error)=> {
                this.setState({message: "problème"})
            }
            );
        });
    }

    _displayFicheProduit = () => {
        var FicheProduit = this.state.name;

        if(FicheProduit) {
            const ids = [...new Set(FicheProduit.map(product => product.id))];
            var menu = ids.map((id) => (
                <div class="card">
                <img src={this.state.imageProduit} class="card-img-top" alt="image"/>
                    <div class="card-body">
                        <h5 class="card-title">{this.state.name}</h5>
                        <p class="card-text">{this.state.description}</p>
                        <a href="/Header/Panier" class="btn btn-primary">Acheter</a>
                    </div>
                </div>
            ));

            return menu;
        }
    }


    render() {
        return (
            //bootstrat card
            <div className="GeneriqueProduits">
                {this._displayFicheProduit}
            </div>
        );
    }
}

export default PageGenerique;


/*<div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle couleur" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {category}
                    </button>
                    <div class="dropdown-menu">
                        {this._displayProducts(products, category)}
                    </div>
                </div>*/