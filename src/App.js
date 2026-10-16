import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Expertise from "./Expertise/Expertise";
import Projects from "./Projects/Projects";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Leadership from "./Leadership/Leadership";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Admin from "./Admin/Admin";
import FloatingActions from "./FloatingActions/FloatingActions";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <FloatingActions />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
