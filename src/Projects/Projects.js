// // // import React from"react";import{Link}from"react-router-dom";import"./Projects.css";
// // // export const projects=[{id:"elevate-greens",title:"Elevate Greens",type:"Premium Residential",location:"NCR Region",status:"Concept / Under Development*",area:"1.2M Sq. Ft.*",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=88",desc:"A landscaped residential community envisioned around natural light, open spaces and contemporary family living."},{id:"elevate-heights",title:"Elevate Heights",type:"Urban Residential",location:"Delhi NCR",status:"Concept Stage*",area:"850K Sq. Ft.*",img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=88",desc:"An urban residential concept balancing efficient planning, refined amenities and a strong sense of arrival."},{id:"elevate-business-district",title:"Elevate Business District",type:"Commercial",location:"Noida",status:"Concept Stage*",area:"450K Sq. Ft.*",img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=88",desc:"A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure."}];
// // // export default function Projects(){return <><section className="page-hero projects-hero"><div className="container"><span className="eyebrow">Developments</span><h1 className="page-title">Ideas shaped into<br/><span className="gold">valuable places.</span></h1><p>Explore residential and commercial development concepts that reflect the Elevate Infra approach.</p></div></section><section className="section projects-list"><div className="container"><div className="portfolio-note">Portfolio content below is currently presented as demo/concept content and can be replaced with the client's actual project data.</div>{projects.map((p,i)=><Link className="project-row" to={`/projects/${p.id}`} key={p.id}><div className="project-row-img"><img src={p.img} alt={p.title}/><span>0{i+1}</span></div><div className="project-row-info"><span className="eyebrow">{p.type}</span><h2>{p.title}</h2><p>{p.desc}</p><div className="project-meta"><div><small>Location</small><b>{p.location}</b></div><div><small>Scale</small><b>{p.area}</b></div><div><small>Status</small><b>{p.status}</b></div></div><strong className="project-link">View Development ↗</strong></div></Link>)}</div></section></>}
// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Projects.css";

// // export const projects = [
// //   {
// //     id: "elevate-greens",
// //     title: "Elevate Greens",
// //     type: "Premium Residential",
// //     location: "NCR Region",
// //     status: "Concept / Under Development*",
// //     area: "1.2M Sq. Ft.*",
// //     img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
// //     desc:
// //       "A landscaped residential community envisioned around natural light, open spaces, thoughtful planning and contemporary family living.",
// //   },
// //   {
// //     id: "elevate-heights",
// //     title: "Elevate Heights",
// //     type: "Urban Residential",
// //     location: "Delhi NCR",
// //     status: "Concept Stage*",
// //     area: "850K Sq. Ft.*",
// //     img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
// //     desc:
// //       "An urban residential concept balancing efficient planning, refined amenities, connectivity and a strong sense of arrival.",
// //   },
// //   {
// //     id: "elevate-business-district",
// //     title: "Elevate Business District",
// //     type: "Commercial",
// //     location: "Noida",
// //     status: "Concept Stage*",
// //     area: "450K Sq. Ft.*",
// //     img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
// //     desc:
// //       "A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure.",
// //   },
// // ];

// // const carouselSlides = [
// //   {
// //     title: "Residential spaces designed for life.",
// //     text:
// //       "Thoughtful communities where architecture, landscape, connectivity and everyday experience come together.",
// //     image:
// //       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
// //   },
// //   {
// //     title: "Architecture with a sense of identity.",
// //     text:
// //       "Development concepts created with a focus on character, functionality and long-term relevance.",
// //     image:
// //       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
// //   },
// //   {
// //     title: "Business destinations for tomorrow.",
// //     text:
// //       "Contemporary commercial environments planned around connectivity, accessibility and future growth.",
// //     image:
// //       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
// //   },
// // ];

// // export default function Projects() {
// //   const [activeSlide, setActiveSlide] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const nextSlide = () => {
// //     setActiveSlide(
// //       (prev) => (prev + 1) % carouselSlides.length
// //     );
// //   };

// //   const prevSlide = () => {
// //     setActiveSlide(
// //       (prev) =>
// //         (prev - 1 + carouselSlides.length) %
// //         carouselSlides.length
// //     );
// //   };

// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ===================================================== */}

// //       <section className="page-hero projects-hero">
// //         <div className="container projects-hero-content">
// //           <span className="eyebrow">Our Developments</span>

// //           <h1 className="page-title">
// //             Ideas shaped into
// //             <br />
// //             <span>valuable places.</span>
// //           </h1>

