import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import LanguageTranslator from './components/LanguageTranslator';
import MovieSearchEngine from './components/MovieSearchEngine';
import QrCodeGenerator from './components/QrCodeGenerator';
import IPAddressFinder from './components/IPAddressFinder';
import MainMenu from './components/MainMenu';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('jwtToken');
  return token ? element : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/menu" element={<ProtectedRoute element={<MainMenu />} />} />
        <Route path="/ip-address-finder" element={<ProtectedRoute element={<IPAddressFinder />} />} />
        <Route path="/language-translator" element={<ProtectedRoute element={<LanguageTranslator />} />} />
        <Route path="/qr-code-generator" element={<ProtectedRoute element={<QrCodeGenerator />} />} />
        <Route path="/movie-search-engine" element={<ProtectedRoute element={<MovieSearchEngine />} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
