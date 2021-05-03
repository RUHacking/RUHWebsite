import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaDiscord } from 'react-icons/fa';
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
      <FooterContainer id='footer'>
        <FooterSubscription>
          <FooterSubHeading>Email</FooterSubHeading>
          <FooterSubText>
            <a
              href={'mailto:' + 'readingunihack@gmail.com'}
              target="_blank"
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
              <FooterLink style={{ color: '#ffff' }} >
             
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            style={{ color: '#FFF' }}

            
            >

           MLH Code Of Conduct
            </a>
              </FooterLink>

              <FooterLink style={{ color: '#ffff' }} >
             
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://cdn.discordapp.com/attachments/704356731974844426/821814499946135592/prospectus2021-final_1.pdf"
            target="_blank"
            style={{ color: '#FFF' }}

            
            >

                Sponsorship
            </a>
              </FooterLink>


            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us </FooterLinkTitle>
              <a href = 'https://linktr.ee/r.u.hacking' target="_blank">
              <FooterLink style={{ color: '#ffff' }} >
              Get the latest updates from R.U.Hacking by following us on social media
              </FooterLink>
              </a>
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
                href="https://discord.gg/VfWm3nwsQF"
                target="_blank"
                aria-label="Discord"
                style={{ color: '#FFF' }}

              >
                <FaDiscord />
              </SocialIconLink>


              <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                target="_blank"
                aria-label="Facebook"
                style={{ color: '#FFF' }}

              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="http://twitter.com/ReadingUniHack"
                target="_blank"
                aria-label="Twitter"
                style={{ color: '#FFF' }}

              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/r.u.hacking/"
                target="_blank"
                aria-label="Instagram"
                style={{ color: '#FFF' }}

              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/ruhacking/"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#FFF' }}

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
