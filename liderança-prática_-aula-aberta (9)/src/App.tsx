/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MbaPage from './pages/MbaPage';
import ObrigadoPage from './pages/ObrigadoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mba" element={<MbaPage />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
      </Routes>
    </Router>
  );
}
