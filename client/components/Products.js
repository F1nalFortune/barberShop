import React from 'react';
import { Parallax } from 'react-parallax';

const Products = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="http://www.canadianbeautyandspa.com/wp-content/uploads/2012/01/CTRS_MG_4852-553x369.jpg" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>PRODUCTS</h1>
        </Parallax>
      </div>
    )
  }
});

export default Products;
