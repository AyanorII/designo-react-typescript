import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
