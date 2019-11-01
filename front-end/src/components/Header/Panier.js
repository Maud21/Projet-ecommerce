import React, { Component } from 'react';


/* Styles imports */
import './Panier.css';
/*import panier from '../image.png';*/



class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
      }
      

    render() {
        return (
            <div className="liste_panier">
                 
                <p>Votre panier est vide.</p>
                
            </div>
        );
    }
}

export default Panier;

/*<img src={require('./images/panier.png')} alt="panier"/>
<img src={panier} />*/