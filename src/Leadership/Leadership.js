

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
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
//     name: "Karan Jha",
//     role: "Director — Strategy & Growth",
//     shortRole: "Strategy & Growth",
//     image:
//       "/karan.jpeg",
//     bio:
//       "Focused on building a disciplined development platform with a long-term approach to real estate, partnerships and value creation.",
//   },
//   {
//     id: "leader-02",
//     name: "Deepak Awana",
//     role: "Director — Projects & Operations",
//     shortRole: "Projects & Operations",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=90",
//     bio:
//       "Bringing together thoughtful planning, people-first decision making and a strong commitment to quality across every development opportunity.",
//   },
// ];

// /* =========================================================
//    LEADERSHIP PRINCIPLES
// ========================================================= */

// const leadershipPrinciples = [
//   {
//     number: "01",
//     title: "Clear Direction",
//     text:
//       "Every development begins with a clear understanding of the opportunity, the market and the people it is intended to serve.",
//   },
//   {
//     number: "02",
//     title: "Responsible Decisions",
//     text:
//       "We believe strong development is built through thoughtful decisions, transparent communication and disciplined execution.",
//   },
//   {
//     number: "03",
//     title: "Long-Term Thinking",
//     text:
//       "Our focus extends beyond delivery. We aim to create developments that remain relevant, useful and valuable over time.",
//   },
// ];

// /* =========================================================
//    NORMALIZE ADMIN DATA
// ========================================================= */

// const normalizeLeader = (leader, index) => {
//   return {
//     id: leader.id || `leader-${index + 1}`,
//     name: leader.name || "Leadership Team",

//     role:
//       leader.role ||
//       "Director",

//     shortRole:
//       leader.shortRole ||
//       leader.role ||
//       "Leadership",

