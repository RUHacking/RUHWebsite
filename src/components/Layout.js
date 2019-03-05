import React from 'react';
import Helmet from 'react-helmet';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="R. U. Hacking?">
      <link rel="shortcut icon" href="favicon.png" />
    </Helmet>
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
