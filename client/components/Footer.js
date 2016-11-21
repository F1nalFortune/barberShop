import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
    <div>
      <footer className="page-footer blue-grey darken-4 footer-div">
        <div className="footer-copyright">
          <div className="container">
          <Link className="grey-text text-lighten-4 right space" to="https://twitter.com" target="_blank">Twitter</Link>

          </div>
            <div className="row">
              <a>
                <img
                src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREoV1S0IPjec8bcmNcjvW06TPrzDMSrRDcXeM7CCEejIaRWWzD'}
                alt="check"
                className="footer-image displayed"/>
              </a>
            </div>
            <div className="row">
              <p>ALL PHOTOS BY 'YOURS TRULY'</p>
              <p>© 2016 EMMA'S BARBERSHOP ALL RIGHTS RESERVED</p>
            </div>
        </div>
      </footer>
    </div>
    )
  }
}

export default Footer;
