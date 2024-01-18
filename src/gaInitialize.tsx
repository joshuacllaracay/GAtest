// gaInitialize.ts
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-VNEVLE7HS9'; // Replace with your actual tracking code

export function gaInitialize() {
  ReactGA.initialize(TRACKING_ID);
}
