import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/scrollToTop";
import Hours from "./pages/Hours";
import Visit from "./pages/Visit";


function App() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/visit" element={<Visit />} />









      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
