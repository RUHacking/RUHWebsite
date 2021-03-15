import React from 'react';
import FAQ from '../../components/FAQ/FAQ';

import { InfoSection } from '../../components';
import {
  HomeObjectOne,
  HomeObjectTwo,
  HomeObjectThree,
  HomeObjectFour,
} from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectOne} />
      <InfoSection {...HomeObjectTwo} />
      <FAQ />
      <InfoSection {...HomeObjectThree} />
      <InfoSection {...HomeObjectFour} />
    </>
  );
};

export default Home;
