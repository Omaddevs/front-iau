import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./AcademicCalendar.css";
import "./InternationalStudents.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import imgCampus from "../../images/campus.PNG";
import imgSection from "../../images/sectionImage.jpg";
import imgRau from "../../images/rau-right.png";
import imgEvents from "../../images/events.jpg";
import imgGallery1 from "../../images/image2.jpg";
import imgGallery2 from "../../images/image3.jpg";
import imgGallery3 from "../../images/newsBig.jpg";

const GALLERY_IMAGES = [
  { src: imgGallery1, alt: "Student life at IAU" },
  { src: imgGallery2, alt: "Learning and collaboration" },
  { src: imgGallery3, alt: "University community" },
];

export default function InternationalStudents() {
  const [openFaq, setOpenFaq] = useState(null);
  const { t } = useLanguage();

  const SIDEBAR_LINKS = [
    { label: t("nav.academicCalendar"),      href: "/student-life/academic-calendar" },
    { label: t("nav.internationalStudents"), href: "/student-life/international-students", active: true, hidden: true },
    { label: t("nav.studentHandbook"),       href: "/student-life/student-handbook" },
    { label: t("nav.presentationApplicants"),href: "/student-life/presentation-for-applicants", hidden: true },
    { label: t("nav.careerServices"),        href: "#", hidden: true },
    { label: t("nav.iauClubs"),              href: "/student-life/iau-clubs", hidden: true },
    { label: t("nav.studentsCreativity"),    href: "#", hidden: true },
    { label: t("nav.interviews"),            href: "#", hidden: true },
    { label: t("nav.ecoActiveStudents"),     href: "/student-life/ekofaol-talabalar" },
  ];

  const JOURNEY_STEPS = [
    { num: "01", title: t("studentLife.intl.step1Title"), body: t("studentLife.intl.step1Body"), image: imgSection, imageAlt: "Students and academic life at IAU" },
    { num: "02", title: t("studentLife.intl.step2Title"), body: t("studentLife.intl.step2Body"), image: imgRau,     imageAlt: "International partnerships and academic mobility" },
    { num: "03", title: t("studentLife.intl.step3Title"), body: t("studentLife.intl.step3Body"), image: imgCampus,  imageAlt: "IAU campus buildings and grounds" },
    { num: "04", title: t("studentLife.intl.step4Title"), body: t("studentLife.intl.step4Body"), image: imgEvents,  imageAlt: "Campus events and student community" },
  ];

  const SUPPORT_HUBS = [
    { title: t("intlStudents.hub1Title"), tag: t("intlStudents.hub1Tag"), body: t("intlStudents.hub1Body"), href: "/student-life/student-handbook",            linkLabel: t("intlStudents.hub1Link"), image: imgCampus,   imageAlt: "Welcome and orientation on campus" },
    { title: t("intlStudents.hub2Title"), tag: t("intlStudents.hub2Tag"), body: t("intlStudents.hub2Body"), href: "/contact",                                   linkLabel: t("intlStudents.hub2Link"), image: imgSection,  imageAlt: "Documents and study planning" },
    { title: t("intlStudents.hub3Title"), tag: t("intlStudents.hub3Tag"), body: t("intlStudents.hub3Body"), href: "/student-life/iau-clubs",                    linkLabel: t("intlStudents.hub3Link"), image: imgGallery1, imageAlt: "Students connecting on campus" },
    { title: t("intlStudents.hub4Title"), tag: t("intlStudents.hub4Tag"), body: t("intlStudents.hub4Body"), href: "/contact",                                   linkLabel: t("intlStudents.hub4Link"), image: imgGallery2, imageAlt: "Supportive student environment" },
  ];

  const FAQ_ITEMS = [
    { question: t("intlStudents.faq1Q"), answer: t("intlStudents.faq1A") },
    { question: t("intlStudents.faq2Q"), answer: t("intlStudents.faq2A") },
    { question: t("intlStudents.faq3Q"), answer: t("intlStudents.faq3A") },
    { question: t("intlStudents.faq4Q"), answer: t("intlStudents.faq4A") },
    { question: t("intlStudents.faq5Q"), answer: t("intlStudents.faq5A") },
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
          <h1>{t("intlStudents.heroTitle")}</h1>
        </div>
      </div>

      <div className="ac-container">
        <div className="ac-main">
          <div className="intl-hero-row">
            <section className="intl-intro" aria-labelledby="intl-intro-heading">
              <div className="intl-globe" aria-hidden="true">
                <div className="intl-globe-dots" />
              </div>
              <div className="intl-intro-inner">
                <p className="intl-kicker">
                  <span aria-hidden="true" /> {t("x.introKicker")}
                </p>
                <h2 id="intl-intro-heading">{t("x.introHeading")}</h2>
                <p>
                  {t("x.introText")}
                </p>
                <div className="intl-intro-actions">
                  <a
                    className="intl-btn primary"
                    href="https://iau-admission.tilda.ws"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("common.applyNow")}
                  </a>
                  <Link className="intl-btn ghost" to="/student-life/presentation-for-applicants">
                    {t("nav.presentationApplicants")}
                  </Link>
                  <Link className="intl-btn ghost" to="/contact">
                    {t("nav.contact")}
                  </Link>
                </div>
              </div>
            </section>
            <figure className="intl-hero-photo">
              <img
                src={imgCampus}
                alt="International Agriculture University campus, welcoming international students"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
          </div>

          <h2 className="intl-section-title">
            {t("intlStudents.arrivalRoadmap")}
            <span>{t("intlStudents.roadmapDesc")}</span>
          </h2>
          <div className="intl-roadmap">
            {JOURNEY_STEPS.map((s) => (
              <article key={s.num} className="intl-step">
                <div className="intl-step-imgwrap">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" width={400} height={240} />
                </div>
                <div className="intl-step-body">
                  <span className="intl-step-num">{t("x.stepLabel")} {s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="intl-section-title">
            {t("intlStudents.campusPictures")}
            <span>{t("x.campusSub")}</span>
          </h2>
          <div className="intl-gallery" aria-label="Campus and student life">
            {GALLERY_IMAGES.map((g) => (
              <div key={g.alt} className="intl-gallery-cell">
                <img src={g.src} alt={g.alt} loading="lazy" width={480} height={320} />
              </div>
            ))}
          </div>

          <h2 className="intl-section-title">
            {t("intlStudents.quickLinks")}
            <span>{t("x.quickLinksSub")}</span>
          </h2>
          <div className="intl-quick-row" role="list">
            <Link className="intl-quick" to="/student-life/academic-calendar" role="listitem">
              {t("intlStudents.linkCalendar")}
            </Link>
            <Link className="intl-quick" to="/student-life/student-handbook" role="listitem">
              {t("intlStudents.linkHandbook")}
            </Link>
            <a
              className="intl-quick"
              href="/pdfs/student-handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
            >
              {t("intlStudents.linkPdfView")}
            </a>
            <Link className="intl-quick" to="/student-life/iau-clubs" role="listitem">
              {t("intlStudents.linkClubs")}
            </Link>
          </div>

          <h2 className="intl-section-title">
            {t("intlStudents.supportHubs")}
            <span>{t("x.supportHubsSub")}</span>
          </h2>
          <div className="intl-hubs">
            {SUPPORT_HUBS.map((hub) => (
              <article key={hub.title} className="intl-hub">
                <div className="intl-hub-img">
                  <img src={hub.image} alt={hub.imageAlt} loading="lazy" width={560} height={280} />
                </div>
                <div className="intl-hub-content">
                  <div className="intl-hub-top">
                    <h3>{hub.title}</h3>
                    <span className="intl-hub-tag">{hub.tag}</span>
                  </div>
                  <p>{hub.body}</p>
                  <Link to={hub.href}>{hub.linkLabel} →</Link>
                </div>
              </article>
            ))}
          </div>

          <h2 className="intl-section-title">
            {t("intlStudents.faqTitle")}
            <span>{t("x.faqSub")}</span>
          </h2>
          <div className="intl-faq">
            {FAQ_ITEMS.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <div key={idx} className="intl-faq-item">
                  <button
                    type="button"
                    className="intl-faq-header"
                    aria-expanded={open}
                    aria-controls={`intl-faq-panel-${idx}`}
                    id={`intl-faq-${idx}`}
                    onClick={() => setOpenFaq(open ? null : idx)}
                  >
                    {item.question}
                    <span className="intl-faq-icon" aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div
                      className="intl-faq-body"
                      id={`intl-faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`intl-faq-${idx}`}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
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
