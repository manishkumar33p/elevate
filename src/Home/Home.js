// // // import React from "react";import{Link}from"react-router-dom";import"./Home.css";
// // // const featured=[{id:"elevate-greens",title:"Elevate Greens",type:"Residential",location:"NCR Region",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88"},{id:"elevate-heights",title:"Elevate Heights",type:"Urban Living",location:"Delhi NCR",img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88"},{id:"elevate-business-district",title:"Elevate Business District",type:"Commercial",location:"Noida",img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=88"}];
// // // export default function Home(){return <><section className="home-hero"><div className="container hero-copy"><span className="eyebrow">Real Estate Development</span><h1>Spaces that elevate<br/><em>everyday life.</em></h1><p>Elevate Infra brings together thoughtful planning, contemporary design and disciplined execution to create enduring residential and commercial developments.</p><div className="hero-actions"><Link className="btn" to="/projects">Explore Developments ↗</Link><Link className="btn btn-outline" to="/about">Discover Our Story</Link></div></div><div className="hero-note">DEVELOPER • PLANNER • VALUE CREATOR</div></section><section className="section home-intro"><div className="container intro-grid"><div><span className="eyebrow">The Elevate Perspective</span><h2 className="section-title">We don't just build structures. <span>We shape destinations.</span></h2></div><div className="intro-copy"><p>Our approach begins before construction. We study the location, understand how people will use the space, define a clear development vision and then bring design, engineering and execution together.</p><p>The result is real estate created for long-term relevance — practical today, valuable tomorrow and distinctive for years to come.</p><Link className="text-link" to="/expertise">How we develop →</Link></div></div></section><section className="stats"><div className="container stats-grid"><div><strong>12+</strong><span>Years of collective experience*</span></div><div><strong>08</strong><span>Development opportunities*</span></div><div><strong>2.5M+</strong><span>Sq. ft. vision pipeline*</span></div><div><strong>360°</strong><span>Integrated development approach</span></div></div></section><section className="section featured"><div className="container"><div className="section-head"><div><span className="eyebrow">Featured Developments</span><h2 className="section-title">A portfolio built around <span>possibility.</span></h2></div><Link className="text-link" to="/projects">View portfolio →</Link></div><div className="featured-grid">{featured.map((p,i)=><Link className="feature-card" key={p.id} to={`/projects/${p.id}`}><img src={p.img} alt={p.title}/><div className="feature-shade"/><div className="feature-index">0{i+1}</div><div className="feature-copy"><span>{p.type} • {p.location}</span><h3>{p.title}</h3><b>View development ↗</b></div></Link>)}</div></div></section><section className="section philosophy"><div className="container philosophy-grid"><div className="philosophy-image"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=88" alt="Contemporary development"/></div><div className="philosophy-copy"><span className="eyebrow">Our Development Philosophy</span><h2 className="section-title">Clarity at every stage. <span>Quality at every detail.</span></h2><p>We treat development as one connected process — from site potential and feasibility to architecture, execution, customer experience and long-term asset value.</p><div className="process-list"><div><b>01</b><span>Location & feasibility</span></div><div><b>02</b><span>Planning & design</span></div><div><b>03</b><span>Execution & quality</span></div><div><b>04</b><span>Delivery & value</span></div></div><Link className="btn" to="/expertise">Explore Expertise</Link></div></div></section><section className="home-cta"><div className="container"><span className="eyebrow">Build With Us</span><h2>Land. Partnership. Development.<br/><span>Let's create lasting value.</span></h2><Link className="btn" to="/contact">Start a Conversation ↗</Link></div></section></>}


// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Home.css";

// // const heroSlides = [
// //   {
// //     tag: "Real Estate Development",
// //     title: "Spaces that elevate",
// //     highlight: "everyday life.",
// //     text: "Elevate Infra brings together thoughtful planning, contemporary design and disciplined execution to create enduring residential and commercial developments.",
// //     image:
// //       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
// //   },
// //   {
// //     tag: "Purposeful Development",
// //     title: "Building today for",
// //     highlight: "a better tomorrow.",
// //     text: "From site selection and planning to architecture and execution, every Elevate Infra development is envisioned around people, place and long-term value.",
// //     image:
// //       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
// //   },
// //   {
// //     tag: "Design • Quality • Value",
// //     title: "Creating destinations",
// //     highlight: "that endure.",
// //     text: "We aspire to create distinctive addresses where intelligent design, quality infrastructure and meaningful experiences come together.",
// //     image:
// //       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
// //   },
// // ];

// // const featured = [
// //   {
// //     id: "elevate-greens",
// //     title: "Elevate Greens",
// //     type: "Residential",
// //     location: "NCR Region",
// //     status: "Upcoming",
// //     img:
// //       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88",
// //   },
// //   {
// //     id: "elevate-heights",
// //     title: "Elevate Heights",
// //     type: "Urban Living",
// //     location: "Delhi NCR",
// //     status: "Planned",
// //     img:
// //       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88",
// //   },
// //   {
// //     id: "elevate-business-district",
// //     title: "Elevate Business District",
// //     type: "Commercial",
// //     location: "Noida",
// //     status: "Concept",
// //     img:
// //       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=88",
// //   },
// // ];

