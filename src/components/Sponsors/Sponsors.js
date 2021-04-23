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
import Institute_of_Technology from '../../img/Institute_of_Technology_-_Gold_Sponsor.png';
import Image from 'react-bootstrap/Image';


const Sponsors = ({ lightBg, imgStart, alt, start }) => {
  return (
    <>
 <link rel="stylesheet" href="https://use.typekit.net/vtd1gyc.css"></link>

      <InfoSec lightBg={lightBg}>
        <SponsorContainer>
          <SponsorLinksContainer>
            <SponsorLinksWrapper>
              <SponsorLinksItems>
                <TopLine></TopLine>
                <SponsorLinkTitle
                  style={{
                    color: '#000000',
                  }}
                >
                  SPONSORS
                  <TopLine></TopLine>
                </SponsorLinkTitle>
                <SponsorLinkTitle
                  style={{
                    color: '#FFD700',

                  }}
                >
                  
                  Gold

                  <InfoRow imgStart={imgStart}>
                  

                    <a href="https://southcentraliot.co.uk/" target="_blank">
                      <ImgWrapper start={start}>
                       <Image src={Institute_of_Technology} fluid   alt={alt} />
                      </ImgWrapper>
                    </a>
                    <GapForSponsors></GapForSponsors>
                    <a href="https://innovate.bayer.com/lifehub-uk" target="_blank">
                      <ImgWrapper start={start}>
                        <Image src={Bayer} fluid alt={alt} />
                      </ImgWrapper>
                    </a>

                    <GapForSponsors></GapForSponsors>
                    <ImgWrapper start={start}>
                      <a href="https://www.zebra.com/us/en.html/" target="_blank">
                        <Image src={Zebra} fluid alt={alt} />
                      </a>
                    </ImgWrapper>

                  </InfoRow>
                  </SponsorLinkTitle>


                <TopLine></TopLine>
                <SponsorLinkTitle
                  style={{
                    color: '#C0C0C0',
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
                  }}
                >
                  Bronze
                  <InfoRow imgStart={imgStart}>


                    <ImgWrapper start={start}>
                      <a href="https://www.20i.com/" target="_blank">
                        <Image src={S2Oi} fluid alt={alt} />
                      </a>
                    </ImgWrapper>
                  </InfoRow>
                </SponsorLinkTitle>

                <TopLine></TopLine>

                <SponsorLinkTitle
                  style={{
                    color: '#000000',
                  }}
                >
                  Partners
                  <InfoRow imgStart={imgStart}>
                    <a href="https://hackathons.org.uk/" target="_blank">
                      <ImgWrapper start={start}>
                        <Image src={HackathonsUk} fluid alt={alt} />
                      </ImgWrapper>
                    </a>

                    <GapForSponsors></GapForSponsors>

                    <ImgWrapper start={start}>
                      <a href="https://www.tvaihub.co.uk/" target="_blank">
                        <Image src={ThamesValleyAiHub} fluid alt={alt} />
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
