import React from 'react';
import { Card, CardGroup, Container, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopLine } from './Team.elements';

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
    <Container style={{ width: '40rem' }}>
      <TopLine>Meet The Team</TopLine>

      <CardGroup>
        <CardDeck>
          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Dan} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Daniel Broomhead</Card.Title>
              <Card.Text>President</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Nataliya} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Nataliya Lazutkina</Card.Title>
              <Card.Text>Vice-President</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Amadeusz} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Amadeusz Wlodarczyk</Card.Title>
              <Card.Text>Secretary</Card.Text>
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
              <Card.Title>Emily Man</Card.Title>
              <Card.Text>Social Secretary</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Joe} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Joe McKeown</Card.Title>
              <Card.Text>Treasurer</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Savva} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Savva Podkopov</Card.Title>
              <Card.Text>Welfare Officer</Card.Text>
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
              <Card.Title>Neyma Siddiqui</Card.Title>
              <Card.Text>Google Developer Representative</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Dimitar} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Dimitar </Card.Title>
              <Card.Text>Vice-President</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Img src={Anna} style={{ width: '100%', height: '60%' }} />
            <Card.Body>
              <Card.Title>Anna </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </CardGroup>

      <TopLine></TopLine>
    </Container>
  );
};

export default Team;
