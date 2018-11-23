import React from 'react';
import Helmet from 'react-helmet';
import MLHTrust from '../components/MLHTrust';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="R. U. Hacking?">
      <link rel="shortcut icon" href="favicon.png" />
    </Helmet>
    <MLHTrust />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
