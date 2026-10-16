// // // import React from"react";import{Link}from"react-router-dom";import"./About.css";
// // // export default function About(){return <><section className="page-hero about-hero"><div className="container"><span className="eyebrow">About Elevate Infra</span><h1 className="page-title">A developer mindset.<br/><span className="gold">A long-term vision.</span></h1><p>We create real estate by connecting opportunity, planning, design, execution and value into one clear development strategy.</p></div></section><section className="section about-story"><div className="container about-story-grid"><div><span className="eyebrow">Our Story</span><h2 className="section-title">Built to create <span>more meaningful places.</span></h2></div><div><p>Elevate Infra is envisioned as a modern real estate development company — one that looks beyond square footage and focuses on how a project performs for people, partners and the city around it.</p><p>Our role is to bring clarity to complex development: identifying potential, defining the right product, coordinating design and execution, and protecting long-term value.</p><p>As the company grows, our ambition is simple: build a trusted development brand known for thoughtful decisions and dependable delivery.</p></div></div></section><section className="section purpose"><div className="container"><div className="section-head"><div><span className="eyebrow">Purpose & Principles</span><h2 className="section-title">What guides <span>the work.</span></h2></div></div><div className="principle-grid"><article><b>01</b><h3>Trust First</h3><p>Transparent communication and responsible commitments across every relationship.</p></article><article><b>02</b><h3>Design With Reason</h3><p>Every design decision should improve function, experience or long-term value.</p></article><article><b>03</b><h3>Execution Matters</h3><p>Strong processes, coordination and quality control turn vision into reality.</p></article><article><b>04</b><h3>Think Long Term</h3><p>We aim to create developments that remain relevant well beyond handover.</p></article></div></div></section><section className="about-vision"><div className="container vision-box"><span className="eyebrow">Our Vision</span><h2>To build a respected development company that creates <span>enduring value through better places.</span></h2><Link className="btn" to="/projects">View Developments ↗</Link></div></section></>}
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./About.css";

// // const values = [
// //   {
// //     no: "01",
// //     title: "Trust First",
// //     text: "Clear communication, responsible commitments and transparency across every relationship.",
// //   },
// //   {
// //     no: "02",
// //     title: "Design With Reason",
// //     text: "Every design decision should improve function, experience, efficiency or long-term value.",
// //   },
// //   {
// //     no: "03",
// //     title: "Execution Matters",
// //     text: "Planning becomes meaningful only when strong coordination and quality execution bring it to life.",
// //   },
// //   {
// //     no: "04",
// //     title: "Think Long Term",
// //     text: "We aim to create developments that remain useful, relevant and valuable well beyond delivery.",
// //   },
// // ];

// // const approach = [
// //   {
// //     no: "01",
// //     title: "Understand",
// //     text: "Study the location, opportunity, surrounding infrastructure, demand and development potential.",
// //   },
// //   {
// //     no: "02",
// //     title: "Define",
// //     text: "Create a clear product vision based on market relevance, feasibility and long-term positioning.",
// //   },
// //   {
// //     no: "03",
// //     title: "Design",
// //     text: "Bring architecture, engineering, functionality and experience together into one coordinated plan.",
// //   },
// //   {
// //     no: "04",
// //     title: "Deliver",
// //     text: "Execute with disciplined processes, quality controls and attention to the details that matter.",
// //   },
// // ];

// // export default function About() {
// //   return (
// //     <>
// //       {/* ================= HERO ================= */}

// //       <section className="page-hero about-hero">
// //         <div className="container about-hero-content">
// //           <span className="eyebrow">About Elevate Infra</span>

// //           <h1 className="page-title">
// //             A developer mindset.
// //             <br />
// //             <span>A long-term vision.</span>
// //           </h1>

// //           <p>
// //             We bring opportunity, planning, design and execution
// //             together to create real estate with purpose, identity
// //             and enduring value.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ================= INTRO ================= */}

// //       <section className="about-intro">
// //         <div className="container about-intro-grid">
// //           <div className="about-intro-heading">
// //             <span className="eyebrow">Who We Are</span>

// //             <h2>
// //               Building more than real estate.
// //               <span> Building lasting value.</span>
// //             </h2>
// //           </div>

// //           <div className="about-intro-copy">
// //             <p>
// //               Elevate Infra is a modern real estate development
// //               company built around a simple belief — good
// //               development should create value not only through
// //               buildings, but through better planning, stronger
// //               experiences and more thoughtful places.
// //             </p>

