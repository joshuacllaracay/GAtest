import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function MainPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/sign-up');
    ReactGA.event({
      category: 'User',
      action: 'User go Sign Up',
    });
  };

  const handleButtonClick = (buttonName: string) => {
    ReactGA.event({
      category: 'Button Click',
      action: `Clicked ${buttonName}`,
    });
  };

  useEffect(() => {
    ReactGA.send('page_view_Main-page' + window.location.search);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className="text-3xl font-bold text-center mt-4">Vite + React</h1>
      <h1>Google Analytics Test environment</h1>
      <div className="card my-4 p-4 bg-white rounded-md shadow-md max-w-md">
        <button
          onClick={() => {
            handleButtonClick('Click me 1');
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click me 1
        </button>
        <button
          onClick={() => {
            handleButtonClick('Click me 2');
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Click me 2
        </button>
        <button
          onClick={handleLoginClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Click to Log In
        </button>
        <p className="text-gray-700 mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default MainPage;
