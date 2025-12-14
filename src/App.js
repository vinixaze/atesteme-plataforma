import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { getCurrentUser, clearCurrentUser } from './utils/auth';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    clearCurrentUser();
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            <Dashboard user={currentUser} onLogout={handleLogout} /> : 
            <Navigate to="/" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;