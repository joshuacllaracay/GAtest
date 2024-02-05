// useGoogleAnalytics.tsx
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-VNEVLE7HS9';

const useGoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);
};

export const gaCustomEventTracking = (category: string, customAction: string) => {
  const screenName = window.location.pathname;
  const action = `${screenName} - ${customAction}`;
  ReactGA.event({
    category,
    action,
  });
};


export default useGoogleAnalytics;
