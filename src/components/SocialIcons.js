import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { compose, withProps } from 'recompose';

library.add(fab, fas);

const SocialIcons = compose(withProps({}))(props => (
  <div
    className="social-icons field has-addons"
    style={{ justifyContent: 'center' }}
  >
    <p className="control">
      <a
        className="button is-large is-rounded is-dark"
        rel="noopener noreferrer"
        href="https://twitter.com/ReadingUniHack"
        target="_blank"
      >
        <span className="icon is-small">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </span>
      </a>
    </p>
    <p className="control">
      <a
        className="button is-large is-dark"
        rel="noopener noreferrer"
        href="mailto:hey@ruhacking.me"
        target="_blank"
      >
        <span className="icon is-small">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
        </span>
      </a>
    </p>
    <p className="control">
      <a
        className="button is-large is-dark"
        rel="noopener noreferrer"
        href="https://github.com/RUHacking"
        target="_blank"
      >
        <span className="icon is-small">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </span>
      </a>
    </p>
    <p className="control">
      <a
        className="button is-large is-dark"
        rel="noopener noreferrer"
        href="https://www.facebook.com/readingunihack"
        target="_blank"
      >
        <span className="icon is-small">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </span>
      </a>
    </p>
    <p className="control">
      <a
        className="button is-large is-rounded is-dark"
        rel="noopener noreferrer"
        href="https://www.instagram.com/r.u.hacking/"
        target="_blank"
      >
        <span className="icon is-small">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </span>
      </a>
    </p>
  </div>
));
export default SocialIcons;
