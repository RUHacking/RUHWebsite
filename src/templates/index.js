import React from 'react';
import GlobalStyles from '../global_styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import Home from './HomePage/Home';
import 'react-awesome-button/dist/styles.css';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

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
