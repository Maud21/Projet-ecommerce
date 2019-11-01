import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

import './MaCoach.js';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="bas_page">
                <button type="button"  class="couleur">HEALTHY</button>
                <button type="button">CONTACTS</button>
                <button type="button">MES RECETTES</button>
                <button type="button"><Link to="/Footer/ma_coach">MA COACH</Link></button>
            </div>
        );
    }
}

export default Footer;