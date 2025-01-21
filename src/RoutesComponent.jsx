import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TermsAndConditions from './pages/Terms/TermsAndConditions';
import NotFound from './pages/NotFound/NotFound';

const RoutesComponent = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default RoutesComponent;
