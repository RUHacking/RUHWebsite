import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../global_styles';

import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
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
          <FooterSubHeading>
            Join our Society something something.
          </FooterSubHeading>
          <FooterSubText>
            You will get to meet our great team something something.
          </FooterSubText>
          <Form>
            <Button fontBig>Subsribe</Button>
          </Form>
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

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
                <SocialIcon />
                RUHACKING
              </SocialLogo>
              <WebsiteRights>RUHACKING © 2021</WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="/"
                  targets="_blanks"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  targets="_blanks"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" targets="_blanks" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  targets="_blanks"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
