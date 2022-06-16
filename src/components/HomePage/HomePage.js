import styled from 'styled-components';
import { Button } from './Button';
import { Button1 } from './Button1';
import './HomePage.elements.css';

const SmallMarging = styled.p`
  margin-bottom: 50px;
`;
const FooterHeading2 = styled.p`
  max-width: 840px;
  font-size: 40px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
`;

const FooterHeading = styled.p`
  max-width: 840px;
  font-size: 40px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
`;

const FooterSubHeading = styled.p`
  max-width: 840px;
  font-size: 25px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
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
    <InfoSec id="Homepage">
      <link rel="stylesheet" href="https://use.typekit.net/vtd1gyc.css"></link>

      <div className="hero-container">
        <FooterHeading
          style={{ color: '#ea5837', class: 'clone-rounded-latin,sans-serif' }}
        >
          R. U. Hacking? 2022
        </FooterHeading>

        <FooterHeading2
          style={{ color: '#ea5837', class: 'clone-rounded-latin,sans-serif' }}
        >
          24-Hour Virtual Hackathon
        </FooterHeading2>
        <FooterSubHeading style={{ color: '#16B8D8' }}>
          25th - 26th June
        </FooterSubHeading>
        <SmallMarging></SmallMarging>

        <div>
          <a
            href="https://www.eventbrite.co.uk/e/r-u-hacking-2022-24-hour-student-hackathon-tickets-236290038867"
            target="_blank"
          >
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
          <a href="https://discord.gg/598PD4ghGw" target="_blank">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Join Our Discord
            </Button>
          </a>
        </div>

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
      </div>
    </InfoSec>
  );
}

export default HomePage;
