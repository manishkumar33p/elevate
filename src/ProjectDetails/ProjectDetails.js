// // import React from"react";import{Link,useParams}from"react-router-dom";import{projects}from"../Projects/Projects";import"./ProjectDetails.css";
// // export default function ProjectDetails(){const{id}=useParams();const p=projects.find(x=>x.id===id)||projects[0];return <><section className="detail-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,12,9,.92),rgba(5,12,9,.25)),url(${p.img})`}}><div className="container"><span className="eyebrow">{p.type}</span><h1>{p.title}</h1><p>{p.location}</p></div></section><section className="section detail-main"><div className="container detail-grid"><div><span className="eyebrow">The Development</span><h2 className="section-title">Designed around <span>experience and value.</span></h2><p>{p.desc}</p><p>The development reflects our integrated approach: understand the site, define a clear product vision, coordinate design and infrastructure, and execute with long-term performance in mind.</p></div><div className="detail-facts"><div><span>Status</span><b>{p.status}</b></div><div><span>Type</span><b>{p.type}</b></div><div><span>Location</span><b>{p.location}</b></div><div><span>Indicative Scale</span><b>{p.area}</b></div></div></div></section><section className="section detail-gallery"><div className="container"><div className="section-head"><div><span className="eyebrow">Design Direction</span><h2 className="section-title">A sense of the <span>experience.</span></h2></div></div><div className="detail-images"><img src={p.img} alt={p.title}/><img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=88" alt="Interior concept"/><img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1100&q=88" alt="Living concept"/></div><p className="demo-caption">Representative imagery for website design demonstration.</p></div></section><section className="detail-cta"><div className="container"><div><span className="eyebrow">Project Enquiry</span><h2>Interested in {p.title}?</h2></div><Link className="btn" to="/contact">Start a Conversation ↗</Link></div></section></>}
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { projects } from "../Projects/Projects";
// import "./ProjectDetails.css";

// export default function ProjectDetails() {
//   const { id } = useParams();

//   const project =
//     projects.find((item) => item.id === id) || projects[0];

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ===================================================== */}
//       <section
//         className="detail-hero"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               90deg,
//               rgba(7, 35, 53, 0.94) 0%,
//               rgba(7, 35, 53, 0.72) 48%,
//               rgba(7, 35, 53, 0.18) 100%
//             ),
//             url(${project.img})
//           `,
//         }}
//       >
//         <div className="container detail-hero-inner">
//           <div className="detail-hero-content">
//             <span className="eyebrow">{project.type}</span>

//             <h1>{project.title}</h1>

//             <div className="detail-location">
//               <span>LOCATION</span>
//               <strong>{project.location}</strong>
//             </div>

//             <p>
//               A development vision shaped around thoughtful planning,
//               contemporary design and long-term value.
//             </p>

//             <div className="detail-hero-actions">
//               <a href="#overview" className="btn">
//                 Explore Development ↓
//               </a>

//               <Link
//                 to="/contact"
//                 className="btn detail-outline-btn"
//               >
//                 Project Enquiry
//               </Link>
//             </div>
//           </div>

//           <div className="detail-hero-meta">
//             <div>
//               <span>PROJECT</span>
//               <strong>01</strong>
//             </div>

//             <div>
//               <span>STATUS</span>
//               <strong>{project.status}</strong>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           OVERVIEW
//       ===================================================== */}
//       <section className="detail-overview" id="overview">
//         <div className="container">
//           <div className="detail-overview-grid">
//             <div className="detail-overview-heading">
//               <span className="eyebrow">
//                 The Development
//               </span>

//               <h2>
//                 Designed around
//                 <span> experience and value.</span>
//               </h2>
//             </div>

//             <div className="detail-overview-copy">
//               <p className="detail-lead">
//                 {project.desc}
//               </p>

//               <p>
//                 Every development begins with an understanding of
//                 its location, opportunity and the people it is
//                 intended to serve. The objective is to create a
//                 strong development vision before moving into
//                 detailed planning and execution.
//               </p>

//               <p>
//                 From architecture and infrastructure to landscape,
//                 movement and everyday experience, each element is
//                 considered as part of one connected development
//                 strategy.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROJECT FACTS
//       ===================================================== */}
//       <section className="detail-facts-section">
//         <div className="container">
//           <div className="detail-facts-grid">
//             <div className="detail-fact">
//               <span>01</span>
//               <small>PROJECT TYPE</small>
//               <strong>{project.type}</strong>
//             </div>

//             <div className="detail-fact">
//               <span>02</span>
//               <small>LOCATION</small>
//               <strong>{project.location}</strong>
//             </div>

//             <div className="detail-fact">
//               <span>03</span>
//               <small>INDICATIVE SCALE</small>
//               <strong>{project.area}</strong>
//             </div>

