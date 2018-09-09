import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="R. U. Hacking?" />
    {/* <Navbar /> */}
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
