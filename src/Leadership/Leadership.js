// // // import React from"react";import"./Leadership.css";
// // // const leaders=[{name:"Director Name",role:"Director — Strategy & Growth",bio:"Leads business direction, development strategy, partnerships and the long-term growth roadmap of Elevate Infra.",img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=88"},{name:"Director Name",role:"Director — Projects & Operations",bio:"Leads project planning, execution coordination, quality systems and the operational discipline behind every development.",img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=88"}];
// // // export default function Leadership(){return <><section className="page-hero leadership-hero"><div className="container"><span className="eyebrow">Leadership</span><h1 className="page-title">Two leaders.<br/><span className="gold">One development vision.</span></h1><p>Strategy and execution come together through a shared commitment to thoughtful growth and responsible development.</p></div></section><section className="section leaders"><div className="container"><div className="leader-note">Replace the demo names, portraits and biographies below with the client's approved director information.</div><div className="leader-cards">{leaders.map((l,i)=><article className="leader-card" key={i}><div className="leader-img"><img src={l.img} alt="Leadership placeholder"/><span>0{i+1}</span></div><div className="leader-copy"><span className="eyebrow">{l.role}</span><h2>{l.name}</h2><p>{l.bio}</p></div></article>)}</div></div></section><section className="leadership-statement"><div className="container"><span className="eyebrow">Leadership Philosophy</span><h2>Think clearly. Execute responsibly. <span>Build for the long term.</span></h2></div></section></>}
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Leadership.css";

// // const leaders = [
// //   {
// //     id: "01",
// //     name: "Director Name",
// //     role: "Director — Strategy & Growth",
// //     shortRole: "Strategy & Growth",
// //     bio: "Leads business direction, development strategy, partnerships and the long-term growth roadmap of Elevate Infra.",
// //     image:
// //       "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=90",
// //   },
// //   {
// //     id: "02",
// //     name: "Director Name",
// //     role: "Director — Projects & Operations",
// //     shortRole: "Projects & Operations",
// //     bio: "Leads project planning, execution coordination, quality systems and the operational discipline behind every development.",
// //     image:
// //       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=90",
// //   },
// // ];

// // const leadershipPrinciples = [
// //   {
// //     number: "01",
// //     title: "Clear Direction",
// //     text: "Every development begins with a clear understanding of the opportunity, the market and the people it is intended to serve.",
// //   },
// //   {
// //     number: "02",
// //     title: "Responsible Decisions",
// //     text: "We believe strong development is built through thoughtful decisions, transparent communication and disciplined execution.",
// //   },
// //   {
// //     number: "03",
// //     title: "Long-Term Thinking",
// //     text: "Our focus extends beyond delivery. We aim to create developments that remain relevant, useful and valuable over time.",
// //   },
// // ];

// // export default function Leadership() {
// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ===================================================== */}
// //       <section className="page-hero leadership-hero">
// //         <div className="container leadership-hero-inner">
// //           <div className="leadership-hero-copy">
// //             <span className="eyebrow">Leadership</span>

// //             <h1 className="page-title">
// //               People behind
// //               <br />
// //               <span>the vision.</span>
// //             </h1>

// //             <p>
// //               Elevate Infra is driven by a leadership approach that brings
// //               strategic thinking, development discipline and a long-term
// //               perspective to every opportunity.
// //             </p>

// //             <div className="leadership-hero-line">
// //               <span></span>
// //               <small>STRATEGY • EXECUTION • VALUE CREATION</small>
// //             </div>
// //           </div>

// //           <div className="leadership-hero-side">
// //             <div className="hero-side-number">02</div>

// //             <div>
// //               <strong>Leadership</strong>
// //               <span>Directors shaping the next chapter of Elevate Infra</span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           INTRO
// //       ===================================================== */}
// //       <section className="leadership-intro">
// //         <div className="container leadership-intro-grid">
// //           <div className="leadership-intro-title">
// //             <span className="eyebrow">The Leadership Team</span>

// //             <h2>
// //               Different strengths.
// //               <br />
// //               <span>One direction.</span>
// //             </h2>
// //           </div>

// //           <div className="leadership-intro-copy">
// //             <p>
// //               Strong real estate development requires more than a good idea.
// //               It requires the ability to understand opportunity, make
// //               decisions with clarity and bring multiple disciplines together.
// //             </p>

// //             <p>
// //               At Elevate Infra, leadership connects the larger development
// //               vision with the practical realities of planning, execution,
// //               partnerships and long-term value.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           LEADERS
// //       ===================================================== */}
// //       <section className="section leaders">
// //         <div className="container">
// //           <div className="leaders-heading">
// //             <div>
// //               <span className="eyebrow">Our Directors</span>