//             <div className="detail-fact">
//               <span>04</span>
//               <small>PROJECT STATUS</small>
//               <strong>{project.status}</strong>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURE IMAGE
//       ===================================================== */}
//       <section className="detail-feature">
//         <div className="container">
//           <div className="detail-feature-image">
//             <img
//               src={project.img}
//               alt={project.title}
//             />

//             <div className="detail-feature-overlay">
//               <span>01 / PROJECT PERSPECTIVE</span>
//               <h2>
//                 A development shaped
//                 <br />
//                 around <em>possibility.</em>
//               </h2>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DEVELOPMENT APPROACH
//       ===================================================== */}
//       <section className="section detail-approach">
//         <div className="container">
//           <div className="detail-approach-grid">
//             <div>
//               <span className="eyebrow">
//                 Development Approach
//               </span>

//               <h2 className="section-title">
//                 From opportunity
//                 <span> to destination.</span>
//               </h2>

//               <p className="detail-approach-intro">
//                 The development process is considered as one
//                 connected journey. Each stage builds upon the
//                 previous one to create clarity, consistency and
//                 long-term value.
//               </p>
//             </div>

//             <div className="detail-process">
//               <div className="detail-process-item">
//                 <b>01</b>
//                 <div>
//                   <h3>Understand</h3>
//                   <p>
//                     Study the location, context, connectivity,
//                     market and development potential.
//                   </p>
//                 </div>
//               </div>

//               <div className="detail-process-item">
//                 <b>02</b>
//                 <div>
//                   <h3>Define</h3>
//                   <p>
//                     Establish the product vision, positioning,
//                     planning direction and user experience.
//                   </p>
//                 </div>
//               </div>

//               <div className="detail-process-item">
//                 <b>03</b>
//                 <div>
//                   <h3>Design</h3>
//                   <p>
//                     Bring architecture, engineering, landscape
//                     and infrastructure together.
//                   </p>
//                 </div>
//               </div>

//               <div className="detail-process-item">
//                 <b>04</b>
//                 <div>
//                   <h3>Deliver</h3>
//                   <p>
//                     Maintain execution discipline, quality and
//                     attention to detail through delivery.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DESIGN DIRECTION
//       ===================================================== */}
//       <section className="detail-gallery">
//         <div className="container">
//           <div className="detail-gallery-head">
//             <div>
//               <span className="eyebrow">
//                 Design Direction
//               </span>

//               <h2>
//                 A sense of the
//                 <span> experience.</span>
//               </h2>
//             </div>

//             <p>
//               Representative architectural and interior imagery
//               illustrating the intended visual direction of the
//               development.
//             </p>
//           </div>

//           <div className="detail-images">
//             <div className="detail-image-large">
//               <img
//                 src={project.img}
//                 alt={`${project.title} exterior`}
//               />

//               <span>01 / EXTERIOR</span>
//             </div>

//             <div className="detail-image-small">
//               <img
//                 src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=90"
//                 alt="Interior concept"
//               />

//               <span>02 / INTERIOR</span>
//             </div>

//             <div className="detail-image-small">
//               <img
//                 src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1100&q=90"
//                 alt="Living concept"
//               />

//               <span>03 / LIVING</span>
//             </div>
//           </div>

//           <div className="detail-gallery-note">
//             <span>VISUAL NOTE</span>
//             <p>
//               Representative imagery for website presentation.
//               Approved project photography, renders and actual
//               development visuals can be added here.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VALUE SECTION
//       ===================================================== */}
//       <section className="detail-value">
//         <div className="container">
//           <div className="detail-value-grid">
//             <div>
//               <span className="eyebrow">
//                 The Elevate Perspective
//               </span>

//               <h2>
//                 Built around
//                 <span> long-term relevance.</span>
//               </h2>
//             </div>

//             <div>
//               <p>
//                 We believe successful developments should work
//                 beyond the day they are delivered. Planning,
//                 architecture and experience should continue to
//                 create value as the surrounding environment
//                 evolves.
//               </p>

//               <div className="detail-value-points">
//                 <div>
//                   <b>01</b>
//                   <span>Thoughtful Planning</span>
//                 </div>

//                 <div>
//                   <b>02</b>
//                   <span>Contemporary Design</span>
//                 </div>

//                 <div>
//                   <b>03</b>
//                   <span>Quality Execution</span>
//                 </div>

//                 <div>
//                   <b>04</b>
//                   <span>Long-Term Value</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}
//       <section className="detail-cta">
//         <div className="container detail-cta-inner">
//           <div>
//             <span className="eyebrow">
//               Project Enquiry
//             </span>

//             <h2>
//               Interested in
//               <span> {project.title}?</span>
//             </h2>

//             <p>
//               Connect with Elevate Infra to discuss the project,
//               development opportunities or partnership enquiries.
//             </p>
//           </div>

