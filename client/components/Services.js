import React from 'react';
import { Parallax } from 'react-parallax';

const Services = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="https://c2.staticflickr.com/6/5320/14043890978_239a2e4606_b.jpg" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>SERVICES</h1>
            <hr />
            <div className="container">
              <div className="row sitefont">
                <div className="col s4 m4">
                  <p>Haircut</p>
                  <p>Haircut + Fade</p>
                </div>
                <div className="col s2 m2">
                  <p>$20</p>
                  <p>$25</p>
                </div>
                <div className="col s4 m4">
                  <p>Cut + Beard</p>
                  <p>Beard Only</p>
                </div>
                <div className="col s2 m2">
                  <p>$25</p>
                  <p>$15</p>
                </div>
              </div>
            </div>

        </Parallax>
      </div>
    )
  }
});

export default Services;
