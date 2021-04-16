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
import Bayer from '../../img/Bayer_LifeHub_UK_Logo.jpg';
import { TopLine, GapForSponsors } from './Sponsors.elements';
import Institute_of_Technology from '../../img/Institute_of_Technology_-_Gold_Sponsor.jpg';


const Sponsors = ({ lightBg, imgStart, alt, start }) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id='sponsors'>
        <SponsorContainer>
          <SponsorLinksContainer>
            <SponsorLinksWrapper>
              <SponsorLinksItems>
                <TopLine></TopLine>
                <SponsorLinkTitle
                  style={{
                    color: '#000000',
                    fontFamily: 'Clone Rounded Latin',
                  }}
                >
                  SPONSORS
                  <TopLine></TopLine>
                </SponsorLinkTitle>
                <SponsorLinkTitle
                  style={{
                    color: '#FFD700',
                    fontFamily: 'Clone Rounded Latin',
                  }}
                >
                  
                  Gold
                  <InfoRow imgStart={imgStart}>
                    <a href="https://southcentraliot.co.uk/" target="_blank">
                      <ImgWrapper start={start}>
                        <img src={Institute_of_Technology} alt={alt} />
                      </ImgWrapper>
                    </a>
                    <GapForSponsors></GapForSponsors>
                    <a href="https://innovate.bayer.com/lifehub-uk" target="_blank">
                      <ImgWrapper start={start}>
                        <img src={Bayer} alt={alt} />
                      </ImgWrapper>
                    </a>
                  </InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>
                <SponsorLinkTitle
                  style={{
                    color: '#C0C0C0',
                    fontFamily: 'Clone Rounded Latin',
                  }}
                >
                  Silver
                  <ImgWrapper start={start}></ImgWrapper>
                  <InfoRow imgStart={imgStart}></InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>

                <SponsorLinkTitle
                  style={{
                    color: '#CD7F32',
                    fontFamily: 'Clone Rounded Latin',
                  }}
                >
                  Bronze
                  <InfoRow imgStart={imgStart}>
                    <ImgWrapper start={start}>
                      <a href="https://www.zebra.com/us/en.html/" target="_blank">
                        <img src={Zebra} alt={alt} />
                      </a>
                    </ImgWrapper>

                    <GapForSponsors></GapForSponsors>
                    <ImgWrapper start={start}>
                      <a href="https://www.20i.com/" target="_blank">
                        <img src={S2Oi} alt={alt} />
                      </a>
                    </ImgWrapper>
                  </InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>

                <SponsorLinkTitle
                  style={{
                    color: '#000000',
                    fontFamily: 'Clone Rounded Latin',
                  }}
                >
                  Partners
                  <InfoRow imgStart={imgStart}>
                    <a href="https://hackathons.org.uk/" target="_blank">
                      <ImgWrapper start={start}>
                        <img src={HackathonsUk} alt={alt} />
                      </ImgWrapper>
                    </a>

                    <GapForSponsors></GapForSponsors>

                    <ImgWrapper start={start}>
                      <a href="https://www.tvaihub.co.uk/" target="_blank">
                        <img src={ThamesValleyAiHub} alt={alt} />
                      </a>
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
