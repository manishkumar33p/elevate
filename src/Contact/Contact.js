// // // import React,{useState}from"react";import"./Contact.css";
// // // export default function Contact(){const[sent,setSent]=useState(false);const submit=e=>{e.preventDefault();setSent(true);e.currentTarget.reset()};return <><section className="page-hero contact-hero"><div className="container"><span className="eyebrow">Contact</span><h1 className="page-title">Let's discuss<br/><span className="gold">what's possible.</span></h1><p>For project enquiries, land opportunities, development partnerships or business conversations, connect with Elevate Infra.</p></div></section><section className="section contact-section"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow">Corporate Enquiries</span><h2 className="section-title">Start a <span>conversation.</span></h2><p>Contact information below is placeholder content. Replace it with the client's approved office address, phone and email before publishing.</p><div className="contact-detail"><small>Office</small><b>Corporate Office, Delhi NCR, India</b></div><div className="contact-detail"><small>Phone</small><b>+91 99999 99999</b></div><div className="contact-detail"><small>Email</small><b>info@elevateinfra.com</b></div><div className="contact-detail"><small>Business Hours</small><b>Mon — Sat · 10:00 AM — 6:30 PM</b></div></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Full Name<input required name="name" placeholder="Your name"/></label><label>Phone Number<input required name="phone" placeholder="+91"/></label></div><label>Email Address<input type="email" name="email" placeholder="you@example.com"/></label><label>I'm interested in<select name="interest"><option>Project Enquiry</option><option>Land / Joint Development</option><option>Partnership</option><option>Investment / Business</option><option>Other</option></select></label><label>Message<textarea name="message" rows="6" placeholder="Tell us about your requirement..."/></label><button className="btn" type="submit">Send Enquiry ↗</button>{sent&&<p className="success">Thank you. This demo form has captured the submission on screen only.</p>}</form></div></section></>}
// // import React, { useState } from "react";
// // import "./Contact.css";

// // const WHATSAPP_NUMBER = "919958424916";

// // export default function Contact() {
// //   const [sent, setSent] = useState(false);

// //   const submit = (e) => {
// //     e.preventDefault();

// //     const form = e.currentTarget;
// //     const data = new FormData(form);

// //     const name = data.get("name")?.trim();
// //     const phone = data.get("phone")?.trim();
// //     const email = data.get("email")?.trim();
// //     const interest = data.get("interest");
// //     const message = data.get("message")?.trim();

// //     const whatsappMessage = `
// // Hello Elevate Infra,

// // I would like to make an enquiry.

// // Name: ${name}
// // Phone: ${phone}
// // Email: ${email || "Not provided"}

// // Interested In:
// // ${interest}

// // Message:
// // ${message || "No additional message"}

// // Thank you.
// //     `.trim();

// //     const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
// //       whatsappMessage
// //     )}`;

// //     setSent(true);

// //     window.open(whatsappUrl, "_blank", "noopener,noreferrer");

// //     form.reset();
// //   };

// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ===================================================== */}
// //       <section className="page-hero contact-hero">
// //         <div className="container contact-hero-inner">
// //           <div>
// //             <span className="eyebrow">Contact Elevate Infra</span>

// //             <h1 className="page-title">
// //               Let's discuss
// //               <br />
// //               <span>what's possible.</span>
// //             </h1>

// //             <p>
// //               For project enquiries, land opportunities, development
// //               partnerships or business conversations, connect with Elevate
// //               Infra.
// //             </p>

// //             <div className="contact-hero-line">
// //               <span></span>
// //               <small>PROJECTS • PARTNERSHIPS • DEVELOPMENT</small>
// //             </div>
// //           </div>

// //           <div className="contact-hero-side">
// //             <strong>Let's Connect</strong>
// //             <span>Start a conversation with our team.</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           CONTACT SECTION
// //       ===================================================== */}
// //       <section className="section contact-section">
// //         <div className="container">
// //           <div className="contact-grid">
// //             {/* LEFT */}
// //             <div className="contact-copy">
// //               <span className="eyebrow">Corporate Enquiries</span>

// //               <h2 className="section-title">
// //                 Start a <span>conversation.</span>
// //               </h2>

// //               <p className="contact-description">
// //                 Whether you are exploring a development opportunity, looking
// //                 for a strategic partnership or simply want to understand more
// //                 about Elevate Infra, we would be happy to hear from you.
// //               </p>

