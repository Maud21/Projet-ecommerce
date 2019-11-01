/*garder l'identifiant et mot de passe du client*/

import React, { Component } from 'react';


/* Styles imports */
import './Connexion.css';


class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifiant: '',
            mot_de_passe: '', 
            message : ''   
        }
      }

    _changeIdentifiant = (event) =>{
        this.setState({identifiant : event.target.value});
    }


    _changeMot_de_passe = (event) =>{
        this.setState({mot_de_passe : event.target.value});
    }

    _submitData = () => {
    
        /* Vérifier les valeurs*/
        if(!this.state.identifiant || !this.state.mot_de_passe) {
          return;
        }

    var data = {
        identifiant : this.state.identifiant,
        mot_de_passe : this.state.mot_de_passe
    }
      
    var options = {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
  
    fetch('http://localhost:8080/connexion/create', options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        this.setState({message: "Désolé, une erreur s'est produite"});
      }
    )
  }

    render() {
        return (
          <div>
            <div className="formulaire">
                <input type="text" name="identifiant" placeholder="Mon identifiant" onChange={this._changeIdentifiant} value={this.state.idendifiant} required/>
                <input type="text" name="mot_de_passe" placeholder="Mon mot de passe" onChange={this._changeMot_de_passe} value={this.state.mot_de_passe} required/>
                <button onClick={this._submitData}>Envoyer</button>
                <p>{this.state.message}</p>
            </div>
          </div>
        );
    }
}

export default Connexion;