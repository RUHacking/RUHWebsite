import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="R. U. Hacking?">
      <link rel="shortcut icon" href="favicon.png" />
    </Helmet>
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