// // const expertise = [
// //   {
// //     no: "01",
// //     title: "Residential Development",
// //     text: "Thoughtfully planned residential environments focused on comfort, connectivity, architecture and long-term community value.",
// //   },
// //   {
// //     no: "02",
// //     title: "Commercial Development",
// //     text: "Contemporary commercial environments designed around efficiency, visibility, accessibility and changing business requirements.",
// //   },
// //   {
// //     no: "03",
// //     title: "Land Development",
// //     text: "Evaluating land potential and transforming opportunities through feasibility, planning, positioning and responsible development.",
// //   },
// //   {
// //     no: "04",
// //     title: "Planning & Design",
// //     text: "Coordinating architecture, engineering and user experience to create developments that are both functional and distinctive.",
// //   },
// // ];

// // const testimonials = [
// //   {
// //     quote:
// //       "For us, successful real estate begins with a clear understanding of the land and ends with a development people are proud to associate with.",
// //     name: "Leadership Perspective",
// //     role: "Elevate Infra",
// //   },
// //   {
// //     quote:
// //       "Our objective is not simply to add buildings to a skyline. We want every development to contribute lasting value to its location and community.",
// //     name: "Development Philosophy",
// //     role: "Elevate Infra",
// //   },
// //   {
// //     quote:
// //       "Good planning is invisible when a place works naturally. That simplicity is the result of disciplined thinking at every stage.",
// //     name: "Design Approach",
// //     role: "Elevate Infra",
// //   },
// // ];

// // export default function Home() {
// //   const [heroIndex, setHeroIndex] = useState(0);
// //   const [quoteIndex, setQuoteIndex] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setHeroIndex((prev) => (prev + 1) % heroSlides.length);
// //     }, 5500);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const nextHero = () => {
// //     setHeroIndex((prev) => (prev + 1) % heroSlides.length);
// //   };

// //   const prevHero = () => {
// //     setHeroIndex(
// //       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
// //     );
// //   };

// //   const nextQuote = () => {
// //     setQuoteIndex((prev) => (prev + 1) % testimonials.length);
// //   };

// //   const prevQuote = () => {
// //     setQuoteIndex(
// //       (prev) => (prev - 1 + testimonials.length) % testimonials.length
// //     );
// //   };

// //   return (
// //     <>
// //       {/* ================= HERO CAROUSEL ================= */}

// //       <section className="home-hero">
// //         {heroSlides.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`hero-slide ${
// //               index === heroIndex ? "active" : ""
// //             }`}
// //             style={{
// //               backgroundImage: `
// //                 linear-gradient(
// //                   90deg,
// //                   rgba(5, 11, 9, 0.94) 0%,
// //                   rgba(5, 11, 9, 0.72) 48%,
// //                   rgba(5, 11, 9, 0.25) 100%
// //                 ),
// //                 url(${slide.image})
// //               `,
// //             }}
// //           >
// //             <div className="container hero-copy">
// //               <span className="eyebrow">{slide.tag}</span>

// //               <h1>
// //                 {slide.title}
// //                 <br />
// //                 <em>{slide.highlight}</em>
// //               </h1>

// //               <p>{slide.text}</p>

// //               <div className="hero-actions">
// //                 <Link className="btn" to="/projects">
// //                   Explore Developments ↗
// //                 </Link>

// //                 <Link className="btn btn-outline" to="/about">
// //                   Discover Our Story
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         ))}

// //         <div className="hero-controls">
// //           <button onClick={prevHero} aria-label="Previous slide">
// //             ←
// //           </button>

// //           <div className="hero-dots">
// //             {heroSlides.map((_, index) => (
// //               <button
// //                 key={index}
// //                 className={index === heroIndex ? "active" : ""}
// //                 onClick={() => setHeroIndex(index)}
// //                 aria-label={`Slide ${index + 1}`}
// //               />
// //             ))}
// //           </div>

// //           <button onClick={nextHero} aria-label="Next slide">
// //             →
// //           </button>
// //         </div>

// //         <div className="hero-note">
// //           DEVELOPER • PLANNER • VALUE CREATOR
// //         </div>

// //         <div className="hero-slide-number">
// //           0{heroIndex + 1}
// //           <span>/ 0{heroSlides.length}</span>
// //         </div>
// //       </section>

// //       {/* ================= INTRO ================= */}

// //       <section className="section home-intro">
// //         <div className="container intro-grid">
// //           <div>
// //             <span className="eyebrow">
// //               The Elevate Perspective
// //             </span>

// //             <h2 className="section-title">
// //               We don't just build structures.
// //               <span> We shape destinations.</span>
// //             </h2>
// //           </div>

// //           <div className="intro-copy">
// //             <p>
// //               Elevate Infra is envisioned as a modern real estate
// //               development company focused on creating meaningful
// //               residential and commercial environments.
// //             </p>

// //             <p>
// //               Our approach begins before construction. We study the
// //               location, understand how people will use the space,
// //               define a clear development vision and then bring
// //               planning, architecture, engineering and execution
// //               together.
// //             </p>

// //             <p>
// //               The result is real estate created for long-term
// //               relevance — practical today, valuable tomorrow and
// //               distinctive for years to come.
// //             </p>

// //             <Link className="text-link" to="/about">
// //               Discover Elevate Infra →
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= STATS ================= */}

// //       <section className="stats">
// //         <div className="container stats-grid">
// //           <div>
// //             <strong>12+</strong>
// //             <span>Years of Collective Experience*</span>
// //           </div>

// //           <div>
// //             <strong>08</strong>
// //             <span>Development Opportunities*</span>
// //           </div>

// //           <div>
// //             <strong>2.5M+</strong>
// //             <span>Sq. Ft. Vision Pipeline*</span>
// //           </div>

