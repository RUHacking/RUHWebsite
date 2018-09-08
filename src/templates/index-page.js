import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Map from '../components/Map'
import logo from '../img/logo/RUHlogo_title_red.png'

export const IndexPageTemplate = ({ title, hero, about, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Fragment>
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
                    <a className="button is-primary is-inverted is-outlined is-large is-rounded">Join the society today!</a>
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
                  {about.description_1.title}
                </h3>
                {about.description_1.description}
              </div>
              <div className="column is-half">
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                  {about.description_2.title}
                </h3>
                {about.description_2.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section--location is-light is-medium">
        <div className="hero-head">
          <div className="columns">
            <div className="column is-two-thirds-desktop">
              <Map
                centre={{
                  lat: 51.4414,
                  lng: -0.9418,
                }}
              />
            </div>
            <div className="column">
              <div className="container has-background-primary">
                hewop
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  hero: PropTypes.object,
  about: PropTypes.object,
  content: PropTypes.string,
	contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      hero={post.frontmatter.hero}
			about={post.frontmatter.about}
      content={post.html}
    />
  )
}

IndexPage.propTypes = {
	data: PropTypes.object.isRequired,
}


export default IndexPage

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
      about {
        title
        description_1 {
          title
          description
        }
        description_2 {
          title
          description
        }
      }
    }
  }
}
`;
