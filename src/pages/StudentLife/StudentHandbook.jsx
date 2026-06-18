// src/pages/StudentLife/StudentHandbook.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "../StudentLife/AcademicCalendar.css"; // Reuse styling
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function StudentHandbook() {
  const { t } = useLanguage();

  const SIDEBAR_LINKS = [
    { label: t("nav.academicCalendar"),      href: "/student-life/academic-calendar" },
    { label: t("nav.internationalStudents"), href: "/student-life/international-students", hidden: true },
    { label: t("nav.studentHandbook"),       href: "/student-life/student-handbook", active: true },
    { label: t("nav.presentationApplicants"),href: "/student-life/presentation-for-applicants", hidden: true },
    { label: t("nav.careerServices"),        href: "#", hidden: true },
    { label: t("nav.iauClubs"),              href: "/student-life/iau-clubs", hidden: true },
    { label: t("nav.studentsCreativity"),    href: "#", hidden: true },
    { label: t("nav.interviews"),            href: "#", hidden: true },
    { label: t("nav.ecoActiveStudents"),     href: "/student-life/ekofaol-talabalar" },
  ];

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
          <h1>{t("studentLife.heroStudentHandbook")}</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="ac-container">
        <div className="ac-main">
          {/* PDF Viewer */}
          <div className="ac-calendar-card ac-pdf-container">
            <iframe
              src="/pdfs/student-handbook.pdf"
              width="100%"
              height="800px"
              className="ac-pdf-iframe"
              title="Student Handbook"
            />
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="ac-sidebar">
          <div className="ac-sidebar-box">
            <h3>{t("studentLife.sidebar.title")}</h3>
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
