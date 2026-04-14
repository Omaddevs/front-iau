// src/pages/StudentLife/AcademicCalendar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AcademicCalendar.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const SIDEBAR_LINKS = [
  { label: "ACADEMIC CALENDAR FOR 2025/2026", href: "/student-life/academic-calendar", active: true },
  { label: "INTERNATIONAL STUDENTS", href: "#" },
  { label: "STUDENT HANDBOOK", href: "/student-life/student-handbook" },
  { label: "PRESENTATION FOR APPLICANTS", href: "#" },
  { label: "CAREER SERVICES", href: "#" },
  { label: "IAU CLUBS", href: "#" },
  { label: "STUDENTS CREATIVITY", href: "#" },
  { label: "INTERVIEWS", href: "#" },
  { label: "KELAJAKKA QADAM", href: "#" },
];

export default function AcademicCalendar() {
  const [activeTab, setActiveTab] = useState("undergraduate");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="academic-calendar-page">
      {/* Hero header */}
      <div className="ac-hero">
        <video className="ac-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="ac-hero-overlay" />
        <div className="ac-hero-content">
          <h1>Academic calendar</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="ac-container">
        <div className="ac-main">
          {/* Tabs */}
          <div className="ac-tabs">
            <button
              type="button"
              className={`ac-tab-btn ${activeTab === "undergraduate" ? "active" : ""}`}
              onClick={() => setActiveTab("undergraduate")}
            >
              British Academic Calendar 2025-2026
            </button>
            <button
              type="button"
              className={`ac-tab-btn ${activeTab === "graduate" ? "active" : ""}`}
              onClick={() => setActiveTab("graduate")}
            >
              Uzbek Academic Calendar 2025-2026
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="ac-calendar-card ac-pdf-container">
            <iframe
              key={activeTab}
              src={activeTab === "undergraduate"
                ? "/pdfs/academic-calendar.pdf"
                : "/pdfs/kalendar-uz.pdf"
              }
              width="100%"
              height="800px"
              className="ac-pdf-iframe"
              title={activeTab === "undergraduate"
                ? "British Academic Calendar 2025-2026"
                : "Uzbek Academic Calendar 2025-2026"
              }
            />
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="ac-sidebar">
          <div className="ac-sidebar-box">
            <h3>Student life</h3>
            <ul className="ac-sidebar-links">
              {SIDEBAR_LINKS.map((link, i) => (
                <li key={i}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className={link.active ? "active" : ""}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className={link.active ? "active" : ""}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
