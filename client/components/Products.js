import React from 'react';
import { Parallax } from 'react-parallax';

const Contact = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="http://www.journeysthrumylens.com/wp-content/uploads/2013/06/GrandAveBridge1-800x533.jpg" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>LOCATION</h1>
        </Parallax>
      </div>
    )
  }
});

export default Contact;
