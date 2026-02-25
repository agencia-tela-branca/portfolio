import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
    console.log("GA4 Initialized");
  } else {
    console.warn("GA4 ID not found");
  }
};

export const trackPageView = (path) => {
  if (GA_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};