// //               <div className="contact-details">
// //                 <div className="contact-detail">
// //                   <small>Office</small>
// //                   <b>Corporate Office, Delhi NCR, India</b>
// //                 </div>

// //                 <div className="contact-detail">
// //                   <small>WhatsApp / Phone</small>
// //                   <b>+91 99584 24916</b>
// //                 </div>

// //                 <div className="contact-detail">
// //                   <small>Email</small>
// //                   <b>info@elevateinfra.com</b>
// //                 </div>

// //                 <div className="contact-detail">
// //                   <small>Business Hours</small>
// //                   <b>Mon — Sat · 10:00 AM — 6:30 PM</b>
// //                 </div>
// //               </div>

// //               <a
// //                 className="contact-whatsapp"
// //                 href="https://wa.me/919958424916"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 <span className="whatsapp-icon">↗</span>

// //                 <div>
// //                   <small>QUICK CONTACT</small>
// //                   <strong>Chat with us on WhatsApp</strong>
// //                 </div>
// //               </a>
// //             </div>

// //             {/* RIGHT FORM */}
// //             <div className="contact-form-box">
// //               <div className="form-heading">
// //                 <span>01</span>

// //                 <div>
// //                   <h3>Send an enquiry</h3>
// //                   <p>
// //                     Fill in your details and our team will connect with you.
// //                   </p>
// //                 </div>
// //               </div>

// //               <form className="contact-form" onSubmit={submit}>
// //                 <div className="form-row">
// //                   <label>
// //                     Full Name
// //                     <input
// //                       required
// //                       name="name"
// //                       type="text"
// //                       placeholder="Your name"
// //                     />
// //                   </label>

// //                   <label>
// //                     Phone Number
// //                     <input
// //                       required
// //                       name="phone"
// //                       type="tel"
// //                       placeholder="+91"
// //                     />
// //                   </label>
// //                 </div>

// //                 <label>
// //                   Email Address
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     placeholder="you@example.com"
// //                   />
// //                 </label>

// //                 <label>
// //                   I'm interested in
// //                   <select name="interest">
// //                     <option>Project Enquiry</option>
// //                     <option>Land / Joint Development</option>
// //                     <option>Partnership</option>
// //                     <option>Investment / Business</option>
// //                     <option>General Enquiry</option>
// //                     <option>Other</option>
// //                   </select>
// //                 </label>

// //                 <label>
// //                   Message
// //                   <textarea
// //                     name="message"
// //                     rows="6"
// //                     placeholder="Tell us about your requirement..."
// //                   ></textarea>
// //                 </label>

// //                 <button className="btn contact-submit" type="submit">
// //                   Send Enquiry on WhatsApp ↗
// //                 </button>

// //                 {sent && (
// //                   <p className="success">
// //                     Your enquiry is ready. WhatsApp has been opened with your
// //                     message.
// //                   </p>
// //                 )}
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           DEVELOPMENT OPPORTUNITIES
// //       ===================================================== */}
// //       <section className="contact-opportunities">
// //         <div className="container">
// //           <div className="opportunities-heading">
// //             <div>
// //               <span className="eyebrow">What Can We Discuss?</span>

// //               <h2>
// //                 Different opportunities.
// //                 <span> One conversation.</span>
// //               </h2>
// //             </div>

// //             <p>
// //               We welcome conversations around development, land, partnerships
// //               and strategic opportunities.
// //             </p>
// //           </div>

// //           <div className="opportunity-grid">
// //             <article>
// //               <span>01</span>
// //               <h3>Land Opportunities</h3>
// //               <p>
// //                 Explore potential development opportunities for suitable land
// //                 parcels and locations.
// //               </p>
// //             </article>

// //             <article>
// //               <span>02</span>
// //               <h3>Joint Development</h3>
// //               <p>
// //                 Discuss structured development partnerships with landowners
// //                 and strategic partners.
// //               </p>
// //             </article>

// //             <article>
// //               <span>03</span>
// //               <h3>Project Enquiries</h3>
// //               <p>
// //                 Connect with us to understand our developments, concepts and
// //                 upcoming opportunities.
// //               </p>
// //             </article>

// //             <article>
// //               <span>04</span>
// //               <h3>Business Partnerships</h3>
// //               <p>
// //                 Build strategic relationships across real estate and related
// //                 development opportunities.
// //               </p>
// //             </article>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           FINAL CTA
// //       ===================================================== */}
// //       <section className="contact-final">
// //         <div className="container">
// //           <span className="eyebrow">Elevate Infra</span>

