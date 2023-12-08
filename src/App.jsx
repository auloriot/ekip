import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar/NavBar'
import Questions from './pages/Questions.jsx';
import Association from './pages/Association';
import Accueil from './pages/Accueil'
import './NavBar/NavBar.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Accueil/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/association" element={<Association/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;