import React from 'react';

import { InfoSection } from '../../components';

import { HomeObjectOne } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectOne} />
    </>
  );
};

export default Home;
