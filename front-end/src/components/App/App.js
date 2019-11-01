/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-icons/iconfont/material-icons.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from '../Header/Header';
import Nav1 from '../Nav1/Nav1';
import PageGenerique from '../Nav1/PageGenerique';
import ListeProduits from '../Nav1/ListeProduits';
import Nav2 from '../Nav2/Nav2';
import Nav3 from '../Nav3/Nav3';
import Rechercher from '../Header/Rechercher';
import Connexion from '../Header/Connexion';
import Panier from '../Header/Panier';
import Membres from '../Header/Membres';
import Footer from '../Footer/Footer';
import MaCoach from '../Footer/MaCoach';

/* Styles imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


/* Component imports */


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ListeProduits : [],
      selectedProductId: ''  
    }
  }
  
  componentDidMount() {

    var options = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }


    /*fetch produits pour Nav1*/
    
    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(produits => this.setState({ ListeProduits: produits }));
      
  }

  _setSelectedProductId = (id) => {
    this.setState({selectedProductId: id});
    console.log(this.state.selectedProductId);
  }
    
  
    
  render() {
    var {produits, error} = this.state;
    return (
      <Router>
        <div className="recherche"><Rechercher/></div>
        <div className="top_page"><Header/></div>    
                  
        <Switch>
        <Route path="/product-details">
            <Nav1/>
            <PageGenerique/>
            <div key={produits}></div>
          </Route>

          <Route path="/Header/connexion">
            <Connexion />
            <Membres/>
          </Route>
          <Route path="/Header/panier">
            <Panier />
          </Route>
          <Route path="/accueil">
            <div className="Nav">
            <Nav1 setSelectedProductId={this._setSelectedProductId} test="1"/>
            <Nav2/>
            <Nav3/>
            </div>
          </Route>
        </Switch>

        
        <Route path="/Footer/Ma_Coach">
          <MaCoach/>
          </Route>
          <div class="bas_page"><Footer/></div>
      </Router>
    );
  }
}



export default App;