// //           <h2>
// //             Every opportunity
// //             <span> starts with a conversation.</span>
// //           </h2>

// //           <a
// //             href="https://wa.me/919958424916"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="btn"
// //           >
// //             WhatsApp Us ↗
// //           </a>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Contact.css";

// import { getSiteData, addEnquiry } from "../data/siteData";

// const FALLBACK_CONTACT = {
//   phone: "+91 99584 24916",
//   whatsapp: "919958424916",
//   email: "info@elevateinfra.com",
//   office: "Corporate Office, Delhi NCR, India",
//   hours: "Mon — Sat · 10:00 AM — 6:30 PM",
// };

// export default function Contact() {
//   const [siteData, setSiteData] = useState(() => getSiteData());
//   const [sent, setSent] = useState(false);

//   useEffect(() => {
//     const refreshData = () => {
//       setSiteData(getSiteData());
//     };

//     window.addEventListener("elevate-data-updated", refreshData);
//     window.addEventListener("storage", refreshData);

//     return () => {
//       window.removeEventListener("elevate-data-updated", refreshData);
//       window.removeEventListener("storage", refreshData);
//     };
//   }, []);

//   const contact = {
//     ...FALLBACK_CONTACT,
//     ...(siteData?.contact || {}),
//   };

//   const whatsappNumber =
//     contact.whatsapp ||
//     String(contact.phone || "").replace(/\D/g, "");

//   const whatsappUrl = `https://wa.me/${whatsappNumber}`;

//   const submit = (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const data = new FormData(form);

//     const name = data.get("name")?.trim();
//     const phone = data.get("phone")?.trim();
//     const email = data.get("email")?.trim();
//     const interest = data.get("interest")?.trim();
//     const message = data.get("message")?.trim();

//     if (!name || !phone || !interest) {
//       return;
//     }

//     /* ==========================================
//        SAVE ENQUIRY IN LOCAL STORAGE
//     ========================================== */

//     addEnquiry({
//       name,
//       phone,
//       email: email || "",
//       interest,
//       message: message || "",
//       source: "Contact Page",
//     });

//     /* ==========================================
//        WHATSAPP MESSAGE
//     ========================================== */

//     const whatsappMessage = `
// Hello Elevate Infra,

// I would like to make an enquiry.

// Name: ${name}
// Phone: ${phone}
// Email: ${email || "Not provided"}

// Interested In:
// ${interest}

// Message:
// ${message || "No additional message"}

// Thank you.
//     `.trim();

//     const finalWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;

//     setSent(true);

//     window.open(
//       finalWhatsappUrl,
//       "_blank",
//       "noopener,noreferrer"
//     );

//     form.reset();

//     setTimeout(() => {
//       setSent(false);
//     }, 5000);
//   };

//   return (
//     <main className="contact-page">

//       {/* ==========================================
//           CONTACT HERO
//       ========================================== */}

//       <section className="contact-hero">
//         <div className="container">
//           <span className="eyebrow">Let's Connect</span>

//           <h1 className="page-title">
//             Start a conversation.
//             <br />
//             <span>Build something meaningful.</span>
//           </h1>

//           <p>
//             Whether you are exploring a new development opportunity,
//             looking for a project update or simply want to know more
//             about Elevate Infra, our team would be happy to connect.
//           </p>
//         </div>
//       </section>


//       {/* ==========================================
//           CONTACT MAIN
//       ========================================== */}

//       <section className="section contact-main">
//         <div className="container">

//           <div className="contact-grid">

//             {/* ======================================
//                 CONTACT INFORMATION
//             ====================================== */}

//             <div className="contact-info">

//               <span className="eyebrow">Corporate Connect</span>

//               <h2>
//                 Let's discuss your
//                 <br />
//                 <span>next opportunity.</span>
//               </h2>

//               <p className="muted">
//                 Reach out to our team for project enquiries,
//                 development partnerships, investment discussions
//                 or general information about Elevate Infra.
//               </p>


//               {/* PHONE */}

//               <div className="contact-info-item">
//                 <span className="contact-info-number">01</span>

//                 <div>
//                   <small>PHONE</small>

//                   <a
//                     href={`tel:${String(contact.phone).replace(/\s/g, "")}`}
//                   >
//                     {contact.phone}
//                   </a>
//                 </div>
//               </div>


