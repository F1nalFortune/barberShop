import React from 'react';
import { Parallax } from 'react-parallax';

const Contact = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="https://s-media-cache-ak0.pinimg.com/736x/28/2c/e0/282ce06aca3809b1690c8898530d6b40.jpg" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>Contact</h1>
        </Parallax>
      </div>
    )
  }
});

export default Contact;
