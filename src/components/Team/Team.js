import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from 'reactstrap';
import { Container } from '../../global_styles';

import Dan from '../../img/Dan.jpg';
import Nataliya from '../../img/Nataliya.jpg';
import Emily from '../../img/Emily.jpg';
import Joe from '../../img/Joe.jpg';
import Neyma from '../../img/Neyma.jpg';
import Savva from '../../img/Savva.jpg';
import Dimitar from '../../img/Dimitar.jpg';
import Amadeusz from '../../img/Amadeusz.jpg';
import Anna from '../../img/Anna.jpg';

const Team = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Dan}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>This is a wider card with supporting text .</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Nataliya}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Emily}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>This is a wider card.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: '250px' }}>
            <CardImg top width="100%" src={Joe} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>This is a wider card with supporting text .</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Neyma}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Savva}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>This is a wider card.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Dimitar}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>This is a wider card with supporting text .</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Amadeusz}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Card style={{ width: '250px' }}>
            <CardImg
              top
              width="100%"
              top
              height="100%"
              src={Anna}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>This is a wider card.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
