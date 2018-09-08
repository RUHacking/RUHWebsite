import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import { HTMLContent } from '../components/Content'
import Map from '../components/Map'
import logo from '../img/logo/RUHlogo_title_red.png'

export const IndexPageTemplate = ({ frontmatter, content, contentComponent }) => {
  // const PageContent = contentComponent || Content;
  const { hero, about, loc } = frontmatter;
  return (
    <Layout>
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="level">
              <div className="level-item">
                <div className="level-item">
                  <img src={logo} alt={hero.title} style={{ width: '4rem' }} />
                  <h1 className="title is-size-2">{hero.title}</h1>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <h2 className="subtitle is-size-5 has-text-centered">{hero.description}</h2>
                <div className="level">
                  <div className="level-item">
                    <a href="/" className="button is-primary is-inverted is-outlined is-large is-rounded">Join the society today!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section--about is-dark is-small">
        <div className="hero-head">
        </div>
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {about.title}
            </h2>
            <div className="columns">
              <div className="column is-half">
                <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                  {about.col_1.title}
                </h3>
                {about.col_1.description}
              </div>
              <div className="column is-half">
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                  {about.col_2.title}
                </h3>
                {about.col_2.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section--location is-primary is-small">
        <div className="hero-head">
          <div className="columns is-gapless">
            <div className="column is-two-thirds-desktop">
              <Map
                centre={{
                  lat: loc.coords.lat,
                  lng: loc.coords.lng,
                }}
                markerElement={
                  <div>
                    <h3 className="has-text-black">
                      {loc.marker}
                    </h3>
                  </div>
                }
              />
            </div>
            <div className="column">
              <div className="hero-body">
                <div style={{height: '100%'}} className="container has-background-primary">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {loc.title}
                  </h2>
                  {loc.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section--sponsors is-dark is-small">
        <div className="hero-head">
        </div>
        <div className="hero-body">

        </div>
      </section>
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  frontmatter: PropTypes.object,
  content: PropTypes.string,
	contentComponent: PropTypes.func,
}


const Index = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      frontmatter={post.frontmatter}
      content={post.html}
    />
  )
}

Index.propTypes = {
	data: PropTypes.object.isRequired,
}


export default Index

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
