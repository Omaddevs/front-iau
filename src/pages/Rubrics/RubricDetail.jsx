// src/pages/Rubrics/RubricDetail.jsx
// Rukn maqolasining to'liq ko'rinishi (NewsDetail kabi, faqat o'zbekcha).
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  IoArrowBack,
  IoCalendarOutline,
  IoChevronForwardOutline,
  IoEyeOutline,
  IoHome,
  IoShareSocialOutline,
} from "react-icons/io5";

import "./Rubrics.css";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import { fetchRubricPost, fetchRubricPosts } from "../../api/rubricsApi";
import { RUBRICS, RUBRIC_LIST } from "./rubrics";
import { RubricCover, RubricIcon } from "./RubricParts";

export default function RubricDetail({ rubric: slug }) {
  const { id } = useParams();
  const rubric = RUBRICS[slug];
  const [result, setResult] = useState({ key: null, post: null, error: false });
  const [others, setOthers] = useState({ key: null, items: [] });
  const [copied, setCopied] = useState(false);

  const requestKey = `${slug}|${id}`;
  const loading = result.key !== requestKey;
  const { post, error } = result;

  useEffect(() => {
    window.scrollTo(0, 0);
    let alive = true;
    fetchRubricPost(slug, id)
      .then((data) => alive && setResult({ key: requestKey, post: data, error: false }))
      .catch(() => alive && setResult({ key: requestKey, post: null, error: true }));
    fetchRubricPosts(slug, { page_size: 4, exclude: id })
      .then((data) => alive && setOthers({ key: requestKey, items: data.results }))
      .catch(() => {});
    return () => { alive = false; };
  }, [slug, id, requestKey]);

  const otherPosts = others.key === requestKey ? others.items : [];

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: post?.title, url }); } catch { /* dismissed */ }
      return;
    }
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paragraphs = (post?.body || "")
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const gallery = post?.gallery_images ?? [];

  return (
    <div className="rb-page">
      {/* ── HERO ── */}
      <section className="rb-hero rb-hero--detail">
        <video className="rb-hero-bg" src={heroBgVid} autoPlay muted loop playsInline />
        <div className="rb-hero-veil" />
        <div className="rb-hero-inner">
          <nav className="rb-bc" aria-label="Breadcrumb">
            <Link to="/"><IoHome /></Link>
            <IoChevronForwardOutline className="rb-bc-sep" />
            <Link to={rubric.path}>{rubric.label}</Link>
            <IoChevronForwardOutline className="rb-bc-sep" />
            <span className="rb-bc-current">Maqola</span>
          </nav>
          <h1 className="rb-hero-title rb-hero-title--detail">
            {loading ? "Yuklanmoqda..." : post?.title ?? rubric.label}
          </h1>
        </div>
      </section>

      <div className="rb-detail">
        {/* ── LEFT: article ── */}
        <article className="rb-article">
          {loading && (
            <div className="rb-article-skeleton">
              <div className="rb-skel rb-skel-line short" />
              <div className="rb-skel rb-skel-img tall" />
              <div className="rb-skel rb-skel-line" />
              <div className="rb-skel rb-skel-line" />
              <div className="rb-skel rb-skel-line short" />
            </div>
          )}

          {!loading && error && (
            <div className="rb-state">
              <p>Maqola topilmadi yoki yuklab bo'lmadi.</p>
              <Link to={rubric.path}><IoArrowBack /> {rubric.label} sahifasiga qaytish</Link>
            </div>
          )}

          {!loading && !error && post && (
            <>
              <div className="rb-article-head">
                <span className="rb-badge">
                  <RubricIcon slug={slug} /> {rubric.label}
                </span>
                <div className="rb-article-actions">
                  <div className="rb-meta">
                    <span><IoCalendarOutline /> {post.date}</span>
                    <span><IoEyeOutline /> {post.views}</span>
                  </div>
                  <button type="button" className="rb-share" onClick={handleShare}>
                    <IoShareSocialOutline /> {copied ? "Havola nusxalandi" : "Ulashish"}
                  </button>
                </div>
              </div>

              {post.img && (
                <figure className="rb-article-cover">
                  <img src={post.img} alt={post.title} />
                </figure>
              )}

              <div className={`rb-article-body ${post.img ? "" : "rb-article-body--noimg"}`}>
                {paragraphs.length > 0
                  ? paragraphs.map((p, i) => <p key={i}>{p}</p>)
                  : <p>{post.text}</p>}
              </div>

              {gallery.length > 0 && (
                <section className="rb-gallery">
                  <h3 className="rb-section-title">Fotogalereya</h3>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={gallery.length > 3 ? { delay: 3500, disableOnInteraction: false } : false}
                    spaceBetween={14}
                    slidesPerView={1}
                    breakpoints={{ 560: { slidesPerView: 2 }, 900: { slidesPerView: 3 } }}
                    className="rb-gallery-swiper"
                  >
                    {gallery.map((g) => (
                      <SwiperSlide key={g.id}>
                        <figure className="rb-gallery-item">
                          <img src={g.image} alt={g.caption || post.title} loading="lazy" />
                          {g.caption && <figcaption>{g.caption}</figcaption>}
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
              )}

              <Link to={rubric.path} className="rb-back">
                <IoArrowBack /> Barcha maqolalar
              </Link>
            </>
          )}
        </article>

        {/* ── RIGHT: sidebar ── */}
        <aside className="rb-sidebar">
          <div className="rb-sb-box">
            <div className="rb-sb-title">Ruknlar</div>
            <ul className="rb-sb-links">
              {RUBRIC_LIST.map((r) => (
                <li key={r.slug}>
                  <Link to={r.path} className={r.slug === slug ? "active" : ""}>
                    <RubricIcon slug={r.slug} /> {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {otherPosts.length > 0 && (
            <div className="rb-sb-box">
              <div className="rb-sb-title">Boshqa maqolalar</div>
              <ul className="rb-sb-posts">
                {otherPosts.map((o) => (
                  <li key={o.id}>
                    <Link to={`${rubric.path}/${o.id}`}>
                      <RubricCover post={o} rubric={rubric} className="rb-sb-thumb" />
                      <div>
                        <h4>{o.title}</h4>
                        <span><IoCalendarOutline /> {o.date}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
