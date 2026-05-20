import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const SIDEBAR_LINKS = [
  { label: "ACADEMIC CALENDAR FOR 2025/2026", href: "/student-life/academic-calendar" },
  { label: "INTERNATIONAL STUDENTS", href: "/student-life/international-students", active: true, hidden: true },
  { label: "STUDENT HANDBOOK", href: "/student-life/student-handbook" },
  { label: "PRESENTATION FOR APPLICANTS", href: "/student-life/presentation-for-applicants", hidden: true },
  { label: "CAREER SERVICES", href: "#", hidden: true },
  { label: "IAU CLUBS", href: "/student-life/iau-clubs", hidden: true },
  { label: "STUDENTS CREATIVITY", href: "#", hidden: true },
  { label: "INTERVIEWS", href: "#", hidden: true },
  { label: "ECO-ACTIVE STUDENTS", href: "/student-life/ekofaol-talabalar" },
];

const JOURNEY_STEPS = [
  {
    num: "01",
    title: "Apply & prepare documents",
    body: "Complete your application, receive your offer, and gather credentials for enrolment and travel.",
    image: imgSection,
    imageAlt: "Students and academic life at IAU",
  },
  {
    num: "02",
    title: "Visa & arrival plan",
    body: "Use our checklist for visa steps, insurance, and suggested travel windows to align with orientation.",
    image: imgRau,
    imageAlt: "International partnerships and academic mobility",
  },
  {
    num: "03",
    title: "Campus onboarding",
    body: "Register, collect your student ID, meet your buddy mentor, and join the welcome session.",
    image: imgCampus,
    imageAlt: "IAU campus buildings and grounds",
  },
  {
    num: "04",
    title: "Thrive at IAU",
    body: "Access language support, counselling, career advising, and student communities from day one.",
    image: imgEvents,
    imageAlt: "Campus events and student community",
  },
];

const SUPPORT_HUBS = [
  {
    title: "Arrival & orientation",
    tag: "Welcome",
    body: "Structured welcome week, campus tours, and essentials so you settle quickly in Tashkent.",
    href: "/student-life/student-handbook",
    linkLabel: "Student handbook",
    image: imgCampus,
    imageAlt: "Welcome and orientation on campus",
  },
  {
    title: "Visa & legal basics",
    tag: "Admin",
    body: "Guidance on timelines, translations, and who to contact when requirements change.",
    href: "/contact",
    linkLabel: "Write to admissions",
    image: imgSection,
    imageAlt: "Documents and study planning",
  },
  {
    title: "Buddy & peer network",
    tag: "Community",
    body: "Current students help with daily life—housing, transport, and social introductions.",
    href: "/student-life/iau-clubs",
    linkLabel: "Explore IAU clubs",
    image: imgGallery1,
    imageAlt: "Students connecting on campus",
  },
  {
    title: "Well-being & inclusion",
    tag: "Care",
    body: "Confidential support, cultural comfort, and practical tips for studying away from home.",
    href: "/contact",
    linkLabel: "Reach student support",
    image: imgGallery2,
    imageAlt: "Supportive student environment",
  },
];

const GALLERY_IMAGES = [
  { src: imgGallery1, alt: "Student life at IAU" },
  { src: imgGallery2, alt: "Learning and collaboration" },
  { src: imgGallery3, alt: "University community" },
];

const FAQ_ITEMS = [
  {
    question: "What language will I use day to day?",
    answer:
      "Courses and services are designed for international cohorts with English as the main academic language, with optional pathways to strengthen your communication skills alongside peers.",
  },
  {
    question: "Can I work or intern while I study?",
    answer:
      "Rules depend on your visa category and programme schedule. The career team shares realistic options, timelines, and documentation as you progress through your degree.",
  },
  {
    question: "How do I find housing near campus?",
    answer:
      "You receive vetted suggestions, templates for landlord conversations, and peer tips. Our team can connect you with trusted partners where available.",
  },
  {
    question: "Who do I contact in an emergency?",
    answer:
      "Use the official emergency numbers provided at orientation, alert your buddy mentor if appropriate, and contact the university helpline listed in your arrival pack.",
  },
  {
    question: "Where can I see dates and deadlines?",
    answer:
      "The academic calendar lists teaching weeks, exams, and breaks. Pair it with your programme handbook for assessment-specific milestones.",
  },
];

export default function InternationalStudents() {
  const [openFaq, setOpenFaq] = useState(null);

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
          <h1>International Students</h1>
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
                  <span aria-hidden="true" /> Global campus · Local warmth
                </p>
                <h2 id="intl-intro-heading">Your bridge from home to IAU</h2>
                <p>
                  A single hub for practical next steps—before you board the plane and after you land.
                  Explore your journey, connect with people who have walked the same path, and keep
                  official resources one tap away.
                </p>
                <div className="intl-intro-actions">
                  <a
                    className="intl-btn primary"
                    href="https://iau-admission.tilda.ws"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start application
                  </a>
                  <Link className="intl-btn ghost" to="/student-life/presentation-for-applicants">
                    Applicant presentation
                  </Link>
                  <Link className="intl-btn ghost" to="/contact">
                    Ask a question
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
            Arrival roadmap
            <span>Four milestones from offer letter to full campus life</span>
          </h2>
          <div className="intl-roadmap">
            {JOURNEY_STEPS.map((s) => (
              <article key={s.num} className="intl-step">
                <div className="intl-step-imgwrap">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" width={400} height={240} />
                </div>
                <div className="intl-step-body">
                  <span className="intl-step-num">Step {s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="intl-section-title">
            Campus life in pictures
            <span>A glimpse of IAU before you arrive</span>
          </h2>
          <div className="intl-gallery" aria-label="Campus and student life">
            {GALLERY_IMAGES.map((g) => (
              <div key={g.alt} className="intl-gallery-cell">
                <img src={g.src} alt={g.alt} loading="lazy" width={480} height={320} />
              </div>
            ))}
          </div>

          <h2 className="intl-section-title">
            Quick links
            <span>Frequently opened resources for international students</span>
          </h2>
          <div className="intl-quick-row" role="list">
            <Link className="intl-quick" to="/student-life/academic-calendar" role="listitem">
              Academic calendar 2025/26
            </Link>
            <Link className="intl-quick" to="/student-life/student-handbook" role="listitem">
              Handbook &amp; policies
            </Link>
            <a
              className="intl-quick"
              href="/pdfs/student-handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
            >
              PDF quick view
            </a>
            <Link className="intl-quick" to="/student-life/iau-clubs" role="listitem">
              Clubs &amp; communities
            </Link>
          </div>

          <h2 className="intl-section-title">
            Support hubs
            <span>Pick a lane—each card points to the right next step</span>
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
            Questions students ask first
            <span>Tap to expand—plain language, no jargon</span>
          </h2>
          <div className="intl-faq">
            {FAQ_ITEMS.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <div key={item.question} className="intl-faq-item">
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