//               {/* EMAIL */}

//               <div className="contact-info-item">
//                 <span className="contact-info-number">02</span>

//                 <div>
//                   <small>EMAIL</small>

//                   <a href={`mailto:${contact.email}`}>
//                     {contact.email}
//                   </a>
//                 </div>
//               </div>


//               {/* OFFICE */}

//               <div className="contact-info-item">
//                 <span className="contact-info-number">03</span>

//                 <div>
//                   <small>OFFICE</small>

//                   <p>{contact.office}</p>
//                 </div>
//               </div>


//               {/* HOURS */}

//               <div className="contact-info-item">
//                 <span className="contact-info-number">04</span>

//                 <div>
//                   <small>WORKING HOURS</small>

//                   <p>{contact.hours}</p>
//                 </div>
//               </div>


//               {/* WHATSAPP */}

//               <a
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-whatsapp"
//               >
//                 <span>Connect on WhatsApp</span>
//                 <b>↗</b>
//               </a>

//             </div>


//             {/* ======================================
//                 CONTACT FORM
//             ====================================== */}

//             <div className="contact-form-wrap">

//               <div className="contact-form-header">
//                 <span className="eyebrow">Project Enquiry</span>

//                 <h3>
//                   Tell us what
//                   <br />
//                   <span>you are looking for.</span>
//                 </h3>

//                 <p>
//                   Share a few details and our team will get
//                   back to you shortly.
//                 </p>
//               </div>


//               <form
//                 className="contact-form"
//                 onSubmit={submit}
//               >

//                 {/* NAME */}

//                 <div className="contact-field">
//                   <label htmlFor="name">
//                     Full Name <span>*</span>
//                   </label>

//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Your full name"
//                     required
//                   />
//                 </div>


//                 {/* PHONE */}

//                 <div className="contact-field">
//                   <label htmlFor="phone">
//                     Phone Number <span>*</span>
//                   </label>

//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="+91"
//                     required
//                   />
//                 </div>


//                 {/* EMAIL */}

//                 <div className="contact-field">
//                   <label htmlFor="email">
//                     Email Address
//                   </label>

//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="you@example.com"
//                   />
//                 </div>


//                 {/* INTEREST */}

//                 <div className="contact-field">
//                   <label htmlFor="interest">
//                     I'm Interested In <span>*</span>
//                   </label>

//                   <select
//                     id="interest"
//                     name="interest"
//                     defaultValue=""
//                     required
//                   >
//                     <option value="" disabled>
//                       Select an option
//                     </option>

//                     <option value="Residential Development">
//                       Residential Development
//                     </option>

//                     <option value="Commercial Development">
//                       Commercial Development
//                     </option>

//                     <option value="Project Enquiry">
//                       Project Enquiry
//                     </option>

//                     <option value="Investment Opportunity">
//                       Investment Opportunity
//                     </option>

//                     <option value="Development Partnership">
//                       Development Partnership
//                     </option>

//                     <option value="General Enquiry">
//                       General Enquiry
//                     </option>
//                   </select>
//                 </div>


//                 {/* MESSAGE */}

//                 <div className="contact-field contact-field-full">
//                   <label htmlFor="message">
//                     Message
//                   </label>

//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="5"
//                     placeholder="Tell us a little about your requirement..."
//                   ></textarea>
//                 </div>


//                 {/* SUBMIT */}

//                 <div className="contact-submit-row">

//                   <button
//                     type="submit"
//                     className="btn contact-submit"
//                   >
//                     <span>Send Enquiry</span>
//                     <b>↗</b>
//                   </button>

//                   <p>
//                     Your enquiry will also open
//                     <br />
//                     directly in WhatsApp.
//                   </p>

//                 </div>


//                 {/* SUCCESS */}

//                 {sent && (
//                   <div className="contact-success">
//                     <span>✓</span>
//                     <div>
//                       <strong>Enquiry received.</strong>
//                       <p>
//                         Thank you. Your enquiry has been saved
//                         and WhatsApp has been opened.
//                       </p>
//                     </div>
//                   </div>
//                 )}

//               </form>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* ==========================================
//           WHATSAPP CTA
//       ========================================== */}

//       <section className="contact-bottom">
//         <div className="container">

//           <div className="contact-bottom-inner">

//             <div>
//               <span className="eyebrow">Prefer WhatsApp?</span>