// //               <h2>
// //                 Leadership with
// //                 <span> purpose.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               Two complementary leadership responsibilities working together
// //               across strategy, projects and business growth.
// //             </p>
// //           </div>

// //           <div className="leader-cards">
// //             {leaders.map((leader) => (
// //               <article className="leader-card" key={leader.id}>
// //                 <div className="leader-image-wrap">
// //                   <img src={leader.image} alt={leader.name} />

// //                   <div className="leader-image-overlay"></div>

// //                   <span className="leader-number">{leader.id}</span>

// //                   <div className="leader-image-label">
// //                     <span>DIRECTOR</span>
// //                     <strong>{leader.shortRole}</strong>
// //                   </div>
// //                 </div>

// //                 <div className="leader-copy">
// //                   <div className="leader-role">{leader.role}</div>

// //                   <h3>{leader.name}</h3>

// //                   <div className="leader-divider"></div>

// //                   <p>{leader.bio}</p>

// //                   <div className="leader-footer">
// //                     <span>Elevate Infra</span>
// //                     <span>Leadership</span>
// //                   </div>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>

// //           <div className="leader-placeholder-note">
// //             <span>NOTE</span>
// //             <p>
// //               Director names, photographs and biographies can be replaced with
// //               the final approved leadership information.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           LEADERSHIP APPROACH
// //       ===================================================== */}
// //       <section className="leadership-approach">
// //         <div className="container">
// //           <div className="approach-top">
// //             <div>
// //               <span className="eyebrow">Leadership Approach</span>

// //               <h2>
// //                 How we think about
// //                 <span> building.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               Development is a long journey. Our leadership philosophy is
// //               centred around making better decisions at every stage — from
// //               identifying an opportunity to creating lasting value.
// //             </p>
// //           </div>

// //           <div className="principles-grid">
// //             {leadershipPrinciples.map((item) => (
// //               <article className="principle-card" key={item.number}>
// //                 <div className="principle-number">{item.number}</div>

// //                 <div className="principle-content">
// //                   <h3>{item.title}</h3>
// //                   <p>{item.text}</p>
// //                 </div>

// //                 <span className="principle-arrow">↗</span>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           LEADERSHIP QUOTE / CANVAS
// //       ===================================================== */}
// //       <section className="leadership-canvas">
// //         <div className="container">
// //           <div className="canvas-frame">
// //             <div className="canvas-accent"></div>

// //             <div className="canvas-content">
// //               <span className="eyebrow">A Shared Perspective</span>

// //               <h2>
// //                 “Good development creates more than
// //                 <span> buildings.</span>
// //                 <br />
// //                 It creates places with a future.”
// //               </h2>

// //               <div className="canvas-bottom">
// //                 <span>01</span>

// //                 <p>
// //                   Strategy gives direction. Execution gives it form. Together,
// //                   they create the foundation for enduring real estate value.
// //                 </p>

// //                 <span>2026</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           CTA
// //       ===================================================== */}
// //       <section className="leadership-cta">
// //         <div className="container leadership-cta-inner">
// //           <div>
// //             <span className="eyebrow">Connect With Us</span>

// //             <h2>
// //               Have a development
// //               <span> opportunity?</span>
// //             </h2>

// //             <p>
// //               Let's start a conversation around the opportunity, its potential
// //               and the right development direction.
// //             </p>
// //           </div>

// //           <Link className="btn" to="/contact">
// //             Start a Conversation ↗
// //           </Link>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import "./Leadership.css";

// import {
//   getLeadership,
//   saveLeadership,
// } from "../data/siteData";

// /* =========================================================
//    DEFAULT LEADERSHIP DATA
// ========================================================= */

// const defaultLeaders = [
//   {
//     id: "leader-01",
//     name: "Karan",
//     role: "Director",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=90",
//     bio:
//       "Focused on building a disciplined development platform with a long-term approach to real estate, partnerships and value creation.",
//   },
//   {
//     id: "leader-02",
//     name: "Leadership Team",
//     role: "Director",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=90",
//     bio:
//       "Bringing together thoughtful planning, people-first decision making and a strong commitment to quality across every development opportunity.",
//   },
// ];

// /* =========================================================
//    LEADERSHIP
// ========================================================= */

// export default function Leadership() {
//   const [leaders, setLeaders] = useState([]);

//   /* =======================================================
//      LOAD LEADERS
//   ======================================================= */

//   useEffect(() => {
//     let storedLeaders = getLeadership();

//     if (!storedLeaders || storedLeaders.length === 0) {
//       saveLeadership(defaultLeaders);
//       storedLeaders = defaultLeaders;
//     }

