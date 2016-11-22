import React from 'react';
import { Parallax } from 'react-parallax';

const Contact = React.createClass({
    render: function () {
  	return (
    	<div id="contact">
        <Parallax bgImage="https://s-media-cache-ak0.pinimg.com/736x/28/2c/e0/282ce06aca3809b1690c8898530d6b40.jpg" strength={400}>
            <br/>
            <h3 id="title" className='col s7 offset-s3 sitefont center'>CONTACT</h3>
            <div className="container">
              <div className="row sitefont">
                <div className="col s4 m4">
                  <p>Monday - Friday</p>
                  <p>Saturday</p>
                  <p>Sunday</p>
                </div>
                <div className="col s2 m2">
                  <p>9am - 9pm</p>
                  <p>9am - 7pm</p>
                  <p>10am - 5pm</p>
                </div>
                <div className="col s2 m2">
                  <p>Address</p>
                  <p>Cell Phone</p>
                  <p>Email</p>
                </div>
                <div className="col s4 m4">
                  <p>1089 Phelps Ave - Hamden, CT</p>
                  <p>(203)555-6091</p>
                  <p>you@email.here</p>
                </div>
              </div>
            </div>
        </Parallax>
      </div>
    )
  }
});

export default Contact;
