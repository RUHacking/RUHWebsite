import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#ffff' : '#454545;')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59F7')};
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  font-style: italic;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  font-style: italic;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  font-style: italic;
`;

export const ImgWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;