import React from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import "./Styles/index.css";
import Footer from "./Components/Footer";
import Allitems from "./Components/Allitems";
import Veg from "./Components/Veg";
import NonVeg from "./Components/NonVeg";
import Gallery from './Components/Gallery';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* <Routes> */}
          <Route path="/menu/allitems" element={<Allitems />} />
          <Route path="/menu/veg" element={<Veg />} />
          <Route path="/menu/nonveg" element={<NonVeg />} />
        {/* </Routes> */}

      </Routes> 
      <Footer />
    </>
  );
};

export default App;