// //           <p>
// //             Explore residential and commercial development
// //             concepts that reflect the Elevate Infra approach to
// //             planning, design and long-term value creation.
// //           </p>

// //           <div className="projects-hero-actions">
// //             <a href="#portfolio" className="btn">
// //               Explore Portfolio ↓
// //             </a>

// //             <Link
// //               to="/contact"
// //               className="btn projects-outline-btn"
// //             >
// //               Discuss a Development
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           INTRO / PORTFOLIO OVERVIEW
// //       ===================================================== */}

// //       <section className="projects-intro">
// //         <div className="container projects-intro-grid">
// //           <div>
// //             <span className="eyebrow">
// //               The Portfolio
// //             </span>

// //             <h2>
// //               Developments shaped around
// //               <span> opportunity.</span>
// //             </h2>
// //           </div>

// //           <div>
// //             <p>
// //               Every development starts with a different
// //               opportunity. Our role is to understand the
// //               location, identify its potential and shape a
// //               development vision that responds to its context.
// //             </p>

// //             <p>
// //               From residential communities to commercial
// //               destinations, our portfolio represents an
// //               evolving approach to creating places with
// //               purpose, identity and long-term relevance.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           PORTFOLIO STATS
// //       ===================================================== */}

// //       <section className="projects-stats">
// //         <div className="container projects-stats-grid">
// //           <div>
// //             <strong>03</strong>
// //             <span>Featured Concepts</span>
// //           </div>

// //           <div>
// //             <strong>02</strong>
// //             <span>Residential Directions</span>
// //           </div>

// //           <div>
// //             <strong>01</strong>
// //             <span>Commercial Direction</span>
// //           </div>

// //           <div>
// //             <strong>360°</strong>
// //             <span>Development Approach</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           FEATURE CAROUSEL
// //       ===================================================== */}

// //       <section className="projects-carousel">
// //         <div className="projects-carousel-stage">
// //           {carouselSlides.map((slide, index) => (
// //             <div
// //               key={index}
// //               className={`projects-slide ${
// //                 activeSlide === index ? "active" : ""
// //               }`}
// //             >
// //               <img src={slide.image} alt={slide.title} />

// //               <div className="projects-slide-overlay" />

// //               <div className="container projects-slide-content">
// //                 <span className="eyebrow">
// //                   Elevate Infra / Perspective
// //                 </span>

// //                 <h2>{slide.title}</h2>

// //                 <p>{slide.text}</p>

// //                 <Link className="btn" to="/contact">
// //                   Enquire About Development ↗
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="projects-carousel-controls">
// //             <button
// //               onClick={prevSlide}
// //               aria-label="Previous"
// //             >
// //               ←
// //             </button>

// //             <div className="projects-dots">
// //               {carouselSlides.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   className={
// //                     activeSlide === index ? "active" : ""
// //                   }
// //                   onClick={() => setActiveSlide(index)}
// //                   aria-label={`Go to slide ${index + 1}`}
// //                 />
// //               ))}
// //             </div>

// //             <button
// //               onClick={nextSlide}
// //               aria-label="Next"
// //             >
// //               →
// //             </button>
// //           </div>

// //           <div className="projects-slide-number">
// //             0{activeSlide + 1}
// //             <span>/ 0{carouselSlides.length}</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           PROJECT LIST
// //       ===================================================== */}

// //       <section
// //         className="projects-list"
// //         id="portfolio"
// //       >
// //         <div className="container">
// //           <div className="projects-list-head">
// //             <div>
// //               <span className="eyebrow">
// //                 Featured Portfolio
// //               </span>

// //               <h2>
// //                 Selected
// //                 <span> developments.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               A selection of current development concepts
// //               representing the broader Elevate Infra vision.
// //             </p>
// //           </div>

// //           <div className="portfolio-note">
// //             Portfolio information marked with * represents
// //             current concept / indicative information and can be
// //             replaced with final project data.
// //           </div>

// //           <div className="projects-grid">
// //             {projects.map((project, index) => (
// //               <Link
// //                 className="project-card"
// //                 to={`/projects/${project.id}`}
// //                 key={project.id}
// //               >
// //                 <div className="project-card-image">
// //                   <img
// //                     src={project.img}
// //                     alt={project.title}
// //                   />

// //                   <span className="project-number">
// //                     0{index + 1}
// //                   </span>

// //                   <span className="project-type">
// //                     {project.type}
// //                   </span>
// //                 </div>

// //                 <div className="project-card-content">
// //                   <div className="project-card-top">
// //                     <span>{project.location}</span>
// //                     <span>{project.area}</span>
// //                   </div>

// //                   <h3>{project.title}</h3>

