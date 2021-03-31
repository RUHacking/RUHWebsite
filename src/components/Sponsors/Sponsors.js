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
import S2Oi from '../../img/2Oi.png';
import HackathonsUk from '../../img/HackathonsUk.svg';
import ThamesValleyAiHub from '../../img/ThamesValleyAiHub.png';
import { TopLine, GapForSponsors } from './Sponsors.elements';

const Sponsors = ({ lightBg, imgStart, alt, start }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <SponsorContainer>
          <SponsorLinksContainer>
            <SponsorLinksWrapper>
              <SponsorLinksItems>
                <SponsorLinkTitle style={{ color: '#FFD700' }}>
                  Gold
                  <ImgWrapper start={start}></ImgWrapper>
                  <InfoRow imgStart={imgStart}></InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>
                <SponsorLinkTitle style={{ color: '#C0C0C0' }}>
                  Silver
                  <ImgWrapper start={start}></ImgWrapper>
                  <InfoRow imgStart={imgStart}></InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>

                <SponsorLinkTitle style={{ color: '#CD7F32' }}>
                  Bronze
                  <InfoRow imgStart={imgStart}>
                    <ImgWrapper start={start}>
                      <img src={Zebra} alt={alt} />
                    </ImgWrapper>

                    <GapForSponsors></GapForSponsors>

                    <ImgWrapper start={start}>
                      <img src={S2Oi} alt={alt} />
                    </ImgWrapper>
                  </InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>

                <SponsorLinkTitle style={{ color: '#000000' }}>
                  Partners
                  <InfoRow imgStart={imgStart}>
                    <ImgWrapper start={start}>
                      <img src={HackathonsUk} alt={alt} />
                    </ImgWrapper>

                    <GapForSponsors></GapForSponsors>

                    <ImgWrapper start={start}>
                      <img src={ThamesValleyAiHub} alt={alt} />
                    </ImgWrapper>
                  </InfoRow>
                </SponsorLinkTitle>
              </SponsorLinksItems>
            </SponsorLinksWrapper>
          </SponsorLinksContainer>
        </SponsorContainer>
      </InfoSec>
    </>
  );
};

export default Sponsors;
