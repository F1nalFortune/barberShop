import React from 'react';
import { Parallax } from 'react-parallax';

const Instagram = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREoV1S0IPjec8bcmNcjvW06TPrzDMSrRDcXeM7CCEejIaRWWzD" strength={400}>
            <br/>
            <h1 className='col s7 offset-s3 sitefont center'>INSTAGRAM</h1>
        </Parallax>
      </div>
    )
  }
});

export default Instagram;