// //           <div>
// //             <strong>360°</strong>
// //             <span>Integrated Development Approach</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FEATURED PROJECTS ================= */}

// //       <section className="section featured">
// //         <div className="container">
// //           <div className="section-head">
// //             <div>
// //               <span className="eyebrow">
// //                 Featured Developments
// //               </span>

// //               <h2 className="section-title">
// //                 A portfolio built around
// //                 <span> possibility.</span>
// //               </h2>
// //             </div>

// //             <Link className="text-link" to="/projects">
// //               View All Developments →
// //             </Link>
// //           </div>

// //           <div className="featured-grid">
// //             {featured.map((p, i) => (
// //               <Link
// //                 className="feature-card"
// //                 key={p.id}
// //                 to={`/projects/${p.id}`}
// //               >
// //                 <img src={p.img} alt={p.title} />

// //                 <div className="feature-shade" />

// //                 <div className="feature-index">
// //                   0{i + 1}
// //                 </div>

// //                 <div className="feature-status">
// //                   {p.status}
// //                 </div>

// //                 <div className="feature-copy">
// //                   <span>
// //                     {p.type} • {p.location}
// //                   </span>

// //                   <h3>{p.title}</h3>

// //                   <b>View Development ↗</b>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= DEVELOPMENT PHILOSOPHY ================= */}

// //       <section className="section philosophy">
// //         <div className="container philosophy-grid">
// //           <div className="philosophy-image">
// //             <img
// //               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=88"
// //               alt="Contemporary development"
// //             />

// //             <div className="image-caption">
// //               <strong>Elevate</strong>
// //               <span>
// //                 Purpose-led real estate development
// //               </span>
// //             </div>
// //           </div>

// //           <div className="philosophy-copy">
// //             <span className="eyebrow">
// //               Our Development Philosophy
// //             </span>

// //             <h2 className="section-title">
// //               Clarity at every stage.
// //               <span> Quality at every detail.</span>
// //             </h2>

// //             <p>
// //               We treat development as one connected process — from
// //               site potential and feasibility to architecture,
// //               execution, customer experience and long-term asset
// //               value.
// //             </p>

// //             <div className="process-list">
// //               <div>
// //                 <b>01</b>
// //                 <span>Location & Feasibility</span>
// //               </div>

// //               <div>
// //                 <b>02</b>
// //                 <span>Planning & Design</span>
// //               </div>

// //               <div>
// //                 <b>03</b>
// //                 <span>Execution & Quality</span>
// //               </div>

// //               <div>
// //                 <b>04</b>
// //                 <span>Delivery & Value</span>
// //               </div>
// //             </div>

// //             <Link className="btn" to="/expertise">
// //               Explore Our Expertise
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= EXPERTISE ================= */}

// //       <section className="section home-expertise">
// //         <div className="container">
// //           <div className="section-head">
// //             <div>
// //               <span className="eyebrow">
// //                 What We Do
// //               </span>

// //               <h2 className="section-title">
// //                 Expertise across the
// //                 <span> development lifecycle.</span>
// //               </h2>
// //             </div>

// //             <p className="section-description">
// //               Our integrated approach connects strategy,
// //               design and execution to create developments
// //               with a clear identity and lasting relevance.
// //             </p>
// //           </div>

// //           <div className="home-expertise-grid">
// //             {expertise.map((item) => (
// //               <div className="expertise-home-card" key={item.no}>
// //                 <span className="expertise-home-number">
// //                   {item.no}
// //                 </span>

// //                 <h3>{item.title}</h3>

// //                 <p>{item.text}</p>

// //                 <Link to="/expertise">
// //                   Learn More ↗
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= VISION ================= */}

// //       <section className="vision-section">
// //         <div className="vision-background" />

// //         <div className="container vision-content">
// //           <span className="eyebrow">
// //             Our Vision
// //           </span>

// //           <h2>
// //             Creating places that become
// //             <span> part of tomorrow's city.</span>
// //           </h2>

// //           <p>
// //             Our ambition is to build a portfolio known not simply
// //             for scale, but for thoughtful planning, responsible
// //             development and places that continue to perform for
// //             the people who use them.
// //           </p>

// //           <Link className="btn" to="/about">
// //             Our Story ↗
// //           </Link>
// //         </div>
// //       </section>

// //       {/* ================= WHY ELEVATE ================= */}

// //       <section className="section why-elevate">
// //         <div className="container">
// //           <div className="section-head">
// //             <div>
// //               <span className="eyebrow">
// //                 Why Elevate Infra
// //               </span>

// //               <h2 className="section-title">
// //                 Development with
// //                 <span> purpose.</span>
// //               </h2>
// //             </div>
// //           </div>

// //           <div className="why-grid">
// //             <div className="why-card">
// //               <span>01</span>
// //               <h3>Location First</h3>
// //               <p>
// //                 Every opportunity starts with understanding
// //                 connectivity, context, demand and future growth.
// //               </p>
// //             </div>

// //             <div className="why-card">
// //               <span>02</span>
// //               <h3>Thoughtful Planning</h3>
// //               <p>
// //                 Efficient layouts and considered spaces help
// //                 create developments that work naturally.
// //               </p>
// //             </div>

// //             <div className="why-card">
// //               <span>03</span>
// //               <h3>Design Value</h3>
// //               <p>
// //                 Architecture should create identity while
// //                 remaining practical, durable and relevant.
// //               </p>
// //             </div>

