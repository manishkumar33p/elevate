
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import "./DevelopmentAdmin.css";

const emptyForm = {
  projectName: "",
  developerName: "",
  associationType: "Channel Partner",
  developmentType: "Residential",
  location: "",
  role: "",
  year: "",
  status: "Completed",
  image: "",
  description: "",
};

export default function DevelopmentAdmin() {
  const [form, setForm] = useState(emptyForm);
  const [portfolio, setPortfolio] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  /* =========================================================
     FIREBASE LIVE LOAD
  ========================================================= */

  useEffect(() => {
    const portfolioRef = collection(
      db,
      "developmentPortfolio"
    );

    const unsubscribe = onSnapshot(
      portfolioRef,
      (snapshot) => {
        const data = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        data.sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0;
          const bTime = b.createdAt?.seconds || 0;

          return bTime - aTime;
        });

        setPortfolio(data);
      },
      (error) => {
        console.error(
          "Development portfolio load error:",
          error
        );

        setMessage(
          "Portfolio data load nahi ho pa raha."
        );
      }
    );

    return () => unsubscribe();
  }, []);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     SAVE / UPDATE
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.projectName.trim() ||
      !form.developerName.trim() ||
      !form.location.trim()
    ) {
      setMessage(
        "Project Name, Developer / Builder aur Location required hain."
      );

      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      setSaving(true);
      setMessage("");

      const data = {
        projectName: form.projectName.trim(),
        developerName: form.developerName.trim(),
        associationType: form.associationType,
        developmentType: form.developmentType,
        location: form.location.trim(),
        role: form.role.trim(),
        year: form.year.trim(),
        status: form.status,
        image: form.image.trim(),
        description: form.description.trim(),
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        await updateDoc(
          doc(
            db,
            "developmentPortfolio",
            editingId
          ),
          data
        );

        setMessage(
          "Portfolio project updated successfully!"
        );

        setEditingId(null);
      } else {
        await addDoc(
          collection(
            db,
            "developmentPortfolio"
          ),
          {
            ...data,
            createdAt: serverTimestamp(),
          }
        );

        setMessage(
          "Development added to portfolio successfully!"
        );
      }

      setForm(emptyForm);

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error(
        "Development save error:",
        error
      );

      setMessage(
        "Development save nahi ho paya. Firebase rules check karein."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     EDIT
  ========================================================= */

  const editDevelopment = (item) => {
    setForm({
      projectName: item.projectName || "",
      developerName: item.developerName || "",
      associationType:
        item.associationType || "Channel Partner",
      developmentType:
        item.developmentType || "Residential",
      location: item.location || "",
      role: item.role || "",
      year: item.year || "",
      status: item.status || "Completed",
      image: item.image || "",
      description: item.description || "",
    });

    setEditingId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     DELETE
  ========================================================= */

  const deleteDevelopment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this portfolio item?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(
        doc(
          db,
          "developmentPortfolio",
          id
        )
      );

      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }

      setMessage(
        "Portfolio item deleted successfully."
      );

      setTimeout(() => setMessage(""), 2500);
    } catch (error) {
      console.error(
        "Development delete error:",
        error
      );

      setMessage(
        "Portfolio item delete nahi ho paya."
      );
    }
  };

  /* =========================================================
     CANCEL EDIT
  ========================================================= */

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  return (
    <div className="development-admin">

      {/* HEADER */}

      <section className="da-header">
        <div>
          <span>ELEVATE INFRA</span>

          <h1>
            Development Portfolio
            <em> Manager.</em>
          </h1>

          <p>
            Manage development experience, builder
            associations and channel partner portfolio.
          </p>
        </div>

        <div className="da-count">
          <strong>{portfolio.length}</strong>
          <span>Portfolio Projects</span>
        </div>
      </section>

      {message && (
        <div className="da-message">
          {message}
        </div>
      )}

      {/* FORM */}

      <section className="da-form-section">

        <div className="da-section-head">
          <span>
            {editingId
              ? "UPDATE PORTFOLIO"
              : "ADD TO PORTFOLIO"}
          </span>

          <h2>
            {editingId
              ? "Edit Development"
              : "Add Development Experience"}
          </h2>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="da-form-grid">

            <div className="da-form-group">
              <label>Project / Development Name *</label>

              <input
                name="projectName"
                value={form.projectName}
                onChange={handleChange}
                placeholder="Example: Kamakhya Villas"
              />
            </div>

            <div className="da-form-group">
              <label>Builder / Developer *</label>

              <input
                name="developerName"
                value={form.developerName}
                onChange={handleChange}
                placeholder="Example: Home Topper Development"
              />
            </div>

            <div className="da-form-group">
              <label>Association</label>

              <select
                name="associationType"
                value={form.associationType}
                onChange={handleChange}
              >
                <option value="Channel Partner">
                  Channel Partner
                </option>

                <option value="Sales Partner">
                  Sales Partner
                </option>

                <option value="Marketing Partner">
                  Marketing Partner
                </option>

                <option value="Development Partner">
                  Development Partner
                </option>

                <option value="Consulting Partner">
                  Consulting Partner
                </option>

                <option value="Project Associate">
                  Project Associate
                </option>

                <option value="Strategic Association">
                  Strategic Association
                </option>
              </select>
            </div>

            <div className="da-form-group">
              <label>Development Type</label>

              <select
                name="developmentType"
                value={form.developmentType}
                onChange={handleChange}
              >
                <option value="Residential">
                  Residential
                </option>

                <option value="Villa">
                  Villa
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Retail">
                  Retail
                </option>

                <option value="Plots">
                  Plots / Land
                </option>

                <option value="Mixed Use">
                  Mixed Use
                </option>

                <option value="Township">
                  Township
                </option>
              </select>
            </div>

            <div className="da-form-group">
              <label>Location *</label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Example: Greater Noida West"
              />
            </div>

            <div className="da-form-group">
              <label>Our Role / Work</label>

              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Example: Channel Sales & Marketing"
              />
            </div>

            <div className="da-form-group">
              <label>Year / Period</label>

              <input
                name="year"
                value={form.year}
                onChange={handleChange}
                placeholder="Example: 2022 - 2024"
              />
            </div>

            <div className="da-form-group">
              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Completed">
                  Completed
                </option>

                <option value="Ongoing">
                  Ongoing
                </option>

                <option value="Associated">
                  Associated
                </option>

                <option value="Past Association">
                  Past Association
                </option>
              </select>
            </div>

          </div>

          <div className="da-form-group">
            <label>Project Image URL</label>

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Paste project image URL"
            />
          </div>

          <div className="da-form-group">
            <label>
              Development / Association Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              placeholder="Describe the project and Elevate Infra's association / role..."
            />
          </div>

          {form.image && (
            <div className="da-image-preview">
              <span>IMAGE PREVIEW</span>

              <img
                src={form.image}
                alt="Development preview"
              />
            </div>
          )}

          <div className="da-form-actions">

            <button
              type="submit"
              className="da-save"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Development"
                : "Add To Portfolio"}
            </button>

            {editingId && (
              <button
                type="button"
                className="da-cancel"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </section>

      {/* EXISTING PORTFOLIO */}

      <section className="da-list">

        <div className="da-section-head">
          <span>PORTFOLIO</span>

          <h2>
            Development Associations
          </h2>
        </div>

        {portfolio.length === 0 ? (
          <div className="da-empty">
            No portfolio projects added yet.
          </div>
        ) : (
          <div className="da-project-grid">

            {portfolio.map((item) => (

              <article
                className="da-project-card"
                key={item.id}
              >

                <div className="da-project-image">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.projectName}
                    />
                  ) : (
                    <div className="da-no-image">
                      ELEVATE INFRA
                    </div>
                  )}

                  <span>
                    {item.status}
                  </span>

                </div>

                <div className="da-project-content">

                  <small>
                    {item.associationType}
                  </small>

                  <h3>
                    {item.projectName}
                  </h3>

                  <p className="da-builder">
                    Associated with{" "}
                    <strong>
                      {item.developerName}
                    </strong>
                  </p>

                  <p>
                    {item.location}
                  </p>

                  {item.role && (
                    <p>
                      <b>Role:</b> {item.role}
                    </p>
                  )}

                  {item.year && (
                    <p>
                      <b>Period:</b> {item.year}
                    </p>
                  )}

                  <div className="da-card-actions">

                    <button
                      type="button"
                      onClick={() =>
                        editDevelopment(item)
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="da-delete"
                      onClick={() =>
                        deleteDevelopment(item.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>
        )}

      </section>

    </div>
  );
}
