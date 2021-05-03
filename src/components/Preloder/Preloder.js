import React from 'react';
import logo from '../../img/newLogo.png';
import code from '../../img/codeimage.png';
import Image from 'react-bootstrap/Image';


const Preloder = () => {
  return (
    <div class="preload">
     <Image src={logo} fluid alt="picture"/>
     <Image src={code} fluid alt="picture"/>
     <h3>landing page</h3>
      </div>
  );
};

export default Preloder;


