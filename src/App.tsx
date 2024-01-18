import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ReactGA from "react-ga4";
import './App.css';


import './gaInitialize';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  const handleButtonClick = () => {
    // Track the button click event
    ReactGA.event({
      category: 'User',
      action: 'button click',
    });

    // Your button click logic here
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleButtonClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
