// src/pages/Events/AllEvents.jsx
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IoLocationOutline, IoCalendarOutline, IoTimeOutline } from "react-icons/io5";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { fetchUpcomingEvents, fetchPreviousEvents } from "../../api/eventsApi";
import "./AllEvents.css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function AllEvents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "previous" ? "previous" : "upcoming";
  const [tab, setTab] = useState(initialTab);
  const { t } = useLanguage();
  const [events, setEvents]     = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleTab = (value) => {
    setTab(value);
    setSearchParams(value === "previous" ? { tab: "previous" } : {});
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fn = tab === "upcoming" ? fetchUpcomingEvents : fetchPreviousEvents;
    fn()
      .then(setEvents)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [tab, refreshKey]);

  return (
    <div className="aev-page">

      {/* ── HERO ── */}
      <section className="aev-hero">
        <video className="aev-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="aev-hero-overlay" />
        <div className="aev-hero-content">
          <h1>{t("eventsPage.heroTitle")}</h1>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="aev-container">

        {/* TABS */}
        <div className="aev-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === "upcoming"}
            className={`aev-tab${tab === "upcoming" ? " aev-tab--active" : ""}`}
            onClick={() => handleTab("upcoming")}
          >
            {t("common.upcomingEvents")}
          </button>
          <button
            role="tab"
            aria-selected={tab === "previous"}
            className={`aev-tab${tab === "previous" ? " aev-tab--active" : ""}`}
            onClick={() => handleTab("previous")}
          >
            {t("common.previousEvents")}
          </button>
        </div>

        {/* CONTENT */}
        {loading && (
          <div className="aev-loading"><div className="aev-spinner" /></div>
        )}

        {error && (
          <div className="aev-error">
            <p>{t("common.failedToLoad")}</p>
            <button onClick={() => setRefreshKey((k) => k + 1)}>{t("common.retry")}</button>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="aev-empty">
            <IoCalendarOutline />
            <p>{t("common.noEventsTab")}</p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="aev-grid">
            {events.map((e) => (
              <Link to={`/events/${e.id}`} className="aev-card-link" key={e.id}>
                <article className="aev-card">
                  {/* LEFT */}
                  <div className="aev-card__left">
                    <h3 className="aev-card__title">{e.title}</h3>

                    {e.description && (
                      <p className="aev-card__desc">{e.description}</p>
                    )}

                    <div className="aev-card__divider" />

                    <div className="aev-card__meta">
                      <span className="aev-card__loc">
                        <span className="aev-card__icon"><IoLocationOutline /></span>
                        {e.location}
                      </span>
                      {e.time && (
                        <span className="aev-card__time-chip">
                          <IoTimeOutline /> {e.time}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* RIGHT — blue date panel */}
                  <div className="aev-card__right">
                    <div className="aev-card__dates">
                      <span>{e.date_from}</span>
                      {e.date_to && e.date_to !== e.date_from && (
                        <span>{e.date_to}</span>
                      )}
                    </div>
                    <div className="aev-card__year">{e.year}</div>
                    {e.time && (
                      <div className="aev-card__clock">{e.time}</div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
