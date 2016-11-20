import React from 'react';
import { Parallax } from 'react-parallax';

const About = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="https://s-media-cache-ak0.pinimg.com/564x/34/d6/04/34d60463ad2b785f5c2b00c8b030d8e1.jpg" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>ABOUT</h1>
        </Parallax>
      </div>
    )
  }
});

export default About;