//     setLeaders(storedLeaders);
//   }, []);

//   /* =======================================================
//      LISTEN FOR ADMIN / STORAGE UPDATES
//   ======================================================= */

//   useEffect(() => {
//     const handleDataUpdate = () => {
//       const updatedLeaders = getLeadership();

//       if (updatedLeaders && updatedLeaders.length > 0) {
//         setLeaders(updatedLeaders);
//       } else {
//         setLeaders([]);
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

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="page-hero leadership-hero">
//         <div className="container">
//           <span className="eyebrow">
//             Leadership
//           </span>

//           <h1 className="page-title">
//             People behind
//             <br />
//             the
//             <span className="gold">
//               {" "}
//               vision.
//             </span>
//           </h1>

//           <p>
//             Elevate Infra is being shaped by a leadership
//             approach built around responsible development,
//             clear decision-making and long-term value creation.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="section leadership-intro">
//         <div className="container leadership-intro-grid">
//           <div>
//             <span className="eyebrow">
//               Leadership Perspective
//             </span>

//             <h2 className="section-title">
//               Building with
//               <span>
//                 {" "}
//                 clarity and conviction.
//               </span>
//             </h2>
//           </div>

//           <div>
//             <p>
//               Real estate development requires more than
//               capital and construction. It requires the
//               ability to identify opportunity, make informed
//               decisions and bring different disciplines
//               together around one clear vision.
//             </p>

//             <p>
//               Our leadership philosophy is grounded in
//               responsible development, strong partnerships
//               and a commitment to creating places that
//               deliver lasting value.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LEADERS
//       ===================================================== */}

//       <section className="section leadership-team">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Leadership Team
//               </span>

//               <h2 className="section-title">
//                 The people shaping
//                 <span>
//                   {" "}
//                   Elevate.
//                 </span>
//               </h2>
//             </div>
//           </div>

//           {leaders.length > 0 ? (
//             <div className="leaders-grid">
//               {leaders.map((leader, index) => (
//                 <article
//                   className="leader-card"
//                   key={leader.id || index}
//                 >
//                   <div className="leader-image">
//                     <img
//                       src={leader.image}
//                       alt={leader.name}
//                     />

//                     <div className="leader-image-overlay"></div>

//                     <span className="leader-number">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <div className="leader-content">
//                     <span className="leader-role">
//                       {leader.role ||
//                         "Leadership"}
//                     </span>

//                     <h3>
//                       {leader.name}
//                     </h3>

//                     <p>
//                       {leader.bio ||
//                         "Driving the vision and long-term direction of Elevate Infra."}
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
//                 Leadership
//               </span>

//               <h3
//                 style={{
//                   marginTop: "12px",
//                   fontFamily:
//                     '"Playfair Display", serif',
//                   fontSize: "32px",
//                 }}
//               >
//                 Leadership information
//                 coming soon
//               </h3>

//               <p
//                 style={{
//                   marginTop: "10px",
//                   opacity: 0.7,
//                 }}
//               >
//                 Leadership profiles will appear here
//                 once they are added.
//               </p>
//             </div>
//           )}

//           <div className="leadership-placeholder">
//             <span>LEADERSHIP NOTE</span>

//             <p>
//               Leadership profiles can be updated as the
//               organisation evolves. Approved photographs,
//               biographies, designations and professional
//               information can be managed from the
//               administrative system.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LEADERSHIP APPROACH
//       ===================================================== */}

//       <section className="section leadership-approach">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <span className="eyebrow">
//                 Our Approach
//               </span>

//               <h2 className="section-title">
//                 Leadership that
//                 <span>
//                   {" "}
//                   thinks long term.
//                 </span>
//               </h2>
//             </div>

//             <p className="muted">
//               The way we lead shapes the way we develop.
//             </p>
//           </div>

//           <div className="leadership-principles">
//             <article>
//               <span>01</span>

//               <div>
//                 <h3>
//                   Responsible Decisions
//                 </h3>

//                 <p>
//                   We evaluate opportunities carefully and
//                   make decisions with a focus on feasibility,
//                   responsibility and long-term relevance.
//                 </p>
//               </div>
//             </article>

//             <article>
//               <span>02</span>

//               <div>
//                 <h3>
//                   Strong Partnerships
//                 </h3>

//                 <p>
//                   Successful development depends on trusted
//                   relationships with landowners, consultants,
//                   investors, contractors and customers.
//                 </p>
//               </div>
//             </article>

//             <article>
//               <span>03</span>

//               <div>
//                 <h3>
//                   Quality Culture
//                 </h3>

