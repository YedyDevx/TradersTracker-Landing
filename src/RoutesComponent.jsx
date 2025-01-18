import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TermsAndConditions from './pages/Terms/TermsAndConditions';
import NotFound from './pages/NotFound/NotFound';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
