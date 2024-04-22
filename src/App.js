import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDetailsPage from './pages/ProfileDetailsPage';
import Navbar from './nav+footer/Navbar';
import ProfileList from './components/ProfileList';
import './App.css';
import AdminPanel from './components/AdminPanel';
import Footer from './nav+footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>   
          <Route exact path="/" element={<ProfileList />} />
          <Route path="/profile/:id" element={<ProfileDetailsPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
