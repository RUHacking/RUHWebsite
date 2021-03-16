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
          <FooterSubHeading></FooterSubHeading>
          <FooterSubText></FooterSubText>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Useful Links </FooterLinkTitle>
              <FooterLink to="/">HOME</FooterLink>
              <FooterLink to="/">Sponsorship</FooterLink>
              <FooterLink to="/">Major League Hacking</FooterLink>
              <FooterLink to="/">Something</FooterLink>
              <FooterLink to="/">Something</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us </FooterLinkTitle>
              <FooterLink to="/">
                Get in touch with us by email at something and on our social
                media FaceBook,Instagram,Twitter
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
              R.U.HACKING?
            </SocialLogo>
            <WebsiteRights>RUHACKING © 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" targets="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Linkedin">
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
