import styled from 'styled-components';

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
  font-size: 50px;
  line-height: 46px;
  letter-spacing: 1.4px;
  margin-bottom: 90px;
  margin-top: 90px;
  text-align: center;
  
`;

export const WhiteSpace = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
  font-size: 50px;
  line-height: 46px;
  letter-spacing: 1.4px;
  padding: -90px;
  text-align: center;
`;


export const SmallTopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
  font-size: 50px;
  line-height: 46px;
  letter-spacing: 1.4px;
  padding-top: 90px;
  text-align: center;
`;


export const SmallGap = styled.div`

  padding-top: 60px;
`;