import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav1.css';
import './PageGenerique.js';
import './PageGenerique.css';


class Nav1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            message: ''
        }
    }

    componentDidMount() {
        this._getAllProducts();
        console.log(this.props.test);
    }

    _getAllProducts = () => {
    
        var options = {
          method: 'GET',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          }
        }
    
        fetch('http://localhost:8080/products/list', options)
        .then((res) => (res.json()))
        .then((result) => {
                this.setState({
                products: result.products
                })
        },
            (error)=> {
                this.setState({message: "problème"})
            }
        );
    
    }
    
    _displayMenu = () => {
        var products = this.state.products;

        if(products) {
            const categories = [...new Set(products.map(product => product.category))];
            var menu = categories.map((category) => (
                <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle couleur" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {category}
                    </button>
                    <div class="dropdown-menu">
                        {this._displayProducts(products, category)}
                    </div>
                </div>
            ));

            return menu;
        }
    }

    _displayProducts = (products, category) => {
        return products.map((product) => {
            if(product.category == category) {
                return (     
                    <Link className="dropdown-item" to="/product-details" onClick={() => this.props.setSelectedProductId(product.id)}>{product.name}</Link> 
                )
            }
        });
    }
      
    render() {
        return (
            <div className="top_menu">
                
                {this._displayMenu()}
                
                
                <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle couleur" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Soins
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Aloe Vera</a>
                        <a class="dropdown-item" href="#">Bave d'escargots</a>
                        <a class="dropdown-item" href="#">Crème d'orties</a>
                    </div>
                </div>
                
                <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle couleur" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contacts
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Healthty Team</a>
                        <a class="dropdown-item" href="#">Notre philosophie</a>
                        <a class="dropdown-item" href="#">Nous contacter</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Nav1;





