import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../img/logo/newLogo.png';

import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
  SocialLogo,
} from './Footer.elements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>EMAIL</FooterSubHeading>
          <FooterSubText>
            <a
              href={'mailto:' + 'readingunihack@gmail.com'}
              style={{ color: '#FFF' }}
            >
              readingunihack@gmail.com
            </a>
          </FooterSubText>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Useful Links </FooterLinkTitle>
              <FooterLink style={{ color: '#ffff' }} to="/">
                HOME
              </FooterLink>
              <FooterLink style={{ color: '#ffff' }} to="/">
                Sponsorship
              </FooterLink>
              <FooterLink style={{ color: '#ffff' }} to="/">
                Major League Hacking
              </FooterLink>
              <FooterLink style={{ color: '#ffff' }} to="/">
                Something
              </FooterLink>
              <FooterLink style={{ color: '#ffff' }} to="/">
                Something
              </FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us </FooterLinkTitle>
              <FooterLink style={{ color: '#ffff' }} to="/">
                To keep up to date with all things R.U.Hacking? or have any
                questions for us follow our social media pages
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              <img
                src={logo}
                alt="RUHacking Logo"
                style={{ width: 'auto', height: 70, marginRight: 25 }}
              />
              <FooterLink style={{ color: '#ffff' }}> R.U.HACKING? </FooterLink>
            </SocialLogo>
            <WebsiteRights>RUHACKING © 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/r.u.hacking/"
                targets="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="http://twitter.com/ReadingUniHack"
                targets="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/ruhacking/"
                targets="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
