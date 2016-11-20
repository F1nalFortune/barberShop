import React from 'react';
import $ from 'jquery';
import Carousel from './Carousel';
import { Parallax } from 'react-parallax';
import Services from './Services';
import Contact from './Contact';
import Products from './Products';

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
          <Products />




      </div>
    )
  }
}

export default Landing;