// //             <div className="why-card">
// //               <span>04</span>
// //               <h3>Disciplined Execution</h3>
// //               <p>
// //                 Strong coordination and attention to detail
// //                 remain central throughout the development cycle.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= QUOTE CAROUSEL ================= */}

// //       <section className="quote-section">
// //         <div className="container">
// //           <span className="eyebrow">
// //             Our Perspective
// //           </span>

// //           <div className="quote-carousel">
// //             <button
// //               className="quote-arrow"
// //               onClick={prevQuote}
// //               aria-label="Previous quote"
// //             >
// //               ←
// //             </button>

// //             <div className="quote-content">
// //               <div className="quote-mark">“</div>

// //               <blockquote>
// //                 {testimonials[quoteIndex].quote}
// //               </blockquote>

// //               <strong>
// //                 {testimonials[quoteIndex].name}
// //               </strong>

// //               <span>
// //                 {testimonials[quoteIndex].role}
// //               </span>

// //               <div className="quote-dots">
// //                 {testimonials.map((_, index) => (
// //                   <button
// //                     key={index}
// //                     className={
// //                       quoteIndex === index ? "active" : ""
// //                     }
// //                     onClick={() => setQuoteIndex(index)}
// //                     aria-label={`Quote ${index + 1}`}
// //                   />
// //                 ))}
// //               </div>
// //             </div>

// //             <button
// //               className="quote-arrow"
// //               onClick={nextQuote}
// //               aria-label="Next quote"
// //             >
// //               →
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= PARTNERSHIP ================= */}

// //       <section className="section partnership-section">
// //         <div className="container partnership-grid">
// //           <div>
// //             <span className="eyebrow">
// //               Partnership Opportunities
// //             </span>

// //             <h2 className="section-title">
// //               Have land with
// //               <span> development potential?</span>
// //             </h2>
// //           </div>

// //           <div className="partnership-copy">
// //             <p>
// //               Elevate Infra is open to exploring strategic
// //               opportunities with landowners, investors and
// //               development partners where our capabilities can
// //               unlock meaningful long-term value.
// //             </p>

// //             <p>
// //               From evaluating development potential to planning,
// //               positioning and execution, we approach every
// //               partnership with transparency and a long-term
// //               perspective.
// //             </p>

// //             <Link className="btn" to="/contact">
// //               Discuss an Opportunity ↗
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FINAL CTA ================= */}

// //       <section className="home-cta">
// //         <div className="container">
// //           <span className="eyebrow">
// //             Build With Us
// //           </span>

// //           <h2>
// //             Land. Partnership. Development.
// //             <br />
// //             <span>Let's create lasting value.</span>
// //           </h2>

// //           <p>
// //             Connect with Elevate Infra to discuss development,
// //             land collaboration or strategic opportunities.
// //           </p>

// //           <Link className="btn" to="/contact">
// //             Start a Conversation ↗
// //           </Link>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// import { getSiteData, getProjects } from "../data/siteData";

// /* =========================================================
//    DEFAULT PROJECTS
//    Fallback + first-time data
// ========================================================= */

// const defaultProjects = [
//   {
//     id: "elevate-greens",
//     title: "Elevate Greens",
//     type: "Residential",
//     location: "NCR Region",
//     status: "Concept / Under Development*",
//     area: "1.2M Sq. Ft.*",
//     img:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
//     desc:
//       "A landscaped residential community envisioned around natural light, open spaces, thoughtful planning and contemporary family living.",
//   },
//   {
//     id: "elevate-heights",
//     title: "Elevate Heights",
//     type: "Urban Living",
//     location: "Delhi NCR",
//     status: "Concept Stage*",
//     area: "850K Sq. Ft.*",
//     img:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
//     desc:
//       "An urban residential concept balancing efficient planning, refined amenities, connectivity and a strong sense of arrival.",
//   },
//   {
//     id: "elevate-business-district",
//     title: "Elevate Business District",
//     type: "Commercial",
//     location: "Noida",
//     status: "Concept Stage*",
//     area: "450K Sq. Ft.*",
//     img:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
//     desc:
//       "A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure.",
//   },
// ];

// export default function Home() {
//   const [siteData, setSiteData] = useState(null);
//   const [projects, setProjects] = useState([]);

//   /* =======================================================
//      LOAD HOME DATA
//   ======================================================= */

//   useEffect(() => {
//     const loadData = () => {
//       const site = getSiteData();
//       let projectData = getProjects();

//       if (!projectData || projectData.length === 0) {
//         projectData = defaultProjects;
//       }

//       setSiteData(site);
//       setProjects(projectData);
//     };

//     loadData();

//     window.addEventListener(
//       "elevate-data-updated",
//       loadData
//     );

//     window.addEventListener(
//       "storage",
//       loadData
//     );

//     return () => {
//       window.removeEventListener(
//         "elevate-data-updated",
//         loadData
//       );

//       window.removeEventListener(
//         "storage",
//         loadData
//       );
//     };
//   }, []);

//   /* =======================================================
//      SITE DATA
//   ======================================================= */

//   const home = siteData?.home || {
//     eyebrow: "Real Estate Development",
//     title: "Spaces that elevate",
//     titleHighlight: "everyday life.",
//     description:
//       "Elevate Infra brings together thoughtful planning, contemporary design and disciplined execution to create enduring residential and commercial developments.",
//   };

//   /* =======================================================
//      SHOW ONLY FIRST 3 PROJECTS ON HOME
//   ======================================================= */

