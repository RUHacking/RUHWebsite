import React from 'react';

import 'react-awesome-button/dist/styles.css';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import { HTMLContent } from '../components/Content';

import logo from '../img/logo/newLogo.png';

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

export const IndexPageTemplate = ({
  frontmatter,
  content,
  contentComponent,
}) => {
  // const PageContent = contentComponent || Content;
  const { hero } = frontmatter;
  return (
    <Layout>
      <header className="hero is-dark is-fullheight video">
        <div className="hero-video">
          <video
            poster="/img/bgimg.jpg"
            id="bgvid"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/img/VID_20190108_154623.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="level">
              <div className="level-item">
                <figure className="image" style={{ width: '16rem' }}>
                  <img src={logo} alt={hero.title} />
                </figure>
              </div>
            </div>

            <div className="level">
              <div className="level-item">
                <h1
                  className="title is-size-1"
                  style={{
                    fontFamily: 'clone-rounded-latin, sans-serif',
                    fontWeight: 'bolder',
                  }}
                >
                  {hero.title}
                </h1>
              </div>
            </div>
            <div className="level">
              <div className="level-item">
                <h2
                  className="subtitle is-size-3"
                  style={{
                    fontFamily: 'clone-rounded-latin, sans-serif',
                    fontWeight: 'bolder',
                  }}
                >
                  Learn, Build, Share!
                </h2>
              </div>
            </div>

            <div className="level">
              <div className="level-item">
                <button
                  style={{
                    backgroundColor: '#ea5837',
                    fontFamily: 'clone-rounded-latin, sans-serif',
                    color: 'white',
                    padding: '20px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '22px',
                    border: 'none',
                    boxShadow: '0 0 13px #00000077',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    openInNewTab(
                      'https://www.eventbrite.co.uk/e/r-u-hacking-2020-24-hour-student-hackathon-tickets-71648722257'
                    );
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
};

IndexPageTemplate.propTypes = {
  frontmatter: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Index = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      frontmatter={post.frontmatter}
      content={post.html}
    />
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero {
          title
          description
        }
        loc {
          title
          description
          marker
          coords {
            lat
            lng
          }
        }
        events {
          title
          desc
          image
          link
          subtitle
        }
        featured_event {
          title
          desc
          image
          link
          subtitle
        }
        featured_images {
          image_list
        }
        sponsors {
          title
          description
          sponsor_list {
            image
            link
            tier
            alt
          }
        }
        about {
          title
          col_1 {
            title
            description
          }
          col_2 {
            title
            description
          }
        }
      }
    }
  }
`;
