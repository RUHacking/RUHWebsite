import React from 'react';
import GlobalStyles from '../global_styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import Home from './HomePage/Home';
import 'react-awesome-button/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from '../components/FAQ/FAQ';
import Team from '../components/Team/Team';
import InfoSection3 from '../components/InfoSection3/InfoSection3';


function App() {
  return (
  <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/faq" exact component={FAQ} />
      <Route path="/team" exact component={Team} />
      <Route path="/inf3" exact component={InfoSection3} />

      </Switch>
      <Footer/>
    </Router>
  );
};




export default App;
