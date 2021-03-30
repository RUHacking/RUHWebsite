import React from 'react';
import { Card, Container, CardGroup } from 'react-bootstrap';
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
      <h1>Meet the Gang</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Dan} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Nataliya} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Amadeusz} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Emily} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Joe} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Savva} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Neyma} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Dimitar} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" width="200px" height="200px" src={Anna} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Team;