//    image:
//   leader.image ||
//   leader.img ||
//   leader.imageUrl ||
//   "/karan.jpeg",
//     bio:
//       leader.bio ||
//       "Driving the vision, strategy and long-term direction of Elevate Infra.",
//   };
// };

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function Leadership() {
//   const [leaders, setLeaders] = useState([]);

//   /* =======================================================
//      LOAD DATA
//   ======================================================= */

//   useEffect(() => {
//     let storedLeaders = getLeadership();

//     /*
//       First visit:
//       If no leadership exists, create default leadership.
//     */

//     if (!Array.isArray(storedLeaders) || storedLeaders.length === 0) {
//       saveLeadership(defaultLeaders);
//       storedLeaders = defaultLeaders;
//     }

//   //   setLeaders(
//   //     storedLeaders.map((leader, index) =>
//   //       normalizeLeader(leader, index)
//   //     )
//   //   );
//   // }, []);

//   setLeaders(
//   storedLeaders.map((leader, index) =>
//     normalizeLeader(
//       index === 0
//         ? {
//             ...leader,
//             image: "/karan.jpeg",
//           }
//         : leader,
//       index
//     )
//   )
// );
//   }, []);

//   /* =======================================================
//      ADMIN / STORAGE UPDATE LISTENER
//   ======================================================= */

//   useEffect(() => {
//     const handleDataUpdate = () => {
//       const updatedLeaders = getLeadership();

//       if (Array.isArray(updatedLeaders)) {
//         setLeaders(
//           updatedLeaders.map((leader, index) =>
//             normalizeLeader(leader, index)
//           )
//         );
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
//         <div className="container leadership-hero-inner">

//           <div className="leadership-hero-copy">

//             <span className="eyebrow">
//               Leadership
//             </span>

//             <h1 className="page-title">
//               People behind
//               <br />
//               the
//               <span>
//                 {" "}
//                 vision.
//               </span>
//             </h1>

//             <p>
//               Elevate Infra is driven by a leadership approach
//               that brings strategic thinking, development
//               discipline and a long-term perspective to every
//               opportunity.
//             </p>

//             <div className="leadership-hero-line">
//               <span></span>

//               <small>
//                 STRATEGY • EXECUTION • VALUE CREATION
//               </small>
//             </div>

//           </div>

//           <div className="leadership-hero-side">

//             <div className="hero-side-number">
//               {String(leaders.length).padStart(2, "0")}
//             </div>

//             <div>
//               <strong>
//                 Leadership
//               </strong>

//               <span>
//                 People shaping the next chapter of
//                 Elevate Infra
//               </span>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="leadership-intro">

//         <div className="container leadership-intro-grid">

//           <div className="leadership-intro-title">

//             <span className="eyebrow">
//               The Leadership Team
//             </span>

//             <h2>
//               Different strengths.
//               <br />
//               <span>
//                 One direction.
//               </span>
//             </h2>

//           </div>

//           <div className="leadership-intro-copy">

//             <p>
//               Strong real estate development requires more
//               than a good idea. It requires the ability to
//               understand opportunity, make decisions with
//               clarity and bring multiple disciplines together.
//             </p>

//             <p>
//               At Elevate Infra, leadership connects the larger
//               development vision with the practical realities
//               of planning, execution, partnerships and
//               long-term value.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           LEADERS
//       ===================================================== */}

//       <section className="leaders">

//         <div className="container">

//           <div className="leaders-heading">

//             <div>

//               <span className="eyebrow">
//                 Our Directors
//               </span>

//               <h2>
//                 Leadership with
//                 <span>
//                   {" "}
//                   purpose.
//                 </span>
//               </h2>

//             </div>

//             <p>
//               Complementary leadership responsibilities
//               working together across strategy, projects,
//               operations and business growth.
//             </p>

//           </div>

//           {leaders.length > 0 ? (

//             <div className="leader-cards">

//               {leaders.map((leader, index) => (

//                 <article
//                   className="leader-card"
//                   key={leader.id || index}
//                 >

//                   {/* IMAGE */}

//                   <div className="leader-image-wrap">

//                     <img
//                       src={leader.image}
//                       alt={leader.name}
//                     />

//                     <div className="leader-image-overlay"></div>

//                     <span className="leader-number">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <div className="leader-image-label">

//                       <span>
//                         LEADERSHIP
//                       </span>

//                       <strong>
//                         {leader.shortRole}
//                       </strong>

//                     </div>

//                   </div>

//                   {/* CONTENT */}

//                   <div className="leader-copy">

//                     <div className="leader-role">
//                       {leader.role}
//                     </div>

//                     <h3>
//                       {leader.name}
//                     </h3>

//                     <div className="leader-divider"></div>

//                     <p>
//                       {leader.bio}
//                     </p>

//                     <div className="leader-footer">

//                       <span>
//                         Elevate Infra
//                       </span>

//                       <span>
//                         Leadership
//                       </span>

//                     </div>

//                   </div>

//                 </article>

//               ))}

//             </div>

//           ) : (

//             <div className="leader-placeholder-note">

//               <span>
//                 LEADERSHIP
//               </span>

//               <p>
//                 Leadership profiles will appear here once
//                 they are added from the administrative system.
//               </p>

//             </div>

//           )}

//           {/* ADMIN NOTE */}

//           <div className="leader-placeholder-note">

//             <span>
//               NOTE
//             </span>

//             <p>
//               Director names, photographs, designations and
//               biographies can be updated from the Elevate
//               administrative system.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           LEADERSHIP APPROACH
//       ===================================================== */}

//       <section className="leadership-approach">

//         <div className="container">

//           <div className="approach-top">

//             <div>

//               <span className="eyebrow">
//                 Leadership Approach
//               </span>

//               <h2>
//                 How we think about
//                 <span>
//                   {" "}
//                   building.
//                 </span>
//               </h2>

//             </div>

//             <p>
//               Development is a long journey. Our leadership
//               philosophy is centred around making better
//               decisions at every stage — from identifying an
//               opportunity to creating lasting value.
//             </p>

//           </div>

//           <div className="principles-grid">

//             {leadershipPrinciples.map((item) => (

//               <article
//                 className="principle-card"
//                 key={item.number}
//               >

//                 <div className="principle-number">
//                   {item.number}
//                 </div>

//                 <div className="principle-content">

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.text}
//                   </p>