// //                   <p>{project.desc}</p>

// //                   <div className="project-card-bottom">
// //                     <span>{project.status}</span>

// //                     <b>
// //                       View Development <i>↗</i>
// //                     </b>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           DEVELOPMENT APPROACH
// //       ===================================================== */}

// //       <section className="projects-approach">
// //         <div className="container projects-approach-grid">
// //           <div className="projects-approach-image">
// //             <img
// //               src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=90"
// //               alt="Premium architectural interior"
// //             />
// //           </div>

// //           <div className="projects-approach-copy">
// //             <span className="eyebrow">
// //               Development Approach
// //             </span>

// //             <h2>
// //               Every project begins with
// //               <span> a better question.</span>
// //             </h2>

// //             <p>
// //               What should this place become? Who will use it?
// //               How should it connect with its surroundings? What
// //               will make it relevant five, ten or twenty years
// //               from now?
// //             </p>

// //             <p>
// //               These questions influence how we look at
// //               opportunity, planning, architecture and execution.
// //             </p>

// //             <div className="approach-points">
// //               <div>
// //                 <b>01</b>
// //                 <span>Understand the location</span>
// //               </div>

// //               <div>
// //                 <b>02</b>
// //                 <span>Define the opportunity</span>
// //               </div>

// //               <div>
// //                 <b>03</b>
// //                 <span>Create the development vision</span>
// //               </div>

// //               <div>
// //                 <b>04</b>
// //                 <span>Build long-term value</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           DEVELOPMENT TYPES
// //       ===================================================== */}

// //       <section className="projects-types">
// //         <div className="container">
// //           <div className="projects-list-head">
// //             <div>
// //               <span className="eyebrow">
// //                 Development Directions
// //               </span>

// //               <h2>
// //                 Different places.
// //                 <span> One standard.</span>
// //               </h2>
// //             </div>
// //           </div>

// //           <div className="projects-types-grid">
// //             <article>
// //               <span>01</span>
// //               <h3>Residential</h3>
// //               <p>
// //                 Communities designed around liveability,
// //                 thoughtful planning, comfort and everyday
// //                 experience.
// //               </p>
// //               <Link to="/projects/elevate-greens">
// //                 Explore Residential →
// //               </Link>
// //             </article>

// //             <article>
// //               <span>02</span>
// //               <h3>Urban Living</h3>
// //               <p>
// //                 Contemporary urban developments balancing
// //                 location, efficient layouts, amenities and
// //                 connectivity.
// //               </p>
// //               <Link to="/projects/elevate-heights">
// //                 Explore Urban Living →
// //               </Link>
// //             </article>

// //             <article>
// //               <span>03</span>
// //               <h3>Commercial</h3>
// //               <p>
// //                 Business environments created around identity,
// //                 accessibility, infrastructure and future
// //                 adaptability.
// //               </p>
// //               <Link to="/projects/elevate-business-district">
// //                 Explore Commercial →
// //               </Link>
// //             </article>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           CTA
// //       ===================================================== */}

// //       <section className="projects-cta">
// //         <div className="container">
// //           <span className="eyebrow">
// //             Build With Elevate
// //           </span>

// //           <h2>
// //             Have a land or development
// //             <span> opportunity?</span>
// //           </h2>

// //           <p>
// //             Let's explore the potential, understand the
// //             opportunity and shape the right development
// //             direction together.
// //           </p>

// //           <div className="projects-cta-actions">
// //             <Link className="btn" to="/contact">
// //               Start a Conversation ↗
// //             </Link>

// //             <Link
// //               className="btn projects-cta-outline"
// //               to="/about"
// //             >
// //               About Elevate Infra
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Projects.css";

// import {
//   getProjects,
//   saveProjects,
// } from "../data/siteData";

// /* =========================================================
//    DEFAULT PROJECTS
//    पहली बार website open होने पर यही data दिखाई देगा.
//    बाद में Admin Panel से बदल सकते हैं.
// ========================================================= */

// const defaultProjects = [
//   {
//     id: "elevate-greens",
//     title: "Elevate Greens",
//     type: "Premium Residential",
//     location: "NCR Region",
//     status: "Concept / Under Development*",
//     area: "1.2M Sq. Ft.*",
//     img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
//     desc: "A landscaped residential community envisioned around natural light, open spaces, thoughtful planning and contemporary family living.",
//   },
//   {
//     id: "elevate-heights",
//     title: "Elevate Heights",
//     type: "Urban Residential",
//     location: "Delhi NCR",
//     status: "Concept Stage*",
//     area: "850K Sq. Ft.*",
//     img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
//     desc: "An urban residential concept balancing efficient planning, refined amenities, connectivity and a strong sense of arrival.",
//   },
//   {
//     id: "elevate-business-district",
//     title: "Elevate Business District",
//     type: "Commercial",
//     location: "Noida",
//     status: "Concept Stage*",
//     area: "450K Sq. Ft.*",
//     img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
//     desc: "A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure.",
//   },
// ];

