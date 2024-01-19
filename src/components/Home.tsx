import { useEffect } from "react";
import ReactGA from "react-ga4";

// Home.tsx
const Home = () => {
  useEffect(() => {
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};

export default Home;
