import React from 'react';
import './HomePage.elements.css';
import { Button } from './Button';
import styled from 'styled-components';


const MargingTop = styled.p`
  margin-bottom:200px;

`

const FooterHeading = styled.p`
  font-size: 70px;
  align-items: center;
  text-align: center;
  display: flex;
`;

const FooterSubHeading = styled.p`
  font-size: 50px;
  color: #ffff;
  align-items: center;
  text-align: center;
  display: flex;

`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoSec = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#ffff' : '#454545;')};
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #454545;
  z-index: -2;
`;

function HomePage() {
  return (
    <InfoSec id='Homepage'>
   <AccordionSection> </AccordionSection>
      <d className="hero-container">
        <source src="../../img/vid1.mp4" type="video/mp4" autoPlay loop muted />
        <FooterHeading
          style={{ color: '#ea5837', fontFamily: 'Clone Rounded Latin' }}
        >
          R. U. Hacking? 2021 | Virtual Hackathon
        </FooterHeading>
        <FooterSubHeading
          style={{ color: '#16B8D8', fontFamily: 'Clone Rounded Latin' }}
        >
          26th - 27th June 2021
        </FooterSubHeading>

        <div className="hero-btns">
          <a href="https://www.eventbrite.co.uk/e/r-u-hacking-2021-24-hour-student-hackathon-tickets-71648722257" target="_blank">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Get Tickets
            </Button>
          </a>
          <a href="https://discord.gg/VfWm3nwsQF" target="_blank">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Join Our Discord
          </Button>
          </a>
        <MargingTop></MargingTop>
        </div>
      </d>
    </InfoSec>
  );
}

export default HomePage;
