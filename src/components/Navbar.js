import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo/RUHlogo.png';
import styled from 'styled-components';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
    this.checkShow = this.checkShow.bind(this);
  }
  checkShow() {
    let { scrolled } = this.state;
    if (!scrolled && window.scrollY > 0) {
      this.setState({ scrolled: true });
    } else if (scrolled && window.scrollY === 0) {
      this.setState({ scrolled: false });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkShow);
    // Run on mount in case loading in middle of page.
    this.checkShow();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkShow);
  }
  render() {
    return (
      <div className={this.props.className}>
        <nav
          className={
            'navbar is-fixed-top' +
            (this.state.scrolled ? ' is-dark' : ' is-primary')
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
    transition: background-color 0.3s;
    &.is-transparent {
      background-color: transparent;
      background-image: none;
    }
  }
`;

export default styledNavbar;
