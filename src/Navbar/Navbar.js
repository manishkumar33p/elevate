

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [adminOpen, setAdminOpen] = useState(false);

//   const links = [
//     ["/", "Home"],
//     ["/about", "About"],
//     ["/expertise", "Expertise"],
//     ["/projects", "Developments"],
//     ["/leadership", "Leadership"],
//     ["/gallery", "Gallery"],
//   ];

//   const closeMenu = () => {
//     setOpen(false);
//     setAdminOpen(false);
//   };

//   return (
//     <header className="navbar">
//       <div className="container nav-inner">

//         {/* BRAND */}
//         <Link
//           className="brand"
//           to="/"
//           onClick={closeMenu}
//         >
//           <span className="brand-mark">E</span>

//           <span className="brand-copy">
//             <b>ELEVATE</b>
//             <small>INFRA</small>
//           </span>
//         </Link>


//         {/* MOBILE MENU */}
//         <button
//           className="menu-btn"
//           aria-label="Toggle navigation"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "×" : "☰"}
//         </button>


//         {/* NAVIGATION */}
//         <nav className={open ? "nav-links open" : "nav-links"}>

//           {/* MAIN LINKS */}
//           {links.map(([to, label]) => (
//             <NavLink
//               key={to}
//               to={to}
//               end={to === "/"}
//               onClick={closeMenu}
//             >
//               {label}
//             </NavLink>
//           ))}


//           {/* ADMIN DROPDOWN */}
//           <div
//             className="nav-admin-dropdown"
//             onMouseEnter={() => setAdminOpen(true)}
//             onMouseLeave={() => setAdminOpen(false)}
//           >

//             <button
//               type="button"
//               className="nav-admin-trigger"
//               onClick={() => setAdminOpen(!adminOpen)}
//             >
//               Admin
//               <span className={adminOpen ? "admin-arrow rotate" : "admin-arrow"}>
//                 ↓
//               </span>
//             </button>


//             {adminOpen && (
//               <div className="nav-admin-menu">

//                 <Link
//                   to="/admin"
//                   onClick={closeMenu}
//                 >
//                   <span className="admin-menu-number">01</span>

//                   <div>
//                     <strong>Admin Dashboard</strong>
//                     <small>Website control panel</small>
//                   </div>

//                   <b>↗</b>
//                 </Link>


//                 <Link
//                   to="/admin"
//                   onClick={closeMenu}
//                 >
//                   <span className="admin-menu-number">02</span>

//                   <div>
//                     <strong>Developments</strong>
//                     <small>Manage projects</small>
//                   </div>

//                   <b>↗</b>
//                 </Link>


//                 <Link
//                   to="/admin"
//                   onClick={closeMenu}
//                 >
//                   <span className="admin-menu-number">03</span>

//                   <div>
//                     <strong>Enquiries</strong>
//                     <small>View website leads</small>
//                   </div>

//                   <b>↗</b>
//                 </Link>

//               </div>
//             )}

//           </div>


//           {/* ENQUIRE */}
//           <Link
//             className="nav-cta"
//             to="/contact"
//             onClick={closeMenu}
//           >
//             Enquire
//             <span>↗</span>
//           </Link>

//         </nav>

//       </div>
//     </header>
//   );
// }


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/expertise", "Expertise"],
    ["/projects", "Developments"],
    ["/leadership", "Leadership"],
    ["/gallery", "Gallery"],
  ];

  const closeMenu = () => {
    setOpen(false);
    setAdminOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* BRAND */}
        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            alt="Elevate Infra"
            className="brand-logo"
          />

          <span className="brand-copy">
            <b>ELEVATE</b>
            <small>INFRA DEVELOPER</small>
          </span>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>

        {/* NAVIGATION */}
        <nav className={open ? "nav-links open" : "nav-links"}>

          {/* MAIN LINKS */}
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          {/* ADMIN DROPDOWN */}
          <div
            className="nav-admin-dropdown"
            onMouseEnter={() => setAdminOpen(true)}
            onMouseLeave={() => setAdminOpen(false)}
          >
            <button
              type="button"
              className="nav-admin-trigger"
              onClick={() => setAdminOpen(!adminOpen)}
            >
              Admin
              <span
                className={
                  adminOpen
                    ? "admin-arrow rotate"
                    : "admin-arrow"
                }
              >
                ↓
              </span>
            </button>

            {adminOpen && (
              <div className="nav-admin-menu">

                <Link to="/admin" onClick={closeMenu}>
                  <span className="admin-menu-number">01</span>

                  <div>
                    <strong>Admin Dashboard</strong>
                    <small>Website control panel</small>
                  </div>

                  <b>↗</b>
                </Link>

                <Link to="/development-admin" onClick={closeMenu}>
                  <span className="admin-menu-number">02</span>

                  <div>
                    <strong>Developments</strong>
                    <small>Manage projects</small>
                  </div>

                  <b>↗</b>
                </Link>

                <Link to="/admin" onClick={closeMenu}>
                  <span className="admin-menu-number">03</span>

                  <div>
                    <strong>Enquiries</strong>
                    <small>View website leads</small>
                  </div>

                  <b>↗</b>
                </Link>

              </div>
            )}
          </div>

          {/* ENQUIRE */}
          <Link
            className="nav-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Enquire
            <span>↗</span>
          </Link>

        </nav>
      </div>
    </header>
  );
}
