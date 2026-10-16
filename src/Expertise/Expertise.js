// // // import React from"react";import{Link}from"react-router-dom";import"./Expertise.css";
// // // const items=[["01","Development Strategy","Site understanding, feasibility, product positioning and a clear roadmap before execution begins."],["02","Residential Development","Communities planned around liveability, efficient layouts, amenities and long-term value."],["03","Commercial Development","Workplaces and business destinations designed for identity, performance and connectivity."],["04","Planning & Design","Coordination of architecture, engineering, landscape and user experience around one vision."],["05","Project Execution","Structured procurement, construction coordination, quality review and delivery discipline."],["06","Partnership & Value Creation","Collaborative development models for landowners, investors and strategic partners."]];
// // // export default function Expertise(){return <><section className="page-hero expertise-hero"><div className="container"><span className="eyebrow">Our Expertise</span><h1 className="page-title">One development journey.<br/><span className="gold">Connected end to end.</span></h1><p>Our role is to connect strategy, design, execution and commercial thinking so every project moves with clarity.</p></div></section><section className="section expertise-list"><div className="container"><div className="section-head"><div><span className="eyebrow">What We Do</span><h2 className="section-title">Capability across the <span>development lifecycle.</span></h2></div></div><div className="expertise-grid">{items.map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section><section className="expertise-banner"><div className="container expertise-banner-copy"><span className="eyebrow">Integrated Thinking</span><h2>Better coordination creates <span>better real estate.</span></h2><p>By treating each discipline as part of one development system, we aim to reduce friction, improve decisions and protect the project's long-term value.</p><Link className="btn" to="/projects">Explore Developments ↗</Link></div></section></>}
// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Expertise.css";

// // const items = [
// //   {
// //     no: "01",
// //     title: "Development Strategy",
// //     text:
// //       "Understanding site potential, feasibility, market context and product positioning before development begins.",
// //   },
// //   {
// //     no: "02",
// //     title: "Residential Development",
// //     text:
// //       "Creating thoughtfully planned communities around liveability, efficient layouts, amenities and long-term relevance.",
// //   },
// //   {
// //     no: "03",
// //     title: "Commercial Development",
// //     text:
// //       "Developing contemporary business environments focused on accessibility, performance, identity and user experience.",
// //   },
// //   {
// //     no: "04",
// //     title: "Planning & Design",
// //     text:
// //       "Coordinating architecture, engineering, landscape and functionality around one clear development vision.",
// //   },
// //   {
// //     no: "05",
// //     title: "Project Execution",
// //     text:
// //       "Structured coordination, procurement, quality review and execution discipline from planning through delivery.",
// //   },
// //   {
// //     no: "06",
// //     title: "Partnership & Value Creation",
// //     text:
// //       "Exploring collaborative development opportunities with landowners, investors and strategic partners.",
// //   },
// // ];

// // const process = [
// //   {
// //     no: "01",
// //     title: "Discover",
// //     text:
// //       "We begin by understanding the site, location, connectivity, opportunity and surrounding market.",
// //   },
// //   {
// //     no: "02",
// //     title: "Strategise",
// //     text:
// //       "Development potential is translated into a clear product, positioning and commercial strategy.",
// //   },
// //   {
// //     no: "03",
// //     title: "Design",
// //     text:
// //       "Architecture, engineering, landscape and experience are coordinated around one vision.",
// //   },
// //   {
// //     no: "04",
// //     title: "Execute",
// //     text:
// //       "Structured processes and quality controls help translate planning into built reality.",
// //   },
// //   {
// //     no: "05",
// //     title: "Deliver",
// //     text:
// //       "The final focus is on creating a development that performs for users, partners and its location.",
// //   },
// // ];

// // const carousel = [
// //   {
// //     tag: "Residential Development",
// //     title: "Creating places designed around everyday life.",
// //     text:
// //       "Our residential approach focuses on thoughtful planning, usable spaces, connectivity, landscape and the details that shape everyday living.",
// //     image:
// //       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
// //   },
// //   {
// //     tag: "Commercial Development",
// //     title: "Business environments built for performance.",
// //     text:
// //       "Commercial development requires the right balance of visibility, accessibility, efficiency, architecture and long-term adaptability.",
// //     image:
// //       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88",
// //   },
// //   {
// //     tag: "Planning & Design",
// //     title: "Good development starts with better decisions.",
// //     text:
// //       "Before construction begins, planning decisions establish how a development will function, feel and continue to create value over time.",
// //     image:
// //       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88",
// //   },
// //   {
// //     tag: "Development Partnerships",
// //     title: "Unlocking potential through collaboration.",
// //     text:
// //       "We aim to create aligned partnerships where land potential, development expertise and long-term commercial thinking work together.",
// //     image:
// //       "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=88",
// //   },
// // ];

