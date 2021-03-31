import React from 'react';
import FAQ from '../../components/FAQ/FAQ';
import Team from '../../components/Team/Team';

import { InfoSection } from '../../components';
import Sponsors from '../../components/Sponsors/Sponsors';
import HomePage from '../../components/HomePage/HomePage';

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
      <HomePage />
      <InfoSection {...HomeObjectTwo} />
      <FAQ />
      <InfoSection {...HomeObjectFour} />
      <FooterSubHeading>
        <Sponsors {...HomeObjectFive} />
      </FooterSubHeading>
      <InfoSection {...HomeObjectOne} />
      <Team />
    </>
  );
};

export default Home;
