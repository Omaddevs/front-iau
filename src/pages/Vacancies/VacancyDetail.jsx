import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  IoCalendarOutline,
  IoHome,
  IoChevronForwardOutline,
  IoMailOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { fetchVacancyDetail, submitVacancyApplication } from "../../api/vacanciesApi";
import { renderRichText, renderInlineBold } from "./richText";
import "../News/NewsDetail.css";
import "./Vacancies.css";

const DEFAULT_TELEGRAM_LINK = "https://t.me/iau_uz";

function splitLines(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export default function VacancyDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchVacancyDetail(id)
      .then(setItem)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const requirements = splitLines(item?.requirements);
  const open = item?.isOpen !== false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cv) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitVacancyApplication(id, { fullName, phone, cv });
      setSubmitSuccess(true);
      setShowForm(false);
    } catch (err) {
      setSubmitError(err.message || t("vacancies.applyErrorGeneric"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="nd-page">
      <div className="nd-hero">
        <video className="nd-hero-bg" src={bgVideo} autoPlay muted loop playsInline />
        <div className="nd-hero-veil" />
        <div className="nd-hero-inner">
          <div className="nd-bc">
            <Link to="/">
              <IoHome className="nd-bc-home" />
            </Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <Link to="/vacancies">{t("vacancies.heroTitle")}</Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <span>{item?.title || t("vacancies.heroTitle")}</span>
          </div>
          <h1 className="nd-hero-title">
            {loading ? t("common.loading") : item?.title || t("vacancies.heroTitle")}
          </h1>
        </div>
      </div>

      <div className="nd-body">
        <div className="nd-left">
          {loading && (
            <div className="nd-loading">
              <div className="news-spinner" />
            </div>
          )}

          {error && (
            <div className="nd-error">
              <p>{t("common.failedToLoad")}</p>
              <Link to="/vacancies">{t("vacancies.backToList")}</Link>
            </div>
          )}

          {!loading && !error && !item && (
            <div className="nd-error">
              <p>{t("common.noData")}</p>
              <Link to="/vacancies">{t("vacancies.backToList")}</Link>
            </div>
          )}

          {!loading && !error && item && (
            <>
              <div className="nd-meta">
                <div className="nd-meta-group">
                  <span className="nd-meta-item">
                    <IoCalendarOutline /> {t("vacancies.deadline")}: {item.deadline}
                  </span>
                </div>
                <Link to="/vacancies" className="nd-share">
                  {t("vacancies.backToList")}
                </Link>
              </div>

              <div className="vd-meta-box">
                <div className="vd-meta-item">
                  <span>{t("vacancies.department")}</span>
                  <strong>{item.department || "—"}</strong>
                </div>
                <div className="vd-meta-item">
                  <span>{t("vacancies.employmentType")}</span>
                  <strong>{t(`vacancies.types.${item.employmentType}`) || item.employmentType}</strong>
                </div>
                <div className="vd-meta-item">
                  <span>{t("vacancies.location")}</span>
                  <strong>{item.location || "—"}</strong>
                </div>
                <div className="vd-meta-item">
                  <span>{t("vacancies.published")}</span>
                  <strong>{item.date || "—"}</strong>
                </div>
              </div>

              <div className="nd-article vd-section vac-rt">
                {renderRichText(item.description)}
              </div>

              {requirements.length > 0 && (
                <div className="vd-section">
                  <h2>{t("vacancies.requirements")}</h2>
                  <ul className="vac-rt-list">
                    {requirements.map((line, index) => (
                      <li key={index}>{renderInlineBold(line, `req-${index}`)}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="vd-section">
                <h2>{t("vacancies.howToApply")}</h2>

                {!open ? (
                  <div className="vac-filled-banner">
                    <IoCloseCircleOutline /> {t("vacancies.positionFilled")}
                  </div>
                ) : submitSuccess ? (
                  <div className="vac-success-banner">
                    <IoCheckmarkCircleOutline /> {t("vacancies.applySuccess")}
                  </div>
                ) : (
                  <>
                    <p>{t("vacancies.applyHint")}</p>

                    <div className="vd-apply-actions">
                      {!showForm && (
                        <button type="button" className="vd-apply" onClick={() => setShowForm(true)}>
                          <IoMailOutline /> {t("vacancies.applyNow")}
                        </button>
                      )}
                      <a
                        className="vd-telegram"
                        href={item.telegramLink || DEFAULT_TELEGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTelegramPlane /> {t("vacancies.applyTelegram")}
                      </a>
                    </div>

                    {showForm && (
                      <form className="vac-apply-form" onSubmit={handleSubmit}>
                        <div className="vac-form-row">
                          <label htmlFor="vac-full-name">{t("vacancies.fullName")}</label>
                          <input
                            id="vac-full-name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="vac-form-row">
                          <label htmlFor="vac-phone">{t("vacancies.phone")}</label>
                          <input
                            id="vac-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                        <div className="vac-form-row">
                          <label htmlFor="vac-cv">{t("vacancies.cv")}</label>
                          <input
                            id="vac-cv"
                            type="file"
                            onChange={(e) => setCv(e.target.files?.[0] || null)}
                            required
                          />
                        </div>

                        {submitError && <p className="vac-form-error">{submitError}</p>}

                        <div className="vac-form-actions">
                          <button type="submit" className="vd-apply" disabled={submitting}>
                            {submitting ? t("vacancies.submitting") : t("vacancies.submitApplication")}
                          </button>
                          <button
                            type="button"
                            className="vac-form-cancel"
                            onClick={() => {
                              setShowForm(false);
                              setSubmitError(null);
                            }}
                          >
                            {t("vacancies.cancel")}
                          </button>
                        </div>
                      </form>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <aside className="nd-sidebar">
          <div className="nd-sb-menu">
            <div className="nd-sb-title">{t("vacancies.sidebarTitle")}</div>
            <ul>
              <li>
                <Link to="/about">{t("nav.aboutUniversity")}</Link>
              </li>
              <li>
                <Link to="/staff">{t("nav.staffMenu")}</Link>
              </li>
              <li>
                <Link to="/vacancies" className="active">
                  {t("nav.vacancies")}
                </Link>
              </li>
              <li>
                <Link to="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