// //             <p>
// //               We look at development as one connected journey.
// //               From understanding the potential of a location to
// //               defining the right product, coordinating design and
// //               managing execution, every stage contributes to the
// //               final outcome.
// //             </p>

// //             <Link to="/expertise" className="about-text-link">
// //               Explore our expertise →
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= SMALL STAT STRIP ================= */}

// //       <section className="about-stats">
// //         <div className="container about-stats-grid">
// //           <div>
// //             <strong>01</strong>
// //             <span>Integrated Development Vision</span>
// //           </div>

// //           <div>
// //             <strong>02</strong>
// //             <span>Residential & Commercial Focus</span>
// //           </div>

// //           <div>
// //             <strong>03</strong>
// //             <span>Planning to Delivery Approach</span>
// //           </div>

// //           <div>
// //             <strong>04</strong>
// //             <span>Long-Term Value Creation</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= OUR STORY ================= */}

// //       <section className="about-story">
// //         <div className="container about-story-layout">
// //           <div className="about-story-image">
// //             <img
// //               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=88"
// //               alt="Modern real estate development"
// //             />

// //             <div className="about-image-label">
// //               <span>OUR APPROACH</span>
// //               <strong>
// //                 Thoughtful development.
// //                 <br />
// //                 Meaningful places.
// //               </strong>
// //             </div>
// //           </div>

// //           <div className="about-story-content">
// //             <span className="eyebrow">Our Story</span>

// //             <h2>
// //               Created with a clear
// //               <span> development philosophy.</span>
// //             </h2>

// //             <p>
// //               Elevate Infra was conceived with the ambition to
// //               create a development company that looks beyond
// //               conventional construction.
// //             </p>

// //             <p>
// //               For us, development starts by asking the right
// //               questions: What does this location need? Who will
// //               use this space? How can planning improve everyday
// //               experience? And how can the development continue to
// //               create value years after completion?
// //             </p>

// //             <p>
// //               This perspective shapes the way we evaluate
// //               opportunities, collaborate with professionals and
// //               make development decisions.
// //             </p>

// //             <p>
// //               As our portfolio evolves, our objective remains
// //               consistent — to build a trusted brand associated
// //               with considered planning, dependable execution and
// //               meaningful real estate.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= DEVELOPMENT APPROACH ================= */}

// //       <section className="about-approach">
// //         <div className="container">
// //           <div className="about-section-heading">
// //             <div>
// //               <span className="eyebrow">
// //                 How We Think
// //               </span>

// //               <h2>
// //                 Development starts
// //                 <span> before construction.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               A successful project is shaped by hundreds of
// //               decisions made before the first structure rises.
// //               Our approach connects these decisions into one
// //               clear development strategy.
// //             </p>
// //           </div>

// //           <div className="approach-grid">
// //             {approach.map((item) => (
// //               <article className="approach-card" key={item.no}>
// //                 <span className="approach-number">
// //                   {item.no}
// //                 </span>

// //                 <h3>{item.title}</h3>

// //                 <p>{item.text}</p>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= PURPOSE ================= */}

// //       <section className="about-purpose">
// //         <div className="container purpose-layout">
// //           <div className="purpose-heading">
// //             <span className="eyebrow">
// //               Our Purpose
// //             </span>

// //             <h2>
// //               Places should work
// //               <span> beautifully.</span>
// //             </h2>

// //             <p>
// //               Our purpose is to create environments where
// //               intelligent planning, practical functionality and
// //               considered design come together naturally.
// //             </p>
// //           </div>

// //           <div className="purpose-points">
// //             <div>
// //               <span>01</span>

// //               <div>
// //                 <h3>For People</h3>
// //                 <p>
// //                   Spaces designed around everyday experience,
// //                   comfort, usability and connection.
// //                 </p>
// //               </div>
// //             </div>

// //             <div>
// //               <span>02</span>

// //               <div>
// //                 <h3>For Partners</h3>
// //                 <p>
// //                   Development decisions guided by transparency,
// //                   feasibility and sustainable value creation.
// //                 </p>
// //               </div>
// //             </div>

// //             <div>
// //               <span>03</span>

// //               <div>
// //                 <h3>For Places</h3>
// //                 <p>
// //                   Projects that respond thoughtfully to their
// //                   location and contribute positively to their
// //                   surroundings.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= PRINCIPLES ================= */}

