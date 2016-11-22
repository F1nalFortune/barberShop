import React from 'react';
import { Parallax } from 'react-parallax';

const Services = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax id="top-margin" bgImage="https://img1.etsystatic.com/107/0/10987660/il_fullxfull.991592093_e5at.jpg" strength={400}>
            <br/>
            <h3 id="title" className='col s7 offset-s3 sitefont center'>SERVICES</h3>
            <hr className="service-break"/>
            <div className="container">
              <div className="row sitefont">
                <div className="col s4 m4">
                  <p>Haircut</p>
                  <p>Haircut + Fade</p>
                  <p>Shaves</p>
                  <p>Moustache and Beard Trip</p>
                </div>
                <div className="col s2 m2">
                  <p>$20</p>
                  <p>$25</p>
                  <p>$15</p>
                  <p>$10</p>
                </div>
                <div className="col s4 m4">
                  <p>Cut + Beard</p>
                  <p>Beard Only</p>
                  <p>Waxing</p>
                  <p>Shampoo, Cut, Style, Blowdry</p>
                </div>
                <div className="col s2 m2">
                  <p>$25</p>
                  <p>$15</p>
                  <p>$10</p>
                  <p>$38</p>
                </div>
              </div>
            </div>

        </Parallax>
      </div>
    )
  }
});

export default Services;
