import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './containers/HomePage/HomePage';
import PortfolioPage from './containers/PortfolioPage/PortfolioPage';


function App() {
  return (
    <div className="App">
    
      <Header />

      <Switch>

        <Route path="/portfolio/all" component={ PortfolioPage } />
        <Route path="/:section" component={ HomePage } />
        <Route path="/" component={ HomePage } />

      </Switch>

      <Footer />

    </div>
  );
}

export default App;
