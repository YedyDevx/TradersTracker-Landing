import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from  './pages/Home';
import HeaderMobile from './components/Header/HeaderMobile';

const App = () => {
  return (
    <Router>
      <Header />
      <HeaderMobile/>
      <Home/>
    </Router>
  );
};

export default App;
