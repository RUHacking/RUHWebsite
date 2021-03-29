import React from 'react';
import FAQ from '../../components/FAQ/FAQ';

import { InfoSection } from '../../components';
import Sponsors from '../../components/Sponsors/Sponsors';

import {
  HomeObjectOne,
  HomeObjectTwo,
  HomeObjectFour,
  HomeObjectFive,
} from './Data';

import { FooterSubHeading } from '../../components/Sponsors/Sponsors.elements';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectOne} />
      <InfoSection {...HomeObjectFour} />
      <FooterSubHeading>
        <Sponsors {...HomeObjectFive} />
      </FooterSubHeading>
      <InfoSection {...HomeObjectTwo} />
      <FAQ />
    </>
  );
};

export default Home;
