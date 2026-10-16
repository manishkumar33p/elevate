// // import React from"react";import"./Gallery.css";
// // const imgs=["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=88"];
// // export default function Gallery(){return <><section className="page-hero gallery-hero"><div className="container"><span className="eyebrow">Gallery</span><h1 className="page-title">Architecture. Detail.<br/><span className="gold">Experience.</span></h1><p>A visual moodboard for the Elevate Infra brand. Replace these representative images with approved project photography and renders.</p></div></section><section className="section gallery"><div className="container"><div className="gallery-grid">{imgs.map((img,i)=><figure className={`gallery-item item-${i}`} key={img}><img src={img} alt={`Architecture reference ${i+1}`}/><figcaption>Representative Image • 0{i+1}</figcaption></figure>)}</div></div></section></>}
// import React, { useState } from "react";
// import "./Gallery.css";

// const galleryItems = [
//   {
//     id: "01",
//     category: "Residential",
//     title: "Contemporary Living",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "02",
//     category: "Architecture",
//     title: "Modern Architecture",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "03",
//     category: "Interior",
//     title: "Refined Interiors",
//     image:
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "04",
//     category: "Interior",
//     title: "Designed For Comfort",
//     image:
//       "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "05",
//     category: "Residential",
//     title: "Elevated Living",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "06",
//     category: "Commercial",
//     title: "Business Destination",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "07",
//     category: "Architecture",
//     title: "Material & Form",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
//   },
//   {
//     id: "08",
//     category: "Residential",
//     title: "A Sense Of Place",
//     image:
//       "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=90",
//   },
// ];

// const filters = ["All", "Residential", "Architecture", "Interior", "Commercial"];

// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filteredItems =
//     activeFilter === "All"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeFilter);

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ===================================================== */}
//       <section className="page-hero gallery-hero">
//         <div className="container gallery-hero-inner">
//           <div>
//             <span className="eyebrow">Gallery</span>

//             <h1 className="page-title">
//               Architecture.
//               <br />
//               Detail.
//               <br />
//               <span>Experience.</span>
//             </h1>

//             <p>
//               A visual collection reflecting the architectural language,
//               interiors, materials and environments that inspire the Elevate
//               Infra approach to development.
//             </p>
//           </div>

//           <div className="gallery-hero-count">
//             <strong>08</strong>
//             <span>Visual References</span>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}
//       <section className="gallery-intro">
//         <div className="container gallery-intro-grid">
//           <div>
//             <span className="eyebrow">Visual Language</span>

//             <h2>
//               Spaces that are
//               <span> felt as much as seen.</span>
//             </h2>
//           </div>

//           <div className="gallery-intro-copy">
//             <p>
//               Architecture is more than a structure. Materials, light,
//               proportion, landscape and movement together create the experience
//               of a place.
//             </p>

//             <p>
//               This gallery represents the visual direction behind Elevate
//               Infra. Approved project photography, renders and development
//               imagery can be added here as the portfolio evolves.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FILTER
//       ===================================================== */}
//       <section className="gallery-section">
//         <div className="container">
//           <div className="gallery-toolbar">
//             <div>
//               <span className="eyebrow">Explore The Collection</span>

//               <h2>
//                 Selected
//                 <span> perspectives.</span>
//               </h2>
//             </div>

//             <div className="gallery-filters">
//               {filters.map((filter) => (
//                 <button
//                   key={filter}
//                   className={activeFilter === filter ? "active" : ""}
//                   onClick={() => setActiveFilter(filter)}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* =================================================
//               FEATURED IMAGE
//           ================================================= */}
//           <div className="gallery-feature">
//             <div
//               className="gallery-feature-image"
//               onClick={() => setSelectedImage(galleryItems[0])}
//             >
//               <img
//                 src={galleryItems[0].image}
//                 alt={galleryItems[0].title}
//               />

//               <div className="gallery-feature-overlay"></div>

//               <div className="gallery-feature-content">
//                 <span>FEATURED VISUAL / 01</span>
//                 <h3>{galleryItems[0].title}</h3>
//                 <p>{galleryItems[0].category}</p>
//               </div>

//               <div className="gallery-view-icon">↗</div>
//             </div>
//           </div>

//           {/* =================================================
//               GALLERY GRID
//           ================================================= */}
//           <div className="gallery-grid">
//             {filteredItems.map((item, index) => (
//               <figure
//                 className={`gallery-card gallery-card-${index % 4}`}
//                 key={item.id}
//                 onClick={() => setSelectedImage(item)}
//               >
//                 <div className="gallery-image">
//                   <img src={item.image} alt={item.title} />

