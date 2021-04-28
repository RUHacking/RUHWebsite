import React from 'react';
import './HomePage.elements.css';
import { Button } from './Button';
import styled from 'styled-components';
import { Button1 } from './Button1';













const SmallMarging = styled.p`
  margin-bottom:50px;

`
const FooterHeading2 = styled.p`
font-size: 3.5vw;
align-items: center;
text-align: center;
display: flex;

`;

const FooterHeading = styled.p`
  font-size: 7vw;
  align-items: center;
  text-align: center;
  display: flex;
`;

const FooterSubHeading = styled.p`
  font-size: 3.5vw;
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
  color: #454545;
  background: ${({ lightBg }) => (lightBg ? '#ffff' : '#454545;')};

`;



function HomePage() {
  return (
    
    <InfoSec id='Homepage'>
            <link rel="stylesheet" href="https://use.typekit.net/vtd1gyc.css"></link>

      <d className="hero-container">
       

        <FooterHeading
          style={{ color: '#ea5837',
          class:"clone-rounded-latin,sans-serif"
        }}        
         >
          R. U. Hacking? 2021
        </FooterHeading>
        <FooterHeading2
          style={{ color: '#ea5837',
          class:"clone-rounded-latin,sans-serif"
        }}        
         >
          24-Hour Virtual Hackathon
        </FooterHeading2>
        <FooterSubHeading
          style={{ color: '#16B8D8' }}
        >
          26th - 27th June
        </FooterSubHeading>
        <SmallMarging></SmallMarging>

      <div>
          <a href="https://www.eventbrite.co.uk/e/r-u-hacking-2021-24-hour-student-hackathon-tickets-71648722257" target="_blank">
            <Button1
            className="btns1"
            buttonStyle="btn--outline1"
            buttonSize="btn--large1"

            >
              Get Tickets
            </Button1>
          </a>

          </div>
          

         <div>

         <a href="https://discord.gg/VfWm3nwsQF" target="_blank">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Join Our Discord
          </Button>
          </a>

         </div>
        
          <SmallMarging></SmallMarging>

          <div className="hero-btns">
          <a href="https://www.youtube.com/watch?v=SNJPWcs9lck" target="_blank">
          <Button1
            className="btns1"
            buttonStyle="btn--outline1"
            buttonSize="btn--large1"
          >
            Watch R. U. Hacking? 2019 ➡
          </Button1>
          </a>
        </div>




        

      </d>
    </InfoSec>
  );
};

export default HomePage;
