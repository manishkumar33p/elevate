// import React from "react";import{Link}from"react-router-dom";import"./Footer.css";
// export default function Footer(){return <footer className="footer"><div className="container footer-top"><div className="footer-main"><span className="eyebrow">Elevate Infra</span><h2>Built with purpose.<br/><span>Designed to endure.</span></h2><p>A developer-led real estate company focused on thoughtful planning, quality execution and long-term value creation.</p></div><div className="footer-links"><div><h4>Company</h4><Link to="/about">About</Link><Link to="/leadership">Leadership</Link><Link to="/expertise">Expertise</Link></div><div><h4>Explore</h4><Link to="/projects">Developments</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Elevate Infra. All rights reserved.</span><span>Project names, figures and contact details shown are demo placeholders.</span></div></footer>}
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const WHATSAPP_NUMBER = "919958424916";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="container footer-main-area">

        <div className="footer-brand-section">

          <div className="footer-brand">
            <span className="footer-brand-mark">E</span>

            <div>
              <strong>ELEVATE</strong>
              <small>INFRA</small>
            </div>
          </div>

          <span className="eyebrow">REAL ESTATE DEVELOPMENT</span>

          <h2>
            Built with purpose.
            <br />
            <span>Designed to endure.</span>
          </h2>

          <p>
            Elevate Infra is a developer-led real estate company
            focused on thoughtful planning, contemporary design,
            quality execution and long-term value creation.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <span>WhatsApp Enquiry</span>
            <b>↗</b>
          </a>

        </div>

        {/* =====================================================
            COMPANY
        ===================================================== */}
        <div className="footer-column">
          <span className="footer-column-number">01</span>
          <h4>Company</h4>

          <Link to="/about">About Elevate</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/expertise">Our Expertise</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        {/* =====================================================
            DEVELOPMENTS
        ===================================================== */}
        <div className="footer-column">
          <span className="footer-column-number">02</span>
          <h4>Developments</h4>

          <Link to="/projects">All Developments</Link>
          <Link to="/projects/elevate-greens">
            Elevate Greens
          </Link>
          <Link to="/projects/elevate-heights">
            Elevate Heights
          </Link>
          <Link to="/projects/elevate-business-district">
            Business District
          </Link>
        </div>

        {/* =====================================================
            CONNECT
        ===================================================== */}
        <div className="footer-column footer-connect">
          <span className="footer-column-number">03</span>
          <h4>Connect</h4>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 99584 24916
          </a>

          <a href="mailto:info@elevateinfra.com">
            info@elevateinfra.com
          </a>

          <p>
            Corporate Office
            <br />
            Delhi NCR, India
          </p>

          <Link
            to="/contact"
            className="footer-contact-link"
          >
            Start a Conversation <span>↗</span>
          </Link>
        </div>

      </div>

      {/* =====================================================
          FOOTER QUOTE
      ===================================================== */}
      <div className="footer-middle">
        <div className="container footer-middle-inner">

          <span className="footer-line"></span>

          <p>
            Spaces that elevate everyday life.
          </p>

          <span className="footer-line"></span>

        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}
      <div className="container footer-bottom">

        <div className="footer-copyright">
          © {new Date().getFullYear()} Elevate Infra.
          <span> All rights reserved.</span>
        </div>

        <div className="footer-bottom-links">
          <span>Real Estate Development</span>
          <span>•</span>
          <span>Delhi NCR</span>
        </div>

      </div>

    </footer>
  );
}