// src/pages/News/NewsDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  IoCalendarOutline,
  IoEyeOutline,
  IoShareSocialOutline,
  IoHome,
  IoChevronForwardOutline,
} from "react-icons/io5";

import "./NewsDetail.css";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import { fetchNewsDetail } from "../../api/newsApi";

const PLACEHOLDER_IMG = "https://placehold.co/800x450/1a6b3a/ffffff?text=IAU+News";

export default function NewsDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [news, setNews]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchNewsDetail(id)
      .then(setNews)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: news?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t("common.linkCopied"));
    }
  };

  const coverImg = news?.img || PLACEHOLDER_IMG;
  const galleryImages = news?.gallery_images ?? [];
  
  const uniqueUrls = new Set();
  const uniqueGalleryImages = [];
  galleryImages.forEach(img => {
      const url = typeof img === 'string' ? img : img.image;
      if (url && !uniqueUrls.has(url)) {
          uniqueUrls.add(url);
          uniqueGalleryImages.push(typeof img === 'string' ? { image: url } : img);
      }
  });

  // Split body by newlines, filter empty paragraphs
  const bodyParagraphs = (news?.body || "")
    .split(/\n\n|\r\n\r\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="nd-page">

      {/* ── HERO ─────────────────────────────────── */}
      <div className="nd-hero">
        <video
          className="nd-hero-bg"
          src={heroBgVid}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="nd-hero-veil" />
        <div className="nd-hero-inner">
          <div className="nd-bc">
            <Link to="/"><IoHome className="nd-bc-home" /></Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <Link to="/latest-news">{t("common.newsAndEvents")}</Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <span>{t("newsDetail.breadNews")}</span>
          </div>
          <h1 className="nd-hero-title">
            {loading ? t("common.loading") : (news?.title ?? t("newsPage.heroTitle"))}
          </h1>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────── */}
      <div className="nd-body">

        {/* LEFT */}
        <div className="nd-left">

          {loading && (
            <div className="nd-loading">
              <div className="news-spinner" />
            </div>
          )}

          {error && (
            <div className="nd-error">
              <p>{t("common.failedToLoad")}</p>
              <Link to="/latest-news">{t("common.backToNews")}</Link>
            </div>
          )}

          {!loading && !error && news && (
            <>
              {/* Meta row */}
              <div className="nd-meta">
                <div className="nd-meta-group">
                  <span className="nd-meta-item">
                    <IoCalendarOutline /> {news.date}
                  </span>
                  <span className="nd-meta-item">
                    <IoEyeOutline /> {news.views}
                  </span>
                </div>
                <button className="nd-share" onClick={handleShare}>
                  <IoShareSocialOutline /> {t("common.share")}
                </button>
              </div>

              {/* Cover image */}
              <div className="nd-cover">
                <img
                  src={coverImg}
                  alt={news.title}
                  onError={(e) => { e.target.src = PLACEHOLDER_IMG; }}
                />
              </div>

              {/* Article body */}
              <div className="nd-article">
                {bodyParagraphs.length > 0
                  ? bodyParagraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  : <p>{news.text}</p>
                }
              </div>

              {/* Gallery */}
              {uniqueGalleryImages.length > 0 && (
                <div className="nd-gallery">
                  {uniqueGalleryImages.length > 4 ? (
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3200, disableOnInteraction: false }}
                      spaceBetween={12}
                      slidesPerView={1}
                      breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                      }}
                      loop
                      className="nd-gallery-swiper"
                    >
                      {uniqueGalleryImages.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div className="nd-gallery-thumb">
                            <img
                              src={item.image}
                              alt={item.caption || ""}
                              onError={(e) => { e.target.src = PLACEHOLDER_IMG; }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="nd-gallery-grid">
                      {uniqueGalleryImages.map((item, i) => (
                        <div className="nd-gallery-thumb" key={i}>
                          <img
                            src={item.image}
                            alt={item.caption || ""}
                            onError={(e) => { e.target.src = PLACEHOLDER_IMG; }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {!loading && !error && !news && (
            <div className="nd-error">
              <p>{t("common.noData")}</p>
              <Link to="/latest-news">{t("common.backToNews")}</Link>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="nd-sidebar">
          <div className="nd-sb-menu">
            <div className="nd-sb-title">{t("common.newsAndEvents")}</div>
            <ul>
              <li><Link to="/latest-news" className="active">{t("newsDetail.breadNews")}</Link></li>
              <li><Link to="/events">{t("common.upcomingEvents")}</Link></li>
            </ul>
          </div>

          <div className="nd-sb-menu nd-sb-categories">
            <div className="nd-sb-title">{t("newsDetail.categories")}</div>
            <ul className="nd-cat-list">
              {[
                { key: "catEvents",        name: t("newsDetail.catEvents") },
                { key: "catAnnouncements", name: t("newsDetail.catAnnouncements") },
                { key: "catResearch",      name: t("newsDetail.catResearch") },
                { key: "catStudentLife",   name: t("newsDetail.catStudentLife") },
                { key: "catPartnerships",  name: t("newsDetail.catPartnerships") },
                { key: "catInternational", name: t("newsDetail.catInternational") },
                { key: "catSports",        name: t("newsDetail.catSports") },
              ].map(({ key, name }) => {
                const isActive = news?.categories?.some(
                  (c) => c.name.toLowerCase() === key.replace("cat","").toLowerCase()
                );
                return (
                  <li key={key}>
                    <div className={`nd-cat-item ${isActive ? "active" : ""}`}>
                      {name}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
