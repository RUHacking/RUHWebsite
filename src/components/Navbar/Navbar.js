import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../global_styles';
import logo from '../../img/logo/newLogo.png';
import Image from 'react-bootstrap/Image';
import { Card } from 'react-bootstrap';

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
          <NavbarContain>
            <NavLogo >
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
            <NavMenu onClick={handleClcick} click={click}>
              <NavItem>
                <NavLinks
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif"}}
                  to='Homepage'
                >
                  HOME
                </NavLinks>
              </NavItem>


              <NavItem>
                <NavLinks
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif" }}
                  to="faq"
                >
                  FAQ
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif" }}
                  to="inf2"
                >
                  SPONSORS
                </NavLinks>
              </NavItem>



              <NavItem>
                <NavLinks
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif"}}
                  to='inf1'
                >
                  ABOUT US
                </NavLinks>
              </NavItem>



              <NavItem>
                <NavLinks
                  style={{ color: '#ffff',  fontfamily: " clone-rounded-latin, sans-serif" }}
                  to='team'
                >
                  TEAM
                </NavLinks>
              </NavItem>


              <NavItem>
              <NavLinks>
              <NavItemBtn>
                {button ? (
                  <a href="https://www.eventbrite.co.uk/e/r-u-hacking-2021-24-hour-student-hackathon-tickets-71648722257"
                  target="_blank"
                  >
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

            <NavItem>
            <NavLinks>
            <Card style = {{border: 'none',background:'#454545',marginTop: 30,marginLeft: 40}}>
            <a id="mlh-trust-badge" 
            style={{display:'block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000'}} 
            href="https://mlh.io/seasons/2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" 
            target="_blank"><Image src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" 
            alt="Major League Hacking 2021 Hackathon Season" style={{width:'100%'}}/>
            </a>
          </Card> 
          </NavLinks>
          </NavItem>




          </NavbarContain>

        </Nav>
      </IconContext.Provider>

    </>
  );
};

export default Navbar;