//                 <p>
//                   We believe quality should be considered
//                   from the first planning decision through
//                   execution, delivery and long-term asset
//                   performance.
//                 </p>
//               </div>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           QUOTE / CANVAS
//       ===================================================== */}

//       <section className="leadership-quote">
//         <div className="container">
//           <div className="leadership-quote-box">
//             <span className="quote-mark">
//               “
//             </span>

//             <div>
//               <span className="eyebrow">
//                 The Elevate Mindset
//               </span>

//               <h2>
//                 Good development creates
//                 <span>
//                   {" "}
//                   value beyond the building.
//                 </span>
//               </h2>

//               <p>
//                 It creates better experiences, stronger
//                 neighbourhoods, meaningful partnerships and
//                 assets that remain relevant over time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="leadership-cta">
//         <div className="container">
//           <span className="eyebrow">
//             Work With Elevate
//           </span>

//           <h2>
//             Looking to create
//             <span>
//               {" "}
//               something meaningful?
//             </span>
//           </h2>

//           <p>
//             Connect with our team to discuss development
//             opportunities, partnerships and future projects.
//           </p>

//           <a
//             href="/contact"
//             className="btn"
//           >
//             Start a Conversation ↗
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Leadership.css";

import {
  getLeadership,
  saveLeadership,
} from "../data/siteData";

/* =========================================================
   DEFAULT LEADERSHIP DATA
========================================================= */

const defaultLeaders = [
  {
    id: "leader-01",
    name: "Karan",
    role: "Director — Strategy & Growth",
    shortRole: "Strategy & Growth",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=90",
    bio:
      "Focused on building a disciplined development platform with a long-term approach to real estate, partnerships and value creation.",
  },
  {
    id: "leader-02",
    name: "Leadership Team",
    role: "Director — Projects & Operations",
    shortRole: "Projects & Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=90",
    bio:
      "Bringing together thoughtful planning, people-first decision making and a strong commitment to quality across every development opportunity.",
  },
];

/* =========================================================
   LEADERSHIP PRINCIPLES
========================================================= */

const leadershipPrinciples = [
  {
    number: "01",
    title: "Clear Direction",
    text:
      "Every development begins with a clear understanding of the opportunity, the market and the people it is intended to serve.",
  },
  {
    number: "02",
    title: "Responsible Decisions",
    text:
      "We believe strong development is built through thoughtful decisions, transparent communication and disciplined execution.",
  },
  {
    number: "03",
    title: "Long-Term Thinking",
    text:
      "Our focus extends beyond delivery. We aim to create developments that remain relevant, useful and valuable over time.",
  },
];

/* =========================================================
   NORMALIZE ADMIN DATA
========================================================= */

