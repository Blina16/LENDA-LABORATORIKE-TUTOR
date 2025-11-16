import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCourses, assignCourseToTutor } from "../../api/courses";
import { createTutor } from "../../api/tutor";
import { token } from "../../api/token";

export default function BecomeTutor() {
  const navigate = useNavigate();

  // form state
  const [form, setForm] = useState({
    name: "",
    surname: "",
    bio: "",
    rate: ""
  });

  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // load subjects
  useEffect(() => {
    async function load() {
      const list = await getCourses();
      if (Array.isArray(list)) setCourses(list);
    }
    load();
  }, []);

  const toggleCourse = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.surname) return alert("Name & surname required");

    try {
      setLoading(true);

      // create profile
      const newTutor = await createTutor({
        ...form,
        rate: Number(form.rate) || 0
      });

      // link tutor to subjects
      for (const c of selected) {
        await assignCourseToTutor(newTutor.id, c);
      }

      alert("Application submitted!");
      localStorage.setItem("role", "tutor");
      navigate("/tutor");

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <header className="page-header">
        <h1>Become a Tutor</h1>
        <p>Apply to join our tutor community.</p>
      </header>

      <form className="form" onSubmit={handleSubmit}>

        <div className="grid-2">
          <div>
            <label>First name</label>
            <input value={form.name} onChange={update("name")} placeholder="Anna" />
          </div>

          <div>
            <label>Last name</label>
            <input value={form.surname} onChange={update("surname")} placeholder="Virtanen" />
          </div>
        </div>

        <div>
          <label>Short bio</label>
          <textarea
            rows={4}
            value={form.bio}
            onChange={update("bio")}
            placeholder="Tell us about your experience..."
          />
        </div>

        <div className="grid-2">
          <div>
            <label>Hourly rate (€)</label>
            <input
              type="number"
              value={form.rate}
              onChange={update("rate")}
              placeholder="25"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div>
          <label>Subjects (optional)</label>
          <div className="courses-grid">
            {courses.map((c) => (
              <label key={c.id} className="course-item">
                <input
                  type="checkbox"
                  checked={selected.includes(c.id)}
                  onChange={() => toggleCourse(c.id)}
                />
                <span>{c.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="right">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit application"}
          </button>
        </div>
      </form>
    </div>
  );
}