//           <div className="detail-cta-actions">
//             <Link className="btn" to="/contact">
//               Start a Conversation ↗
//             </Link>

//             <Link
//               className="btn detail-cta-outline"
//               to="/projects"
//             >
//               Back to Portfolio
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

import {
  getProjectById,
  getProjects,
} from "../data/siteData";

const defaultProjects = [
  {
    id: "elevate-greens",
    title: "Elevate Greens",
    type: "Premium Residential",
    location: "NCR Region",
    status: "Concept / Under Development*",
    area: "1.2M Sq. Ft.*",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    desc: "A landscaped residential community envisioned around natural light, open spaces, thoughtful planning and contemporary family living.",
  },
  {
    id: "elevate-heights",
    title: "Elevate Heights",
    type: "Urban Residential",
    location: "Delhi NCR",
    status: "Concept Stage*",
    area: "850K Sq. Ft.*",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    desc: "An urban residential concept balancing efficient planning, refined amenities, connectivity and a strong sense of arrival.",
  },
  {
    id: "elevate-business-district",
    title: "Elevate Business District",
    type: "Commercial",
    location: "Noida",
    status: "Concept Stage*",
    area: "450K Sq. Ft.*",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
    desc: "A contemporary business destination imagined for companies that value connectivity, identity and future-ready infrastructure.",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     LOAD PROJECT
  ========================================================= */

  useEffect(() => {
    const loadProject = () => {
      try {
        let foundProject = getProjectById(id);

        /*
          Fallback:
          Agar localStorage mein project nahi mila,
          default project data se search karega.
        */

        if (!foundProject) {
          foundProject = defaultProjects.find(
            (item) => item.id === id
          );
        }

        /*
          Agar URL galat hai to first project fallback.
        */

        if (!foundProject) {
          foundProject = getProjects()?.[0];

          if (!foundProject) {
            foundProject = defaultProjects[0];
          }
        }

        setProject(foundProject);
      } catch (error) {
        console.error(
          "Unable to load project:",
          error
        );

        const fallback =
          defaultProjects.find(
            (item) => item.id === id
          ) || defaultProjects[0];

        setProject(fallback);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  /* =========================================================
     LISTEN FOR ADMIN DATA UPDATES
  ========================================================= */

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const updatedProject =
          getProjectById(id);

        if (updatedProject) {
          setProject(updatedProject);
        }
      } catch (error) {
        console.error(error);
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
  }, [id]);

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading development...
      </div>
    );
  }

  /* =========================================================
     SAFETY
  ========================================================= */

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2>Development not found.</h2>

          <br />

          <Link
            className="btn"
            to="/projects"
          >
            Back to Developments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="detail-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,35,53,0.94) 0%,
              rgba(7,35,53,0.72) 48%,
              rgba(7,35,53,0.18) 100%
            ),
            url(${project.img})
          `,
        }}
      >
        <div className="container detail-hero-inner">

          <div className="detail-hero-content">

            <span className="eyebrow">
              {project.type}
            </span>

            <h1>
              {project.title}
            </h1>

            <div className="detail-location">
              <span>LOCATION</span>

              <strong>
                {project.location}
              </strong>
            </div>

            <p>
              A development vision shaped around
              thoughtful planning, contemporary design
              and long-term value.
            </p>

            <div className="detail-hero-actions">

              <a
                href="#overview"
                className="btn"
              >
                Explore Development ↓
              </a>

              <Link
                to="/contact"
                className="btn detail-outline-btn"
              >
                Project Enquiry
              </Link>

            </div>

          </div>

          <div className="detail-hero-meta">

            <div>
              <span>PROJECT</span>

              <strong>
                01
              </strong>
            </div>

            <div>
              <span>STATUS</span>

              <strong>
                {project.status}
              </strong>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section
        className="detail-overview"
        id="overview"
      >
        <div className="container">

          <div className="detail-overview-grid">

            <div className="detail-overview-heading">

              <span className="eyebrow">
                The Development
              </span>

              <h2>
                Designed around
                <span>
                  experience and value.
                </span>
              </h2>

            </div>

            <div className="detail-overview-copy">

              <p className="detail-lead">
                {project.desc}
              </p>

              <p>
                Every development begins with an
                understanding of its location,
                opportunity and the people it is
                intended to serve. The objective is
                to create a strong development vision
                before moving into detailed planning
                and execution.
              </p>

              <p>
                From architecture and infrastructure
                to landscape, movement and everyday
                experience, each element is considered
                as part of one connected development
                strategy.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT FACTS
      ===================================================== */}

      <section className="detail-facts-section">
        <div className="container">

          <div className="detail-facts-grid">

            <div className="detail-fact">
              <span>01</span>
              <small>PROJECT TYPE</small>

              <strong>
                {project.type}
              </strong>
            </div>

            <div className="detail-fact">
              <span>02</span>
              <small>LOCATION</small>

              <strong>
                {project.location}
              </strong>
            </div>

            <div className="detail-fact">
              <span>03</span>
              <small>INDICATIVE SCALE</small>

              <strong>
                {project.area}
              </strong>
            </div>

            <div className="detail-fact">
              <span>04</span>
              <small>PROJECT STATUS</small>

              <strong>
                {project.status}
              </strong>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}

      <section className="detail-feature">
        <div className="container">

          <div className="detail-feature-image">

            <img
              src={project.img}
              alt={project.title}
            />

            <div className="detail-feature-overlay">

              <span>
                01 / PROJECT PERSPECTIVE
              </span>

              <h2>
                A development shaped
                <br />
                around <em>possibility.</em>
              </h2>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT APPROACH
      ===================================================== */}

      <section className="section detail-approach">

        <div className="container">

          <div className="detail-approach-grid">

            <div>

              <span className="eyebrow">
                Development Approach
              </span>

              <h2 className="section-title">
                From opportunity
                <span>
                  to destination.
                </span>
              </h2>

              <p className="detail-approach-intro">
                The development process is considered
                as one connected journey. Each stage
                builds upon the previous one to create
                clarity, consistency and long-term value.
              </p>

            </div>

            <div className="detail-process">

              <div className="detail-process-item">

                <b>01</b>

                <div>
                  <h3>Understand</h3>

                  <p>
                    Study the location, context,
                    connectivity, market and
                    development potential.
                  </p>
                </div>

              </div>

              <div className="detail-process-item">

                <b>02</b>

                <div>
                  <h3>Define</h3>

                  <p>
                    Establish the product vision,
                    positioning, planning direction
                    and user experience.
                  </p>
                </div>

              </div>

              <div className="detail-process-item">

                <b>03</b>

                <div>
                  <h3>Design</h3>

                  <p>
                    Bring architecture, engineering,
                    landscape and infrastructure
                    together.
                  </p>
                </div>

              </div>

              <div className="detail-process-item">

                <b>04</b>

                <div>
                  <h3>Deliver</h3>

                  <p>
                    Maintain execution discipline,
                    quality and attention to detail
                    through delivery.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="detail-gallery">

        <div className="container">

          <div className="detail-gallery-head">

            <div>

              <span className="eyebrow">
                Design Direction
              </span>

              <h2>
                A sense of the
                <span>
                  experience.
                </span>
              </h2>

            </div>

            <p>
              Representative architectural and
              interior imagery illustrating the
              intended visual direction of the
              development.
            </p>

          </div>

          <div className="detail-images">

            <div className="detail-image-large">

              <img
                src={project.img}
                alt={`${project.title} exterior`}
              />

              <span>
                01 / EXTERIOR
              </span>

            </div>

            <div className="detail-image-small">

              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=90"
                alt="Interior concept"
              />

              <span>
                02 / INTERIOR
              </span>

            </div>

            <div className="detail-image-small">

              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1100&q=90"
                alt="Living concept"
              />

              <span>
                03 / LIVING
              </span>

            </div>

          </div>

          <div className="detail-gallery-note">

            <span>
              VISUAL NOTE
            </span>

            <p>
              Representative imagery for website
              presentation. Approved project
              photography, renders and actual
              development visuals can be added here.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUE
      ===================================================== */}

      <section className="detail-value">

        <div className="container">

          <div className="detail-value-grid">

            <div>

              <span className="eyebrow">
                The Elevate Perspective
              </span>

              <h2>
                Built around
                <span>
                  long-term relevance.
                </span>
              </h2>

            </div>

            <div>

              <p>
                We believe successful developments
                should work beyond the day they are
                delivered. Planning, architecture and
                experience should continue to create
                value as the surrounding environment
                evolves.
              </p>

              <div className="detail-value-points">

                <div>
                  <b>01</b>
                  <span>
                    Thoughtful Planning
                  </span>
                </div>

                <div>
                  <b>02</b>
                  <span>
                    Contemporary Design
                  </span>
                </div>

                <div>
                  <b>03</b>
                  <span>
                    Quality Execution
                  </span>
                </div>

                <div>
                  <b>04</b>
                  <span>
                    Long-Term Value
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="detail-cta">

        <div className="container detail-cta-inner">

          <div>

            <span className="eyebrow">
              Project Enquiry
            </span>

            <h2>
              Interested in
              <span>
                {" "}
                {project.title}?
              </span>
            </h2>

            <p>
              Connect with Elevate Infra to discuss
              the project, development opportunities
              or partnership enquiries.
            </p>

          </div>

          <div className="detail-cta-actions">

            <Link
              className="btn"
              to="/contact"
            >
              Start a Conversation ↗
            </Link>

            <Link
              className="btn detail-cta-outline"
              to="/projects"
            >
              Back to Portfolio
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}