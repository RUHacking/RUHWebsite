import React from 'react';
import { Container, Button } from '../../global_styles'
import Image from 'react-bootstrap/Image'
import { Card } from 'react-bootstrap';


import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
} from './InfoSection.elements';

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  description1,
  description2,
  description3,
  description4,
  description5,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id='inf1'>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description1}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description3}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description4}</Subtitle>                
                <Subtitle lightTextDesc={lightTextDesc}>{description5}</Subtitle>


                <a href="https://www.rusu.co.uk/organisation/20490/" target="_blank">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Card style = {{border: 'none'}}>
              <Image src={img} fluid  alt={alt} />
              </Card>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
