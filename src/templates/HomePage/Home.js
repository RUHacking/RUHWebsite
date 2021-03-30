import React from 'react';
import FAQ from '../../components/FAQ/FAQ';
import Team from '../../components/Team/Team';

import { InfoSection } from '../../components';
import Sponsors from '../../components/Sponsors/Sponsors';

import {
  HomeObjectOne,
  HomeObjectTwo,
  HomeObjectFour,
  HomeObjectFive,
  HomeObjectSix,
} from './Data';

import { FooterSubHeading } from '../../components/Sponsors/Sponsors.elements';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjectSix} />
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
