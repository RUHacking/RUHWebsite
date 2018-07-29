import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import logo from '../img/logo/RUHlogo_title_red.png'

export const IndexPageTemplate = ({ title, hero, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return ([
    <section className="hero is-medium is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <img src={logo} alt={hero.title} style={{ width: '4rem' }} />
                <h1 className="title is-size-2">{hero.title}</h1>
              </div>
            </div>
          </div>
          <h2 className="subtitle is-size-5">{hero.description}</h2>
        <a className="button is-primary is-inverted is-outlined">Join the society today!</a>
        </div>
      </div>
    </section>,
    <section className="section section--gradient">
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
    </section>
  ])
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  hero: PropTypes.object,
  content: PropTypes.string,
	contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      hero={post.frontmatter.hero}
			title={post.frontmatter.title}
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
    }
  }
}
`;
