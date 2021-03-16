import React from 'react';

import { InfoSection } from '../../components';

import { HomeObjectFour } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectFour} />
    </>
  );
};

export default Home;
