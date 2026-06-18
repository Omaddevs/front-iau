// src/pages/Events/EventDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  IoHome,
  IoChevronForwardOutline,
  IoLocationOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import { fetchEventDetail } from "../../api/eventsApi";
import "./EventDetail.css";
import { useLanguage } from "../../i18n/LanguageContext";

const PLACEHOLDER = "https://placehold.co/900x450/1a5db5/ffffff?text=IAU+Events";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchEventDetail(id)
      .then(setEvent)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: event?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t("common.linkCopied"));
    }
  };

  const dateLabel = event
    ? event.date_to && event.date_to !== event.date_from
      ? `${event.date_from} – ${event.date_to}, ${event.year}`
      : `${event.date_from}, ${event.year}`
    : "";

  return (
    <div className="ed-page">

      {/* ── HERO ─────────────────────────────────────── */}
      <div className="nd-hero">
        <video className="nd-hero-bg" src={heroBgVid} autoPlay muted loop playsInline />
        <div className="nd-hero-veil" />
        <div className="nd-hero-inner">
          <div className="nd-bc">
            <Link to="/"><IoHome className="nd-bc-home" /></Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <Link to="/events">{t("common.newsAndEvents")}</Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <span>{event?.is_upcoming ? t("common.upcomingEvents") : t("common.previousEvents")}</span>
          </div>
          <h1 className="nd-hero-title">
            {loading ? t("common.loading") : (event?.title ?? t("eventsPage.heroTitle"))}
          </h1>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────── */}
      <div className="nd-body">

        {/* LEFT */}
        <div className="nd-left">

          {loading && (
            <div className="nd-loading"><div className="news-spinner" /></div>
          )}

          {error && (
            <div className="nd-error">
              <p>{t("common.failedToLoad")}</p>
              <Link to="/events">{t("common.backToEvents")}</Link>
            </div>
          )}

          {!loading && !error && event && (
            <>
              {/* Meta bar */}
              <div className="nd-meta">
                <div className="nd-meta-group">
                  <span className="nd-meta-item">
                    <IoCalendarOutline /> {dateLabel}
                  </span>
                  {event.time && (
                    <span className="nd-meta-item">
                      <IoTimeOutline /> {event.time}
                    </span>
                  )}
                  <span className="nd-meta-item">
                    <IoLocationOutline /> {event.location}
                  </span>
                </div>
                <button className="nd-share" onClick={handleShare}>
                  <IoShareSocialOutline /> {t("common.share")}
                </button>
              </div>

              {/* Cover image */}
              <div className="nd-cover">
                <img
                  src={event.cover_image || PLACEHOLDER}
                  alt={event.title}
                  onError={(e) => { e.target.src = PLACEHOLDER; }}
                />
              </div>

              {/* Info card */}
              <div className="ed-info-card">
                <div className="ed-info-row">
                  <div className="ed-info-item">
                    <span className="ed-info-label"><IoCalendarOutline /> {t("contact.workingHours").split(":")[0]}</span>
                    <span className="ed-info-value">{dateLabel}</span>
                  </div>
                  {event.time && (
                    <div className="ed-info-item">
                      <span className="ed-info-label"><IoTimeOutline /></span>
                      <span className="ed-info-value">{event.time}</span>
                    </div>
                  )}
                  <div className="ed-info-item">
                    <span className="ed-info-label"><IoLocationOutline /></span>
                    <span className="ed-info-value">{event.location}</span>
                  </div>
                  <div className="ed-info-item">
                    <span className="ed-info-label"></span>
                    <span className={`ed-badge ${event.is_upcoming ? "ed-badge--upcoming" : "ed-badge--past"}`}>
                      {event.is_upcoming ? t("common.upcomingEvents") : t("common.previousEvents")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {event.description && (
                <div className="nd-article">
                  {event.description.split(/\n\n|\r\n\r\n/).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              {!event.description && (
                <div className="nd-article">
                  <p>{t("x.eventNoDetails")}</p>
                </div>
              )}
            </>
          )}

          {!loading && !error && !event && (
            <div className="nd-error">
              <p>{t("common.noData")}</p>
              <Link to="/events">{t("common.backToEvents")}</Link>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="nd-sidebar">
          <div className="nd-sb-menu">
            <div className="nd-sb-title">{t("common.newsAndEvents")}</div>
            <ul>
              <li>
                <Link
                  to="/events"
                  className={event?.is_upcoming !== false ? "active" : ""}
                >
                  {t("common.upcomingEvents")}
                </Link>
              </li>
              <li>
                <Link
                  to="/events?tab=previous"
                  className={event?.is_upcoming === false ? "active" : ""}
                >
                  {t("common.previousEvents")}
                </Link>
              </li>
              <li><Link to="/latest-news">{t("nav.latestNews")}</Link></li>
            </ul>
          </div>

          {/* Date panel */}
          {event && (
            <div className="ed-date-panel">
              <div className="ed-date-panel__dates">
                <span>{event.date_from}</span>
                {event.date_to && event.date_to !== event.date_from && (
                  <span>{event.date_to}</span>
                )}
              </div>
              <div className="ed-date-panel__year">{event.year}</div>
              {event.time && (
                <div className="ed-date-panel__time">{event.time}</div>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
