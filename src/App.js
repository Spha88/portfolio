import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import HomePage from './containers/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    
      <Header />

      <Switch>
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/" component={ HomePage } />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
