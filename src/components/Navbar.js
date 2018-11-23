import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo/RUHlogo.png';
import styled from 'styled-components';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
    this.checkShow = this.checkShow.bind(this);
  }
  checkShow(event) {
    let { hidden } = this.state;
    if (!hidden && window.scrollY > 0) {
      this.setState({ hidden: true });
    } else if (hidden && window.scrollY === 0) {
      this.setState({ hidden: false });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkShow);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkShow);
  }
  render() {
    return (
      <div className={this.props.className}>
        <nav
          className={
            'navbar is-dark is-fixed-top' + (this.state.hidden ? ' hidden' : '')
          }
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img
                  src={logo}
                  alt="RUHacking Logo"
                  style={{ width: 'auto' }}
                />
              </Link>
            </div>
            <div className="navbar-start">
              <Link className="navbar-item" to="/sponsors">
                Sponsors
              </Link>
              <Link className="navbar-item" to="/team">
                Team
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const styledNavbar = styled(Navbar)`
  .navbar {
    transition: opacity 0.3s;
    &.is-transparent {
      background-color: transparent;
      background-image: none;
    }
  }
  .hidden {
    opacity: 0;
  }
`;

export default styledNavbar;
