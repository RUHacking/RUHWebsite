import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import logo from '../img/logo/RUHlogo_title_red.png'

export const IndexPageTemplate = ({ title, hero, about, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

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
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
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

      <section className="hero section--about is-dark is-medium">
        <div className="hero-head">
        </div>
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {about.title}
            </h2>
            <div class="columns">
              <div class="column is-half">
                <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                  {about.description_1.title}
                </h3>
                {about.description_1.description}
              </div>
              <div class="column is-half">
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                  {about.description_2.title}
                </h3>
                {about.description_2.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero section--location is-dark is-medium">
        <div className="hero-head">
        </div>
        <div className="hero-body">
          <div className="container">
            
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
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  hero: PropTypes.object,
  about: PropTypes.object,
  content: PropTypes.string,
	contentComponent: PropTypes.func,
}

const Index = ({ data }) => {
  const { markdownRemark: post } = data

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