// // const principles = [
// //   {
// //     no: "01",
// //     title: "Clarity",
// //     text:
// //       "Clear objectives and informed decisions before major commitments are made.",
// //   },
// //   {
// //     no: "02",
// //     title: "Coordination",
// //     text:
// //       "Bringing multiple disciplines together instead of treating them as disconnected activities.",
// //   },
// //   {
// //     no: "03",
// //     title: "Quality",
// //     text:
// //       "Attention to planning, materials, detailing and execution throughout the development process.",
// //   },
// //   {
// //     no: "04",
// //     title: "Value",
// //     text:
// //       "Balancing experience, efficiency and commercial thinking with a long-term perspective.",
// //   },
// // ];

// // export default function Expertise() {
// //   const [activeSlide, setActiveSlide] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setActiveSlide((prev) => (prev + 1) % carousel.length);
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const nextSlide = () => {
// //     setActiveSlide((prev) => (prev + 1) % carousel.length);
// //   };

// //   const prevSlide = () => {
// //     setActiveSlide(
// //       (prev) => (prev - 1 + carousel.length) % carousel.length
// //     );
// //   };

// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ===================================================== */}

// //       <section className="page-hero expertise-hero">
// //         <div className="container expertise-hero-content">
// //           <span className="eyebrow">Our Expertise</span>

// //           <h1 className="page-title">
// //             One development journey.
// //             <br />
// //             <span>Connected end to end.</span>
// //           </h1>

// //           <p>
// //             We connect strategy, planning, design, execution and
// //             commercial thinking to create a more coordinated
// //             approach to real estate development.
// //           </p>

// //           <div className="expertise-hero-actions">
// //             <Link className="btn" to="/projects">
// //               Explore Developments ↗
// //             </Link>

// //             <Link
// //               className="btn expertise-outline-btn"
// //               to="/contact"
// //             >
// //               Discuss an Opportunity
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           INTRO
// //       ===================================================== */}

// //       <section className="expertise-intro">
// //         <div className="container expertise-intro-grid">
// //           <div>
// //             <span className="eyebrow">Integrated Expertise</span>

// //             <h2>
// //               Development works better when
// //               <span> everything works together.</span>
// //             </h2>
// //           </div>

// //           <div className="expertise-intro-copy">
// //             <p>
// //               Real estate development involves far more than
// //               construction. Every successful project is shaped by
// //               decisions around land, feasibility, positioning,
// //               planning, architecture, engineering, execution and
// //               commercial strategy.
// //             </p>

// //             <p>
// //               Our approach is to connect these disciplines rather
// //               than treat them as isolated stages. This creates
// //               greater clarity, stronger coordination and a more
// //               consistent development vision.
// //             </p>

// //             <Link className="expertise-text-link" to="/about">
// //               Learn about Elevate Infra →
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           SMALL STRIP
// //       ===================================================== */}

// //       <section className="expertise-strip">
// //         <div className="container expertise-strip-grid">
// //           <div>
// //             <strong>Strategy</strong>
// //             <span>Understanding the opportunity</span>
// //           </div>

// //           <div>
// //             <strong>Planning</strong>
// //             <span>Creating the development framework</span>
// //           </div>

// //           <div>
// //             <strong>Execution</strong>
// //             <span>Translating vision into reality</span>
// //           </div>

// //           <div>
// //             <strong>Value</strong>
// //             <span>Thinking beyond project delivery</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           CAPABILITIES
// //       ===================================================== */}

// //       <section className="expertise-list">
// //         <div className="container">
// //           <div className="expertise-section-head">
// //             <div>
// //               <span className="eyebrow">What We Do</span>

// //               <h2>
// //                 Capability across the
// //                 <span> development lifecycle.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               Our capabilities cover the key stages required to
// //               take an opportunity from initial thinking to a
// //               coordinated real estate development.
// //             </p>
// //           </div>

// //           <div className="expertise-grid">
// //             {items.map((item) => (
// //               <article key={item.no}>
// //                 <b>{item.no}</b>

// //                 <h3>{item.title}</h3>

// //                 <p>{item.text}</p>

// //                 <span className="expertise-card-arrow">↗</span>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           CAROUSEL
// //       ===================================================== */}

// //       <section className="expertise-carousel">
// //         <div className="expertise-carousel-stage">
// //           {carousel.map((slide, index) => (
// //             <div
// //               key={index}
// //               className={`expertise-carousel-slide ${
// //                 index === activeSlide ? "active" : ""
// //               }`}
// //             >
// //               <img src={slide.image} alt={slide.tag} />

// //               <div className="expertise-carousel-overlay" />

// //               <div className="container expertise-carousel-content">
// //                 <span className="eyebrow">{slide.tag}</span>

// //                 <h2>{slide.title}</h2>

// //                 <p>{slide.text}</p>

// //                 <Link className="btn" to="/contact">
// //                   Start a Conversation ↗
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="expertise-carousel-controls">
// //             <button
// //               onClick={prevSlide}
// //               aria-label="Previous slide"
// //             >
// //               ←
// //             </button>

// //             <div className="expertise-carousel-dots">
// //               {carousel.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   className={
// //                     activeSlide === index ? "active" : ""
// //                   }
// //                   onClick={() => setActiveSlide(index)}
// //                   aria-label={`Slide ${index + 1}`}
// //                 />
// //               ))}
// //             </div>

// //             <button
// //               onClick={nextSlide}
// //               aria-label="Next slide"
// //             >
// //               →
// //             </button>
// //           </div>

// //           <div className="expertise-slide-count">
// //             0{activeSlide + 1}
// //             <span>/ 0{carousel.length}</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           PROCESS
// //       ===================================================== */}

// //       <section className="expertise-process">
// //         <div className="container">
// //           <div className="expertise-section-head">
// //             <div>
// //               <span className="eyebrow">Our Process</span>

// //               <h2>
// //                 From opportunity to
// //                 <span> built reality.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               Our process creates a clear path through the
// //               complexity of development while keeping the
// //               original vision connected to execution.
// //             </p>
// //           </div>

// //           <div className="expertise-process-grid">
// //             {process.map((item) => (
// //               <div className="process-card" key={item.no}>
// //                 <span>{item.no}</span>

// //                 <h3>{item.title}</h3>

// //                 <p>{item.text}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           IMAGE + THINKING
// //       ===================================================== */}

// //       <section className="expertise-thinking">
// //         <div className="container expertise-thinking-grid">
// //           <div className="expertise-thinking-images">
// //             <img
// //               className="thinking-main-image"
// //               src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=88"
// //               alt="Modern architecture"
// //             />

// //             <div className="thinking-small-box">
// //               <strong>360°</strong>
// //               <span>
// //                 Integrated development thinking
// //               </span>
// //             </div>
// //           </div>

// //           <div className="expertise-thinking-copy">
// //             <span className="eyebrow">
// //               Integrated Thinking
// //             </span>

// //             <h2>
// //               Better coordination creates
// //               <span> better real estate.</span>
// //             </h2>

// //             <p>
// //               A project may involve architects, engineers,
// //               consultants, contractors, financial stakeholders
// //               and multiple operational teams. The quality of the
// //               final development depends on how effectively these
// //               disciplines work together.
// //             </p>

// //             <p>
// //               Our development approach focuses on maintaining
// //               clarity between these moving parts so that
// //               important decisions remain connected to the
// //               project's broader objectives.
// //             </p>

// //             <Link className="btn" to="/projects">
// //               Explore Developments ↗
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           PRINCIPLES
// //       ===================================================== */}

// //       <section className="expertise-principles">
// //         <div className="container">
// //           <div className="expertise-section-head">
// //             <div>
// //               <span className="eyebrow">
// //                 How We Work
// //               </span>

// //               <h2>
// //                 Four principles.
// //                 <span> One development mindset.</span>
// //               </h2>
// //             </div>
// //           </div>

// //           <div className="expertise-principles-grid">
// //             {principles.map((item) => (
// //               <article key={item.no}>
// //                 <span>{item.no}</span>

// //                 <h3>{item.title}</h3>

// //                 <p>{item.text}</p>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           PARTNERSHIP
// //       ===================================================== */}

// //       <section className="expertise-partnership">
// //         <div className="container expertise-partnership-grid">
// //           <div>
// //             <span className="eyebrow">
// //               Development Partnerships
// //             </span>

// //             <h2>
// //               Unlocking potential
// //               <span> together.</span>
// //             </h2>
// //           </div>

// //           <div>
// //             <p>
// //               Some of the strongest development opportunities
// //               begin with the right partnership. We are open to
// //               exploring opportunities with landowners, investors
// //               and strategic partners where our development
// //               capabilities can create shared value.
// //             </p>

// //             <p>
// //               Our objective is to approach each opportunity with
// //               clear commercial thinking, transparent
// //               communication and a long-term perspective.
// //             </p>

// //             <Link className="btn" to="/contact">
// //               Discuss a Partnership ↗
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           FINAL CTA
// //       ===================================================== */}

// //       <section className="expertise-final-cta">
// //         <div className="container">
// //           <span className="eyebrow">
// //             Elevate Infra
// //           </span>

// //           <h2>
// //             Have a development
// //             <span> opportunity in mind?</span>
// //           </h2>

// //           <p>
// //             Connect with us to discuss land, development,
// //             collaboration or strategic real estate opportunities.
// //           </p>

// //           <div className="expertise-cta-actions">
// //             <Link className="btn" to="/contact">
// //               Start a Conversation ↗
// //             </Link>

// //             <Link
// //               className="btn expertise-final-outline"
// //               to="/projects"
// //             >
// //               View Developments
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Expertise.css";

// import {
//   getExpertise,
//   saveExpertise,
// } from "../data/siteData";

// /* =========================================================
//    DEFAULT EXPERTISE DATA
// ========================================================= */

// const defaultExpertise = [
//   {
//     id: "expertise-01",
//     number: "01",
//     title: "Land & Feasibility",
//     shortTitle: "Land & Feasibility",
//     description:
//       "We evaluate location, market potential, site characteristics, development possibilities and project feasibility before defining the right direction.",
//     image:
//       "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=90",
//   },
//   {
//     id: "expertise-02",
//     number: "02",
//     title: "Planning & Development",
//     shortTitle: "Planning & Development",
//     description:
//       "From development strategy to product planning, we bring commercial thinking, functionality and long-term value together.",
//     image:
//       "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=90",
//   },
//   {
//     id: "expertise-03",
//     number: "03",
//     title: "Architecture & Design",
//     shortTitle: "Architecture & Design",
//     description:
//       "We believe design should create identity while improving usability, experience, efficiency and the overall quality of a development.",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
//   },
//   {
//     id: "expertise-04",
//     number: "04",
//     title: "Project Execution",
//     shortTitle: "Project Execution",
//     description:
//       "Strong coordination, quality control and disciplined execution help convert development vision into dependable physical outcomes.",
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=90",
//   },
//   {
//     id: "expertise-05",
//     number: "05",
//     title: "Partnerships",
//     shortTitle: "Partnerships",
//     description:
//       "We work with landowners, consultants, contractors, investors and other stakeholders to create aligned development opportunities.",
//     image:
//       "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=90",
//   },
//   {
//     id: "expertise-06",
//     number: "06",
//     title: "Asset Value Creation",
//     shortTitle: "Value Creation",
//     description:
//       "Our development approach considers the complete lifecycle of an asset and focuses on creating relevance, usability and long-term value.",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=90",
//   },
// ];

// /* =========================================================
//    CAROUSEL DATA
// ========================================================= */

// const defaultCarouselSlides = [
//   {
//     title: "From opportunity to development.",
//     text:
//       "We connect land potential, market understanding, planning and design into one clear development strategy.",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90",
//   },
//   {
//     title: "Design with purpose.",
//     text:
//       "Architecture and planning are developed around functionality, identity, experience and long-term relevance.",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90",
//   },
//   {
//     title: "Execution that creates confidence.",
//     text:
//       "Disciplined coordination and quality-focused execution help transform a development vision into reality.",
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90",
//   },
// ];

// /* =========================================================
//    EXPERTISE PAGE
// ========================================================= */

// export default function Expertise() {
//   const [expertise, setExpertise] = useState([]);
//   const [activeSlide, setActiveSlide] = useState(0);

//   /* =======================================================
//      LOAD EXPERTISE
//   ======================================================= */

//   useEffect(() => {
//     let storedExpertise = getExpertise();

//     if (!storedExpertise || storedExpertise.length === 0) {
//       saveExpertise(defaultExpertise);
//       storedExpertise = defaultExpertise;
//     }

//     setExpertise(storedExpertise);
//   }, []);

//   /* =======================================================
//      LISTEN FOR ADMIN / STORAGE UPDATES
//   ======================================================= */

//   useEffect(() => {
//     const handleDataUpdate = () => {
//       const updatedExpertise = getExpertise();

//       if (updatedExpertise && updatedExpertise.length > 0) {
//         setExpertise(updatedExpertise);
//       } else {
//         setExpertise([]);
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
//         (previous) =>
//           (previous + 1) % defaultCarouselSlides.length
//       );
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   /* =======================================================
//      CAROUSEL CONTROLS
//   ======================================================= */

//   const nextSlide = () => {
//     setActiveSlide(
//       (previous) =>
//         (previous + 1) % defaultCarouselSlides.length
//     );
//   };

//   const previousSlide = () => {
//     setActiveSlide(
//       (previous) =>
//         (previous - 1 + defaultCarouselSlides.length) %
//         defaultCarouselSlides.length
//     );
//   };

//   const currentSlide =
//     defaultCarouselSlides[activeSlide];

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="page-hero expertise-hero">
//         <div className="container">
//           <span className="eyebrow">
//             Our Expertise
//           </span>

//           <h1 className="page-title">
//             Development is
//             <br />
//             more than
//             <br />
//             <span>construction.</span>
//           </h1>

//           <p>
//             We bring together strategy, feasibility,
//             planning, design, execution and partnerships
//             to create real estate with lasting relevance.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="section expertise-intro">
//         <div className="container expertise-intro-grid">
//           <div>
//             <span className="eyebrow">
//               The Development Approach
//             </span>

//             <h2 className="section-title">
//               One vision.
//               <br />
//               <span>
//                 Many disciplines.
//               </span>
//             </h2>
//           </div>

//           <div>
//             <p>
//               Successful real estate development requires
//               decisions to work together. Location, feasibility,
//               architecture, engineering, finance, execution
//               and customer experience cannot operate in
//               isolation.
//             </p>

//             <p>
//               Our approach connects these disciplines around
//               a clear development vision — helping every stage
//               contribute to the performance and identity of
//               the final asset.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CAROUSEL
//       ===================================================== */}

//       <section className="expertise-carousel">
//         <div className="expertise-carousel-image">
//           <img
//             src={currentSlide.image}
//             alt={currentSlide.title}
//           />

//           <div className="expertise-carousel-overlay"></div>
//         </div>

//         <div className="container expertise-carousel-content">
//           <div className="expertise-carousel-copy">
//             <span className="eyebrow">
//               How We Think
//             </span>

//             <h2>
//               {currentSlide.title}
//             </h2>

//             <p>
//               {currentSlide.text}
//             </p>

//             <div className="expertise-carousel-controls">
//               <button
//                 type="button"
//                 onClick={previousSlide}
//                 aria-label="Previous slide"
//               >
//                 ←
//               </button>

//               <span>
//                 {String(activeSlide + 1).padStart(2, "0")}
//                 {" / "}
//                 {String(
//                   defaultCarouselSlides.length
//                 ).padStart(2, "0")}
//               </span>

//               <button
//                 type="button"
//                 onClick={nextSlide}
//                 aria-label="Next slide"
//               >
//                 →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CAPABILITIES
//       ===================================================== */}

//       <section className="section expertise-capabilities">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Development Capabilities
//               </span>

//               <h2 className="section-title">
//                 From land
//                 <span>
//                   {" "}
//                   to lasting value.
//                 </span>
//               </h2>
//             </div>

//             <p className="muted">
//               A connected approach across the development
//               lifecycle.
//             </p>
//           </div>

//           {expertise.length > 0 ? (
//             <div className="expertise-grid">
//               {expertise.map((item, index) => (
//                 <article
//                   className="expertise-card"
//                   key={item.id || index}
//                 >
//                   <div className="expertise-card-image">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                     />

//                     <div className="expertise-card-overlay"></div>

//                     <span>
//                       {item.number ||
//                         String(index + 1).padStart(
//                           2,
//                           "0"
//                         )}
//                     </span>
//                   </div>

//                   <div className="expertise-card-content">
//                     <span className="expertise-card-number">
//                       {item.number ||
//                         String(index + 1).padStart(
//                           2,
//                           "0"
//                         )}
//                     </span>

//                     <h3>
//                       {item.title}
//                     </h3>

//                     <p>
//                       {item.description}
//                     </p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <div
//               style={{
//                 padding: "70px 20px",
//                 textAlign: "center",
//               }}
//             >
//               <span className="eyebrow">
//                 Expertise
//               </span>

//               <h3
//                 style={{
//                   marginTop: "12px",
//                   fontFamily:
//                     '"Playfair Display", serif',
//                   fontSize: "32px",
//                 }}
//               >
//                 Expertise information
//                 coming soon
//               </h3>

//               <p
//                 style={{
//                   marginTop: "10px",
//                   opacity: 0.7,
//                 }}
//               >
//                 Development capabilities will appear
//                 here once they are added.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="section expertise-process">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Our Process
//               </span>

//               <h2 className="section-title">
//                 A clear path from
//                 <span>
//                   {" "}
//                   idea to asset.
//                 </span>
//               </h2>
//             </div>
//           </div>

//           <div className="expertise-process-list">
//             <div className="expertise-process-item">
//               <span>01</span>

//               <div>
//                 <h3>
//                   Understand
//                 </h3>

//                 <p>
//                   Study the location, market, opportunity
//                   and development potential.
//                 </p>
//               </div>
//             </div>

//             <div className="expertise-process-item">
//               <span>02</span>

//               <div>
//                 <h3>
//                   Define
//                 </h3>

//                 <p>
//                   Establish the development vision, product
//                   strategy and project direction.
//                 </p>
//               </div>
//             </div>

//             <div className="expertise-process-item">
//               <span>03</span>

//               <div>
//                 <h3>
//                   Design
//                 </h3>

//                 <p>
//                   Translate the strategy into architecture,
//                   planning, engineering and experience.
//                 </p>
//               </div>
//             </div>

//             <div className="expertise-process-item">
//               <span>04</span>

//               <div>
//                 <h3>
//                   Deliver
//                 </h3>

//                 <p>
//                   Coordinate execution with a strong focus
//                   on quality, timelines and accountability.
//                 </p>
//               </div>
//             </div>

//             <div className="expertise-process-item">
//               <span>05</span>

//               <div>
//                 <h3>
//                   Create Value
//                 </h3>

//                 <p>
//                   Build assets that remain useful, relevant
//                   and valuable over the long term.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PRINCIPLES
//       ===================================================== */}

//       <section className="section expertise-principles">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Development Principles
//               </span>

//               <h2 className="section-title">
//                 What makes the
//                 <span>
//                   {" "}
//                   difference.
//                 </span>
//               </h2>
//             </div>
//           </div>

//           <div className="expertise-principles-grid">
//             <article>
//               <span>01</span>

//               <h3>
//                 Location Intelligence
//               </h3>

//               <p>
//                 We start by understanding what makes a
//                 location work — connectivity, demand,
//                 context and future potential.
//               </p>
//             </article>

//             <article>
//               <span>02</span>

//               <h3>
//                 Practical Design
//               </h3>

//               <p>
//                 Good design should look distinctive while
//                 remaining functional, efficient and relevant
//                 to everyday life.
//               </p>
//             </article>

//             <article>
//               <span>03</span>

//               <h3>
//                 Quality Execution
//               </h3>

//               <p>
//                 Strong coordination and attention to detail
//                 are essential to turning development intent
//                 into built quality.
//               </p>
//             </article>

//             <article>
//               <span>04</span>

//               <h3>
//                 Long-Term Thinking
//               </h3>

//               <p>
//                 We consider how a development performs not
//                 just at launch, but years after completion.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PARTNERSHIP
//       ===================================================== */}

//       <section className="expertise-partnership">
//         <div className="container expertise-partnership-grid">
//           <div>
//             <span className="eyebrow">
//               Partnerships
//             </span>

//             <h2>
//               The right people
//               <span>
//                 {" "}
//                 create better projects.
//               </span>
//             </h2>
//           </div>

//           <div>
//             <p>
//               Development is collaborative by nature. We
//               believe the strongest outcomes come from
//               bringing the right landowners, consultants,
//               architects, engineers, contractors, investors
//               and operating partners together.
//             </p>

//             <p>
//               Our objective is to create alignment early,
//               maintain transparency throughout the process
//               and build relationships that can support
//               multiple opportunities over time.
//             </p>

//             <Link
//               to="/contact"
//               className="btn"
//             >
//               Discuss a Partnership ↗
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="expertise-cta">
//         <div className="container">
//           <span className="eyebrow">
//             Explore Elevate Infra
//           </span>

//           <h2>
//             Have an opportunity
//             <br />
//             worth
//             <span>
//               {" "}
//               exploring?
//             </span>
//           </h2>

//           <p>
//             Connect with us to discuss land opportunities,
//             development partnerships and future projects.
//           </p>

//           <div className="expertise-cta-actions">
//             <Link
//               to="/projects"
//               className="btn"
//             >
//               View Developments ↗
//             </Link>

//             <Link
//               to="/contact"
//               className="btn expertise-outline-btn"
//             >
//               Start a Conversation
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Expertise.css";

import {
  getExpertise,
  saveExpertise,
} from "../data/siteData";

/* =========================================================
   DEFAULT EXPERTISE DATA
========================================================= */

const defaultExpertise = [
  {
    id: "expertise-01",
    number: "01",
    title: "Land & Feasibility",
    description:
      "We evaluate location, market potential, site characteristics, development possibilities and project feasibility before defining the right direction.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "expertise-02",
    number: "02",
    title: "Planning & Development",
    description:
      "From development strategy to product planning, we bring commercial thinking, functionality and long-term value together.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "expertise-03",
    number: "03",
    title: "Architecture & Design",
    description:
      "We believe design should create identity while improving usability, experience, efficiency and the overall quality of a development.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "expertise-04",
    number: "04",
    title: "Project Execution",
    description:
      "Strong coordination, quality control and disciplined execution help convert development vision into dependable physical outcomes.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "expertise-05",
    number: "05",
    title: "Partnerships",
    description:
      "We work with landowners, consultants, contractors, investors and other stakeholders to create aligned development opportunities.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "expertise-06",
    number: "06",
    title: "Asset Value Creation",
    description:
      "Our development approach considers the complete lifecycle of an asset and focuses on creating relevance, usability and long-term value.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=90",
  },
];

/* =========================================================
   CAROUSEL
========================================================= */

const carouselSlides = [
  {
    tag: "Development Strategy",
    title: "From opportunity to development.",
    text:
      "We connect land potential, market understanding, planning and design into one clear development strategy.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90",
  },
  {
    tag: "Architecture & Design",
    title: "Design with purpose.",
    text:
      "Architecture and planning are developed around functionality, identity, experience and long-term relevance.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90",
  },
  {
    tag: "Project Execution",
    title: "Execution that creates confidence.",
    text:
      "Disciplined coordination and quality-focused execution help transform a development vision into reality.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90",
  },
  {
    tag: "Development Partnerships",
    title: "Unlocking potential through collaboration.",
    text:
      "The right partnerships bring together land, expertise, capital and long-term thinking to create stronger development opportunities.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    no: "01",
    title: "Understand",
    text:
      "Study the location, market, opportunity and development potential.",
  },
  {
    no: "02",
    title: "Define",
    text:
      "Establish the development vision, product strategy and project direction.",
  },
  {
    no: "03",
    title: "Design",
    text:
      "Translate the strategy into architecture, planning, engineering and experience.",
  },
  {
    no: "04",
    title: "Deliver",
    text:
      "Coordinate execution with a strong focus on quality, timelines and accountability.",
  },
  {
    no: "05",
    title: "Create Value",
    text:
      "Build assets that remain useful, relevant and valuable over the long term.",
  },
];

/* =========================================================
   EXPERTISE PAGE
========================================================= */

export default function Expertise() {
  const [expertise, setExpertise] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  /* =======================================================
     LOAD EXPERTISE DATA
  ======================================================= */

  useEffect(() => {
    const stored = getExpertise();

    if (!stored || stored.length === 0) {
      saveExpertise(defaultExpertise);
      setExpertise(defaultExpertise);
    } else {
      setExpertise(stored);
    }
  }, []);

  /* =======================================================
     ADMIN / STORAGE UPDATE
  ======================================================= */

  useEffect(() => {
    const handleUpdate = () => {
      const updated = getExpertise();

      if (updated && updated.length > 0) {
        setExpertise(updated);
      } else {
        setExpertise(defaultExpertise);
      }
    };

    window.addEventListener(
      "elevate-data-updated",
      handleUpdate
    );

    window.addEventListener(
      "storage",
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        "elevate-data-updated",
        handleUpdate
      );

      window.removeEventListener(
        "storage",
        handleUpdate
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

  const previousSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + carouselSlides.length) %
        carouselSlides.length
    );
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero expertise-hero">
        <div className="container expertise-hero-content">
          <span className="eyebrow">
            Our Expertise
          </span>

          <h1 className="page-title">
            Development is
            <br />
            more than
            <br />
            <span>construction.</span>
          </h1>

          <p>
            We bring together strategy, feasibility,
            planning, design, execution and partnerships
            to create real estate with lasting relevance.
          </p>

          <div className="expertise-hero-actions">
            <Link
              to="/projects"
              className="btn"
            >
              Explore Developments ↗
            </Link>

            <Link
              to="/contact"
              className="btn expertise-outline-btn"
            >
              Discuss an Opportunity
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="section expertise-intro">
        <div className="container expertise-intro-grid">
          <div>
            <span className="eyebrow">
              The Development Approach
            </span>

            <h2>
              One vision.
              <br />
              <span>
                Many disciplines.
              </span>
            </h2>
          </div>

          <div className="expertise-intro-copy">
            <p>
              Successful real estate development requires
              decisions to work together. Location,
              feasibility, architecture, engineering,
              finance, execution and customer experience
              cannot operate in isolation.
            </p>

            <p>
              Our approach connects these disciplines
              around a clear development vision — helping
              every stage contribute to the performance and
              identity of the final asset.
            </p>

            <Link
              to="/about"
              className="expertise-text-link"
            >
              Learn about Elevate Infra →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT STRIP
      ===================================================== */}

      <section className="expertise-strip">
        <div className="container expertise-strip-grid">
          <div>
            <strong>Strategy</strong>
            <span>
              Understanding the opportunity
            </span>
          </div>

          <div>
            <strong>Planning</strong>
            <span>
              Creating the development framework
            </span>
          </div>

          <div>
            <strong>Execution</strong>
            <span>
              Translating vision into reality
            </span>
          </div>

          <div>
            <strong>Value</strong>
            <span>
              Thinking beyond project delivery
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <section className="expertise-carousel">
        <div className="expertise-carousel-stage">

          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`expertise-carousel-slide ${
                index === activeSlide
                  ? "active"
                  : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tag}
              />

              <div className="expertise-carousel-overlay" />

              <div className="container expertise-carousel-content">
                <span className="eyebrow">
                  {slide.tag}
                </span>

                <h2>
                  {slide.title}
                </h2>

                <p>
                  {slide.text}
                </p>

                <Link
                  to="/contact"
                  className="btn"
                >
                  Start a Conversation ↗
                </Link>
              </div>
            </div>
          ))}

          {/* CONTROLS */}

          <div className="expertise-carousel-controls">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <div className="expertise-carousel-dots">
              {carouselSlides.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    index === activeSlide
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

          {/* SLIDE NUMBER */}

          <div className="expertise-slide-count">
            0{activeSlide + 1}
            <span>
              {" "}
              / 0{carouselSlides.length}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="section expertise-list">
        <div className="container">

          <div className="expertise-section-head">
            <div>
              <span className="eyebrow">
                Development Capabilities
              </span>

              <h2>
                From land
                <span>
                  {" "}
                  to lasting value.
                </span>
              </h2>
            </div>

            <p>
              Our capabilities cover the key stages
              required to take an opportunity from initial
              thinking to a coordinated real estate
              development.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article
                key={item.id || index}
              >
                <b>
                  {item.number ||
                    String(index + 1).padStart(
                      2,
                      "0"
                    )}
                </b>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <span className="expertise-card-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="section expertise-process">
        <div className="container">

          <div className="expertise-section-head">
            <div>
              <span className="eyebrow">
                Our Process
              </span>

              <h2>
                A clear path from
                <span>
                  {" "}
                  idea to asset.
                </span>
              </h2>
            </div>

            <p>
              Our process creates a clear path through
              the complexity of development while keeping
              the original vision connected to execution.
            </p>
          </div>

          <div className="expertise-process-grid">
            {process.map((item) => (
              <div
                className="process-card"
                key={item.no}
              >
                <span>
                  {item.no}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATED THINKING
      ===================================================== */}

      <section className="expertise-thinking">
        <div className="container expertise-thinking-grid">

          <div className="expertise-thinking-images">
            <img
              className="thinking-main-image"
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=88"
              alt="Modern architecture"
            />

            <div className="thinking-small-box">
              <strong>360°</strong>

              <span>
                Integrated development
                thinking
              </span>
            </div>
          </div>

          <div className="expertise-thinking-copy">
            <span className="eyebrow">
              Integrated Thinking
            </span>

            <h2>
              Better coordination creates
              <span>
                {" "}
                better real estate.
              </span>
            </h2>

            <p>
              A project may involve architects,
              engineers, consultants, contractors,
              financial stakeholders and multiple
              operational teams. The quality of the final
              development depends on how effectively
              these disciplines work together.
            </p>

            <p>
              Our development approach focuses on
              maintaining clarity between these moving
              parts so that important decisions remain
              connected to the project's broader
              objectives.
            </p>

            <Link
              to="/projects"
              className="btn"
            >
              Explore Developments ↗
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="section expertise-principles">
        <div className="container">

          <div className="expertise-section-head">
            <div>
              <span className="eyebrow">
                Development Principles
              </span>

              <h2>
                What makes the
                <span>
                  {" "}
                  difference.
                </span>
              </h2>
            </div>
          </div>

          <div className="expertise-principles-grid">

            <article>
              <span>01</span>

              <h3>
                Location Intelligence
              </h3>

              <p>
                We start by understanding what makes a
                location work — connectivity, demand,
                context and future potential.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>
                Practical Design
              </h3>

              <p>
                Good design should look distinctive while
                remaining functional, efficient and
                relevant to everyday life.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>
                Quality Execution
              </h3>

              <p>
                Strong coordination and attention to detail
                are essential to turning development intent
                into built quality.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>
                Long-Term Thinking
              </h3>

              <p>
                We consider how a development performs not
                just at launch, but years after completion.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP
      ===================================================== */}

      <section className="expertise-partnership">
        <div className="container expertise-partnership-grid">

          <div>
            <span className="eyebrow">
              Development Partnerships
            </span>

            <h2>
              The right people
              <span>
                {" "}
                create better projects.
              </span>
            </h2>
          </div>

          <div>
            <p>
              Development is collaborative by nature.
              We believe the strongest outcomes come from
              bringing the right landowners, consultants,
              architects, engineers, contractors,
              investors and operating partners together.
            </p>

            <p>
              Our objective is to create alignment early,
              maintain transparency throughout the process
              and build relationships that can support
              multiple opportunities over time.
            </p>

            <Link
              to="/contact"
              className="btn"
            >
              Discuss a Partnership ↗
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="expertise-final-cta">
        <div className="container">

          <span className="eyebrow">
            Explore Elevate Infra
          </span>

          <h2>
            Have an opportunity
            <br />
            worth
            <span>
              {" "}
              exploring?
            </span>
          </h2>

          <p>
            Connect with us to discuss land
            opportunities, development partnerships and
            future projects.
          </p>

          <div className="expertise-cta-actions">

            <Link
              to="/projects"
              className="btn"
            >
              View Developments ↗
            </Link>

            <Link
              to="/contact"
              className="btn expertise-final-outline"
            >
              Start a Conversation
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}