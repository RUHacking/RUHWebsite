import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Card, CardGroup, CardDeck } from 'react-bootstrap';

import { TopLine,SmallTopLine,Title,InfoRow } from './Sponsors1.elements';
import 'bootstrap/dist/css/bootstrap.min.css';


import Image from 'react-bootstrap/Image'

import Zebra from '../../img/Zebra_Technologies.png';
import S2Oi from '../../img/2Oi.png';
import HackathonsUk from '../../img/HackathonsUk.png';
import ThamesValleyAiHub from '../../img/ThamesValleyAiHub (1) (2).png';
import Bayer from '../../img/Bayer_LifeHub_UK_Logo.png';
import Institute_of_Technology from '../../img/Institute_of_Technology_-_Gold_Sponsor.png';






const Team1 = ({ lightBg, imgStart, alt, start } ) => {
  return (
    <Container >
    <Container>

      <Title >
        Sponsors  </Title >
        </Container>


        <Container >
        <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif', color: '#FFD700',}}>
        Gold  
        </SmallTopLine>
        <CardGroup>
          <CardDeck>

          <InfoRow>
            <Card style={{ width: 'auto', height: 'auto',border: 'none' }}>
            <a href="https://southcentraliot.co.uk/" target="_blank">
              <Image src={Institute_of_Technology} fluid style={{ width: '100%', height: 'auto' }} />
              </a>
              <Card.Body style={{ width: 'auto',height: 'auto', backgroundColor:'#ffff'}}>
              </Card.Body>
            </Card>
           </InfoRow>

           <InfoRow >
            <Card style={{width: 'auto', height: 'auto',border: 'none' }}>
            <a href="https://innovate.bayer.com/lifehub-uk" target="_blank">
              <Image src={Bayer} fluid style={{  width: 'auto', height: 'auto' }} />
              </a>
              <Card.Body style={{ width: 'auto',height: 'auto', backgroundColor:'#ffff'}}>
              </Card.Body>
            </Card>
             </InfoRow>

             <InfoRow >
            <Card style={{width: 'auto', height: 'auto',border: 'none' }}>
            <a href="https://www.zebra.com/us/en.html/" target="_blank">
              <Image src={Zebra} fluid style={{ width: 'auto', height: 'auto' }} />
              </a>
              <Card.Body style={{ width: 'auto',height: 'auto', backgroundColor:'#ffff'}}>
              </Card.Body>
            </Card>
             </InfoRow>


          </CardDeck>
        </CardGroup>
        

         <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif',color: '#C0C0C0',}}>
        Silver  </SmallTopLine >

        <CardGroup style={{ width: 'auto', height: 'auto' }}>
          <CardDeck>



          </CardDeck>
        </CardGroup>



        <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif',color: '#CD7F32'}}>
        Bronze  </SmallTopLine >

        <CardGroup style={{ width: '50%', height: 'auto' }}>
          <CardDeck>

            <Card style={{ textAlign: 'center',border: 'none' }}>
            <a href="https://www.20i.com/" target="_blank">
              <Image src={S2Oi} fluid style={{ width: 'auto', height: 'auto' }} />
              </a>
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>

          </CardDeck>
        </CardGroup>




        <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
        Partners  </SmallTopLine >

        <CardGroup style={{ width: '100%', height: 'auto' }}>
          <CardDeck>



          <Card style={{ textAlign: 'center',border: 'none' }}>
            <a href="https://www.tvaihub.co.uk/" target="_blank">
              <Image src={ThamesValleyAiHub} fluid style={{ width: 'auto', height: 'auto' }} />
              </a>
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>


            <Card style={{ textAlign: 'center',border: 'none' }}>
            <a href="https://hackathons.org.uk/" target="_blank">
              <Image src={HackathonsUk} fluid style={{ width: 'auto', height: 'auto' }} />
              </a>
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>



          </CardDeck>
        </CardGroup>
      </Container>
      <TopLine></TopLine>
      </Container>


  );
};

export default Team1;
