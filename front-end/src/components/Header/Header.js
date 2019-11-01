import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/* Styles imports */
import './Header.css';
import './Connexion.js';
import './Panier.js';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
      }
      
    render() {
        return (
            <div className = "top">
                
                <h1><Link to="/accueil"><div className="top_titre">Healthy<span class="material-icons logo">spa</span></div> </Link></h1>
                <div className = "right">
                <h2><Link to="/Header/connexion"><div className="connect">Connexion</div></Link></h2>
                <h3><Link to="/Header/panier"><span class="material-icons image">add_shopping_cart</span></Link></h3>
                </div>
            </div>
        );
    }
}

export default Header;