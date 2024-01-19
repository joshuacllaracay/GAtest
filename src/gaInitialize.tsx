// GaInitialize.ts
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { Location} from 'react-router-dom';

const TRACKING_ID = 'G-VNEVLE7HS9';

export function GaInitialize(location: Location) {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: 'pageview', page: location.pathname });
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location.pathname]);
}