//   const featuredProjects =
//     projects.length > 0
//       ? projects.slice(0, 3)
//       : defaultProjects;

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="home-hero">
//         <div className="container hero-copy">
//           <span className="eyebrow">
//             {home.eyebrow}
//           </span>

//           <h1>
//             {home.title}
//             <br />

//             <em>
//               {home.titleHighlight}
//             </em>
//           </h1>

//           <p>
//             {home.description}
//           </p>

//           <div className="hero-actions">
//             <Link
//               className="btn"
//               to="/projects"
//             >
//               Explore Developments ↗
//             </Link>

//             <Link
//               className="btn btn-outline"
//               to="/about"
//             >
//               Discover Our Story
//             </Link>
//           </div>
//         </div>

//         <div className="hero-note">
//           DEVELOPER • PLANNER • VALUE CREATOR
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="section home-intro">
//         <div className="container intro-grid">
//           <div>
//             <span className="eyebrow">
//               The Elevate Perspective
//             </span>

//             <h2 className="section-title">
//               We don't just build structures.
//               <span>
//                 {" "}
//                 We shape destinations.
//               </span>
//             </h2>
//           </div>

//           <div className="intro-copy">
//             <p>
//               Our approach begins before construction. We
//               study the location, understand how people will
//               use the space, define a clear development vision
//               and then bring design, engineering and execution
//               together.
//             </p>

//             <p>
//               The result is real estate created for long-term
//               relevance — practical today, valuable tomorrow
//               and distinctive for years to come.
//             </p>

//             <Link
//               className="text-link"
//               to="/expertise"
//             >
//               How we develop →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ===================================================== */}

//       <section className="stats">
//         <div className="container stats-grid">
//           <div>
//             <strong>
//               12+
//             </strong>

//             <span>
//               Years of collective experience*
//             </span>
//           </div>

//           <div>
//             <strong>
//               {String(projects.length).padStart(2, "0")}
//             </strong>

//             <span>
//               Development opportunities*
//             </span>
//           </div>

//           <div>
//             <strong>
//               2.5M+
//             </strong>

//             <span>
//               Sq. ft. vision pipeline*
//             </span>
//           </div>

//           <div>
//             <strong>
//               360°
//             </strong>

//             <span>
//               Integrated development approach
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED DEVELOPMENTS
//       ===================================================== */}

//       <section className="section featured">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Featured Developments
//               </span>

//               <h2 className="section-title">
//                 A portfolio built around
//                 <span>
//                   {" "}
//                   possibility.
//                 </span>
//               </h2>
//             </div>

//             <Link
//               className="text-link"
//               to="/projects"
//             >
//               View portfolio →
//             </Link>
//           </div>

//           {featuredProjects.length > 0 ? (
//             <div className="featured-grid">
//               {featuredProjects.map((project, index) => (
//                 <Link
//                   className="feature-card"
//                   key={project.id || index}
//                   to={`/projects/${project.id}`}
//                 >
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                   />

//                   <div className="feature-shade"></div>

//                   <div className="feature-index">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   <div className="feature-copy">
//                     <span>
//                       {project.type || "Development"}
//                       {" • "}
//                       {project.location ||
//                         "Delhi NCR"}
//                     </span>

//                     <h3>
//                       {project.title}
//                     </h3>

//                     <b>
//                       View development ↗
//                     </b>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div
//               style={{
//                 padding: "60px 20px",
//                 textAlign: "center",
//               }}
//             >
//               <span className="eyebrow">
//                 Developments
//               </span>

//               <h3
//                 style={{
//                   marginTop: "10px",
//                   fontFamily:
//                     '"Playfair Display", serif',
//                   fontSize: "32px",
//                 }}
//               >
//                 Developments coming soon
//               </h3>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =====================================================
//           PHILOSOPHY
//       ===================================================== */}

//       <section className="section philosophy">
//         <div className="container philosophy-grid">
//           <div className="philosophy-image">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=88"
//               alt="Contemporary development"
//             />
//           </div>

//           <div className="philosophy-copy">
//             <span className="eyebrow">
//               Our Development Philosophy
//             </span>

//             <h2 className="section-title">
//               Clarity at every stage.
//               <span>
//                 {" "}
//                 Quality at every detail.
//               </span>
//             </h2>

//             <p>
//               We treat development as one connected process —
//               from site potential and feasibility to
//               architecture, execution, customer experience
//               and long-term asset value.
//             </p>

//             <div className="process-list">
//               <div>
//                 <b>01</b>
//                 <span>
//                   Location & feasibility
//                 </span>
//               </div>

//               <div>
//                 <b>02</b>
//                 <span>
//                   Planning & design
//                 </span>
//               </div>

//               <div>
//                 <b>03</b>
//                 <span>
//                   Execution & quality
//                 </span>
//               </div>

//               <div>
//                 <b>04</b>
//                 <span>
//                   Delivery & value
//                 </span>
//               </div>
//             </div>

//             <Link
//               className="btn"
//               to="/expertise"
//             >
//               Explore Expertise
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="home-cta">
//         <div className="container">
//           <span className="eyebrow">
//             Build With Us
//           </span>

//           <h2>
//             Land. Partnership. Development.
//             <br />

//             <span>
//               Let's create lasting value.
//             </span>
//           </h2>

//           <Link
//             className="btn"
//             to="/contact"
//           >
//             Start a Conversation ↗
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import {
  getSiteData,
  getProjects,
} from "../data/siteData";

/* =========================================================
   HERO SLIDES
   ========================================================= */

