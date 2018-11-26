import React from 'react';
import SocialIcons from './SocialIcons';

/** FA **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

const Footer = () => (
  <footer className="hero footer is-primary">
    <div className="content has-text-centered">
      <div className="columns is-multiline is-centered">
        <div className="column is-12">
          <SocialIcons />
        </div>
        <div className="column is-12">
          <p>
            <span className="icon is-small">
              <FontAwesomeIcon icon={['fas', 'code']} />
            </span>{' '}
            with
            <span className="icon is-small">
              <FontAwesomeIcon icon={['fas', 'heart']} />
            </span>{' '}
            by RUHacking.
          </p>
          <h4 className="subtitle is-size-6" style={{ marginBottom: '1em' }}>
            © R. U. Hacking? {new Date().getFullYear()}. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