// //       <section className="about-principles">
// //         <div className="container">
// //           <div className="about-section-heading">
// //             <div>
// //               <span className="eyebrow">
// //                 Our Principles
// //               </span>

// //               <h2>
// //                 The values behind
// //                 <span> every decision.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               Our principles guide how we evaluate opportunities,
// //               build relationships and approach every stage of
// //               development.
// //             </p>
// //           </div>

// //           <div className="principle-grid">
// //             {values.map((value) => (
// //               <article key={value.no}>
// //                 <b>{value.no}</b>

// //                 <h3>{value.title}</h3>

// //                 <p>{value.text}</p>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= DESIGN IMAGE SECTION ================= */}

// //       <section className="about-design">
// //         <div className="container about-design-grid">
// //           <div className="about-design-copy">
// //             <span className="eyebrow">
// //               Design & Experience
// //             </span>

// //             <h2>
// //               Details create the
// //               <span> difference.</span>
// //             </h2>

// //             <p>
// //               Good development is often experienced through
// //               details — how a person arrives, how spaces connect,
// //               how natural light enters, how movement feels and how
// //               architecture responds to everyday life.
// //             </p>

// //             <p>
// //               We believe design should never exist only for
// //               appearance. It should improve how a place functions
// //               while giving it an identity that feels relevant and
// //               enduring.
// //             </p>

// //             <Link className="about-text-link" to="/projects">
// //               Explore developments →
// //             </Link>
// //           </div>

// //           <div className="about-design-images">
// //             <img
// //               className="about-design-main"
// //               src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=88"
// //               alt="Premium architecture"
// //             />

// //             <img
// //               className="about-design-small"
// //               src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=88"
// //               alt="Luxury interior"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= VISION + MISSION ================= */}

// //       <section className="vision-mission">
// //         <div className="container vision-mission-grid">
// //           <article>
// //             <span className="eyebrow">
// //               Our Vision
// //             </span>

// //             <h2>
// //               A respected name in
// //               <span> thoughtful development.</span>
// //             </h2>

// //             <p>
// //               To build a trusted real estate development company
// //               known for creating relevant, well-planned and
// //               enduring places that contribute meaningful value to
// //               customers, partners and communities.
// //             </p>
// //           </article>

// //           <article>
// //             <span className="eyebrow">
// //               Our Mission
// //             </span>

// //             <h2>
// //               Better decisions.
// //               <span> Better places.</span>
// //             </h2>

// //             <p>
// //               To combine opportunity, planning, design,
// //               engineering and disciplined execution into
// //               developments that balance experience, quality and
// //               long-term commercial value.
// //             </p>
// //           </article>
// //         </div>
// //       </section>

// //       {/* ================= FUTURE ================= */}

// //       <section className="about-future">
// //         <div className="container about-future-grid">
// //           <div>
// //             <span className="eyebrow">
// //               Looking Ahead
// //             </span>

// //             <h2>
// //               Growing with
// //               <span> purpose.</span>
// //             </h2>
// //           </div>

// //           <div>
// //             <p>
// //               Our future is focused on building a carefully
// //               considered portfolio across residential, commercial
// //               and strategic development opportunities.
// //             </p>

// //             <p>
// //               Growth for us is not simply about adding more
// //               projects. It is about selecting the right
// //               opportunities, strengthening our capabilities and
// //               creating developments that reinforce the Elevate
// //               Infra philosophy.
// //             </p>

// //             <Link className="btn" to="/projects">
// //               View Our Developments ↗
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FINAL CTA ================= */}

// //       <section className="about-final-cta">
// //         <div className="container">
// //           <span className="eyebrow">
// //             Elevate Infra
// //           </span>

// //           <h2>
// //             Building today with a
// //             <span> long-term perspective.</span>
// //           </h2>

// //           <p>
// //             Explore our developments, discover our capabilities
// //             or speak with us about a potential opportunity.
// //           </p>

// //           <div className="about-cta-actions">
// //             <Link className="btn" to="/projects">
// //               Explore Developments ↗
// //             </Link>

// //             <Link
// //               className="btn about-outline-btn"
// //               to="/contact"
// //             >
// //               Contact Us
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./About.css";

// import { getSiteData } from "../data/siteData";

// export default function About() {
//   const [siteData, setSiteData] = useState(null);

//   useEffect(() => {
//     const loadData = () => {
//       const data = getSiteData();
//       setSiteData(data);
//     };

