import React from 'react';
import { Parallax } from 'react-parallax';

const Services = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="https://c2.staticflickr.com/6/5320/14043890978_239a2e4606_b.jpg" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>Services</h1>
        </Parallax>
      </div>
    )
  }
});

export default Services;
