import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <div className="columns is-multiline">
        <div className="column is-6 is-offset-3">
          <div className="level">
            <div className="level-item has-text-centered">
              <p> © R. U. Hacking? 2018. All rights reserved.</p>
            </div>
            <div className="level-item">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
