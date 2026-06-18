import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoCalendarOutline, IoChevronForwardOutline, IoHome } from "react-icons/io5";
import "./EkofaolNewsDetail.css";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import sectionPlaceholder from "../../images/sectionImage.jpg";
import { fetchEkofaolNewsDetail } from "../../api/ecoactiveNewsApi";

function buildGallery(coverImg, galleryImages) {
  const normalized = (galleryImages || [])
    .map((g) => (typeof g === "string" ? { image: g, caption: "" } : g))
    .filter((g) => g?.image);

  const seen = new Set();
  const unique = [];
  normalized.forEach((g) => {
    if (seen.has(g.image)) return;
    seen.add(g.image);
    unique.push(g);
  });

  let cover = coverImg || null;
  let additional = unique;

  if (!cover && unique.length > 0) {
    cover = unique[0].image;
    additional = unique.slice(1);
  } else {
    additional = unique.filter((g) => !samePath(g.image, cover));
  }

  return { cover, additional };
}

function samePath(a, b) {
  if (!a || !b) return false;
  try {
    return new URL(a, "http://local").pathname === new URL(b, "http://local").pathname;
  } catch {
    return a === b;
  }
}

export default function EkofaolNewsDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [news, setNews] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchEkofaolNewsDetail(id)
      .then(setNews)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const bodyParagraphs = useMemo(() => {
    const raw = (news?.body || "").trim();
    if (!raw) return [];
    const blocks = raw.split(/\n\n|\r\n\r\n/).map((p) => p.trim()).filter(Boolean);
    if (blocks.length > 1) return blocks;
    return raw.split(/\n/).map((p) => p.trim()).filter(Boolean);
  }, [news]);

  const showLead = useMemo(() => {
    const summary = (news?.text || "").trim();
    if (!summary || bodyParagraphs.length === 0) return false;
    return summary !== bodyParagraphs[0];
  }, [news, bodyParagraphs]);

  const { cover, additional } = useMemo(
    () => buildGallery(news?.img, news?.gallery_images),
    [news]
  );

  return (
    <div className="eco-nd-page">
      <div className="eco-nd-hero">
        <video className="eco-nd-hero-bg" src={heroBgVid} autoPlay muted loop playsInline />
        <div className="eco-nd-hero-veil" />
        <div className="eco-nd-hero-inner">
          <div className="eco-nd-bc">
            <Link to="/">
              <IoHome />
            </Link>
            <IoChevronForwardOutline className="eco-nd-bc-sep" />
            <Link to="/student-life/ekofaol-talabalar">{t("eco.breadEco")}</Link>
            <IoChevronForwardOutline className="eco-nd-bc-sep" />
            <span>{t("eco.breadArticle")}</span>
          </div>
          <h1 className="eco-nd-hero-title">{loading ? t("common.loading") : news?.title || t("common.noData")}</h1>
        </div>
      </div>

      <div className="eco-nd-body">
        <div className="eco-nd-left">
          {loading && <div className="eco-nd-loading">{t("common.loading")}</div>}
          {error && <div className="eco-nd-error">{error}</div>}
          {!loading && !error && news && (
            <>
              <div className="eco-nd-meta">
                <span>
                  <IoCalendarOutline /> {news.date}
                </span>
              </div>
              {cover && (
                <div className="eco-nd-cover">
                  <img
                    src={cover}
                    alt={news.title}
                    onError={(e) => {
                      e.target.src = sectionPlaceholder;
                    }}
                  />
                </div>
              )}
              <div className="eco-nd-content">
                {showLead && <p className="eco-nd-lead">{news.text}</p>}
                <div className={`eco-nd-article${bodyParagraphs.length === 0 ? " eco-nd-article--solo" : ""}`}>
                  {bodyParagraphs.length > 0 ? (
                    bodyParagraphs.map((p, idx) => (
                      <p key={idx} className={idx === 0 && !showLead ? "eco-nd-article-first" : undefined}>
                        {p}
                      </p>
                    ))
                  ) : (
                    <p>{news.text}</p>
                  )}
                </div>
                <Link to="/student-life/ekofaol-talabalar" className="eco-nd-back">
                  <IoChevronForwardOutline className="eco-nd-back-icon" />
                  {t("eco.backToEco")}
                </Link>
              </div>
              {additional.length > 0 && (
                <section className="eco-nd-gallery-section" aria-label="Additional photos">
                  <h2 className="eco-nd-gallery-title">{t("eco.photoGallery")}</h2>
                  <div className="eco-nd-gallery">
                    {additional.length > 4 ? (
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
                        className="eco-nd-gallery-swiper"
                      >
                        {additional.map((g, idx) => (
                          <SwiperSlide key={g.id ?? idx}>
                            <div className="eco-nd-gallery-item">
                              <img
                                src={g.image}
                                alt={g.caption || news.title}
                                onError={(e) => {
                                  e.target.src = sectionPlaceholder;
                                }}
                              />
                              {g.caption ? <p className="eco-nd-gallery-caption">{g.caption}</p> : null}
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div className="eco-nd-gallery-grid">
                        {additional.map((g, idx) => (
                          <figure className="eco-nd-gallery-item" key={g.id ?? idx}>
                            <img
                              src={g.image}
                              alt={g.caption || news.title}
                              onError={(e) => {
                                e.target.src = sectionPlaceholder;
                              }}
                            />
                            {g.caption ? <figcaption className="eco-nd-gallery-caption">{g.caption}</figcaption> : null}
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )}
            </>
          )}
        </div>

        <aside className="eco-nd-sidebar">
          <div className="eco-nd-sb-menu">
            <div className="eco-nd-sb-title">{t("eco.heroTitle")}</div>
            <ul>
              <li>
                <Link to="/student-life/ekofaol-talabalar" className="active">
                  {t("newsDetail.breadNews")}
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
