import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./AcademicCalendar.css";
import "./IauClubs.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const CLUBS = [
  { name: "Agro Innovation Club", category: "Academic",       members: 82,  nextEvent: "May 30, 14:00", desc: "Research talks and practical innovation labs focused on smart agriculture." },
  { name: "AI & Data Club",        category: "Tech",           members: 96,  nextEvent: "Jun 2, 16:00",  desc: "Hands-on sessions on AI, analytics, and data tools for real projects." },
  { name: "Startup Circle",        category: "Entrepreneurship",members: 61, nextEvent: "May 28, 15:30",desc: "Pitch practices, mentoring, and startup idea validation workshops." },
  { name: "Debate Society",        category: "Academic",       members: 54,  nextEvent: "Jun 5, 17:00",  desc: "Weekly debates to strengthen public speaking and argumentation skills." },
  { name: "Eco Volunteers",        category: "Volunteering",   members: 73,  nextEvent: "May 25, 10:00", desc: "Environmental campaigns, tree planting, and social impact initiatives." },
  { name: "Art & Media Club",      category: "Arts & Culture", members: 49,  nextEvent: "Jun 1, 13:00",  desc: "Creative projects in photography, design, and content production." },
  { name: "Football Club",         category: "Sports",         members: 108, nextEvent: "May 27, 18:00", desc: "Training sessions and inter-faculty tournaments every week." },
  { name: "Book & Thought Club",   category: "Arts & Culture", members: 44,  nextEvent: "May 31, 12:00", desc: "Reading circles and discussion meetups on leadership and society." },
];

const CATEGORY_KEYS = ["All", "Academic", "Tech", "Sports", "Arts & Culture", "Volunteering", "Entrepreneurship"];

export default function IauClubs() {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const SIDEBAR_LINKS = [
    { label: t("nav.academicCalendar"),     href: "/student-life/academic-calendar" },
    { label: t("nav.internationalStudents"),href: "/student-life/international-students", hidden: true },
    { label: t("nav.studentHandbook"),      href: "/student-life/student-handbook" },
    { label: t("nav.presentationApplicants"),href: "/student-life/presentation-for-applicants", hidden: true },
    { label: t("nav.careerServices"),       href: "#", hidden: true },
    { label: t("nav.iauClubs"),             href: "/student-life/iau-clubs", active: true, hidden: true },
    { label: t("nav.studentsCreativity"),   href: "#", hidden: true },
    { label: t("nav.interviews"),           href: "#", hidden: true },
    { label: t("nav.ecoActiveStudents"),    href: "/student-life/ekofaol-talabalar" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredClubs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CLUBS.filter((club) => {
      const byCategory = activeCategory === "All" || club.category === activeCategory;
      const byQuery =
        !q ||
        club.name.toLowerCase().includes(q) ||
        club.desc.toLowerCase().includes(q) ||
        club.category.toLowerCase().includes(q);
      return byCategory && byQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="academic-calendar-page">
      <div className="ac-hero">
        <video className="ac-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="ac-hero-overlay" />
        <div className="ac-hero-content">
          <h1>{t("clubs.pageTitle")}</h1>
        </div>
      </div>

      <div className="ac-container">
        <div className="ac-main">
          <section className="clubs-hero-card">
            <h2>{t("clubs.pageSubtitle")}</h2>
            <p>{t("clubs.pageDesc")}</p>
            <div className="clubs-stats">
              <div><strong>{CLUBS.length}</strong><span>{t("clubs.totalClubs")}</span></div>
              <div><strong>{CLUBS.reduce((sum, c) => sum + c.members, 0)}</strong><span>{t("clubs.activeMembers")}</span></div>
              <div><strong>18</strong><span>{t("clubs.eventsThisSemester")}</span></div>
            </div>
          </section>

          <section className="clubs-controls">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("studentLife.clubs.searchPlaceholder")}
              aria-label="Search clubs"
            />
            <div className="clubs-chips">
              {CATEGORY_KEYS.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "All" ? t("studentLife.clubs.allCategory") : category}
                </button>
              ))}
            </div>
          </section>

          <section className="clubs-grid">
            {filteredClubs.map((club) => (
              <article key={club.name} className="club-card">
                <div className="club-card-top">
                  <h3>{club.name}</h3>
                  <span className="club-badge">{club.category}</span>
                </div>
                <p>{club.desc}</p>
                <div className="club-meta">
                  <span>{club.members} {t("clubs.membersLabel")}</span>
                  <span>{t("clubs.nextEvent")} {club.nextEvent}</span>
                </div>
                <div className="club-actions">
                  <button type="button">{t("clubs.viewDetails")}</button>
                  <button type="button" className="primary">{t("clubs.join")}</button>
                </div>
              </article>
            ))}
          </section>
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
