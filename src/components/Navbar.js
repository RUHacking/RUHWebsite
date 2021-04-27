import React from 'react';
import logo from '../img/logo/newLogo.png';
import styled from 'styled-components';
import animateScrollTo from 'animated-scroll-to';

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

  toggleLight() {}

  registerBurger() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkShow);
    // Run on mount in case loading in middle of page.
    this.checkShow();
    // Register click handler for burger menu expand.
    this.registerBurger();
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
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a
                onClick={() =>
                  animateScrollTo(document.querySelector('.hero.is-primary'))
                }
                className="navbar-item"
              >
                <img
                  src={logo}
                  alt="RUHacking Logo"
                  style={{ width: 'auto' }}
                />
              </a>
              <a
                role="button"
                className="navbar-burger"
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className="navbar-menu is-primary" id="navMenu">
              <div className="navbar-start">
                <a
                  className="navbar-item"
                  onClick={() =>
                    animateScrollTo(document.querySelector('.section--about'))
                  }
                >
                  About
                </a>
                <a
                  className="navbar-item"
                  onClick={() =>
                    animateScrollTo(
                      document.querySelector('.section--featured-event')
                    )
                  }
                >
                  Events
                </a>
                <a
                  className="navbar-item"
                  onClick={() =>
                    animateScrollTo(
                      document.querySelector('.section--location')
                    )
                  }
                >
                  Venue
                </a>
                <a
                  className="navbar-item"
                  onClick={() =>
                    animateScrollTo(
                      document.querySelector('.section--sponsors')
                    )
                  }
                >
                  Partners
                </a>
              </div>
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
