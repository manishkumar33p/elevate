// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";
// import Home from "./Home/Home";
// import About from "./About/About";
// import Expertise from "./Expertise/Expertise";
// import Projects from "./Projects/Projects";
// import ProjectDetails from "./ProjectDetails/ProjectDetails";
// import Leadership from "./Leadership/Leadership";
// import Gallery from "./Gallery/Gallery";
// import Contact from "./Contact/Contact";
// import Admin from "./Admin/Admin";
// import FloatingActions from "./FloatingActions/FloatingActions";
// import DevelopmentAdmin from "./DevelopmentAdmin/DevelopmentAdmin";

// import AdminLogin from "./AdminLogin/AdminLogin";
// import AdminProtected from "./AdminProtected/AdminProtected";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/expertise" element={<Expertise />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/projects/:id" element={<ProjectDetails />} />
//           <Route path="/leadership" element={<Leadership />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Home />} />
//           <Route path="/admin" element={<Admin />} />



          
// <Route
//   path="/admin-login"
//   element={<AdminLogin />}
// />

// <Route
//   path="/admin"
//   element={
//     <AdminProtected>
//       <Admin />
//     </AdminProtected>
//   }
// />

//           <Route
//   path="/development-admin"
//   element={<DevelopmentAdmin />}
// />
//         </Routes>
//         <FloatingActions />
//       </main>
//       <Footer />
//     </BrowserRouter>
//   );
// }




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
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminProtected from "./AdminProtected/AdminProtected";

import DevelopmentAdmin from "./DevelopmentAdmin/DevelopmentAdmin";

import FloatingActions from "./FloatingActions/FloatingActions";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>

          {/* WEBSITE */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* ADMIN LOGIN */}
          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />

          {/* PROTECTED ADMIN PANEL */}
          <Route
            path="/admin"
            element={
              <AdminProtected>
                <Admin />
              </AdminProtected>
            }
          />

          {/* DEVELOPMENT ADMIN */}
          <Route
            path="/development-admin"
            element={
              <AdminProtected>
                <DevelopmentAdmin />
              </AdminProtected>
            }
          />

          {/* 404 / UNKNOWN URL */}
          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

        <FloatingActions />

      </main>

      <Footer />

    </BrowserRouter>
  );
}
