import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Routes from "./pages/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Header />
          <Routes />
          <CallToAction />
        </ScrollToTop>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