// /* =========================================================
//    CAROUSEL DATA
// ========================================================= */

// const defaultCarouselSlides = [
//   {
//     title: "Residential spaces designed for life.",
//     text: "Thoughtful communities where architecture, landscape, connectivity and everyday experience come together.",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
//   },
//   {
//     title: "Architecture with a sense of identity.",
//     text: "Development concepts created with a focus on character, functionality and long-term relevance.",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
//   },
//   {
//     title: "Business destinations for tomorrow.",
//     text: "Contemporary commercial environments planned around connectivity, accessibility and future growth.",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
//   },
// ];

// /* =========================================================
//    COMPATIBILITY EXPORT
//    ProjectDetails.js ko future mein Firebase/local data
//    ke saath connect karenge.
// ========================================================= */

// export let projects = defaultProjects;

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function Projects() {
//   const [projectList, setProjectList] = useState([]);
//   const [activeSlide, setActiveSlide] = useState(0);

//   /* =======================================================
//      LOAD PROJECTS
//   ======================================================= */

//   useEffect(() => {
//     let storedProjects = getProjects();

//     /*
//       Agar localStorage mein pehli baar data nahi hai,
//       default projects save kar do.
//     */

//     if (!storedProjects || storedProjects.length === 0) {
//       saveProjects(defaultProjects);
//       storedProjects = defaultProjects;
//     }

//     setProjectList(storedProjects);

//     /*
//       Compatibility export
//     */
//     projects = storedProjects;
//   }, []);

//   /* =======================================================
//      LISTEN FOR ADMIN / DATA UPDATES
//   ======================================================= */

//   useEffect(() => {
//     const handleDataUpdate = () => {
//       const updatedProjects = getProjects();

//       if (updatedProjects && updatedProjects.length > 0) {
//         setProjectList(updatedProjects);
//         projects = updatedProjects;
//       }
//     };

//     window.addEventListener(
//       "elevate-data-updated",
//       handleDataUpdate
//     );

//     window.addEventListener(
//       "storage",
//       handleDataUpdate
//     );

//     return () => {
//       window.removeEventListener(
//         "elevate-data-updated",
//         handleDataUpdate
//       );

//       window.removeEventListener(
//         "storage",
//         handleDataUpdate
//       );
//     };
//   }, []);

//   /* =======================================================
//      AUTO CAROUSEL
//   ======================================================= */

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide(
//         (prev) => (prev + 1) % defaultCarouselSlides.length
//       );
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   /* =======================================================
//      CAROUSEL CONTROLS
//   ======================================================= */

//   const nextSlide = () => {
//     setActiveSlide(
//       (prev) => (prev + 1) % defaultCarouselSlides.length
//     );
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) =>
//         (prev - 1 + defaultCarouselSlides.length) %
//         defaultCarouselSlides.length
//     );
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <>
//       {/* ===================================================
//           HERO
//       =================================================== */}

//       <section className="page-hero projects-hero">
//         <div className="container projects-hero-content">
//           <span className="eyebrow">
//             Our Developments
//           </span>

//           <h1 className="page-title">
//             Ideas shaped into
//             <br />
//             <span>valuable places.</span>
//           </h1>

//           <p>
//             Explore residential and commercial development
//             concepts that reflect the Elevate Infra approach
//             to planning, design and long-term value creation.
//           </p>

//           <div className="projects-hero-actions">
//             <a href="#portfolio" className="btn">
//               Explore Portfolio ↓
//             </a>

//             <Link
//               to="/contact"
//               className="btn projects-outline-btn"
//             >
//               Discuss a Development
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           INTRO
//       =================================================== */}

//       <section className="projects-intro">
//         <div className="container projects-intro-grid">
//           <div>
//             <span className="eyebrow">
//               The Portfolio
//             </span>

//             <h2>
//               Developments shaped around
//               <span> opportunity.</span>
//             </h2>
//           </div>

//           <div>
//             <p>
//               Every development starts with a different
//               opportunity. Our role is to understand the
//               location, identify its potential and shape a
//               development vision that responds to its context.
//             </p>

//             <p>
//               From residential communities to commercial
//               destinations, our portfolio represents an
//               evolving approach to creating places with
//               purpose, identity and long-term relevance.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           STATS
//       =================================================== */}

//       <section className="projects-stats">
//         <div className="container projects-stats-grid">
//           <div>
//             <strong>
//               {String(projectList.length).padStart(2, "0")}
//             </strong>
//             <span>
//               Featured Concepts
//             </span>
//           </div>

//           <div>
//             <strong>
//               {
//                 projectList.filter(
//                   (item) =>
//                     item.type
//                       ?.toLowerCase()
//                       .includes("residential")
//                 ).length
//               }
//             </strong>

//             <span>
//               Residential Directions
//             </span>
//           </div>

//           <div>
//             <strong>
//               {
//                 projectList.filter(
//                   (item) =>
//                     item.type
//                       ?.toLowerCase()
//                       .includes("commercial")
//                 ).length
//               }
//             </strong>

//             <span>
//               Commercial Directions
//             </span>
//           </div>

//           <div>
//             <strong>360°</strong>

//             <span>
//               Development Approach
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           LARGE CAROUSEL
//       =================================================== */}

//       <section className="projects-carousel">
//         <div className="projects-carousel-stage">

//           {defaultCarouselSlides.map(
//             (slide, index) => (
//               <div
//                 key={index}
//                 className={`projects-slide ${
//                   activeSlide === index
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                 />

//                 <div className="projects-slide-overlay" />

//                 <div className="container projects-slide-content">
//                   <span className="eyebrow">
//                     Elevate Infra / Perspective
//                   </span>

//                   <h2>
//                     {slide.title}
//                   </h2>

//                   <p>
//                     {slide.text}
//                   </p>

//                   <Link
//                     className="btn"
//                     to="/contact"
//                   >
//                     Enquire About Development ↗
//                   </Link>
//                 </div>
//               </div>
//             )
//           )}

//           <div className="projects-carousel-controls">
//             <button
//               onClick={prevSlide}
//               aria-label="Previous"
//             >
//               ←
//             </button>

//             <div className="projects-dots">
//               {defaultCarouselSlides.map(
//                 (_, index) => (
//                   <button
//                     key={index}
//                     className={
//                       activeSlide === index
//                         ? "active"
//                         : ""
//                     }
//                     onClick={() =>
//                       setActiveSlide(index)
//                     }
//                     aria-label={`Go to slide ${
//                       index + 1
//                     }`}
//                   />
//                 )
//               )}
//             </div>

//             <button
//               onClick={nextSlide}
//               aria-label="Next"
//             >
//               →
//             </button>
//           </div>

//           <div className="projects-slide-number">
//             0{activeSlide + 1}
//             <span>
//               / 0{defaultCarouselSlides.length}
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           PORTFOLIO
//       =================================================== */}

//       <section
//         className="projects-list"
//         id="portfolio"
//       >
//         <div className="container">

//           <div className="projects-list-head">
//             <div>
//               <span className="eyebrow">
//                 Featured Portfolio
//               </span>

//               <h2>
//                 Selected
//                 <span> developments.</span>
//               </h2>
//             </div>

//             <p>
//               A selection of current development concepts
//               representing the broader Elevate Infra vision.
//             </p>
//           </div>

//           <div className="portfolio-note">
//             Portfolio information marked with * represents
//             current concept / indicative information and can
//             be replaced with final project data.
//           </div>

//           <div className="projects-grid">

//             {projectList.length === 0 ? (
//               <div>
//                 Loading developments...
//               </div>
//             ) : (
//               projectList.map(
//                 (project, index) => (
//                   <Link
//                     className="project-card"
//                     to={`/projects/${project.id}`}
//                     key={project.id}
//                   >
//                     <div className="project-card-image">

//                       <img
//                         src={project.img}
//                         alt={project.title}
//                       />

//                       <span className="project-number">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="project-type">
//                         {project.type}
//                       </span>
//                     </div>

//                     <div className="project-card-content">

//                       <div className="project-card-top">
//                         <span>
//                           {project.location}
//                         </span>

//                         <span>
//                           {project.area}
//                         </span>
//                       </div>

//                       <h3>
//                         {project.title}
//                       </h3>

//                       <p>
//                         {project.desc}
//                       </p>

//                       <div className="project-card-bottom">
//                         <span>
//                           {project.status}
//                         </span>

//                         <b>
//                           View Development{" "}
//                           <i>↗</i>
//                         </b>
//                       </div>

//                     </div>
//                   </Link>
//                 )
//               )
//             )}

//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           DEVELOPMENT APPROACH
//       =================================================== */}

//       <section className="projects-approach">
//         <div className="container projects-approach-grid">

//           <div className="projects-approach-image">
//             <img
//               src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=90"
//               alt="Premium architectural interior"
//             />
//           </div>

//           <div className="projects-approach-copy">

//             <span className="eyebrow">
//               Development Approach
//             </span>

//             <h2>
//               Every project begins with
//               <span> a better question.</span>
//             </h2>

//             <p>
//               What should this place become? Who will use it?
//               How should it connect with its surroundings?
//               What will make it relevant five, ten or twenty
//               years from now?
//             </p>

//             <p>
//               These questions influence how we look at
//               opportunity, planning, architecture and
//               execution.
//             </p>

//             <div className="approach-points">

//               <div>
//                 <b>01</b>
//                 <span>
//                   Understand the location
//                 </span>
//               </div>

//               <div>
//                 <b>02</b>
//                 <span>
//                   Define the opportunity
//                 </span>
//               </div>

//               <div>
//                 <b>03</b>
//                 <span>
//                   Create the development vision
//                 </span>
//               </div>

//               <div>
//                 <b>04</b>
//                 <span>
//                   Build long-term value
//                 </span>
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ===================================================
//           DEVELOPMENT TYPES
//       =================================================== */}

//       <section className="projects-types">
//         <div className="container">

//           <div className="projects-list-head">
//             <div>
//               <span className="eyebrow">
//                 Development Directions
//               </span>

//               <h2>
//                 Different places.
//                 <span> One standard.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="projects-types-grid">

//             <article>
//               <span>01</span>

//               <h3>
//                 Residential
//               </h3>

//               <p>
//                 Communities designed around liveability,
//                 thoughtful planning, comfort and everyday
//                 experience.
//               </p>

//               <Link to="/projects/elevate-greens">
//                 Explore Residential →
//               </Link>
//             </article>

//             <article>
//               <span>02</span>

//               <h3>
//                 Urban Living
//               </h3>

//               <p>
//                 Contemporary urban developments balancing
//                 location, efficient layouts, amenities and
//                 connectivity.
//               </p>

//               <Link to="/projects/elevate-heights">
//                 Explore Urban Living →
//               </Link>
//             </article>

//             <article>
//               <span>03</span>

//               <h3>
//                 Commercial
//               </h3>

//               <p>
//                 Business environments created around identity,
//                 accessibility, infrastructure and future
//                 adaptability.
//               </p>

//               <Link to="/projects/elevate-business-district">
//                 Explore Commercial →
//               </Link>
//             </article>

//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           CTA
//       =================================================== */}

//       <section className="projects-cta">
//         <div className="container">

//           <span className="eyebrow">
//             Build With Elevate
//           </span>

//           <h2>
//             Have a land or development
//             <span> opportunity?</span>
//           </h2>

//           <p>
//             Let's explore the potential, understand the
//             opportunity and shape the right development
//             direction together.
//           </p>

//           <div className="projects-cta-actions">

//             <Link
//               className="btn"
//               to="/contact"
//             >
//               Start a Conversation ↗
//             </Link>

//             <Link
//               className="btn projects-cta-outline"
//               to="/about"
//             >
//               About Elevate Infra
//             </Link>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

import {
  getProjects,
  saveProjects,
} from "../data/siteData";

/* =========================================================
   DEFAULT PROJECTS
========================================================= */

const defaultProjects = [
  {
    id: "elevate-greens",
    title: "Elevate Greens",
    type: "Premium Residential",
    location: "NCR Region",
    status: "Concept / Under Development*",
    area: "1.2M Sq. Ft.*",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    desc:
      "A landscaped residential community envisioned around natural light, open spaces, thoughtful planning and contemporary family living.",
  },
  {
    id: "elevate-heights",
    title: "Elevate Heights",
    type: "Urban Residential",
    location: "Delhi NCR",
    status: "Concept Stage*",
    area: "850K Sq. Ft.*",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    desc:
      "An urban residential concept balancing efficient planning, refined amenities, connectivity and a strong sense of arrival.",
  },
  {
    id: "elevate-business-district",
    title: "Elevate Business District",
    type: "Commercial",
    location: "Noida",
    status: "Concept Stage*",
    area: "450K Sq. Ft.*",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
    desc:
      "A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure.",
  },
];

/* =========================================================
   CAROUSEL
========================================================= */

const carouselSlides = [
  {
    title: "Residential spaces designed for life.",
    text:
      "Thoughtful communities where architecture, landscape, connectivity and everyday experience come together.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "Architecture with a sense of identity.",
    text:
      "Development concepts created with a focus on character, functionality and long-term relevance.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "Business destinations for tomorrow.",
    text:
      "Contemporary commercial environments planned around connectivity, accessibility and future growth.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
  },
];

/* =========================================================
   COMPATIBILITY EXPORT
========================================================= */

export let projects = defaultProjects;

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function Projects() {
  const [projectList, setProjectList] = useState(defaultProjects);
  const [activeSlide, setActiveSlide] = useState(0);

  /* =======================================================
     LOAD PROJECTS
  ======================================================= */

  useEffect(() => {
    const storedProjects = getProjects();

    if (!storedProjects || storedProjects.length === 0) {
      saveProjects(defaultProjects);
      setProjectList(defaultProjects);
      projects = defaultProjects;
    } else {
      setProjectList(storedProjects);
      projects = storedProjects;
    }
  }, []);

  /* =======================================================
     ADMIN / LOCAL STORAGE UPDATE
  ======================================================= */

  useEffect(() => {
    const handleDataUpdate = () => {
      const updatedProjects = getProjects();

      if (updatedProjects && updatedProjects.length > 0) {
        setProjectList(updatedProjects);
        projects = updatedProjects;
      }
    };

    window.addEventListener(
      "elevate-data-updated",
      handleDataUpdate
    );

    window.addEventListener(
      "storage",
      handleDataUpdate
    );

    return () => {
      window.removeEventListener(
        "elevate-data-updated",
        handleDataUpdate
      );

      window.removeEventListener(
        "storage",
        handleDataUpdate
      );
    };
  }, []);

  /* =======================================================
     AUTO CAROUSEL
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % carouselSlides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     CAROUSEL CONTROLS
  ======================================================= */

  const nextSlide = () => {
    setActiveSlide(
      (prev) => (prev + 1) % carouselSlides.length
    );
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + carouselSlides.length) %
        carouselSlides.length
    );
  };

  /* =======================================================
     PROJECT STATISTICS
  ======================================================= */

  const residentialCount = projectList.filter((project) =>
    project.type
      ?.toLowerCase()
      .includes("residential")
  ).length;

  const commercialCount = projectList.filter((project) =>
    project.type
      ?.toLowerCase()
      .includes("commercial")
  ).length;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="page-hero projects-hero">
        <div className="container projects-hero-content">
          <span className="eyebrow">
            Our Developments
          </span>

          <h1 className="page-title">
            Ideas shaped into
            <br />
            <span>valuable places.</span>
          </h1>

          <p>
            Explore residential and commercial development
            concepts that reflect the Elevate Infra approach
            to planning, design and long-term value creation.
          </p>

          <div className="projects-hero-actions">
            <a
              href="#portfolio"
              className="btn"
            >
              Explore Portfolio ↓
            </a>

            <Link
              to="/contact"
              className="btn projects-outline-btn"
            >
              Discuss a Development
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="projects-intro">
        <div className="container projects-intro-grid">
          <div>
            <span className="eyebrow">
              The Portfolio
            </span>

            <h2>
              Developments shaped around
              <span> opportunity.</span>
            </h2>
          </div>

          <div>
            <p>
              Every development starts with a different
              opportunity. Our role is to understand the
              location, identify its potential and shape a
              development vision that responds to its context.
            </p>

            <p>
              From residential communities to commercial
              destinations, our portfolio represents an
              evolving approach to creating places with
              purpose, identity and long-term relevance.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          STATS
      =================================================== */}

      <section className="projects-stats">
        <div className="container projects-stats-grid">
          <div>
            <strong>
              {String(projectList.length).padStart(2, "0")}
            </strong>

            <span>
              Featured Concepts
            </span>
          </div>

          <div>
            <strong>
              {String(residentialCount).padStart(2, "0")}
            </strong>

            <span>
              Residential Directions
            </span>
          </div>

          <div>
            <strong>
              {String(commercialCount).padStart(2, "0")}
            </strong>

            <span>
              Commercial Directions
            </span>
          </div>

          <div>
            <strong>360°</strong>

            <span>
              Development Approach
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================
          LARGE CAROUSEL
      =================================================== */}

      <section className="projects-carousel">
        <div className="projects-carousel-stage">

          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`projects-slide ${
                activeSlide === index
                  ? "active"
                  : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
              />

              <div className="projects-slide-overlay" />

              <div className="container projects-slide-content">
                <span className="eyebrow">
                  Elevate Infra / Perspective
                </span>

                <h2>
                  {slide.title}
                </h2>

                <p>
                  {slide.text}
                </p>

                <Link
                  className="btn"
                  to="/contact"
                >
                  Enquire About Development ↗
                </Link>
              </div>
            </div>
          ))}

          {/* CONTROLS */}

          <div className="projects-carousel-controls">

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <div className="projects-dots">
              {carouselSlides.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    activeSlide === index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveSlide(index)
                  }
                  aria-label={`Go to slide ${
                    index + 1
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              →
            </button>

          </div>

          <div className="projects-slide-number">
            0{activeSlide + 1}

            <span>
              / 0{carouselSlides.length}
            </span>
          </div>

        </div>
      </section>

      {/* ===================================================
          PORTFOLIO
      =================================================== */}

      <section
        className="projects-list"
        id="portfolio"
      >
        <div className="container">

          <div className="projects-list-head">

            <div>
              <span className="eyebrow">
                Featured Portfolio
              </span>

              <h2>
                Selected
                <span> developments.</span>
              </h2>
            </div>

            <p>
              A selection of current development concepts
              representing the broader Elevate Infra vision.
            </p>

          </div>

          <div className="portfolio-note">
            Portfolio information marked with * represents
            current concept / indicative information and can
            be replaced with final project data.
          </div>

          <div className="projects-grid">

            {projectList.map((project, index) => (
              <Link
                className="project-card"
                to={`/projects/${project.id}`}
                key={project.id}
              >

                <div className="project-card-image">

                  <img
                    src={project.img}
                    alt={project.title}
                  />

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>

                </div>

                <div className="project-card-content">

                  <div className="project-card-top">

                    <span>
                      {project.location}
                    </span>

                    <span>
                      {project.area}
                    </span>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.desc}
                  </p>

                  <div className="project-card-bottom">

                    <span>
                      {project.status}
                    </span>

                    <b>
                      View Development{" "}
                      <i>↗</i>
                    </b>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ===================================================
          DEVELOPMENT APPROACH
      =================================================== */}

      <section className="projects-approach">
        <div className="container projects-approach-grid">

          <div className="projects-approach-image">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=90"
              alt="Premium architectural interior"
            />
          </div>

          <div className="projects-approach-copy">

            <span className="eyebrow">
              Development Approach
            </span>

            <h2>
              Every project begins with
              <span> a better question.</span>
            </h2>

            <p>
              What should this place become? Who will use it?
              How should it connect with its surroundings?
              What will make it relevant five, ten or twenty
              years from now?
            </p>

            <p>
              These questions influence how we look at
              opportunity, planning, architecture and
              execution.
            </p>

            <div className="approach-points">

              <div>
                <b>01</b>
                <span>
                  Understand the location
                </span>
              </div>

              <div>
                <b>02</b>
                <span>
                  Define the opportunity
                </span>
              </div>

              <div>
                <b>03</b>
                <span>
                  Create the development vision
                </span>
              </div>

              <div>
                <b>04</b>
                <span>
                  Build long-term value
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          DEVELOPMENT TYPES
      =================================================== */}

      <section className="projects-types">
        <div className="container">

          <div className="projects-list-head">

            <div>
              <span className="eyebrow">
                Development Directions
              </span>

              <h2>
                Different places.
                <span> One standard.</span>
              </h2>
            </div>

          </div>

          <div className="projects-types-grid">

            <article>
              <span>01</span>

              <h3>
                Residential
              </h3>

              <p>
                Communities designed around liveability,
                thoughtful planning, comfort and everyday
                experience.
              </p>

              <Link to="/projects/elevate-greens">
                Explore Residential →
              </Link>
            </article>

            <article>
              <span>02</span>

              <h3>
                Urban Living
              </h3>

              <p>
                Contemporary urban developments balancing
                location, efficient layouts, amenities and
                connectivity.
              </p>

              <Link to="/projects/elevate-heights">
                Explore Urban Living →
              </Link>
            </article>

            <article>
              <span>03</span>

              <h3>
                Commercial
              </h3>

              <p>
                Business environments created around identity,
                accessibility, infrastructure and future
                adaptability.
              </p>

              <Link to="/projects/elevate-business-district">
                Explore Commercial →
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="projects-cta">
        <div className="container">

          <span className="eyebrow">
            Build With Elevate
          </span>

          <h2>
            Have a land or development
            <span> opportunity?</span>
          </h2>

          <p>
            Let's explore the potential, understand the
            opportunity and shape the right development
            direction together.
          </p>

          <div className="projects-cta-actions">

            <Link
              className="btn"
              to="/contact"
            >
              Start a Conversation ↗
            </Link>

            <Link
              className="btn projects-cta-outline"
              to="/about"
            >
              About Elevate Infra
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}