//               <h2>
//                 Let's talk
//                 <span> directly.</span>
//               </h2>

//               <p>
//                 For quick project enquiries and conversations,
//                 connect with our team on WhatsApp.
//               </p>
//             </div>

//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               WhatsApp Enquiry
//               <b>↗</b>
//             </a>

//           </div>

//         </div>
//       </section>


//       {/* ==========================================
//           QUICK NAVIGATION
//       ========================================== */}

//       <section className="contact-links">
//         <div className="container">

//           <div className="contact-links-grid">

//             <Link to="/projects">
//               <span>01</span>
//               <strong>Explore Developments</strong>
//               <b>↗</b>
//             </Link>

//             <Link to="/expertise">
//               <span>02</span>
//               <strong>Our Expertise</strong>
//               <b>↗</b>
//             </Link>

//             <Link to="/about">
//               <span>03</span>
//               <strong>About Elevate Infra</strong>
//               <b>↗</b>
//             </Link>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

import {
  getSiteData,
  addEnquiry,
} from "../data/siteData";

/* =========================================================
   FALLBACK CONTACT DATA
========================================================= */

const FALLBACK_CONTACT = {
  phone: "+91 99584 24916",
  whatsapp: "919958424916",
  email: "info@elevateinfra.com",
  office: "Corporate Office, Delhi NCR, India",
  hours: "Mon — Sat · 10:00 AM — 6:30 PM",
};

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function Contact() {
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [sent, setSent] = useState(false);

  /* =======================================================
     LISTEN FOR ADMIN DATA UPDATES
  ======================================================= */

  useEffect(() => {
    const refreshData = () => {
      setSiteData(getSiteData());
    };

    window.addEventListener(
      "elevate-data-updated",
      refreshData
    );

    window.addEventListener(
      "storage",
      refreshData
    );

    return () => {
      window.removeEventListener(
        "elevate-data-updated",
        refreshData
      );

      window.removeEventListener(
        "storage",
        refreshData
      );
    };
  }, []);

  /* =======================================================
     CONTACT DATA
  ======================================================= */

  const contact = {
    ...FALLBACK_CONTACT,
    ...(siteData?.contact || {}),
  };

  const whatsappNumber =
    contact.whatsapp ||
    String(contact.phone || "").replace(/\D/g, "");

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}`;

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const submit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name =
      data.get("name")?.trim();

    const phone =
      data.get("phone")?.trim();

    const email =
      data.get("email")?.trim();

    const interest =
      data.get("interest")?.trim();

    const message =
      data.get("message")?.trim();

    if (!name || !phone || !interest) {
      return;
    }

    /* =====================================================
       SAVE ENQUIRY
    ===================================================== */

    addEnquiry({
      name,
      phone,
      email: email || "",
      interest,
      message: message || "",
      source: "Contact Page",
    });

    /* =====================================================
       WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `
Hello Elevate Infra,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Interested In:
${interest}

Message:
${message || "No additional message"}

