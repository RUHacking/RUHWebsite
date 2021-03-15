import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#ffff' : '#454545;')};
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -15px -15px -15px;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  max-width: 100%;
  flex-basis: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const FooterSubHeading = styled.p`
  padding-top: 50px;
  font-size: 40px;
  color: #000000;
  align-items: center;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  max-width: 400px;
  display: flex;
  margin: 0 auto;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500;
`;
