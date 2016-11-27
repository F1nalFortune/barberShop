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
            <div className="row">
              <p className="center">
                © 2016 EMMA'S BARBERSHOP ALL RIGHTS RESERVED
              </p>
            </div>
        </div>
      </footer>
    </div>
    )
  }
}

export default Footer;
