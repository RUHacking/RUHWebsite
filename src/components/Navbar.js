import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo/RUHlogo.png'

const Navbar = () => (
  <nav className="navbar is-spaced is-primary is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="RUHacking Logo" style={{ width: 'auto' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Team
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
