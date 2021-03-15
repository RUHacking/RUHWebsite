import React from 'react';
import { Container } from '../../global_styles';
import { InfoSec, InfoRow, ImgWrapper } from './Sponsors.elements';

const Sponsors = ({ lightBg, imgStart, img, alt, start }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <ImgWrapper start={start}>
              <img src={img} alt={alt} />
            </ImgWrapper>
          </InfoRow>
          <InfoRow imgStart={imgStart}></InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Sponsors;
