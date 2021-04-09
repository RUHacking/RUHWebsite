import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import { Card, CardGroup, CardDeck } from 'react-bootstrap';

import { TopLine } from './Team.elements';
import { Container } from '../../global_styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dan from '../../img/Dan.jpg';
import Nataliya from '../../img/Nataliya.jpg';
import Amadeusz from '../../img/Amadeusz.jpg';
import Emily from '../../img/Emily.jpg';
import Joe from '../../img/Joe.jpg';
import Savva from '../../img/Savva.jpg';
import Neyma from '../../img/Neyma.jpg';
import Dimitar from '../../img/Dimitar.jpg';
import Anna from '../../img/Anna.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,MdEmail,FaGithub,FaMailBulk } from 'react-icons/fa';

const SocialIcon = styled.div`
display: none;
@media screen  {
    display: block;
    cursor: pointer;

  }
`;
 const SocialIconLink = styled.a`
  font-size: 30px;
`;


 const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;

`;


const Team = () => {
  return (
    <Container id='team'>
      <TopLine style={{ fontFamily: 'Clone Rounded Latin' }}>
        Meet The Team
      </TopLine>

      <Container style={{ width: 'auto', height: 'auto' }}>
        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Dan}  style={{ width: 'auto', height: 'auto' }} />
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin'  }}>
                  Daniel Broomhead
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  President
                </Card.Text>



                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img
                src={Nataliya}
                style={{width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Nataliya Lazutkina
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Vice-President
                </Card.Text>


                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img
                src={Amadeusz}
                style={{width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Amadeusz Wlodarczyk
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Secretary
                </Card.Text>


                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>

              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Emily} style={{ width: 'auto', height: 'auto' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Emily Man
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Social Secretary
                  </Card.Text>

                  <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Joe} style={{ width: 'auto', height: 'auto'}} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Joe McKeown
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Treasurer
                </Card.Text>
                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Savva} style={{ width: 'auto', height: 'auto' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Savva Podkopov
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Welfare Officer
                </Card.Text>
                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Neyma} style={{width: 'auto', height: 'auto'}} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Neyma Siddiqui
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Google Dev Rep
                </Card.Text>
                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img
                src={Dimitar}
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Dimitar Spasov{' '}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Designer
                </Card.Text>
                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Anna} style={{width: 'auto', height: 'auto'}} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Anna Harding{' '}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Designer
                </Card.Text>
                <SocialIcon>
                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaFacebook />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaInstagram />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaTwitter />
                </SocialIconLink>


                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaMailBulk />
                </SocialIconLink>



                <SocialIconLink
                href="https://www.facebook.com/readingunihack"
                targets="_blank"
                aria-label="Facebook"
                style={{ color: '#000000' }}

              >
                <FaGithub />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>
      </Container>
    </Container>
  );
};

export default Team;
