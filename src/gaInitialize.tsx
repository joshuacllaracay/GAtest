// useGoogleAnalytics.ts
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-VNEVLE7HS9';

const useGoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);
};

export default useGoogleAnalytics;
