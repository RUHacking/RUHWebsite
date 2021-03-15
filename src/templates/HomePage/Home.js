import React from 'react';
import FAQ from '../../components/FAQ/FAQ';

import { InfoSection } from '../../components';
import Sponsors from '../../components/Sponsors/Sponsors';

import {
  HomeObjectOne,
  HomeObjectTwo,
  HomeObjectThree,
  HomeObjectFour,
  HomeObjectFive,
} from './Data';

import { FooterSubHeading } from '../../components/Sponsors/Sponsors.elements';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectOne} />
      <InfoSection {...HomeObjectTwo} />
      <FAQ />
      <InfoSection {...HomeObjectThree} />
      <InfoSection {...HomeObjectFour} />
      <FooterSubHeading>Sponsors</FooterSubHeading>
      <Sponsors {...HomeObjectFive} />
    </>
  );
};

export default Home;
