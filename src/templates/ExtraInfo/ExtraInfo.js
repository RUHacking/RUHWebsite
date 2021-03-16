import React from 'react';

import { InfoSection } from '../../components';

import { HomeObjectTwo } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectTwo} />
    </>
  );
};

export default Home;
