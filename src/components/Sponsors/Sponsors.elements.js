import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#ffff' : '#454545;')};
  align-items: center;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Sans Unicode2',
    'Lucida Sans Unicode2', Arial, Helvetica, sans-serif, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  width: 250px;
  display: flex;
  margin-bottom: 40px;
  align-items: center;
`;
export const img = styled.img`
  max-width: 200%;
  max-height: 205;
  align-items: center;
`;

/*NEW*/

export const SponsorLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const SponsorLinksWrapper = styled.div`
  display: flex;
  margin-right: 100px;
  margin-left: 100px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SponsorLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const SponsorLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 50px;
  color: #000000;
  text-align: center;
`;

export const SponsorContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  margin-top: -250px;
  @media screen and (max-width: 1000px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const TopLine = styled.div`
  font-size: 50px;
  line-height: 46px;
  letter-spacing: 1.4px;
  margin-bottom: 90px;
  margin-top: 90px;
  text-align: center;
`;

export const GapForSponsors = styled.div`
  font-size: 50px;
  line-height: 46px;
  letter-spacing: 1.4px;
  margin-bottom: 90px;
  margin-top: 90px;
  text-align: center;
`;


