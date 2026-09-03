import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { IoChevronForwardOutline } from "react-icons/io5";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { fetchVacanciesList } from "../../api/vacanciesApi";
import VacancyCard from "./VacancyCard";
import "./Vacancies.css";

const PAGE_SIZE = 8;

export default function Vacancies() {
  const { t } = useLanguage();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const aboutMenu = [
    { label: t("nav.aboutUniversity"), href: "/about" },
    { label: t("nav.staffMenu"), href: "/staff" },
    { label: t("nav.vacancies"), href: "/vacancies" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchVacanciesList({ page: currentPage, page_size: PAGE_SIZE })
      .then((data) => {
        setItems(data.results || []);
        setTotalCount(data.count || 0);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <div className="vac-page">
      <section className="vac-hero">
        <video className="vac-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="vac-hero-overlay" />
        <div className="vac-hero-content">
          <nav className="vac-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("common.home")}</Link>
            <span>/</span>
            <span>{t("nav.about")}</span>
            <span>/</span>
            <strong>{t("vacancies.heroTitle")}</strong>
          </nav>
          <h1>{t("vacancies.heroTitle")}</h1>
        </div>
      </section>

      <section className="vac-body">
        <div className="vac-container">
          <div className="vac-layout">
            <div className="vac-main">
              <div className="vac-intro">
                <h2>{t("vacancies.openPositions")}</h2>
                <p>{t("vacancies.subtitle")}</p>
              </div>

              {loading && (
                <div className="vac-loading">
                  <div className="news-spinner" />
                </div>
              )}

              {error && (
                <div className="vac-empty">
                  <p>{t("common.failedToLoad")}</p>
                  <button type="button" onClick={() => setCurrentPage(1)}>
                    {t("common.retry")}
                  </button>
                </div>
              )}

              {!loading && !error && items.length === 0 && (
                <div className="vac-empty">
                  <p>{t("vacancies.noVacancies")}</p>
                </div>
              )}

              {!loading && !error && items.length > 0 && (
                <div className="vac-acc-list">
                  {items.map((item) => (
                    <VacancyCard key={item.id} item={item} />
                  ))}
                </div>
              )}

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
            </div>

            <aside className="vac-side">
              <div className="vac-sideCard">
                <h2>{t("vacancies.sidebarTitle")}</h2>
                {aboutMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`vac-sideLink ${location.pathname === item.href ? "is-active" : ""}`}
                  >
                    <span className="vac-sideMark" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
