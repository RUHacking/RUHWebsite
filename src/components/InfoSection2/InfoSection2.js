import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Button, Container } from '../../global_styles';
import {
  Heading, ImgWrapper, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper,
  TopLine
} from './InfoSection2.elements';


const InfoSection2 = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  description1,
  description2,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id="inf2">
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description1}
                </Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description2}
                </Subtitle>
                <a
                  href="https://cdn.discordapp.com/attachments/704356731974844426/821814499946135592/prospectus2021-final_1.pdf"
                  target="_blank"
                >
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Card style={{ border: 'none', background: '#454545' }}>
                  <Image src={img} fluid alt={alt} />
                </Card>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection2;