//     loadData();

//     window.addEventListener("elevate-data-updated", loadData);
//     window.addEventListener("storage", loadData);

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

//   const about = siteData?.about || {
//     eyebrow: "About Elevate Infra",
//     title: "A developer mindset.",
//     titleHighlight: "A long-term vision.",
//     description:
//       "We create real estate by connecting opportunity, planning, design, execution and value into one clear development strategy.",
//   };

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="page-hero about-hero">
//         <div className="container">
//           <span className="eyebrow">
//             {about.eyebrow}
//           </span>

//           <h1 className="page-title">
//             {about.title}
//             <br />
//             <span className="gold">
//               {about.titleHighlight}
//             </span>
//           </h1>

//           <p>
//             {about.description}
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           OUR STORY
//       ===================================================== */}

//       <section className="section about-story">
//         <div className="container about-story-grid">
//           <div>
//             <span className="eyebrow">
//               Our Story
//             </span>

//             <h2 className="section-title">
//               Built to create
//               <span>
//                 {" "}
//                 more meaningful places.
//               </span>
//             </h2>
//           </div>

//           <div>
//             <p>
//               Elevate Infra is envisioned as a modern real
//               estate development company — one that looks
//               beyond square footage and focuses on how a
//               project performs for people, partners and the
//               city around it.
//             </p>

//             <p>
//               Our role is to bring clarity to complex
//               development: identifying potential, defining
//               the right product, coordinating design and
//               execution, and protecting long-term value.
//             </p>

//             <p>
//               As the company grows, our ambition is simple:
//               build a trusted development brand known for
//               thoughtful decisions and dependable delivery.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PURPOSE & PRINCIPLES
//       ===================================================== */}

//       <section className="section purpose">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Purpose & Principles
//               </span>

//               <h2 className="section-title">
//                 What guides
//                 <span>
//                   {" "}
//                   the work.
//                 </span>
//               </h2>
//             </div>
//           </div>

//           <div className="principle-grid">
//             <article>
//               <b>01</b>

//               <h3>
//                 Trust First
//               </h3>

//               <p>
//                 Transparent communication and responsible
//                 commitments across every relationship.
//               </p>
//             </article>

//             <article>
//               <b>02</b>

//               <h3>
//                 Design With Reason
//               </h3>

//               <p>
//                 Every design decision should improve
//                 function, experience or long-term value.
//               </p>
//             </article>

//             <article>
//               <b>03</b>

//               <h3>
//                 Execution Matters
//               </h3>

//               <p>
//                 Strong processes, coordination and quality
//                 control turn vision into reality.
//               </p>
//             </article>

//             <article>
//               <b>04</b>

//               <h3>
//                 Think Long Term
//               </h3>

//               <p>
//                 We aim to create developments that remain
//                 relevant well beyond handover.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DEVELOPMENT PHILOSOPHY
//       ===================================================== */}

//       <section className="section about-philosophy">
//         <div className="container about-philosophy-grid">
//           <div className="about-philosophy-image">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
//               alt="Elevate Infra development philosophy"
//             />
//           </div>

//           <div className="about-philosophy-copy">
//             <span className="eyebrow">
//               Development Philosophy
//             </span>

//             <h2 className="section-title">
//               Better decisions.
//               <br />
//               Better places.
//               <br />
//               <span>Better value.</span>
//             </h2>

//             <p>
//               We approach development as one connected
//               process. A strong project begins with the right
//               location and continues through planning,
//               architecture, engineering, execution and
//               customer experience.
//             </p>

//             <p>
//               By keeping these elements connected, we aim to
//               create projects that are not only attractive at
//               launch but continue to perform over time.
//             </p>

//             <div className="about-philosophy-points">
//               <div>
//                 <span>01</span>
//                 <b>
//                   Location
//                 </b>
//               </div>

//               <div>
//                 <span>02</span>
//                 <b>
//                   Planning
//                 </b>
//               </div>

//               <div>
//                 <span>03</span>
//                 <b>
//                   Design
//                 </b>
//               </div>

//               <div>
//                 <span>04</span>
//                 <b>
//                   Execution
//                 </b>
//               </div>
//             </div>

//             <Link
//               className="btn"
//               to="/expertise"
//             >
//               Explore Our Expertise ↗
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VISION
//       ===================================================== */}

//       <section className="about-vision">
//         <div className="container vision-box">
//           <span className="eyebrow">
//             Our Vision
//           </span>

