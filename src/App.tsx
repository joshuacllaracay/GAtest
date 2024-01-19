// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { GaInitialize } from './GaInitialize';
const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    GaInitialize(location);
  }, [location]);

  return (
    <Router>
      <Routes>
        <Route path="/GAtest" element={<MainPage />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