Thank you.
    `.trim();

    const finalWhatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    setSent(true);

    window.open(
      finalWhatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    form.reset();

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero contact-hero">

        <div className="container contact-hero-inner">

          <div>

            <span className="eyebrow">
              Contact Elevate Infra
            </span>

            <h1 className="page-title">
              Let's discuss
              <br />
              <span>
                what's possible.
              </span>
            </h1>

            <p>
              For project enquiries, land opportunities,
              development partnerships or business
              conversations, connect with Elevate Infra.
            </p>

            <div className="contact-hero-line">

              <span></span>

              <small>
                PROJECTS • PARTNERSHIPS • DEVELOPMENT
              </small>

            </div>

          </div>

          <div className="contact-hero-side">

            <strong>
              Let's Connect
            </strong>

            <span>
              Start a conversation with our team.
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="section contact-section">

        <div className="container">

          <div className="contact-grid">

            {/* =================================================
                LEFT — CONTACT INFORMATION
            ================================================= */}

            <div className="contact-copy">

              <span className="eyebrow">
                Corporate Enquiries
              </span>

              <h2 className="section-title">
                Start a
                <span>
                  {" "}
                  conversation.
                </span>
              </h2>

              <p className="contact-description">
                Whether you are exploring a development
                opportunity, looking for a strategic
                partnership or simply want to understand
                more about Elevate Infra, we would be
                happy to hear from you.
              </p>


              {/* OFFICE */}

              <div className="contact-details">

                <div className="contact-detail">

                  <small>
                    Office
                  </small>

                  <b>
                    {contact.office}
                  </b>

                </div>


                {/* PHONE */}

                <div className="contact-detail">

                  <small>
                    WhatsApp / Phone
                  </small>

                  <b>
                    {contact.phone}
                  </b>

                </div>


                {/* EMAIL */}

                <div className="contact-detail">

                  <small>
                    Email
                  </small>

                  <b>
                    {contact.email}
                  </b>

                </div>


                {/* HOURS */}

                <div className="contact-detail">

                  <small>
                    Business Hours
                  </small>

                  <b>
                    {contact.hours}
                  </b>

                </div>

              </div>


              {/* WHATSAPP */}

              <a
                className="contact-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >

                <span className="whatsapp-icon">
                  ↗
                </span>

                <div>

                  <small>
                    QUICK CONTACT
                  </small>

                  <strong>
                    Chat with us on WhatsApp
                  </strong>

                </div>

              </a>

            </div>


            {/* =================================================
                RIGHT — FORM
            ================================================= */}

            <div className="contact-form-box">

              <div className="form-heading">

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Send an enquiry
                  </h3>

                  <p>
                    Fill in your details and our team
                    will connect with you.
                  </p>

                </div>

              </div>


              <form
                className="contact-form"
                onSubmit={submit}
              >

                {/* NAME + PHONE */}

                <div className="form-row">

                  <label>
                    Full Name

                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your name"
                    />

                  </label>


                  <label>
                    Phone Number

                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+91"
                    />

                  </label>

                </div>


                {/* EMAIL */}

                <label>
                  Email Address

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />

                </label>


                {/* INTEREST */}

                <label>
                  I'm interested in

                  <select
                    name="interest"
                    defaultValue=""
                    required
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select an option
                    </option>

                    <option value="Project Enquiry">
                      Project Enquiry
                    </option>

                    <option value="Land / Joint Development">
                      Land / Joint Development
                    </option>

                    <option value="Partnership">
                      Partnership
                    </option>

                    <option value="Investment / Business">
                      Investment / Business
                    </option>

                    <option value="Residential Development">
                      Residential Development
                    </option>

                    <option value="Commercial Development">
                      Commercial Development
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </label>


                {/* MESSAGE */}

                <label>
                  Message

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your requirement..."
                  ></textarea>

                </label>


                {/* SUBMIT */}

                <button
                  className="btn contact-submit"
                  type="submit"
                >
                  Send Enquiry on WhatsApp ↗
                </button>


                {/* SUCCESS */}

                {sent && (
                  <p className="success">
                    Your enquiry has been saved. WhatsApp
                    has been opened with your message.
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPMENT OPPORTUNITIES
      ===================================================== */}

      <section className="contact-opportunities">

        <div className="container">

          <div className="opportunities-heading">

            <div>

              <span className="eyebrow">
                What Can We Discuss?
              </span>

              <h2>
                Different opportunities.
                <span>
                  {" "}
                  One conversation.
                </span>
              </h2>

            </div>

            <p>
              We welcome conversations around development,
              land, partnerships and strategic opportunities.
            </p>

          </div>


          <div className="opportunity-grid">

            {/* 01 */}

            <article>

              <span>
                01
              </span>

              <h3>
                Land Opportunities
              </h3>

              <p>
                Explore potential development opportunities
                for suitable land parcels and locations.
              </p>

            </article>


            {/* 02 */}

            <article>

              <span>
                02
              </span>

              <h3>
                Joint Development
              </h3>

              <p>
                Discuss structured development partnerships
                with landowners and strategic partners.
              </p>

            </article>


            {/* 03 */}

            <article>

              <span>
                03
              </span>

              <h3>
                Project Enquiries
              </h3>

              <p>
                Connect with us to understand our
                developments, concepts and upcoming
                opportunities.
              </p>

            </article>


            {/* 04 */}

            <article>

              <span>
                04
              </span>

              <h3>
                Business Partnerships
              </h3>

              <p>
                Build strategic relationships across real
                estate and related development opportunities.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">

        <div className="container">

          <span className="eyebrow">
            Elevate Infra
          </span>

          <h2>
            Every opportunity
            <span>
              {" "}
              starts with a conversation.
            </span>
          </h2>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            WhatsApp Us ↗
          </a>

        </div>

      </section>
    </>
  );
}