import React from 'react';
import './HomePage.elements.css';
import { Button } from './Button';
import styled from 'styled-components';

const FooterHeading = styled.p`
  font-size: 40px;
  color: #ffff;
  align-items: center;
  text-align: center;
  display: flex;
`;

const FooterSubHeading = styled.p`
  font-size: 20px;
  color: #ffff;
  align-items: center;
  text-align: center;
  display: flex;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
  font-size: 50px;
  line-height: 46px;
  letter-spacing: 1.4px;
  margin-top: -865px;
  text-align: center;
`;

function HomePage() {
  return (
    <div className="hero-container">
      <video src="../../Video/video2.mp4" autoPlay loop muted />
      <TopLine></TopLine>
      <FooterHeading>R. U. Hacking? 2021 | Virtual Hackathon</FooterHeading>
      <FooterSubHeading>26th - 27th June 2021</FooterSubHeading>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Tickets
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Join Discord
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
