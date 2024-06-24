
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';

import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/dashboard" element={< Dashboard />} />
            <Route path="/signup" element={< UserSignup />} />
            <Route path="/login" element={< UserLogin />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
