import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Movies from './components/Movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