//                   <div className="gallery-card-overlay"></div>

//                   <span className="gallery-number">{item.id}</span>

//                   <div className="gallery-card-info">
//                     <span>{item.category}</span>
//                     <h3>{item.title}</h3>
//                   </div>

//                   <div className="gallery-card-arrow">↗</div>
//                 </div>

//                 <figcaption>
//                   <span>{item.category}</span>
//                   <b>{item.title}</b>
//                 </figcaption>
//               </figure>
//             ))}
//           </div>

//           {/* =================================================
//               NOTE
//           ================================================= */}
//           <div className="gallery-note">
//             <span>NOTE</span>

//             <p>
//               Current visuals are representative reference images. Replace
//               them with approved Elevate Infra project photographs, renders,
//               interiors and architectural imagery.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VISUAL STATEMENT
//       ===================================================== */}
//       <section className="gallery-statement">
//         <div className="container">
//           <div className="gallery-statement-box">
//             <div className="statement-number">02</div>

//             <div>
//               <span className="eyebrow">The Elevate Aesthetic</span>

//               <h2>
//                 Clean forms.
//                 <br />
//                 Considered details.
//                 <br />
//                 <span>Timeless spaces.</span>
//               </h2>
//             </div>

//             <p>
//               Our visual approach combines contemporary architecture with
//               practical planning, refined materials and a strong sense of
//               place.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}
//       <section className="gallery-cta">
//         <div className="container">
//           <span className="eyebrow">Explore Elevate Infra</span>

//           <h2>
//             See the thinking
//             <span> behind the spaces.</span>
//           </h2>

//           <p>
//             Discover our developments, expertise and approach to creating
//             thoughtful real estate.
//           </p>

//           <div className="gallery-cta-actions">
//             <a href="/projects" className="btn">
//               View Developments ↗
//             </a>

//             <a href="/expertise" className="btn gallery-outline-btn">
//               Our Expertise
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LIGHTBOX
//       ===================================================== */}
//       {selectedImage && (
//         <div
//           className="gallery-lightbox"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             className="gallery-lightbox-close"
//             onClick={() => setSelectedImage(null)}
//             aria-label="Close image"
//           >
//             ×
//           </button>

//           <div
//             className="gallery-lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img src={selectedImage.image} alt={selectedImage.title} />

//             <div className="gallery-lightbox-caption">
//               <span>{selectedImage.category}</span>
//               <h3>{selectedImage.title}</h3>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

import {
  getGallery,
  saveGallery,
} from "../data/siteData";

/* =========================================================
   DEFAULT GALLERY DATA
   First time website open hone par ye data localStorage me save hoga.
========================================================= */

const defaultGalleryItems = [
  {
    id: "01",
    category: "Residential",
    title: "Contemporary Living",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "02",
    category: "Architecture",
    title: "Modern Architecture",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "03",
    category: "Interior",
    title: "Refined Interiors",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "04",
    category: "Interior",
    title: "Designed For Comfort",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "05",
    category: "Residential",
    title: "Elevated Living",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "06",
    category: "Commercial",
    title: "Business Destination",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "07",
    category: "Architecture",
    title: "Material & Form",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "08",
    category: "Residential",
    title: "A Sense Of Place",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=90",
  },
];