const heroSlides = [
  {
    tag: "Real Estate Development",
    title: "Spaces that elevate",
    highlight: "everyday life.",
    text:
      "Elevate Infra brings together thoughtful planning, contemporary design and disciplined execution to create enduring residential and commercial developments.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    tag: "Purposeful Development",
    title: "Building today for",
    highlight: "a better tomorrow.",
    text:
      "From site selection and planning to architecture and execution, every Elevate Infra development is envisioned around people, place and long-term value.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
  },
  {
    tag: "Design • Quality • Value",
    title: "Creating destinations",
    highlight: "that endure.",
    text:
      "We aspire to create distinctive addresses where intelligent design, quality infrastructure and meaningful experiences come together.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
  },
];

/* =========================================================
   DEFAULT PROJECTS
========================================================= */

const defaultProjects = [
  {
    id: "elevate-greens",
    title: "Elevate Greens",
    type: "Residential",
    location: "NCR Region",
    status: "Concept / Under Development*",
    area: "1.2M Sq. Ft.*",
    img:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    desc:
      "A landscaped residential community envisioned around natural light, open spaces, thoughtful planning and contemporary family living.",
  },
  {
    id: "elevate-heights",
    title: "Elevate Heights",
    type: "Urban Living",
    location: "Delhi NCR",
    status: "Concept Stage*",
    area: "850K Sq. Ft.*",
    img:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
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
    img:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
    desc:
      "A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure.",
  },
];

/* =========================================================
   HOME EXPERTISE
========================================================= */

const expertise = [
  {
    no: "01",
    title: "Residential Development",
    text:
      "Thoughtfully planned residential environments focused on comfort, connectivity, architecture and long-term community value.",
  },
  {
    no: "02",
    title: "Commercial Development",
    text:
      "Contemporary commercial environments designed around efficiency, visibility, accessibility and changing business requirements.",
  },
  {
    no: "03",
    title: "Land Development",
    text:
      "Evaluating land potential and transforming opportunities through feasibility, planning, positioning and responsible development.",
  },
  {
    no: "04",
    title: "Planning & Design",
    text:
      "Coordinating architecture, engineering and user experience to create developments that are both functional and distinctive.",
  },
];

/* =========================================================
   TESTIMONIAL / PERSPECTIVE
========================================================= */

const testimonials = [
  {
    quote:
      "For us, successful real estate begins with a clear understanding of the land and ends with a development people are proud to associate with.",
    name: "Leadership Perspective",
    role: "Elevate Infra",
  },
  {
    quote:
      "Our objective is not simply to add buildings to a skyline. We want every development to contribute lasting value to its location and community.",
    name: "Development Philosophy",
    role: "Elevate Infra",
  },
  {
    quote:
      "Good planning is invisible when a place works naturally. That simplicity is the result of disciplined thinking at every stage.",
    name: "Design Approach",
    role: "Elevate Infra",
  },
];

/* =========================================================
   HOME COMPONENT
========================================================= */

