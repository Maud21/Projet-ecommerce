import React, { Component } from 'react';

import './Nav2.css';

class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Acheter"

        }
    }

    render() {
        return (
           <div>
            <div className="titre1">Top produits</div>
              <div className="carousel">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/quinoa_choc.jpeg"  class="d-block w-20" alt="quinoa_choc"/>
                    <a href="#" class="btn btn-primary background">Acheter</a>
                  </div>
                  <div class="carousel-item">
                    <img src="images/shot_limon.jpeg" class="d-block w-20" alt="shot_limon"/>
                    <a href="#" class="btn btn-primary background">Acheter</a>
                  </div>
                  <div class="carousel-item">
                    <img src="images/the_after_dinner.jpeg" class="d-block w-20" alt="the"/>
                    <a href="#" class="btn btn-primary background">Acheter</a>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
          </div>


 
        );
    }
}

export default Nav2;