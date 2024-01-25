// useGoogleAnalytics.tsx
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-VNEVLE7HS9';

const useGoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);
};

export const gaCustomEventTracking = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
  });
};


export default useGoogleAnalytics;
