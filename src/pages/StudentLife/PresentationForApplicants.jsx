import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./AcademicCalendar.css";
import "./PresentationForApplicants.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function PresentationForApplicants() {
  const { t } = useLanguage();

  const SIDEBAR_LINKS = [
    { label: t("nav.academicCalendar"),         href: "/student-life/academic-calendar" },
    { label: t("nav.internationalStudents"),     href: "/student-life/international-students", hidden: true },
    { label: t("nav.studentHandbook"),           href: "/student-life/student-handbook" },
    { label: t("nav.presentationApplicants"),    href: "/student-life/presentation-for-applicants", active: true, hidden: true },
    { label: t("nav.careerServices"),            href: "#", hidden: true },
    { label: t("nav.iauClubs"),                  href: "/student-life/iau-clubs", hidden: true },
    { label: t("nav.studentsCreativity"),        href: "#", hidden: true },
    { label: t("nav.interviews"),                href: "#", hidden: true },
    { label: t("nav.ecoActiveStudents"),         href: "/student-life/ekofaol-talabalar" },
  ];

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
          <h1>{t("presentation.heroTitle")}</h1>
        </div>
      </div>

      <div className="ac-container">
        <div className="ac-main">
          <section className="pfa-card">
            <h2>{t("presentation.subTitle")}</h2>
            <p>{t("presentation.desc")}</p>
            <div className="pfa-actions">
              <a
                className="pfa-btn primary"
                href="/pdfs/student-handbook.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {t("presentation.openBtn")}
              </a>
              <a className="pfa-btn ghost" href="/contact">
                {t("presentation.askBtn")}
              </a>
            </div>
          </section>

          <div className="ac-calendar-card ac-pdf-container">
            <iframe
              src="/pdfs/student-handbook.pdf"
              width="100%"
              height="800px"
              className="ac-pdf-iframe"
              title={t("presentation.heroTitle")}
            />
          </div>
        </div>

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