const filters = [
  "All",
  "Residential",
  "Architecture",
  "Interior",
  "Commercial",
];

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================================================
     LOAD GALLERY DATA
  ========================================================= */

  useEffect(() => {
    let storedGallery = getGallery();

    if (!storedGallery || storedGallery.length === 0) {
      saveGallery(defaultGalleryItems);
      storedGallery = defaultGalleryItems;
    }

    setGalleryItems(storedGallery);
  }, []);

  /* =========================================================
     LISTEN FOR ADMIN / LOCAL STORAGE UPDATES
  ========================================================= */

  useEffect(() => {
    const handleDataUpdate = () => {
      const updatedGallery = getGallery();

      if (updatedGallery && updatedGallery.length > 0) {
        setGalleryItems(updatedGallery);
      } else {
        setGalleryItems([]);
      }
    };

    window.addEventListener(
      "elevate-data-updated",
      handleDataUpdate
    );

    window.addEventListener("storage", handleDataUpdate);

    return () => {
      window.removeEventListener(
        "elevate-data-updated",
        handleDataUpdate
      );

      window.removeEventListener("storage", handleDataUpdate);
    };
  }, []);

  /* =========================================================
     FILTER GALLERY
  ========================================================= */

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  /* =========================================================
     FEATURE IMAGE
  ========================================================= */

  const featuredItem =
    galleryItems.length > 0 ? galleryItems[0] : null;

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero gallery-hero">
        <div className="container gallery-hero-inner">
          <div>
            <span className="eyebrow">Gallery</span>

            <h1 className="page-title">
              Architecture.
              <br />
              Detail.
              <br />
              <span>Experience.</span>
            </h1>

            <p>
              A visual collection reflecting the architectural
              language, interiors, materials and environments
              that inspire the Elevate Infra approach to
              development.
            </p>
          </div>

          <div className="gallery-hero-count">
            <strong>
              {String(galleryItems.length).padStart(2, "0")}
            </strong>

            <span>Visual References</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="gallery-intro">
        <div className="container gallery-intro-grid">
          <div>
            <span className="eyebrow">
              Visual Language
            </span>

            <h2>
              Spaces that are
              <span> felt as much as seen.</span>
            </h2>
          </div>

          <div className="gallery-intro-copy">
            <p>
              Architecture is more than a structure. Materials,
              light, proportion, landscape and movement together
              create the experience of a place.
            </p>

            <p>
              This gallery represents the visual direction
              behind Elevate Infra. Approved project
              photography, renders and development imagery can
              be added here as the portfolio evolves.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section className="gallery-section">
        <div className="container">

          {/* TOOLBAR */}

          <div className="gallery-toolbar">
            <div>
              <span className="eyebrow">
                Explore The Collection
              </span>

              <h2>
                Selected
                <span> perspectives.</span>
              </h2>
            </div>

            <div className="gallery-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              FEATURED IMAGE
          ================================================= */}

          {featuredItem && (
            <div className="gallery-feature">
              <div
                className="gallery-feature-image"
                onClick={() =>
                  setSelectedImage(featuredItem)
                }
              >
                <img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                />

                <div className="gallery-feature-overlay"></div>

                <div className="gallery-feature-content">
                  <span>
                    FEATURED VISUAL / 01
                  </span>

                  <h3>{featuredItem.title}</h3>

                  <p>{featuredItem.category}</p>
                </div>

                <div className="gallery-view-icon">
                  ↗
                </div>
              </div>
            </div>
          )}

          {/* =================================================
              GALLERY GRID
          ================================================= */}

          {filteredItems.length > 0 ? (
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <figure
                  className={`gallery-card gallery-card-${
                    index % 4
                  }`}
                  key={item.id}
                  onClick={() =>
                    setSelectedImage(item)
                  }
                >
                  <div className="gallery-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="gallery-card-overlay"></div>

                    <span className="gallery-number">
                      {item.id}
                    </span>

                    <div className="gallery-card-info">
                      <span>
                        {item.category}
                      </span>

                      <h3>{item.title}</h3>
                    </div>

                    <div className="gallery-card-arrow">
                      ↗
                    </div>
                  </div>

                  <figcaption>
                    <span>{item.category}</span>

                    <b>{item.title}</b>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: "70px 20px",
                textAlign: "center",
              }}
            >
              <span className="eyebrow">
                Gallery
              </span>

              <h3
                style={{
                  marginTop: "12px",
                  fontFamily:
                    '"Playfair Display", serif',
                  fontSize: "32px",
                }}
              >
                No visuals available
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  opacity: 0.7,
                }}
              >
                Gallery images will appear here once
                they are added.
              </p>
            </div>
          )}

          {/* =================================================
              NOTE
          ================================================= */}

          <div className="gallery-note">
            <span>NOTE</span>

            <p>
              Current visuals are representative reference
              images. Replace them with approved Elevate Infra
              project photographs, renders and architectural
              imagery.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section className="gallery-statement">
        <div className="container">
          <div className="gallery-statement-box">
            <div className="statement-number">
              02
            </div>

            <div>
              <span className="eyebrow">
                The Elevate Aesthetic
              </span>

              <h2>
                Clean forms.
                <br />
                Considered details.
                <br />
                <span>Timeless spaces.</span>
              </h2>
            </div>

            <p>
              Our visual approach combines contemporary
              architecture with practical planning, refined
              materials and a strong sense of place.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="gallery-cta">
        <div className="container">
          <span className="eyebrow">
            Explore Elevate Infra
          </span>

          <h2>
            See the thinking
            <span> behind the spaces.</span>
          </h2>

          <p>
            Discover our developments, expertise and
            approach to creating thoughtful real estate.
          </p>

          <div className="gallery-cta-actions">
            <Link
              to="/projects"
              className="btn"
            >
              View Developments ↗
            </Link>

            <Link
              to="/expertise"
              className="btn gallery-outline-btn"
            >
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-lightbox-close"
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}