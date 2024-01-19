// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SignUp from './components/SignUp';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/GAtest" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