export default function Home() {
  const [siteData, setSiteData] = useState(null);
  const [projects, setProjects] = useState([]);

  /* =======================================================
     HERO CAROUSEL STATE
  ======================================================= */

  const [heroIndex, setHeroIndex] = useState(0);

  /* =======================================================
     QUOTE CAROUSEL STATE
  ======================================================= */

  const [quoteIndex, setQuoteIndex] = useState(0);

  /* =======================================================
     LOAD WEBSITE DATA
  ======================================================= */

  useEffect(() => {
    const loadData = () => {
      const site = getSiteData();

      let projectData = getProjects();

      if (!projectData || projectData.length === 0) {
        projectData = defaultProjects;
      }

      setSiteData(site);
      setProjects(projectData);
    };

    loadData();

    window.addEventListener(
      "elevate-data-updated",
      loadData
    );

    window.addEventListener(
      "storage",
      loadData
    );

    return () => {
      window.removeEventListener(
        "elevate-data-updated",
        loadData
      );

      window.removeEventListener(
        "storage",
        loadData
      );
    };
  }, []);

  /* =======================================================
     HERO AUTO CAROUSEL
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => {
        return (prev + 1) % heroSlides.length;
      });
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     HERO CONTROLS
  ======================================================= */

  const nextHero = () => {
    setHeroIndex((prev) => {
      return (prev + 1) % heroSlides.length;
    });
  };

  const prevHero = () => {
    setHeroIndex((prev) => {
      return (
        (prev - 1 + heroSlides.length) %
        heroSlides.length
      );
    });
  };

  /* =======================================================
     QUOTE CONTROLS
  ======================================================= */

  const nextQuote = () => {
    setQuoteIndex((prev) => {
      return (prev + 1) % testimonials.length;
    });
  };

  const prevQuote = () => {
    setQuoteIndex((prev) => {
      return (
        (prev - 1 + testimonials.length) %
        testimonials.length
      );
    });
  };

  /* =======================================================
     HOME DATA
  ======================================================= */

  const home = siteData?.home || {
    eyebrow: "Real Estate Development",
    title: "Spaces that elevate",
    titleHighlight: "everyday life.",
    description:
      "Elevate Infra brings together thoughtful planning, contemporary design and disciplined execution to create enduring residential and commercial developments.",
  };

  /* =======================================================
     FEATURED PROJECTS
  ======================================================= */

  const featuredProjects =
    projects && projects.length > 0
      ? projects.slice(0, 3)
      : defaultProjects;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          HERO CAROUSEL
      ===================================================== */}

      <section className="home-hero">

        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide ${
              index === heroIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(7, 29, 47, 0.94) 0%,
                  rgba(7, 29, 47, 0.72) 48%,
                  rgba(7, 29, 47, 0.18) 100%
                ),
                url(${slide.image})
              `,
            }}
          >
            <div className="container hero-copy">

              <span className="eyebrow">
                {index === 0
                  ? home.eyebrow
                  : slide.tag}
              </span>

              <h1>
                {index === 0
                  ? home.title
                  : slide.title}

                <br />

                <em>
                  {index === 0
                    ? home.titleHighlight
                    : slide.highlight}
                </em>
              </h1>

              <p>
                {index === 0
                  ? home.description
                  : slide.text}
              </p>

              <div className="hero-actions">

                <Link
                  className="btn"
                  to="/projects"
                >
                  Explore Developments ↗
                </Link>

                <Link
                  className="btn btn-outline"
                  to="/about"
                >
                  Discover Our Story
                </Link>

              </div>

            </div>
          </div>
        ))}

        {/* ===================================================
            HERO CONTROLS
        =================================================== */}

        <div className="hero-controls">

          <button
            type="button"
            onClick={prevHero}
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="hero-dots">

            {heroSlides.map((_, index) => (
              <button
                type="button"
                key={index}
                className={
                  index === heroIndex
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setHeroIndex(index)
                }
                aria-label={`Slide ${
                  index + 1
                }`}
              />
            ))}

          </div>

          <button
            type="button"
            onClick={nextHero}
            aria-label="Next slide"
          >
            →
          </button>

        </div>

        {/* ===================================================
            HERO NOTE
        =================================================== */}

        <div className="hero-note">
          DEVELOPER • PLANNER • VALUE CREATOR
        </div>

        {/* ===================================================
            HERO NUMBER
        =================================================== */}

        <div className="hero-slide-number">
          {String(heroIndex + 1).padStart(2, "0")}

          <span>
            {" "}
            /{" "}
            {String(heroSlides.length).padStart(
              2,
              "0"
            )}
          </span>
        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="section home-intro">

        <div className="container intro-grid">

          <div>

            <span className="eyebrow">
              The Elevate Perspective
            </span>

            <h2 className="section-title">
              We don't just build structures.
              <span>
                {" "}
                We shape destinations.
              </span>
            </h2>

          </div>

          <div className="intro-copy">

            <p>
              Elevate Infra is envisioned as a modern
              real estate development company focused
              on creating meaningful residential and
              commercial environments.
            </p>

            <p>
              Our approach begins before construction.
              We study the location, understand how
              people will use the space, define a clear
              development vision and then bring
              planning, architecture, engineering and
              execution together.
            </p>

            <p>
              The result is real estate created for
              long-term relevance — practical today,
              valuable tomorrow and distinctive for
              years to come.
            </p>

            <Link
              className="text-link"
              to="/about"
            >
              Discover Elevate Infra →
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <strong>12+</strong>

            <span>
              Years of collective experience*
            </span>
          </div>

          <div>
            <strong>
              {String(
                projects.length || 8
              ).padStart(2, "0")}
            </strong>

            <span>
              Development opportunities*
            </span>
          </div>

          <div>
            <strong>2.5M+</strong>

            <span>
              Sq. ft. vision pipeline*
            </span>
          </div>

          <div>
            <strong>360°</strong>

            <span>
              Integrated development approach
            </span>
          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED DEVELOPMENTS
      ===================================================== */}

      <section className="section featured">

        <div className="container">

          <div className="section-head">

            <div>

              <span className="eyebrow">
                Featured Developments
              </span>

              <h2 className="section-title">
                A portfolio built around
                <span>
                  {" "}
                  possibility.
                </span>
              </h2>

            </div>

            <Link
              className="text-link"
              to="/projects"
            >
              View All Developments →
            </Link>

          </div>

          <div className="featured-grid">

            {featuredProjects.map(
              (project, index) => (

                <Link
                  className="feature-card"
                  key={
                    project.id || index
                  }
                  to={`/projects/${
                    project.id
                  }`}
                >

                  <img
                    src={
                      project.img ||
                      defaultProjects[index]
                        ?.img
                    }
                    alt={
                      project.title ||
                      "Elevate Infra Development"
                    }
                  />

                  <div className="feature-shade" />

                  <div className="feature-index">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </div>

                  <div className="feature-status">
                    {project.status ||
                      "Development"}
                  </div>

                  <div className="feature-copy">

                    <span>
                      {project.type ||
                        "Development"}
                      {" • "}
                      {project.location ||
                        "Delhi NCR"}
                    </span>

                    <h3>
                      {project.title ||
                        "Elevate Development"}
                    </h3>

                    <b>
                      View Development ↗
                    </b>

                  </div>

                </Link>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          DEVELOPMENT PHILOSOPHY
      ===================================================== */}

      <section className="section philosophy">

        <div className="container philosophy-grid">

          <div className="philosophy-image">

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=88"
              alt="Contemporary development"
            />

            <div className="image-caption">

              <strong>
                Elevate
              </strong>

              <span>
                Purpose-led real estate
                development
              </span>

            </div>

          </div>

          <div className="philosophy-copy">

            <span className="eyebrow">
              Our Development Philosophy
            </span>

            <h2 className="section-title">
              Clarity at every stage.
              <span>
                {" "}
                Quality at every detail.
              </span>
            </h2>

            <p>
              We treat development as one
              connected process — from site
              potential and feasibility to
              architecture, execution, customer
              experience and long-term asset value.
            </p>

            <div className="process-list">

              <div>
                <b>01</b>
                <span>
                  Location & Feasibility
                </span>
              </div>

              <div>
                <b>02</b>
                <span>
                  Planning & Design
                </span>
              </div>

              <div>
                <b>03</b>
                <span>
                  Execution & Quality
                </span>
              </div>

              <div>
                <b>04</b>
                <span>
                  Delivery & Value
                </span>
              </div>

            </div>

            <Link
              className="btn"
              to="/expertise"
            >
              Explore Our Expertise
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className="section home-expertise">

        <div className="container">

          <div className="section-head">

            <div>

              <span className="eyebrow">
                What We Do
              </span>

              <h2 className="section-title">
                Expertise across the
                <span>
                  {" "}
                  development lifecycle.
                </span>
              </h2>

            </div>

            <p className="section-description">
              Our integrated approach connects
              strategy, design and execution to
              create developments with a clear
              identity and lasting relevance.
            </p>

          </div>

          <div className="home-expertise-grid">

            {expertise.map((item) => (

              <div
                className="expertise-home-card"
                key={item.no}
              >

                <span className="expertise-home-number">
                  {item.no}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <Link to="/expertise">
                  Learn More ↗
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VISION
      ===================================================== */}

      <section className="vision-section">

        <div className="vision-content container">

          <span className="eyebrow">
            Our Vision
          </span>

          <h2>
            Creating places that become
            <span>
              {" "}
              part of tomorrow's city.
            </span>
          </h2>

          <p>
            Our ambition is to build a portfolio
            known not simply for scale, but for
            thoughtful planning, responsible
            development and places that continue
            to perform for the people who use them.
          </p>

          <Link
            className="btn"
            to="/about"
          >
            Our Story ↗
          </Link>

        </div>

      </section>

      {/* =====================================================
          WHY ELEVATE
      ===================================================== */}

      <section className="section why-elevate">

        <div className="container">

          <div className="section-head">

            <div>

              <span className="eyebrow">
                Why Elevate Infra
              </span>

              <h2 className="section-title">
                Development with
                <span>
                  {" "}
                  purpose.
                </span>
              </h2>

            </div>

          </div>

          <div className="why-grid">

            <div className="why-card">

              <span>01</span>

              <h3>
                Location First
              </h3>

              <p>
                Every opportunity starts with
                understanding connectivity,
                context, demand and future growth.
              </p>

            </div>

            <div className="why-card">

              <span>02</span>

              <h3>
                Thoughtful Planning
              </h3>

              <p>
                Efficient layouts and considered
                spaces help create developments
                that work naturally.
              </p>

            </div>

            <div className="why-card">

              <span>03</span>

              <h3>
                Design Value
              </h3>

              <p>
                Architecture should create identity
                while remaining practical, durable
                and relevant.
              </p>

            </div>

            <div className="why-card">

              <span>04</span>

              <h3>
                Disciplined Execution
              </h3>

              <p>
                Strong coordination and attention
                to detail remain central throughout
                the development cycle.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUOTE CAROUSEL
      ===================================================== */}

      <section className="quote-section">

        <div className="container">

          <span className="eyebrow">
            Our Perspective
          </span>

          <div className="quote-carousel">

            <button
              type="button"
              className="quote-arrow"
              onClick={prevQuote}
              aria-label="Previous quote"
            >
              ←
            </button>

            <div className="quote-content">

              <div className="quote-mark">
                “
              </div>

              <blockquote>
                {
                  testimonials[
                    quoteIndex
                  ].quote
                }
              </blockquote>

              <strong>
                {
                  testimonials[
                    quoteIndex
                  ].name
                }
              </strong>

              <span>
                {
                  testimonials[
                    quoteIndex
                  ].role
                }
              </span>

              <div className="quote-dots">

                {testimonials.map(
                  (_, index) => (

                    <button
                      type="button"
                      key={index}
                      className={
                        quoteIndex ===
                        index
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setQuoteIndex(
                          index
                        )
                      }
                      aria-label={`Quote ${
                        index + 1
                      }`}
                    />

                  )
                )}

              </div>

            </div>

            <button
              type="button"
              className="quote-arrow"
              onClick={nextQuote}
              aria-label="Next quote"
            >
              →
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          PARTNERSHIP
      ===================================================== */}

      <section className="section partnership-section">

        <div className="container partnership-grid">

          <div>

            <span className="eyebrow">
              Partnership Opportunities
            </span>

            <h2 className="section-title">
              Have land with
              <span>
                {" "}
                development potential?
              </span>
            </h2>

          </div>

          <div className="partnership-copy">

            <p>
              Elevate Infra is open to exploring
              strategic opportunities with
              landowners, investors and
              development partners where our
              capabilities can unlock meaningful
              long-term value.
            </p>

            <p>
              From evaluating development
              potential to planning, positioning
              and execution, we approach every
              partnership with transparency and
              a long-term perspective.
            </p>

            <Link
              className="btn"
              to="/contact"
            >
              Discuss an Opportunity ↗
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="container">

          <span className="eyebrow">
            Build With Us
          </span>

          <h2>
            Land. Partnership. Development.
            <br />

            <span>
              Let's create lasting value.
            </span>
          </h2>

          <p>
            Connect with Elevate Infra to discuss
            development, land collaboration or
            strategic opportunities.
          </p>

          <Link
            className="btn"
            to="/contact"
          >
            Start a Conversation ↗
          </Link>

        </div>

      </section>
    </>
  );
}