//           <h2>
//             To build a respected development company that
//             creates
//             <span>
//               {" "}
//               enduring value through better places.
//             </span>
//           </h2>

//           <Link
//             className="btn"
//             to="/projects"
//           >
//             View Developments ↗
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

import { getSiteData } from "../data/siteData";

const values = [
  {
    no: "01",
    title: "Trust First",
    text: "Clear communication, responsible commitments and transparency across every relationship.",
  },
  {
    no: "02",
    title: "Design With Reason",
    text: "Every design decision should improve function, experience, efficiency or long-term value.",
  },
  {
    no: "03",
    title: "Execution Matters",
    text: "Planning becomes meaningful only when strong coordination and quality execution bring it to life.",
  },
  {
    no: "04",
    title: "Think Long Term",
    text: "We aim to create developments that remain useful, relevant and valuable well beyond delivery.",
  },
];

const approach = [
  {
    no: "01",
    title: "Understand",
    text: "Study the location, opportunity, surrounding infrastructure, demand and development potential.",
  },
  {
    no: "02",
    title: "Define",
    text: "Create a clear product vision based on market relevance, feasibility and long-term positioning.",
  },
  {
    no: "03",
    title: "Design",
    text: "Bring architecture, engineering, functionality and experience together into one coordinated plan.",
  },
  {
    no: "04",
    title: "Deliver",
    text: "Execute with disciplined processes, quality controls and attention to the details that matter.",
  },
];

