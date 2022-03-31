import React from 'react'
import { AnimatePresence } from "framer-motion";
import { Routes as RRoutes, Route, useLocation } from 'react-router-dom';
import WebDesign from "./Web-Design/WebDesign";
import AppDesign from "./App-Design/AppDesign";
import GraphicDesign from "./Graphic-Design/GraphicDesign";
import About from "./About/About";
import Locations from "./Locations/Locations";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
type Props = {}

const Routes = (props: Props) => {

  const location = useLocation();

  return (
    <main>
      <AnimatePresence exitBeforeEnter>
        <RRoutes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </RRoutes>
      </AnimatePresence>
    </main>
  );
}

export default Routes
