import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

import {
  getSiteData,
  saveSiteData,
  getProjects,
  saveProjects,
  getGallery,
  saveGallery,
  getLeadership,
  saveLeadership,
  getExpertise,
  saveExpertise,
  getEnquiries,
  updateEnquiry,
  deleteEnquiry,
  resetElevateData,
} from "../data/siteData";

const defaultProjects = [
  {
    id: "elevate-greens",
    title: "Elevate Greens",
    category: "Premium Residential",
    location: "NCR Region",
    status: "Concept / Under Development",
    size: "1.2M Sq. Ft.",
    description:
      "A thoughtfully planned residential development focused on contemporary living, landscape and long-term value.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "elevate-heights",
    title: "Elevate Heights",
    category: "Urban Residential",
    location: "Delhi NCR",
    status: "Concept Stage",
    size: "850K Sq. Ft.",
    description:
      "A refined urban residential development designed around comfort, connectivity and modern architecture.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "elevate-business-district",
    title: "Elevate Business District",
    category: "Commercial",
    location: "Noida",
    status: "Concept Stage",
    size: "450K Sq. Ft.",
    description:
      "A contemporary commercial destination planned for businesses, professionals and future-ready workplaces.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
];

const defaultGallery = [
  {
    id: "gallery-01",
    number: "01",
    title: "Contemporary Living",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "gallery-02",
    number: "02",
    title: "Modern Architecture",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
  },
];

const defaultLeadership = [
  {
    id: "leader-01",
    name: "Karan",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    bio: "Driving the company's development vision with a focus on disciplined execution and long-term value creation.",
  },
  {
    id: "leader-02",
    name: "Leadership Team",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    bio: "Building thoughtful development strategies through design, partnerships and customer-focused thinking.",
  },
];

const defaultExpertise = [
  {
    id: "expertise-01",
    number: "01",
    title: "Land & Feasibility",
    description:
      "Identifying opportunities through location intelligence, feasibility studies and development potential.",
  },
  {
    id: "expertise-02",
    number: "02",
    title: "Planning & Development",
    description:
      "Creating clear development strategies that connect land, planning, design and commercial objectives.",
  },
  {
    id: "expertise-03",
    number: "03",
    title: "Architecture & Design",
    description:
      "Working with design thinking to create distinctive, functional and enduring spaces.",
  },
  {
    id: "expertise-04",
    number: "04",
    title: "Project Execution",
    description:
      "Maintaining disciplined execution with attention to quality, timelines and delivery.",
  },
  {
    id: "expertise-05",
    number: "05",
    title: "Partnerships",
    description:
      "Building strong relationships across landowners, consultants, investors and project partners.",
  },
  {
    id: "expertise-06",
    number: "06",
    title: "Asset Value Creation",
    description:
      "Creating developments designed to generate sustainable long-term value.",
  },
];

const emptyProject = {
  id: "",
  title: "",
  category: "Residential",
  location: "",
  status: "Concept Stage",
  size: "",
  description: "",
  image: "",
};

const emptyGallery = {
  id: "",
  number: "",
  title: "",
  category: "Residential",
  image: "",
};

const emptyLeader = {
  id: "",
  name: "",
  role: "Director",
  image: "",
  bio: "",
};

const emptyExpertise = {
  id: "",
  number: "",
  title: "",
  description: "",
};

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");

  const [siteData, setSiteData] = useState(() => getSiteData());
  const [projects, setProjects] = useState(() => {
    const saved = getProjects();
    return saved.length ? saved : defaultProjects;
  });
  const [gallery, setGallery] = useState(() => {
    const saved = getGallery();
    return saved.length ? saved : defaultGallery;
  });
  const [leadership, setLeadership] = useState(() => {
    const saved = getLeadership();
    return saved.length ? saved : defaultLeadership;
  });
  const [expertise, setExpertise] = useState(() => {
    const saved = getExpertise();
    return saved.length ? saved : defaultExpertise;
  });
  const [enquiries, setEnquiries] = useState(() => getEnquiries());

  const [projectForm, setProjectForm] = useState(emptyProject);
  const [galleryForm, setGalleryForm] = useState(emptyGallery);
  const [leaderForm, setLeaderForm] = useState(emptyLeader);
  const [expertiseForm, setExpertiseForm] = useState(emptyExpertise);

  const [editingProject, setEditingProject] = useState(null);
  const [editingGallery, setEditingGallery] = useState(null);
  const [editingLeader, setEditingLeader] = useState(null);
  const [editingExpertise, setEditingExpertise] = useState(null);

  const [notice, setNotice] = useState("");

  const showNotice = (message) => {
    setNotice(message);

    setTimeout(() => {
      setNotice("");
    }, 2500);
  };

  useEffect(() => {
    const refresh = () => {
      setSiteData(getSiteData());

      const p = getProjects();
      const g = getGallery();
      const l = getLeadership();
      const e = getExpertise();

      setProjects(p.length ? p : defaultProjects);
      setGallery(g.length ? g : defaultGallery);
      setLeadership(l.length ? l : defaultLeadership);
      setExpertise(e.length ? e : defaultExpertise);
      setEnquiries(getEnquiries());
    };

    window.addEventListener("elevate-data-updated", refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("elevate-data-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  /* =====================================================
     SITE SETTINGS
  ===================================================== */

  const updateSiteField = (section, field, value) => {
    setSiteData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const saveWebsiteSettings = () => {
    saveSiteData(siteData);
    showNotice("Website settings saved successfully.");
  };

  /* =====================================================
     PROJECTS
  ===================================================== */

  const submitProject = (e) => {
    e.preventDefault();

    if (!projectForm.title.trim()) return;

    let updated;

    if (editingProject) {
      updated = projects.map((project) =>
        project.id === editingProject
          ? {
              ...projectForm,
              id: editingProject,
              updatedAt: new Date().toISOString(),
            }
          : project
      );
    } else {
      const id =
        projectForm.id.trim() ||
        `${projectForm.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}-${Date.now()}`;

      updated = [
        ...projects,
        {
          ...projectForm,
          id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
    }

    saveProjects(updated);
    setProjects(updated);
    setProjectForm(emptyProject);
    setEditingProject(null);

    showNotice(
      editingProject
        ? "Project updated successfully."
        : "Project added successfully."
    );
  };

  const editProject = (project) => {
    setProjectForm({
      id: project.id || "",
      title: project.title || "",
      category: project.category || "",
      location: project.location || "",
      status: project.status || "",
      size: project.size || "",
      description: project.description || "",
      image: project.image || "",
    });

    setEditingProject(project.id);
    setActiveTab("projects");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeProject = (id) => {
    if (!window.confirm("Delete this project?")) return;

    const updated = projects.filter((project) => project.id !== id);

    saveProjects(updated);
    setProjects(updated);

    showNotice("Project deleted.");
  };

  /* =====================================================
     GALLERY
  ===================================================== */

  const submitGallery = (e) => {
    e.preventDefault();

    if (!galleryForm.title.trim()) return;

    let updated;

    if (editingGallery) {
      updated = gallery.map((item) =>
        item.id === editingGallery
          ? {
              ...galleryForm,
              id: editingGallery,
            }
          : item
      );
    } else {
      updated = [
        ...gallery,
        {
          ...galleryForm,
          id: galleryForm.id || `gallery-${Date.now()}`,
        },
      ];
    }

    saveGallery(updated);
    setGallery(updated);
    setGalleryForm(emptyGallery);
    setEditingGallery(null);

    showNotice(
      editingGallery
        ? "Gallery item updated."
        : "Gallery item added."
    );
  };

  const editGallery = (item) => {
    setGalleryForm({
      id: item.id || "",
      number: item.number || "",
      title: item.title || "",
      category: item.category || "Residential",
      image: item.image || "",
    });

    setEditingGallery(item.id);
    setActiveTab("gallery");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeGallery = (id) => {
    if (!window.confirm("Delete this gallery item?")) return;

    const updated = gallery.filter((item) => item.id !== id);

    saveGallery(updated);
    setGallery(updated);

    showNotice("Gallery item deleted.");
  };

  /* =====================================================
     LEADERSHIP
  ===================================================== */

  const submitLeader = (e) => {
    e.preventDefault();

    if (!leaderForm.name.trim()) return;

    let updated;

    if (editingLeader) {
      updated = leadership.map((leader) =>
        leader.id === editingLeader
          ? {
              ...leaderForm,
              id: editingLeader,
            }
          : leader
      );
    } else {
      updated = [
        ...leadership,
        {
          ...leaderForm,
          id: leaderForm.id || `leader-${Date.now()}`,
        },
      ];
    }

    saveLeadership(updated);
    setLeadership(updated);
    setLeaderForm(emptyLeader);
    setEditingLeader(null);

    showNotice(
      editingLeader
        ? "Leadership profile updated."
        : "Leadership profile added."
    );
  };

  const editLeader = (leader) => {
    setLeaderForm({
      id: leader.id || "",
      name: leader.name || "",
      role: leader.role || "",
      image: leader.image || "",
      bio: leader.bio || "",
    });

    setEditingLeader(leader.id);
    setActiveTab("leadership");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeLeader = (id) => {
    if (!window.confirm("Delete this leadership profile?")) return;

    const updated = leadership.filter((leader) => leader.id !== id);

    saveLeadership(updated);
    setLeadership(updated);

    showNotice("Leadership profile deleted.");
  };

  /* =====================================================
     EXPERTISE
  ===================================================== */

  const submitExpertise = (e) => {
    e.preventDefault();

    if (!expertiseForm.title.trim()) return;

    let updated;

    if (editingExpertise) {
      updated = expertise.map((item) =>
        item.id === editingExpertise
          ? {
              ...expertiseForm,
              id: editingExpertise,
            }
          : item
      );
    } else {
      updated = [
        ...expertise,
        {
          ...expertiseForm,
          id: expertiseForm.id || `expertise-${Date.now()}`,
        },
      ];
    }

    saveExpertise(updated);
    setExpertise(updated);
    setExpertiseForm(emptyExpertise);
    setEditingExpertise(null);

    showNotice(
      editingExpertise
        ? "Expertise updated."
        : "Expertise added."
    );
  };

  const editExpertise = (item) => {
    setExpertiseForm({
      id: item.id || "",
      number: item.number || "",
      title: item.title || "",
      description: item.description || "",
    });

    setEditingExpertise(item.id);
    setActiveTab("expertise");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeExpertise = (id) => {
    if (!window.confirm("Delete this expertise item?")) return;

    const updated = expertise.filter((item) => item.id !== id);

    saveExpertise(updated);
    setExpertise(updated);

    showNotice("Expertise item deleted.");
  };

  /* =====================================================
     ENQUIRIES
  ===================================================== */

  const changeEnquiryStatus = (id, status) => {
    updateEnquiry(id, {
      status,
    });

    setEnquiries(getEnquiries());

    showNotice("Enquiry status updated.");
  };

  const removeEnquiry = (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    deleteEnquiry(id);
    setEnquiries(getEnquiries());

    showNotice("Enquiry deleted.");
  };

  /* =====================================================
     RESET
  ===================================================== */

  const resetWebsite = () => {
    if (
      !window.confirm(
        "This will remove all saved Elevate website data from this browser. Continue?"
      )
    ) {
      return;
    }

    resetElevateData();

    setSiteData(getSiteData());
    setProjects(defaultProjects);
    setGallery(defaultGallery);
    setLeadership(defaultLeadership);
    setExpertise(defaultExpertise);
    setEnquiries([]);

    showNotice("Website data reset.");
  };

  const totalNewEnquiries = enquiries.filter(
    (item) => item.status === "New"
  ).length;

  const navItems = [
    ["overview", "Overview"],
    ["website", "Website Settings"],
    ["projects", "Developments"],
    ["gallery", "Gallery"],
    ["leadership", "Leadership"],
    ["expertise", "Expertise"],
    ["enquiries", "Enquiries"],
  ];

  return (
    <main className="admin-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="admin-header">
        <div className="container admin-header-inner">

          <Link to="/" className="admin-brand">
            <span className="admin-brand-mark">E</span>

            <div>
              <strong>ELEVATE</strong>
              <small>INFRA · ADMIN</small>
            </div>
          </Link>

          <div className="admin-header-right">
            <span>Website Management</span>

            <Link to="/" className="admin-view-site">
              View Website ↗
            </Link>
          </div>

        </div>
      </header>


      <div className="container admin-layout">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="admin-sidebar">

          <div className="admin-sidebar-title">
            <span>CONTROL PANEL</span>
            <strong>Elevate Infra</strong>
          </div>

          <nav className="admin-nav">

            {navItems.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={
                  activeTab === key
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => setActiveTab(key)}
              >
                {label}

                {key === "enquiries" && totalNewEnquiries > 0 && (
                  <span className="admin-count">
                    {totalNewEnquiries}
                  </span>
                )}
              </button>
            ))}

          </nav>

          <div className="admin-sidebar-bottom">

            <Link to="/contact">
              Open Contact Page ↗
            </Link>

            <button
              type="button"
              onClick={resetWebsite}
              className="admin-reset"
            >
              Reset Website Data
            </button>

          </div>

        </aside>


        {/* =================================================
            CONTENT
        ================================================= */}

        <section className="admin-content">

          {notice && (
            <div className="admin-notice">
              <span>✓</span>
              {notice}
            </div>
          )}


          {/* =================================================
              OVERVIEW
          ================================================= */}

          {activeTab === "overview" && (
            <div className="admin-section">

              <div className="admin-page-heading">
                <span className="eyebrow">Dashboard</span>

                <h1>
                  Welcome to the
                  <br />
                  <span>Elevate control panel.</span>
                </h1>

                <p>
                  Manage the content and enquiries of your
                  Elevate Infra website from one place.
                </p>
              </div>


              <div className="admin-stats">

                <div className="admin-stat">
                  <span>01</span>
                  <strong>{projects.length}</strong>
                  <p>Developments</p>
                </div>

                <div className="admin-stat">
                  <span>02</span>
                  <strong>{gallery.length}</strong>
                  <p>Gallery Items</p>
                </div>

                <div className="admin-stat">
                  <span>03</span>
                  <strong>{leadership.length}</strong>
                  <p>Leadership</p>
                </div>

                <div className="admin-stat">
                  <span>04</span>
                  <strong>{enquiries.length}</strong>
                  <p>Total Enquiries</p>
                </div>

              </div>


              <div className="admin-overview-grid">

                <div className="admin-panel-card">
                  <span className="admin-card-number">01</span>

                  <h3>Website Content</h3>

                  <p>
                    Update your homepage, about section and
                    corporate contact information.
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveTab("website")}
                  >
                    Manage Website ↗
                  </button>
                </div>


                <div className="admin-panel-card">
                  <span className="admin-card-number">02</span>

                  <h3>Developments</h3>

                  <p>
                    Add new projects or update existing
                    development information.
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveTab("projects")}
                  >
                    Manage Projects ↗
                  </button>
                </div>


                <div className="admin-panel-card">
                  <span className="admin-card-number">03</span>

                  <h3>Enquiries</h3>

                  <p>
                    Review website enquiries and keep track
                    of their current status.
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveTab("enquiries")}
                  >
                    View Enquiries ↗
                  </button>
                </div>

              </div>

            </div>
          )}


          {/* =================================================
              WEBSITE SETTINGS
          ================================================= */}

          {activeTab === "website" && (
            <div className="admin-section">

              <div className="admin-page-heading compact">
                <span className="eyebrow">Website Settings</span>

                <h1>
                  Control your
                  <br />
                  <span>website content.</span>
                </h1>

                <p>
                  Changes made here are reflected across the
                  website automatically.
                </p>
              </div>


              {/* BRAND */}

              <div className="admin-form-card">

                <div className="admin-form-title">
                  <span>01</span>
                  <div>
                    <h3>Brand Information</h3>
                    <p>Manage your primary brand identity.</p>
                  </div>
                </div>

                <div className="admin-form-grid">

                  <div className="admin-field">
                    <label>Brand Name</label>

                    <input
                      value={siteData.brand?.name || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "brand",
                          "name",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>Sub Name</label>

                    <input
                      value={siteData.brand?.subName || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "brand",
                          "subName",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Tagline</label>

                    <input
                      value={siteData.brand?.tagline || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "brand",
                          "tagline",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>

              </div>


              {/* HOME */}

              <div className="admin-form-card">

                <div className="admin-form-title">
                  <span>02</span>
                  <div>
                    <h3>Homepage Content</h3>
                    <p>Manage the main homepage messaging.</p>
                  </div>
                </div>

                <div className="admin-form-grid">

                  <div className="admin-field admin-field-full">
                    <label>Eyebrow</label>

                    <input
                      value={siteData.home?.eyebrow || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "home",
                          "eyebrow",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>Main Title</label>

                    <input
                      value={siteData.home?.title || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "home",
                          "title",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>Title Highlight</label>

                    <input
                      value={siteData.home?.titleHighlight || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "home",
                          "titleHighlight",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Description</label>

                    <textarea
                      rows="5"
                      value={siteData.home?.description || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "home",
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>

              </div>


              {/* ABOUT */}

              <div className="admin-form-card">

                <div className="admin-form-title">
                  <span>03</span>
                  <div>
                    <h3>About Page Content</h3>
                    <p>Manage the primary About page messaging.</p>
                  </div>
                </div>

                <div className="admin-form-grid">

                  <div className="admin-field admin-field-full">
                    <label>Eyebrow</label>

                    <input
                      value={siteData.about?.eyebrow || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "about",
                          "eyebrow",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>Main Title</label>

                    <input
                      value={siteData.about?.title || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "about",
                          "title",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>Title Highlight</label>

                    <input
                      value={
                        siteData.about?.titleHighlight || ""
                      }
                      onChange={(e) =>
                        updateSiteField(
                          "about",
                          "titleHighlight",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Description</label>

                    <textarea
                      rows="5"
                      value={siteData.about?.description || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "about",
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>

              </div>


              {/* CONTACT */}

              <div className="admin-form-card">

                <div className="admin-form-title">
                  <span>04</span>
                  <div>
                    <h3>Contact Information</h3>
                    <p>
                      These details appear across the website.
                    </p>
                  </div>
                </div>

                <div className="admin-form-grid">

                  <div className="admin-field">
                    <label>Phone</label>

                    <input
                      value={siteData.contact?.phone || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "contact",
                          "phone",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>WhatsApp Number</label>

                    <input
                      value={siteData.contact?.whatsapp || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "contact",
                          "whatsapp",
                          e.target.value
                        )
                      }
                      placeholder="919958424916"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Email</label>

                    <input
                      value={siteData.contact?.email || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "contact",
                          "email",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field">
                    <label>Office</label>

                    <input
                      value={siteData.contact?.office || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "contact",
                          "office",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Working Hours</label>

                    <input
                      value={siteData.contact?.hours || ""}
                      onChange={(e) =>
                        updateSiteField(
                          "contact",
                          "hours",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>

              </div>


              <div className="admin-save-bar">

                <button
                  type="button"
                  className="admin-primary-btn"
                  onClick={saveWebsiteSettings}
                >
                  Save Website Settings ↗
                </button>

              </div>

            </div>
          )}


          {/* =================================================
              PROJECTS
          ================================================= */}

          {activeTab === "projects" && (
            <div className="admin-section">

              <div className="admin-page-heading compact">
                <span className="eyebrow">Developments</span>

                <h1>
                  Manage your
                  <br />
                  <span>projects.</span>
                </h1>

                <p>
                  Add, edit or remove developments displayed
                  on the website.
                </p>
              </div>


              <form
                className="admin-form-card"
                onSubmit={submitProject}
              >

                <div className="admin-form-title">
                  <span>01</span>

                  <div>
                    <h3>
                      {editingProject
                        ? "Edit Development"
                        : "Add Development"}
                    </h3>

                    <p>
                      Keep project information clear and
                      presentation-ready.
                    </p>
                  </div>
                </div>


                <div className="admin-form-grid">

                  <div className="admin-field">
                    <label>Project Title *</label>

                    <input
                      required
                      value={projectForm.title}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          title: e.target.value,
                        })
                      }
                      placeholder="Elevate Greens"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Category</label>

                    <input
                      value={projectForm.category}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          category: e.target.value,
                        })
                      }
                      placeholder="Premium Residential"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Location</label>

                    <input
                      value={projectForm.location}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          location: e.target.value,
                        })
                      }
                      placeholder="Delhi NCR"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Status</label>

                    <input
                      value={projectForm.status}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          status: e.target.value,
                        })
                      }
                      placeholder="Under Development"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Project Size</label>

                    <input
                      value={projectForm.size}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          size: e.target.value,
                        })
                      }
                      placeholder="1.2M Sq. Ft."
                    />
                  </div>

                  <div className="admin-field">
                    <label>Image URL</label>

                    <input
                      value={projectForm.image}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          image: e.target.value,
                        })
                      }
                      placeholder="https://..."
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Description</label>

                    <textarea
                      rows="5"
                      value={projectForm.description}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          description: e.target.value,
                        })
                      }
                      placeholder="Project description..."
                    />
                  </div>

                </div>


                <div className="admin-form-actions">

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    {editingProject
                      ? "Update Development"
                      : "Add Development"}{" "}
                    ↗
                  </button>

                  {editingProject && (
                    <button
                      type="button"
                      className="admin-secondary-btn"
                      onClick={() => {
                        setEditingProject(null);
                        setProjectForm(emptyProject);
                      }}
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </form>


              <div className="admin-list">

                <div className="admin-list-header">
                  <div>
                    <span className="eyebrow">Current Portfolio</span>
                    <h3>Developments</h3>
                  </div>

                  <strong>{projects.length} Projects</strong>
                </div>


                {projects.map((project) => (
                  <div
                    className="admin-list-item"
                    key={project.id}
                  >

                    <div className="admin-list-image">

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                        />
                      ) : (
                        <span>E</span>
                      )}

                    </div>


                    <div className="admin-list-info">

                      <span>
                        {project.category || "Development"}
                      </span>

                      <h3>{project.title}</h3>

                      <p>
                        {project.location || "Location not added"}
                        {" · "}
                        {project.status || "Status not added"}
                      </p>

                    </div>


                    <div className="admin-list-actions">

                      <Link
                        to={`/projects/${project.id}`}
                        target="_blank"
                      >
                        View ↗
                      </Link>

                      <button
                        type="button"
                        onClick={() => editProject(project)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="danger"
                        onClick={() =>
                          removeProject(project.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}


          {/* =================================================
              GALLERY
          ================================================= */}

          {activeTab === "gallery" && (
            <div className="admin-section">

              <div className="admin-page-heading compact">
                <span className="eyebrow">Visual Library</span>

                <h1>
                  Manage the
                  <br />
                  <span>gallery.</span>
                </h1>

                <p>
                  Add and manage images used across the
                  Elevate Infra gallery.
                </p>
              </div>


              <form
                className="admin-form-card"
                onSubmit={submitGallery}
              >

                <div className="admin-form-title">
                  <span>01</span>

                  <div>
                    <h3>
                      {editingGallery
                        ? "Edit Gallery Item"
                        : "Add Gallery Item"}
                    </h3>

                    <p>
                      Use high-quality architectural and
                      development imagery.
                    </p>
                  </div>
                </div>


                <div className="admin-form-grid">

                  <div className="admin-field">
                    <label>Number</label>

                    <input
                      value={galleryForm.number}
                      onChange={(e) =>
                        setGalleryForm({
                          ...galleryForm,
                          number: e.target.value,
                        })
                      }
                      placeholder="01"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Category</label>

                    <select
                      value={galleryForm.category}
                      onChange={(e) =>
                        setGalleryForm({
                          ...galleryForm,
                          category: e.target.value,
                        })
                      }
                    >
                      <option>Residential</option>
                      <option>Architecture</option>
                      <option>Interior</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Title *</label>

                    <input
                      required
                      value={galleryForm.title}
                      onChange={(e) =>
                        setGalleryForm({
                          ...galleryForm,
                          title: e.target.value,
                        })
                      }
                      placeholder="Contemporary Living"
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Image URL</label>

                    <input
                      value={galleryForm.image}
                      onChange={(e) =>
                        setGalleryForm({
                          ...galleryForm,
                          image: e.target.value,
                        })
                      }
                      placeholder="https://..."
                    />
                  </div>

                </div>


                <div className="admin-form-actions">

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    {editingGallery
                      ? "Update Gallery Item"
                      : "Add Gallery Item"}{" "}
                    ↗
                  </button>

                  {editingGallery && (
                    <button
                      type="button"
                      className="admin-secondary-btn"
                      onClick={() => {
                        setEditingGallery(null);
                        setGalleryForm(emptyGallery);
                      }}
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </form>


              <div className="admin-gallery-grid">

                {gallery.map((item) => (
                  <div
                    className="admin-gallery-card"
                    key={item.id}
                  >

                    <div className="admin-gallery-image">

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      ) : (
                        <span>E</span>
                      )}

                      <span className="admin-gallery-number">
                        {item.number || "01"}
                      </span>

                    </div>

                    <div className="admin-gallery-content">

                      <small>
                        {item.category || "Gallery"}
                      </small>

                      <h3>{item.title}</h3>

                      <div>
                        <button
                          type="button"
                          onClick={() => editGallery(item)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="danger"
                          onClick={() =>
                            removeGallery(item.id)
                          }
                        >
                          Delete
                        </button>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}


          {/* =================================================
              LEADERSHIP
          ================================================= */}

          {activeTab === "leadership" && (
            <div className="admin-section">

              <div className="admin-page-heading compact">
                <span className="eyebrow">Leadership</span>

                <h1>
                  Manage your
                  <br />
                  <span>leadership team.</span>
                </h1>

                <p>
                  Maintain the leadership profiles displayed
                  on the website.
                </p>
              </div>


              <form
                className="admin-form-card"
                onSubmit={submitLeader}
              >

                <div className="admin-form-title">
                  <span>01</span>

                  <div>
                    <h3>
                      {editingLeader
                        ? "Edit Leader"
                        : "Add Leader"}
                    </h3>

                    <p>
                      Add professional information and
                      leadership biographies.
                    </p>
                  </div>
                </div>


                <div className="admin-form-grid">

                  <div className="admin-field">
                    <label>Name *</label>

                    <input
                      required
                      value={leaderForm.name}
                      onChange={(e) =>
                        setLeaderForm({
                          ...leaderForm,
                          name: e.target.value,
                        })
                      }
                      placeholder="Karan"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Role</label>

                    <input
                      value={leaderForm.role}
                      onChange={(e) =>
                        setLeaderForm({
                          ...leaderForm,
                          role: e.target.value,
                        })
                      }
                      placeholder="Director"
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Image URL</label>

                    <input
                      value={leaderForm.image}
                      onChange={(e) =>
                        setLeaderForm({
                          ...leaderForm,
                          image: e.target.value,
                        })
                      }
                      placeholder="https://..."
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Biography</label>

                    <textarea
                      rows="5"
                      value={leaderForm.bio}
                      onChange={(e) =>
                        setLeaderForm({
                          ...leaderForm,
                          bio: e.target.value,
                        })
                      }
                      placeholder="Leadership biography..."
                    />
                  </div>

                </div>


                <div className="admin-form-actions">

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    {editingLeader
                      ? "Update Leader"
                      : "Add Leader"}{" "}
                    ↗
                  </button>

                  {editingLeader && (
                    <button
                      type="button"
                      className="admin-secondary-btn"
                      onClick={() => {
                        setEditingLeader(null);
                        setLeaderForm(emptyLeader);
                      }}
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </form>


              <div className="admin-leaders-grid">

                {leadership.map((leader) => (
                  <div
                    className="admin-leader-card"
                    key={leader.id}
                  >

                    <div className="admin-leader-image">

                      {leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                        />
                      ) : (
                        <span>E</span>
                      )}

                    </div>

                    <div className="admin-leader-content">

                      <small>{leader.role}</small>

                      <h3>{leader.name}</h3>

                      <p>{leader.bio}</p>

                      <div>
                        <button
                          type="button"
                          onClick={() => editLeader(leader)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="danger"
                          onClick={() =>
                            removeLeader(leader.id)
                          }
                        >
                          Delete
                        </button>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}


          {/* =================================================
              EXPERTISE
          ================================================= */}

          {activeTab === "expertise" && (
            <div className="admin-section">

              <div className="admin-page-heading compact">
                <span className="eyebrow">Capabilities</span>

                <h1>
                  Manage your
                  <br />
                  <span>expertise.</span>
                </h1>

                <p>
                  Update the development capabilities presented
                  across the website.
                </p>
              </div>


              <form
                className="admin-form-card"
                onSubmit={submitExpertise}
              >

                <div className="admin-form-title">
                  <span>01</span>

                  <div>
                    <h3>
                      {editingExpertise
                        ? "Edit Expertise"
                        : "Add Expertise"}
                    </h3>

                    <p>
                      Define the core capabilities of
                      Elevate Infra.
                    </p>
                  </div>
                </div>


                <div className="admin-form-grid">

                  <div className="admin-field">
                    <label>Number</label>

                    <input
                      value={expertiseForm.number}
                      onChange={(e) =>
                        setExpertiseForm({
                          ...expertiseForm,
                          number: e.target.value,
                        })
                      }
                      placeholder="01"
                    />
                  </div>

                  <div className="admin-field">
                    <label>Title *</label>

                    <input
                      required
                      value={expertiseForm.title}
                      onChange={(e) =>
                        setExpertiseForm({
                          ...expertiseForm,
                          title: e.target.value,
                        })
                      }
                      placeholder="Land & Feasibility"
                    />
                  </div>

                  <div className="admin-field admin-field-full">
                    <label>Description</label>

                    <textarea
                      rows="5"
                      value={expertiseForm.description}
                      onChange={(e) =>
                        setExpertiseForm({
                          ...expertiseForm,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe this capability..."
                    />
                  </div>

                </div>


                <div className="admin-form-actions">

                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
                    {editingExpertise
                      ? "Update Expertise"
                      : "Add Expertise"}{" "}
                    ↗
                  </button>

                  {editingExpertise && (
                    <button
                      type="button"
                      className="admin-secondary-btn"
                      onClick={() => {
                        setEditingExpertise(null);
                        setExpertiseForm(emptyExpertise);
                      }}
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </form>


              <div className="admin-expertise-list">

                {expertise.map((item) => (
                  <div
                    className="admin-expertise-item"
                    key={item.id}
                  >

                    <span>
                      {item.number || "01"}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div className="admin-list-actions">

                      <button
                        type="button"
                        onClick={() =>
                          editExpertise(item)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="danger"
                        onClick={() =>
                          removeExpertise(item.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}


          {/* =================================================
              ENQUIRIES
          ================================================= */}

          {activeTab === "enquiries" && (
            <div className="admin-section">

              <div className="admin-page-heading compact">
                <span className="eyebrow">Lead Management</span>

                <h1>
                  Website
                  <br />
                  <span>enquiries.</span>
                </h1>

                <p>
                  Review enquiries submitted through the
                  Elevate Infra website.
                </p>
              </div>


              <div className="admin-enquiry-summary">

                <div>
                  <span>Total</span>
                  <strong>{enquiries.length}</strong>
                </div>

                <div>
                  <span>New</span>
                  <strong>{totalNewEnquiries}</strong>
                </div>

                <div>
                  <span>Contacted</span>
                  <strong>
                    {
                      enquiries.filter(
                        (item) => item.status === "Contacted"
                      ).length
                    }
                  </strong>
                </div>

                <div>
                  <span>Closed</span>
                  <strong>
                    {
                      enquiries.filter(
                        (item) => item.status === "Closed"
                      ).length
                    }
                  </strong>
                </div>

              </div>


              <div className="admin-enquiries">

                {enquiries.length === 0 ? (
                  <div className="admin-empty">

                    <span>—</span>

                    <h3>No enquiries yet.</h3>

                    <p>
                      New enquiries submitted through the
                      contact page will appear here.
                    </p>

                  </div>
                ) : (
                  enquiries.map((item) => (
                    <div
                      className="admin-enquiry"
                      key={item.id}
                    >

                      <div className="admin-enquiry-top">

                        <div>
                          <span>{item.id}</span>
                          <h3>{item.name}</h3>
                        </div>

                        <select
                          value={item.status || "New"}
                          onChange={(e) =>
                            changeEnquiryStatus(
                              item.id,
                              e.target.value
                            )
                          }
                        >
                          <option value="New">New</option>
                          <option value="Contacted">
                            Contacted
                          </option>
                          <option value="Follow Up">
                            Follow Up
                          </option>
                          <option value="Closed">
                            Closed
                          </option>
                        </select>

                      </div>


                      <div className="admin-enquiry-grid">

                        <div>
                          <small>PHONE</small>

                          <a
                            href={`tel:${item.phone}`}
                          >
                            {item.phone}
                          </a>
                        </div>

                        <div>
                          <small>EMAIL</small>

                          {item.email ? (
                            <a
                              href={`mailto:${item.email}`}
                            >
                              {item.email}
                            </a>
                          ) : (
                            <span>Not provided</span>
                          )}
                        </div>

                        <div>
                          <small>INTEREST</small>
                          <span>
                            {item.interest ||
                              "General Enquiry"}
                          </span>
                        </div>

                        <div>
                          <small>DATE</small>
                          <span>
                            {item.createdAt
                              ? new Date(
                                  item.createdAt
                                ).toLocaleString("en-IN")
                              : "—"}
                          </span>
                        </div>

                      </div>


                      {item.message && (
                        <div className="admin-enquiry-message">

                          <small>MESSAGE</small>

                          <p>{item.message}</p>

                        </div>
                      )}


                      <div className="admin-enquiry-actions">

                        <a
                          href={`https://wa.me/${String(
                            item.phone || ""
                          ).replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp ↗
                        </a>

                        <a href={`tel:${item.phone}`}>
                          Call ↗
                        </a>

                        {item.email && (
                          <a
                            href={`mailto:${item.email}`}
                          >
                            Email ↗
                          </a>
                        )}

                        <button
                          type="button"
                          className="danger"
                          onClick={() =>
                            removeEnquiry(item.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </div>
                  ))
                )}

              </div>

            </div>
          )}

        </section>

      </div>

    </main>
  );
}