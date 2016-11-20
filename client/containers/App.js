import React from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import $ from 'jquery';


class App extends React.Component {
  componentDidMount() {
    window.jQuery('.button-collapse').sideNav();

    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);

      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      }

    });

  }



  render() {
    return (
  <div>
    <div>
      <nav id="global-nav" className="nav">
        <div className="container">
          <div className="pull-left">
            <h1 className="site-title site-font">
              Barber Shop
            </h1>
          </div>
          <div className="pull-right">
            <ul className="nav-list">
              <li>SERVICES</li>
              <li>HOURS</li>
              <li>LOCATION</li>
            </ul>
          </div>
        </div>
      </nav>
      {this.props.children}
    </div>
    <Footer />
  </div>
    )
  }
}


export default App;
