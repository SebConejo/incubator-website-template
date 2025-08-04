import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import StartupAccelerator from './pages/StartupAccelerator';
import TechIncubator from './pages/TechIncubator';
import ScaleupProgram from './pages/ScaleupProgram';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/startup-accelerator" element={<StartupAccelerator />} />
          <Route path="/tech-incubator" element={<TechIncubator />} />
          <Route path="/scaleup-program" element={<ScaleupProgram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;