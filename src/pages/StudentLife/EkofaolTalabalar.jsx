import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCalendarOutline, IoChevronForwardOutline } from "react-icons/io5";
import "./AcademicCalendar.css";
import "./EkofaolTalabalar.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { fetchEkofaolNewsList } from "../../api/ecoactiveNewsApi";

const SIDEBAR_LINKS = [
  { label: "ACADEMIC CALENDAR FOR 2025/2026", href: "/student-life/academic-calendar" },
  { label: "INTERNATIONAL STUDENTS", href: "/student-life/international-students", hidden: true },
  { label: "STUDENT HANDBOOK", href: "/student-life/student-handbook" },
  { label: "PRESENTATION FOR APPLICANTS", href: "/student-life/presentation-for-applicants", hidden: true },
  { label: "CAREER SERVICES", href: "#", hidden: true },
  { label: "IAU CLUBS", href: "/student-life/iau-clubs", hidden: true },
  { label: "STUDENTS CREATIVITY", href: "#", hidden: true },
  { label: "INTERVIEWS", href: "#", hidden: true },
  { label: "ECO-ACTIVE STUDENTS", href: "/student-life/ekofaol-talabalar", active: true },
];

const PAGE_SIZE = 8;

export default function EkofaolTalabalar() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchEkofaolNewsList({
          page: currentPage,
          page_size: PAGE_SIZE,
          search: query || undefined,
        });
        setNews(data.results || []);
        setTotalCount(data.count || 0);
      } catch (err) {
        setError(err.message || "Failed to load eco-active students content.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [currentPage, query]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <div className="academic-calendar-page eco-page">
      <div className="ac-hero">
        <video className="ac-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="ac-hero-overlay" />
        <div className="ac-hero-content">
          <h1>Eco-active Students</h1>
        </div>
      </div>

      <div className="ac-container">
        <div className="ac-main">
          <section className="eco-head">
            <div className="eco-head-copy">
              <h2>Eco-active Students</h2>
              <p>News about ecological events, clean-up days, and green initiatives.</p>
            </div>
            <input
              className="eco-search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search news..."
              aria-label="Search news"
            />
          </section>

          {loading && (
            <div className="news-loading">
              <div className="news-spinner" />
            </div>
          )}

          {error && (
            <div className="news-error">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="eco-news-grid">
                {news.map((item) => (
                  <article key={item.id} className="eco-news-card">
                    <Link to={`/student-life/ekofaol-talabalar/${item.id}`} className="eco-news-media-link">
                      <div className="eco-news-media">
                        <img src={item.img} alt={item.title} />
                        <div className="eco-news-meta">
                          <span className="eco-news-chip">
                            <IoCalendarOutline /> {item.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="eco-news-body">
                      <Link to={`/student-life/ekofaol-talabalar/${item.id}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.text}</p>
                      <Link to={`/student-life/ekofaol-talabalar/${item.id}`} className="eco-news-more">
                        See more <IoChevronForwardOutline />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="news-pagination">
                  {currentPage > 1 && (
                    <button className="pag-btn" onClick={() => setCurrentPage(currentPage - 1)}>
                      &lsaquo;
                    </button>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`pag-btn${page === currentPage ? " active" : ""}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                  {currentPage < totalPages && (
                    <button className="pag-btn" onClick={() => setCurrentPage(currentPage + 1)}>
                      <IoChevronForwardOutline />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
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
