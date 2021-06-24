import React from 'react';
import FAQ from '../../components/FAQ/FAQ';
import Schedule from '../../components/Schedule/Schedule';

import Team from '../../components/Team/Team';
import { FooterSubHeading } from '../../components/Sponsors/Sponsors.elements';
import InfoSection2 from '../../components/InfoSection2/InfoSection2';
import InfoSection3 from '../../components/InfoSection3/InfoSection3';

import { InfoSection } from '../../components';
import HomePage from '../../components/HomePage/HomePage';
import Sponsors1 from '../../components/Sponsors1/Sponsors1';

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
      <Schedule/>
      <FAQ />
      <InfoSection2 {...HomeObjectFour} />
      <FooterSubHeading>
      <Sponsors1 {...HomeObjectFive} />
      </FooterSubHeading>
      <InfoSection {...HomeObjectOne} />
      <Team />

    </>
  );
};

export default Home;



