import GA4React from "ga-4-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(process.env.GOOGLE_ANALYTICS_ID);

try {
  setTimeout(() => {
    const ga4react = new GA4React("G-YRV6KLTJKH");
    ga4react.initialize().catch((err) => console.error(err));
  }, 4000);
} catch (err) {
  console.error(err);
}
