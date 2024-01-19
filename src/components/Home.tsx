import { useEffect } from "react";
import ReactGA from "react-ga4";

// Home.tsx
const Home = () => {
  useEffect(() => {
    ReactGA.send("page_view_Home" + window.location.search);
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
