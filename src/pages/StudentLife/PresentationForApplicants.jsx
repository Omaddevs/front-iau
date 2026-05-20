import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AcademicCalendar.css";
import "./PresentationForApplicants.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const SIDEBAR_LINKS = [
  { label: "ACADEMIC CALENDAR FOR 2025/2026", href: "/student-life/academic-calendar" },
  { label: "INTERNATIONAL STUDENTS", href: "/student-life/international-students", hidden: true },
  { label: "STUDENT HANDBOOK", href: "/student-life/student-handbook" },
  { label: "PRESENTATION FOR APPLICANTS", href: "/student-life/presentation-for-applicants", active: true, hidden: true },
  { label: "CAREER SERVICES", href: "#", hidden: true },
  { label: "IAU CLUBS", href: "/student-life/iau-clubs", hidden: true },
  { label: "STUDENTS CREATIVITY", href: "#", hidden: true },
  { label: "INTERVIEWS", href: "#", hidden: true },
  { label: "EKOFAOL TALABALAR", href: "/student-life/ekofaol-talabalar" },
];

export default function PresentationForApplicants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="academic-calendar-page">
      <div className="ac-hero">
        <video className="ac-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="ac-hero-overlay" />
        <div className="ac-hero-content">
          <h1>Presentation for Applicants</h1>
        </div>
      </div>

      <div className="ac-container">
        <div className="ac-main">
          <section className="pfa-card">
            <h2>Everything you need before applying</h2>
            <p>
              Explore key details about IAU programs, admission requirements, tuition information,
              campus life, and student support services in one concise presentation.
            </p>
            <div className="pfa-actions">
              <a
                className="pfa-btn primary"
                href="/pdfs/student-handbook.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open Presentation
              </a>
              <a className="pfa-btn ghost" href="/contact">
                Ask Admissions Team
              </a>
            </div>
          </section>

          <div className="ac-calendar-card ac-pdf-container">
            <iframe
              src="/pdfs/student-handbook.pdf"
              width="100%"
              height="800px"
              className="ac-pdf-iframe"
              title="Presentation for Applicants"
            />
          </div>
        </div>

        <aside className="ac-sidebar">
          <div className="ac-sidebar-box">
            <h3>Student life</h3>
            <ul className="ac-sidebar-links">
              {SIDEBAR_LINKS.map((link, i) => (
                <li key={i} style={{ display: link.hidden ? "none" : "block" }}>
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
