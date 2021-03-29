import React from 'react';
import {
  InfoSec,
  InfoRow,
  ImgWrapper,
  SponsorLinksContainer,
  SponsorLinksWrapper,
  SponsorLinksItems,
  SponsorLinkTitle,
  SponsorContainer,
} from './Sponsors.elements';
import Zebra from '../../img/Zebra_Technologies.png';
const Sponsors = ({ lightBg, imgStart, alt, start }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <SponsorContainer>
          <SponsorLinksContainer>
            <SponsorLinksWrapper>
              <SponsorLinksItems>
                <SponsorLinkTitle style={{ color: '#FFD700' }}>
                  Gold Sponsors
                </SponsorLinkTitle>
                <InfoRow imgStart={imgStart}>
                  <ImgWrapper start={start}>
                    <img src={Zebra} alt={alt} />
                  </ImgWrapper>
                </InfoRow>

                <SponsorLinkTitle style={{ color: '#C0C0C0' }}>
                  Silver Sponsors
                </SponsorLinkTitle>
                <InfoRow imgStart={imgStart}>
                  <ImgWrapper start={start}>
                    <img src={Zebra} alt={alt} />
                  </ImgWrapper>
                </InfoRow>

                <SponsorLinkTitle style={{ color: '#CD7F32' }}>
                  Bronze Sponsors
                </SponsorLinkTitle>
                <InfoRow imgStart={imgStart}>
                  <ImgWrapper start={start}>
                    <img src={Zebra} alt={alt} />
                  </ImgWrapper>
                </InfoRow>
              </SponsorLinksItems>
            </SponsorLinksWrapper>
          </SponsorLinksContainer>
        </SponsorContainer>
      </InfoSec>
    </>
  );
};

export default Sponsors;
