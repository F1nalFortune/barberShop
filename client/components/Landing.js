import React from 'react';
import $ from 'jquery';
import Carousel from './Carousel';
import { Parallax } from 'react-parallax';
import Services from './Services';
import Contact from './Contact';
import Products from './Products';
import About from './About';
import Instagram from './Instagram';
import Scrollspy from 'react-scrollspy';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    return(
      <div>
        <Carousel />
          <div>
            <Services />
          </div>
          <div className="wide-screen-image">
          </div>
          <Contact />
          <div className="second-screen-image">
          </div>
          <About />
          <div className="third-screen-image">
          </div>
          <Products />
          <div className="fourth-screen-image">
          </div>
          <Instagram />




      </div>
    )
  }
}

export default Landing;
