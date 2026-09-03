import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoBriefcaseOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoChevronDownOutline,
  IoMailOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";
import { fetchVacancyDetail, submitVacancyApplication } from "../../api/vacanciesApi";
import { renderRichText, renderInlineBold } from "./richText";

const DEFAULT_TELEGRAM_LINK = "https://t.me/iau_uz";

function splitLines(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function isOpen(item) {
  if (typeof item.isOpen === "boolean") return item.isOpen;
  if (!item.deadline) return true;
  return String(item.deadline) >= new Date().toISOString().slice(0, 10);
}

export default function VacancyCard({ item }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const open = isOpen(item);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
    if (!detail && !loadingDetail) {
      setLoadingDetail(true);
      setDetailError(null);
      fetchVacancyDetail(item.id)
        .then(setDetail)
        .catch((err) => setDetailError(err.message))
        .finally(() => setLoadingDetail(false));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cv) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitVacancyApplication(item.id, { fullName, phone, cv });
      setSubmitSuccess(true);
      setShowForm(false);
    } catch (err) {
      setSubmitError(err.message || t("vacancies.applyErrorGeneric"));
    } finally {
      setSubmitting(false);
    }
  };

  const requirements = splitLines(detail?.requirements);

  return (
    <div className={`vac-acc-card${expanded ? " is-open" : ""}`}>
      <button type="button" className="vac-acc-header" onClick={handleToggle}>
        <span className="vac-acc-icon">
          <IoBriefcaseOutline />
        </span>
        <span className="vac-acc-titleWrap">
          <span className="vac-acc-title">{item.title}</span>
          {item.department && <span className="vac-acc-subtitle">{item.department}</span>}
        </span>
        <span className={`vac-status ${open ? "is-open" : "is-closed"}`}>
          {open ? t("vacancies.open") : t("vacancies.closed")}
        </span>
        <IoChevronDownOutline className="vac-acc-chevron" />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="vac-acc-body-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="vac-acc-body">
              {loadingDetail && (
                <div className="vac-acc-loading">
                  <div className="news-spinner" />
                </div>
              )}

              {detailError && <p className="vac-form-error">{t("common.failedToLoad")}</p>}

              {detail && (
                <>
                  <div className="vd-meta-box vac-acc-meta">
                    {detail.location && (
                      <div className="vd-meta-item">
                        <span>{t("vacancies.location")}</span>
                        <strong>
                          <IoLocationOutline /> {detail.location}
                        </strong>
                      </div>
                    )}
                    {detail.deadline && (
                      <div className="vd-meta-item">
                        <span>{t("vacancies.deadline")}</span>
                        <strong>
                          <IoCalendarOutline /> {detail.deadline}
                        </strong>
                      </div>
                    )}
                    <div className="vd-meta-item">
                      <span>{t("vacancies.published")}</span>
                      <strong>{detail.date || "—"}</strong>
                    </div>
                  </div>

                  <div className="vac-rt">{renderRichText(detail.description)}</div>

                  {requirements.length > 0 && (
                    <div className="vd-section">
                      <h3 className="vac-rt-h3">{t("vacancies.requirements")}</h3>
                      <ul className="vac-rt-list">
                        {requirements.map((line, index) => (
                          <li key={index}>{renderInlineBold(line, `req-${index}`)}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="vd-section">
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
                        <div className="vd-apply-actions">
                          {!showForm && (
                            <button type="button" className="vd-apply" onClick={() => setShowForm(true)}>
                              <IoMailOutline /> {t("vacancies.applyNow")}
                            </button>
                          )}
                          <a
                            className="vd-telegram"
                            href={detail.telegramLink || DEFAULT_TELEGRAM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTelegramPlane /> {t("vacancies.applyTelegram")}
                          </a>
                          <Link to={`/vacancies/${item.id}`} className="vac-acc-more">
                            {t("vacancies.readMore")}
                          </Link>
                        </div>

                        {showForm && (
                          <form className="vac-apply-form" onSubmit={handleSubmit}>
                            <div className="vac-form-row">
                              <label htmlFor={`vac-full-name-${item.id}`}>{t("vacancies.fullName")}</label>
                              <input
                                id={`vac-full-name-${item.id}`}
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="vac-form-row">
                              <label htmlFor={`vac-phone-${item.id}`}>{t("vacancies.phone")}</label>
                              <input
                                id={`vac-phone-${item.id}`}
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            </div>
                            <div className="vac-form-row">
                              <label htmlFor={`vac-cv-${item.id}`}>{t("vacancies.cv")}</label>
                              <input
                                id={`vac-cv-${item.id}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
