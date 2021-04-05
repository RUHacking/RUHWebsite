import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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

const Team = () => {
  return (
    <Container>
      <TopLine style={{ fontFamily: 'Clone Rounded Latin' }}>
        Meet The Team
      </TopLine>

      <Container style={{ width: 'auto', height: 'auto' }}>
        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Dan} style={{ width: '100%', height: '60%' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Daniel Broomhead
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  President
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img
                src={Nataliya}
                style={{ width: '100%', height: '60%' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Nataliya Lazutkina
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Vice-President
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img
                src={Amadeusz}
                style={{ width: '100%', height: '60%' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Amadeusz Wlodarczyk
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Secretary
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Emily} style={{ width: '100%', height: '60%' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Emily Man
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Social Secretary
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Joe} style={{ width: '100%', height: '60%' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Joe McKeown
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Treasurer
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Savva} style={{ width: '100%', height: '60%' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Savva Podkopov
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Welfare Officer
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Neyma} style={{ width: '100%', height: '60%' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Neyma Siddiqui
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Google Dev Rep
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img
                src={Dimitar}
                style={{ width: '100%', height: '60%' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Dimitar Spasov{' '}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Designer
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Card.Img src={Anna} style={{ width: '100%', height: '60%' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Anna Harding{' '}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Clone Rounded Latin' }}>
                  Designer
                </Card.Text>
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
