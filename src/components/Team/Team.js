import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
import { Container } from '../../global_styles';
import Amadeusz from '../../img/Amadeusz.jpg';
import Anna from '../../img/Anna.jpg';
import Dan from '../../img/Dan.jpg';
import Dimitar from '../../img/Dimitar.jpg';
import Emily from '../../img/Emily.jpg';
import Joe from '../../img/Joe.jpg';
import Nataliya from '../../img/Nataliya.jpg';
import Neyma from '../../img/Neyma.jpg';
import Savva from '../../img/Savva.jpg';
import { SmallGap, SmallTopLine, TopLine } from './Team.elements';



const SocialIcon = styled.div`
  display: none;
  @media screen {
    display: block;
    cursor: pointer;
  }
`;
const SocialIconLink = styled.a`
  font-size: 30px;
`;

const Team = () => {
  return (
    <Container>
      <Container id="team">
        <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
          Meet The Team{' '}
        </SmallTopLine>
      </Container>
      <SmallGap></SmallGap>
      <Container style={{ width: 'auto', height: 'auto' }}>
        <CardGroup>
          <CardDeck>
            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Dan}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body style={{ width: 'auto', height: 'auto' }}>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Daniel Broomhead
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  President
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'd.l.broomhead@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com/in/daniel-broomhead-970ba1171"
                    target="_blank"
                    aria-label="Linkedin"
                    style={{ color: '#EA5837' }}
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>
            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Nataliya}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Nataliya Lazutkina
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Vice-President
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'n.lazutkina@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>

                  <SocialIconLink> </SocialIconLink>

                  <SocialIconLink
                    href="https://www.linkedin.com/in/nataliya-lazutkina"
                    target="_blank"
                    aria-label="Linkedin"
                    style={{ color: '#EA5837' }}
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>

            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Amadeusz}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Amadeusz Wlodarczyk
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Secretary
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'a.wlodarczyk@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Emily}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Emily Man
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Social Secretary
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'emilyman2411@gmail.com'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>

                  <SocialIconLink> </SocialIconLink>

                  <SocialIconLink
                    href="https://www.linkedin.com/in/emily-man-98b448195"
                    target="_blank"
                    aria-label="Linkedin"
                    style={{ color: '#EA5837' }}
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>

            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Joe}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Joe McKeown
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Treasurer
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'j.mckeown@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>

            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Savva}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Savva Podkopov
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Welfare Officer
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 's.i.b.podkopov@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Neyma}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Neyma Siddiqui
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Google Dev Rep
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'neyma.siddiqui@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>

                  <SocialIconLink> </SocialIconLink>

                  <SocialIconLink
                    href="https://www.linkedin.com/in/neymasiddiqui"
                    target="_blank"
                    aria-label="Linkedin"
                    style={{ color: '#EA5837' }}
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>

            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Dimitar}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Dimitar Spasov{' '}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Designer
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'mitkospasov1999@gmail.com'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>

                  <SocialIconLink> </SocialIconLink>

                  <SocialIconLink
                    href="https://www.linkedin.com/in/dimitar-spasov"
                    target="_blank"
                    aria-label="Linkedin"
                    style={{ color: '#EA5837' }}
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>

            <Card
              style={{
                textAlign: 'center',
                border: 'none',
                background: '#454545',
              }}
            >
              <Image
                src={Anna}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Anna Harding{' '}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: 'clone-rounded-latin,sans-serif',
                    color: 'white',
                  }}
                >
                  Designer
                </Card.Text>

                <SocialIcon>
                  <SocialIconLink
                    href={'mailto:' + 'anna.harding@student.reading.ac.uk'}
                    target="_blank"
                    aria-label="Email"
                    style={{ color: '#EA5837' }}
                  >
                    <MdEmail size={37} />
                  </SocialIconLink>

                  <SocialIconLink> </SocialIconLink>

                  <SocialIconLink
                    href="https://www.linkedin.com/in/anna-harding-a82ba5195"
                    target="_blank"
                    aria-label="Linkedin"
                    style={{ color: '#EA5837' }}
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>
      </Container>
      <TopLine></TopLine>
    </Container>
  );
};

export default Team;
