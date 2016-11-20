import React from 'react';
import $ from 'jquery';
import Carousel from './Carousel';
import { Parallax } from 'react-parallax';
import Services from './Services';
import Contact from './Contact';

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
          <div>
            <Contact />
          </div>

          <div className="content-section">
            <div className="container">
              <div className="content-text">
                <h1>Services Section</h1>
                <p>A small river named Duden flows by their place and supplies
                it with the necessary regelialia. It is a paradisematic country,
                 in which roasted parts of sentences fly into your mouth. Even
                 the all-powerful Pointing has no control about the blind texts
                  it is an almost unorthographic life.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="container">
              <div className="content-text">
                <div className="row">
                  <div className="col s6 m6">
                    <h1>HOURS</h1>
                  </div>
                  <div className="col s6 m6">
                    <h1>LOCATION</h1>
                  </div>
                </div>
                <h1>MAP</h1>
                <p>A small river named Duden flows by their place and supplies
                it with the necessary regelialia. It is a paradisematic country,
                 in which roasted parts of sentences fly into your mouth. Even
                 the all-powerful Pointing has no control about the blind texts
                 it is an almost unorthographic life.</p>
              </div>
            </div>
          </div>


      </div>
    )
  }
}

export default Landing;
