import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import 'react-awesome-button/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomePage/Home';

import GlobalStyle from '../global_styles'

function App() {
  return (
  <Router>
    <GlobalStyle/>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
};



export default App;

