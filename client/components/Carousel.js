import React from 'react';
import { Slider, Slide } from 'react-materialize';


class Carousel extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <div id="slider" className="row">
          <Slider className="slides"
            >
            <Slide
            src="http://www.mrmaroosh.com/wp-content/uploads/2013/11/cut_throat_barbershop.jpg"
            >
            </Slide>
            <Slide
            src="http://theharlow.net/wp-content/uploads/2012/10/about-image-11.jpg"
            >
            </Slide>
            <Slide
            src="https://i.ytimg.com/vi/8RlX96MV7xk/maxresdefault.jpg"
            >
            </Slide>
          </Slider>
        </div>
      </div>

    )
  }
}

export default Carousel;