export default function About() {
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    const loadData = () => {
      setSiteData(getSiteData());
    };

    loadData();

    window.addEventListener("elevate-data-updated", loadData);
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("elevate-data-updated", loadData);
      window.removeEventListener("storage", loadData);
    };
  }, []);

  const about = siteData?.about || {
    eyebrow: "About Elevate Infra",
    title: "A developer mindset.",
    titleHighlight: "A long-term vision.",
    description:
      "We bring opportunity, planning, design and execution together to create real estate with purpose, identity and enduring value.",
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero about-hero">
        <div className="container about-hero-content">
          <span className="eyebrow">{about.eyebrow}</span>

          <h1 className="page-title">
            {about.title}
            <br />
            <span>{about.titleHighlight}</span>
          </h1>

          <p>{about.description}</p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-heading">
            <span className="eyebrow">Who We Are</span>

            <h2>
              Building more than real estate.
              <span> Building lasting value.</span>
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              Elevate Infra is a modern real estate development
              company built around a simple belief — good
              development should create value not only through
              buildings, but through better planning, stronger
              experiences and more thoughtful places.
            </p>

            <p>
              We look at development as one connected journey.
              From understanding the potential of a location to
              defining the right product, coordinating design and
              managing execution, every stage contributes to the
              final outcome.
            </p>

            <Link to="/expertise" className="about-text-link">
              Explore our expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SMALL STAT STRIP
      ===================================================== */}

      <section className="about-stats">
        <div className="container about-stats-grid">
          <div>
            <strong>01</strong>
            <span>Integrated Development Vision</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Residential & Commercial Focus</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Planning to Delivery Approach</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Long-Term Value Creation</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story">
        <div className="container about-story-layout">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=88"
              alt="Modern real estate development"
            />

            <div className="about-image-label">
              <span>OUR APPROACH</span>

              <strong>
                Thoughtful development.
                <br />
                Meaningful places.
              </strong>
            </div>
          </div>

          <div className="about-story-content">
            <span className="eyebrow">Our Story</span>

            <h2>
              Created with a clear
              <span> development philosophy.</span>
            </h2>

            <p>
              Elevate Infra was conceived with the ambition to
              create a development company that looks beyond
              conventional construction.
            </p>

            <p>
              For us, development starts by asking the right
              questions: What does this location need? Who will
              use this space? How can planning improve everyday
              experience? And how can the development continue to
              create value years after completion?
            </p>

            <p>
              This perspective shapes the way we evaluate
              opportunities, collaborate with professionals and
              make development decisions.
            </p>

            <p>
              As our portfolio evolves, our objective remains
              consistent — to build a trusted brand associated
              with considered planning, dependable execution and
              meaningful real estate.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT APPROACH
      ===================================================== */}

      <section className="about-approach">
        <div className="container">
          <div className="about-section-heading">
            <div>
              <span className="eyebrow">How We Think</span>

              <h2>
                Development starts
                <span> before construction.</span>
              </h2>
            </div>

            <p>
              A successful project is shaped by hundreds of
              decisions made before the first structure rises.
              Our approach connects these decisions into one
              clear development strategy.
            </p>
          </div>

          <div className="approach-grid">
            {approach.map((item) => (
              <article className="approach-card" key={item.no}>
                <span className="approach-number">
                  {item.no}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PURPOSE
      ===================================================== */}

      <section className="about-purpose">
        <div className="container purpose-layout">
          <div className="purpose-heading">
            <span className="eyebrow">Our Purpose</span>

            <h2>
              Places should work
              <span> beautifully.</span>
            </h2>

            <p>
              Our purpose is to create environments where
              intelligent planning, practical functionality and
              considered design come together naturally.
            </p>
          </div>

          <div className="purpose-points">
            <div>
              <span>01</span>

              <div>
                <h3>For People</h3>

                <p>
                  Spaces designed around everyday experience,
                  comfort, usability and connection.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <h3>For Partners</h3>

                <p>
                  Development decisions guided by transparency,
                  feasibility and sustainable value creation.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <h3>For Places</h3>

                <p>
                  Projects that respond thoughtfully to their
                  location and contribute positively to their
                  surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="about-principles">
        <div className="container">
          <div className="about-section-heading">
            <div>
              <span className="eyebrow">Our Principles</span>

              <h2>
                The values behind
                <span> every decision.</span>
              </h2>
            </div>

            <p>
              Our principles guide how we evaluate opportunities,
              build relationships and approach every stage of
              development.
            </p>
          </div>

          <div className="principle-grid">
            {values.map((value) => (
              <article key={value.no}>
                <b>{value.no}</b>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESIGN & EXPERIENCE
      ===================================================== */}

      <section className="about-design">
        <div className="container about-design-grid">
          <div className="about-design-copy">
            <span className="eyebrow">
              Design & Experience
            </span>

            <h2>
              Details create the
              <span> difference.</span>
            </h2>

            <p>
              Good development is often experienced through
              details — how a person arrives, how spaces connect,
              how natural light enters, how movement feels and how
              architecture responds to everyday life.
            </p>

            <p>
              We believe design should never exist only for
              appearance. It should improve how a place functions
              while giving it an identity that feels relevant and
              enduring.
            </p>

            <Link className="about-text-link" to="/projects">
              Explore developments →
            </Link>
          </div>

          <div className="about-design-images">
            <img
              className="about-design-main"
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=88"
              alt="Premium architecture"
            />

            <img
              className="about-design-small"
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=88"
              alt="Luxury interior"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION + MISSION
      ===================================================== */}

      <section className="vision-mission">
        <div className="container vision-mission-grid">
          <article>
            <span className="eyebrow">Our Vision</span>

            <h2>
              A respected name in
              <span> thoughtful development.</span>
            </h2>

            <p>
              To build a trusted real estate development company
              known for creating relevant, well-planned and
              enduring places that contribute meaningful value to
              customers, partners and communities.
            </p>
          </article>

          <article>
            <span className="eyebrow">Our Mission</span>

            <h2>
              Better decisions.
              <span> Better places.</span>
            </h2>

            <p>
              To combine opportunity, planning, design,
              engineering and disciplined execution into
              developments that balance experience, quality and
              long-term commercial value.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          FUTURE
      ===================================================== */}

      <section className="about-future">
        <div className="container about-future-grid">
          <div>
            <span className="eyebrow">Looking Ahead</span>

            <h2>
              Growing with
              <span> purpose.</span>
            </h2>
          </div>

          <div>
            <p>
              Our future is focused on building a carefully
              considered portfolio across residential, commercial
              and strategic development opportunities.
            </p>

            <p>
              Growth for us is not simply about adding more
              projects. It is about selecting the right
              opportunities, strengthening our capabilities and
              creating developments that reinforce the Elevate
              Infra philosophy.
            </p>

            <Link className="btn" to="/projects">
              View Our Developments ↗
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">
        <div className="container">
          <span className="eyebrow">Elevate Infra</span>

          <h2>
            Building today with a
            <span> long-term perspective.</span>
          </h2>

          <p>
            Explore our developments, discover our capabilities
            or speak with us about a potential opportunity.
          </p>

          <div className="about-cta-actions">
            <Link className="btn" to="/projects">
              Explore Developments ↗
            </Link>

            <Link
              className="btn about-outline-btn"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}