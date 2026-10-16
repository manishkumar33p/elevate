const STORAGE_KEYS = {
  projects: "elevate_projects",
  gallery: "elevate_gallery",
  leadership: "elevate_leadership",
  expertise: "elevate_expertise",
  site: "elevate_site_data",
  enquiries: "elevate_enquiries",
};

const defaultSiteData = {
  brand: {
    name: "ELEVATE",
    subName: "INFRA",
    tagline: "REAL ESTATE DEVELOPMENT",
  },

  contact: {
    phone: "+91 99584 24916",
    whatsapp: "919958424916",
    email: "info@elevateinfra.com",
    office: "Corporate Office, Delhi NCR, India",
    hours: "Mon — Sat · 10:00 AM — 6:30 PM",
  },

  home: {
    eyebrow: "Real Estate Development",
    title: "Spaces that elevate",
    titleHighlight: "everyday life.",
    description:
      "Elevate Infra brings together thoughtful planning, contemporary design and disciplined execution to create enduring residential and commercial developments.",
  },

  about: {
    eyebrow: "About Elevate Infra",
    title: "A developer mindset.",
    titleHighlight: "A long-term vision.",
    description:
      "We create real estate by connecting opportunity, planning, design, execution and value into one clear development strategy.",
  },
};

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return fallback;
    }

    return JSON.parse(saved);
  } catch (error) {
    console.error(`Unable to read ${key}`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));

    window.dispatchEvent(
      new CustomEvent("elevate-data-updated", {
        detail: {
          key,
          value,
        },
      })
    );

    return true;
  } catch (error) {
    console.error(`Unable to save ${key}`, error);
    return false;
  }
}

/* =========================================================
   SITE DATA
========================================================= */

export function getSiteData() {
  return readStorage(STORAGE_KEYS.site, defaultSiteData);
}

export function saveSiteData(data) {
  return writeStorage(STORAGE_KEYS.site, data);
}

/* =========================================================
   PROJECTS
========================================================= */

export function getProjects() {
  return readStorage(STORAGE_KEYS.projects, []);
}

export function saveProjects(projects) {
  return writeStorage(STORAGE_KEYS.projects, projects);
}

export function addProject(project) {
  const projects = getProjects();

  const newProject = {
    id:
      project.id ||
      `${project.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}-${Date.now()}`,

    ...project,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  saveProjects([...projects, newProject]);

  return newProject;
}

export function updateProject(id, updates) {
  const projects = getProjects();

  const updated = projects.map((project) =>
    project.id === id
      ? {
          ...project,
          ...updates,
          updatedAt: new Date().toISOString(),
        }
      : project
  );

  saveProjects(updated);

  return updated.find((project) => project.id === id);
}

export function deleteProject(id) {
  const projects = getProjects();

  const updated = projects.filter((project) => project.id !== id);

  saveProjects(updated);

  return updated;
}

export function getProjectById(id) {
  return getProjects().find((project) => project.id === id);
}

/* =========================================================
   GALLERY
========================================================= */

export function getGallery() {
  return readStorage(STORAGE_KEYS.gallery, []);
}

export function saveGallery(items) {
  return writeStorage(STORAGE_KEYS.gallery, items);
}

export function addGalleryItem(item) {
  const gallery = getGallery();

  const newItem = {
    id: item.id || `gallery-${Date.now()}`,
    ...item,
    createdAt: new Date().toISOString(),
  };

  saveGallery([...gallery, newItem]);

  return newItem;
}

export function updateGalleryItem(id, updates) {
  const gallery = getGallery();

  const updated = gallery.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updates,
        }
      : item
  );

  saveGallery(updated);

  return updated.find((item) => item.id === id);
}

export function deleteGalleryItem(id) {
  const gallery = getGallery();

  const updated = gallery.filter((item) => item.id !== id);

  saveGallery(updated);

  return updated;
}

/* =========================================================
   LEADERSHIP
========================================================= */

export function getLeadership() {
  return readStorage(STORAGE_KEYS.leadership, []);
}

export function saveLeadership(items) {
  return writeStorage(STORAGE_KEYS.leadership, items);
}

export function addLeader(leader) {
  const leaders = getLeadership();

  const newLeader = {
    id: leader.id || `leader-${Date.now()}`,
    ...leader,
  };

  saveLeadership([...leaders, newLeader]);

  return newLeader;
}

export function updateLeader(id, updates) {
  const leaders = getLeadership();

  const updated = leaders.map((leader) =>
    leader.id === id
      ? {
          ...leader,
          ...updates,
        }
      : leader
  );

  saveLeadership(updated);

  return updated.find((leader) => leader.id === id);
}

export function deleteLeader(id) {
  const leaders = getLeadership();

  const updated = leaders.filter((leader) => leader.id !== id);

  saveLeadership(updated);

  return updated;
}

/* =========================================================
   EXPERTISE
========================================================= */

export function getExpertise() {
  return readStorage(STORAGE_KEYS.expertise, []);
}

export function saveExpertise(items) {
  return writeStorage(STORAGE_KEYS.expertise, items);
}

export function addExpertise(item) {
  const expertise = getExpertise();

  const newItem = {
    id: item.id || `expertise-${Date.now()}`,
    ...item,
  };

  saveExpertise([...expertise, newItem]);

  return newItem;
}

export function updateExpertise(id, updates) {
  const expertise = getExpertise();

  const updated = expertise.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updates,
        }
      : item
  );

  saveExpertise(updated);

  return updated.find((item) => item.id === id);
}

export function deleteExpertise(id) {
  const expertise = getExpertise();

  const updated = expertise.filter((item) => item.id !== id);

  saveExpertise(updated);

  return updated;
}

/* =========================================================
   ENQUIRIES
========================================================= */

export function getEnquiries() {
  return readStorage(STORAGE_KEYS.enquiries, []);
}

export function saveEnquiries(enquiries) {
  return writeStorage(STORAGE_KEYS.enquiries, enquiries);
}

export function addEnquiry(enquiry) {
  const enquiries = getEnquiries();

  const newEnquiry = {
    id: `ENQ-${Date.now()}`,
    ...enquiry,
    status: "New",
    createdAt: new Date().toISOString(),
  };

  saveEnquiries([newEnquiry, ...enquiries]);

  return newEnquiry;
}

export function updateEnquiry(id, updates) {
  const enquiries = getEnquiries();

  const updated = enquiries.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updates,
        }
      : item
  );

  saveEnquiries(updated);

  return updated.find((item) => item.id === id);
}

export function deleteEnquiry(id) {
  const enquiries = getEnquiries();

  const updated = enquiries.filter((item) => item.id !== id);

  saveEnquiries(updated);

  return updated;
}

/* =========================================================
   RESET ALL DEMO DATA
========================================================= */

export function resetElevateData() {
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });

  window.dispatchEvent(
    new CustomEvent("elevate-data-updated", {
      detail: {
        reset: true,
      },
    })
  );
}

export { STORAGE_KEYS };

const siteDataAPI = {
  getSiteData,
  saveSiteData,
  getProjects,
  saveProjects,
  addProject,
  updateProject,
  deleteProject,
  getProjectById,
  getGallery,
  saveGallery,
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  getLeadership,
  addLeader,
  updateLeader,
  deleteLeader,
  getExpertise,
  addExpertise,
  updateExpertise,
  deleteExpertise,
  getEnquiries,
  saveEnquiries,
  addEnquiry,
  updateEnquiry,
  deleteEnquiry,
  resetElevateData,
};

export default siteDataAPI;