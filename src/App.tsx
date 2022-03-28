import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import WebDesign from "./pages/Web-Design/WebDesign";
import AppDesign from "./pages/App-Design/AppDesign";
import GraphicDesign from "./pages/Graphic-Design/GraphicDesign";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/app-design" element={<AppDesign />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
          </Routes>
          <CallToAction />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