const normalizeLeader = (leader, index) => {
  return {
    id: leader.id || `leader-${index + 1}`,
    name: leader.name || "Leadership Team",

    role:
      leader.role ||
      "Director",

    shortRole:
      leader.shortRole ||
      leader.role ||
      "Leadership",

    image:
      leader.image ||
      leader.img ||
      leader.imageUrl ||
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=90",

    bio:
      leader.bio ||
      "Driving the vision, strategy and long-term direction of Elevate Infra.",
  };
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Leadership() {
  const [leaders, setLeaders] = useState([]);

  /* =======================================================
     LOAD DATA
  ======================================================= */

  useEffect(() => {
    let storedLeaders = getLeadership();

    /*
      First visit:
      If no leadership exists, create default leadership.
    */

    if (!Array.isArray(storedLeaders) || storedLeaders.length === 0) {
      saveLeadership(defaultLeaders);
      storedLeaders = defaultLeaders;
    }

    setLeaders(
      storedLeaders.map((leader, index) =>
        normalizeLeader(leader, index)
      )
    );
  }, []);

  /* =======================================================
     ADMIN / STORAGE UPDATE LISTENER
  ======================================================= */

  useEffect(() => {
    const handleDataUpdate = () => {
      const updatedLeaders = getLeadership();

      if (Array.isArray(updatedLeaders)) {
        setLeaders(
          updatedLeaders.map((leader, index) =>
            normalizeLeader(leader, index)
          )
        );
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

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero leadership-hero">
        <div className="container leadership-hero-inner">

          <div className="leadership-hero-copy">

            <span className="eyebrow">
              Leadership
            </span>

            <h1 className="page-title">
              People behind
              <br />
              the
              <span>
                {" "}
                vision.
              </span>
            </h1>

            <p>
              Elevate Infra is driven by a leadership approach
              that brings strategic thinking, development
              discipline and a long-term perspective to every
              opportunity.
            </p>

            <div className="leadership-hero-line">
              <span></span>

              <small>
                STRATEGY • EXECUTION • VALUE CREATION
              </small>
            </div>

          </div>

          <div className="leadership-hero-side">

            <div className="hero-side-number">
              {String(leaders.length).padStart(2, "0")}
            </div>

            <div>
              <strong>
                Leadership
              </strong>

              <span>
                People shaping the next chapter of
                Elevate Infra
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="leadership-intro">

        <div className="container leadership-intro-grid">

          <div className="leadership-intro-title">

            <span className="eyebrow">
              The Leadership Team
            </span>

            <h2>
              Different strengths.
              <br />
              <span>
                One direction.
              </span>
            </h2>

          </div>

          <div className="leadership-intro-copy">

            <p>
              Strong real estate development requires more
              than a good idea. It requires the ability to
              understand opportunity, make decisions with
              clarity and bring multiple disciplines together.
            </p>

            <p>
              At Elevate Infra, leadership connects the larger
              development vision with the practical realities
              of planning, execution, partnerships and
              long-term value.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          LEADERS
      ===================================================== */}

      <section className="leaders">

        <div className="container">

          <div className="leaders-heading">

            <div>

              <span className="eyebrow">
                Our Directors
              </span>

              <h2>
                Leadership with
                <span>
                  {" "}
                  purpose.
                </span>
              </h2>

            </div>

            <p>
              Complementary leadership responsibilities
              working together across strategy, projects,
              operations and business growth.
            </p>

          </div>

          {leaders.length > 0 ? (

            <div className="leader-cards">

              {leaders.map((leader, index) => (

                <article
                  className="leader-card"
                  key={leader.id || index}
                >

                  {/* IMAGE */}

                  <div className="leader-image-wrap">

                    <img
                      src={leader.image}
                      alt={leader.name}
                    />

                    <div className="leader-image-overlay"></div>

                    <span className="leader-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="leader-image-label">

                      <span>
                        LEADERSHIP
                      </span>

                      <strong>
                        {leader.shortRole}
                      </strong>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="leader-copy">

                    <div className="leader-role">
                      {leader.role}
                    </div>

                    <h3>
                      {leader.name}
                    </h3>

                    <div className="leader-divider"></div>

                    <p>
                      {leader.bio}
                    </p>

                    <div className="leader-footer">

                      <span>
                        Elevate Infra
                      </span>

                      <span>
                        Leadership
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="leader-placeholder-note">

              <span>
                LEADERSHIP
              </span>

              <p>
                Leadership profiles will appear here once
                they are added from the administrative system.
              </p>

            </div>

          )}

          {/* ADMIN NOTE */}

          <div className="leader-placeholder-note">

            <span>
              NOTE
            </span>

            <p>
              Director names, photographs, designations and
              biographies can be updated from the Elevate
              administrative system.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          LEADERSHIP APPROACH
      ===================================================== */}

      <section className="leadership-approach">

        <div className="container">

          <div className="approach-top">

            <div>

              <span className="eyebrow">
                Leadership Approach
              </span>

              <h2>
                How we think about
                <span>
                  {" "}
                  building.
                </span>
              </h2>

            </div>

            <p>
              Development is a long journey. Our leadership
              philosophy is centred around making better
              decisions at every stage — from identifying an
              opportunity to creating lasting value.
            </p>

          </div>

          <div className="principles-grid">

            {leadershipPrinciples.map((item) => (

              <article
                className="principle-card"
                key={item.number}
              >

                <div className="principle-number">
                  {item.number}
                </div>

                <div className="principle-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <span className="principle-arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          LEADERSHIP CANVAS
      ===================================================== */}

      <section className="leadership-canvas">

        <div className="container">

          <div className="canvas-frame">

            <div className="canvas-accent"></div>

            <div className="canvas-content">

              <span className="eyebrow">
                A Shared Perspective
              </span>

              <h2>
                “Good development creates more than
                <span>
                  {" "}
                  buildings.
                </span>
                <br />
                It creates places with a future.”
              </h2>

              <div className="canvas-bottom">

                <span>
                  01
                </span>

                <p>
                  Strategy gives direction. Execution gives
                  it form. Together, they create the foundation
                  for enduring real estate value.
                </p>

                <span>
                  2026
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="leadership-cta">

        <div className="container leadership-cta-inner">

          <div>

            <span className="eyebrow">
              Connect With Us
            </span>

            <h2>
              Have a development
              <span>
                {" "}
                opportunity?
              </span>
            </h2>

            <p>
              Let's start a conversation around the
              opportunity, its potential and the right
              development direction.
            </p>

          </div>

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