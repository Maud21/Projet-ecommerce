import React, { Component } from 'react';

import './MaCoach.css'

class MaCoach extends Component {
    render() {
        return (
            <div className="ma_coach">
                <h1 class="titre_ma_coach">MA COACH!</h1>
                <p class="description">Le coach nutrition assure un rôle d’accompagnement<br/> en cas de surpoids ou d’assistance en cas de déséquilibre alimentaire.</p>
                <p>En ligne : tous les jeudis soir.</p>
                <button type="button"  className="chat" href="#">Chatter</button>
                
            </div>
        );
    }
}

export default MaCoach;