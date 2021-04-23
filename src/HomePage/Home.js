import React from 'react';
import FAQ from '../../components/FAQ/FAQ';
import Team from '../../components/Team/Team';
import { FooterSubHeading } from '../../components/Sponsors/Sponsors.elements';
import InfoSection2 from '../../components/InfoSection2/InfoSection2';
import InfoSection3 from '../../components/InfoSection3/InfoSection3';

import { InfoSection } from '../../components';
import Sponsors from '../../components/Sponsors/Sponsors';
import HomePage from '../../components/HomePage/HomePage';

import {
  HomeObjectOne,
  HomeObjectTwo,
  HomeObjectFour,
  HomeObjectFive,
} from './Data';

const Home = () => {
  return (
    <>
      <HomePage />
      <InfoSection3 {...HomeObjectTwo} />
      <FAQ />
      <InfoSection2 {...HomeObjectFour} />
      <FooterSubHeading>
        <Sponsors {...HomeObjectFive} />
      </FooterSubHeading>
      <InfoSection {...HomeObjectOne} />
      <Team />
    </>
  );
};

export default Home;



