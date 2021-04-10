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
import InfoSection2 from '../components/InfoSection2/InfoSection2';
import InfoSection from '../components/InfoSection/InfoSection';
import HomePage from '../components/HomePage/HomePage';
import {useHistory, userHistory} from "react-router";
import history from "./history";


function App() {
  return (
  <Router history={history}>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
};



export default App;