//                 </div>

//                 <span className="principle-arrow">
//                   ↗
//                 </span>

//               </article>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           LEADERSHIP CANVAS
//       ===================================================== */}

//       <section className="leadership-canvas">

//         <div className="container">

//           <div className="canvas-frame">

//             <div className="canvas-accent"></div>

//             <div className="canvas-content">

//               <span className="eyebrow">
//                 A Shared Perspective
//               </span>

//               <h2>
//                 “Good development creates more than
//                 <span>
//                   {" "}
//                   buildings.
//                 </span>
//                 <br />
//                 It creates places with a future.”
//               </h2>

//               <div className="canvas-bottom">

//                 <span>
//                   01
//                 </span>

//                 <p>
//                   Strategy gives direction. Execution gives
//                   it form. Together, they create the foundation
//                   for enduring real estate value.
//                 </p>

//                 <span>
//                   2026
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="leadership-cta">

//         <div className="container leadership-cta-inner">

//           <div>

//             <span className="eyebrow">
//               Connect With Us
//             </span>

//             <h2>
//               Have a development
//               <span>
//                 {" "}
//                 opportunity?
//               </span>
//             </h2>

//             <p>
//               Let's start a conversation around the
//               opportunity, its potential and the right
//               development direction.
//             </p>

//           </div>

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
import "./Leadership.css";

import {
  saveLeadership,
} from "../data/siteData";

/* =========================================================
   DEFAULT LEADERSHIP DATA
========================================================= */

const defaultLeaders = [
  {
    id: "leader-01",
    name: "Karan Jha",
    role: "Director — Strategy & Growth",
    shortRole: "Strategy & Growth",
    image: "/karan.jpeg",
    bio:
      "Focused on building a disciplined development platform with a long-term approach to real estate, partnerships and value creation.",
  },

  {
    id: "leader-02",
    name: "Deepak Awana",
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
   NORMALIZE LEADER DATA
========================================================= */

const normalizeLeader = (leader, index) => {
  const fallback = defaultLeaders[index] || defaultLeaders[0];

  return {
    id: leader?.id || fallback.id,

    name:
      leader?.name ||
      fallback.name,

    role:
      leader?.role ||
      fallback.role,

    shortRole:
      leader?.shortRole ||
      fallback.shortRole,

    image:
      leader?.image ||
      leader?.img ||
      leader?.imageUrl ||
      fallback.image,

    bio:
      leader?.bio ||
      fallback.bio,
  };
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Leadership() {
  const [leaders, setLeaders] = useState([]);

  /* =======================================================
     LOAD LEADERSHIP DATA
  ======================================================= */

  useEffect(() => {
    /*
      IMPORTANT:
      Reset the old localStorage leadership data once
      so Karan Jha and Deepak Awana appear correctly.
    */

    saveLeadership(defaultLeaders);

    setLeaders(
      defaultLeaders.map((leader, index) =>
        normalizeLeader(leader, index)
      )
    );
  }, []);

  /* =======================================================
     ADMIN / STORAGE UPDATE LISTENER
  ======================================================= */

  useEffect(() => {
    const handleDataUpdate = () => {
      try {
        const storedData = localStorage.getItem(
          "elevate-leadership"
        );

        if (!storedData) {
          setLeaders(defaultLeaders);
          return;
        }

        const parsedData = JSON.parse(storedData);

        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setLeaders(
            parsedData.map((leader, index) =>
              normalizeLeader(leader, index)
            )
          );
        }
      } catch (error) {
        console.error(
          "Leadership data update error:",
          error
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
                      onError={(e) => {
                        e.currentTarget.src =
                          index === 0
                            ? "/karan.jpeg"
                            : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=90";
                      }}
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
