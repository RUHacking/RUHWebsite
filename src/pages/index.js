import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../img/logo/RUHlogo_title_red.png'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <img src={logo} alt="R.U,. Hacking" style={{ width: '88px' }} />
                  <h1 className="title is-size-1">R. U. Hacking</h1>
                </div>
              </div>
            </div>
            <h2 className="subtitle is-size-4">We are a student led technology society based at the University of Reading. We are driven to provide exciting educational opportunities for everyone. Our events are the perfect opportunity for both newcomers and seasoned techies alike to collaborate &amp; learn; facilitated by our support and resources.</h2>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
