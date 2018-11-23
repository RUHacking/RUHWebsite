import React from 'react';
import { compose, withProps } from 'recompose';
import styled from 'styled-components';

const MLHTrust = compose(
  withProps({
    mlhLink:
      'https://mlh.io/seasons/eu-2019/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=black',
    mlhLogo:
      'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-black.svg',
  })
)(props => (
  <div className={props.className}>
    <a
      style={{ maxWidth: '100px' }}
      id="mlh-trust-badge"
      href={props.mlhLink}
      target="_blank"
    >
      <img
        src={props.mlhLogo}
        alt="Major League Hacking 2019 Hackathon Season"
      />
    </a>
  </div>
));

const styledMLHTrust = styled(MLHTrust)`
  #mlh-trust-badge {
    display: block;
    max-width: 100px;
    min-width: 60px;
    position: fixed;
    right: 50px;
    top: 0;
    width: 10%;
    z-index: 10000;
    img {
      width: 100%;
    }
  }
`;
export default styledMLHTrust;
