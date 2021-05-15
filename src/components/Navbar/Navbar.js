import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../global_styles';
import logo from '../../img/logo/newLogo.png';


import {
  Nav,
  NavbarContain,
  NavLogo,
  ICON,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './navbar.elements';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClcick = () => setClick(!click);

  const showButton = () => {
    if (window.innetWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#ea5837 ' }}>
        <Nav>
          <NavbarContain >
            <NavLogo>
              <img
                src={logo}
                alt="RUHacking Logo"
                style={{ width: 'auto', height: 70, marginRight: 7 }}
              />
              <NavLinks
                style={{ color: '#ffff', fontfamily: " clone-rounded-latin, sans-serif"
              }}
                
              >
                {' '}
                R. U. Hacking?{' '}
              </NavLinks>
            </NavLogo>
            
            <ICON onClick={handleClcick}>
              {click ? <FaTimes /> : <FaBars />}
            </ICON>
            <NavMenu onClick={handleClcick} click={click} >
              <NavItem >
                <NavLinks
                onClick={handleClcick}
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif"}}
                  to='Homepage'
                >
                  HOME
                </NavLinks>
              </NavItem>


              <NavItem>
                <NavLinks
                 onClick={handleClcick}
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif" }}
                  to="faq"
                >
                  FAQ
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                 onClick={handleClcick}
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif" }}
                  to="inf2"
                >
                  SPONSORS
                </NavLinks>
              </NavItem>



              <NavItem>
                <NavLinks
                 onClick={handleClcick}
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif"}}
                  to='inf1'
                >
                  ABOUT US
                </NavLinks>
              </NavItem>



              <NavItem>
                <NavLinks
                 onClick={handleClcick}
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif" }}
                  to='team'
                >
                  TEAM
                </NavLinks>
              </NavItem>


              <NavItem>
              <NavLinks onClick={button}>
              <NavItemBtn>
                {button ? (
                  
                  <a href="https://www.eventbrite.co.uk/e/r-u-hacking-2021-24-hour-student-hackathon-tickets-71648722257" target="_blank">

                    <Button
                      style={{
                        fontFamily: " clone-rounded-latin, sans-serif",
                      }}
                    >
                      {' '}
                      SIGN UP
                    </Button>
                  </a>
                ) : (
                  <NavBtnLink to="/sing=up">
                    <Button onClick={ICON} fontBig primary></Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              </NavLinks>
              </NavItem>
            </NavMenu>



          </NavbarContain>

          <NavLogo >
              <NavLinks >
            



              <img onClick='click'
                src={"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" }
                alt="Major League Hacking 2021 Hackathon Season"
                style={{ width: 'auto', height: 120, marginRight: 7,marginTop: 40,zIndex: 1}}
              />
              

         
           

            </NavLinks>
              </NavLogo>


        </Nav>
      </IconContext.Provider>

    </>
  );
};

export default Navbar;