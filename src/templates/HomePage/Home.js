import React from 'react';
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
      <InfoSection {...HomeObjectThree} />
      <InfoSection {...HomeObjectFour} />
    </>
  );
};

export default Home;
