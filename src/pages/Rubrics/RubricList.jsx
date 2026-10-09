// src/pages/Rubrics/RubricList.jsx
// "Bir ixtiro tarixi" / "Ilm bilan erishilgan yutuq" ro'yxat sahifasi (faqat o'zbekcha).
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IoArrowForward,
  IoCalendarOutline,
  IoChevronBack,
  IoChevronForward,
  IoChevronForwardOutline,
  IoEyeOutline,
  IoHome,
  IoSearchOutline,
} from "react-icons/io5";

import "./Rubrics.css";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import { fetchRubricPosts } from "../../api/rubricsApi";
import { RUBRICS, RUBRIC_LIST } from "./rubrics";
import { RubricCover, RubricIcon } from "./RubricParts";

const PAGE_SIZE = 9;

function PostMeta({ post }) {
  return (
    <div className="rb-meta">
      <span><IoCalendarOutline /> {post.date}</span>
      <span><IoEyeOutline /> {post.views}</span>
    </div>
  );
}

export default function RubricList({ rubric: slug }) {
  const rubric = RUBRICS[slug];
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const [result, setResult] = useState({ key: null, posts: [], count: 0, error: false });

  // Loading is derived: the stored result belongs to an older request.
  const requestKey = `${slug}|${page}|${query}|${reloadKey}`;
  const loading = result.key !== requestKey;
  const { posts, count, error } = result;

  useEffect(() => {
    let alive = true;
    fetchRubricPosts(slug, { page, page_size: PAGE_SIZE, search: query })
      .then((data) => alive && setResult({ key: requestKey, posts: data.results, count: data.count, error: false }))
      .catch(() => alive && setResult({ key: requestKey, posts: [], count: 0, error: true }));
    return () => { alive = false; };
  }, [slug, page, query, requestKey]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: page === 1 ? "auto" : "smooth" });
  }, [slug, page]);

  const totalPages = Math.ceil(count / PAGE_SIZE);
  const showFeatured = page === 1 && !query && posts.length > 0;
  const featured = showFeatured ? posts[0] : null;
  const rest = showFeatured ? posts.slice(1) : posts;
  const detailPath = (post) => `${rubric.path}/${post.id}`;

  const onSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(search.trim());
  };

  return (
    <div className="rb-page">
      {/* ── HERO ── */}
      <section className="rb-hero">
        <video className="rb-hero-bg" src={heroBgVid} autoPlay muted loop playsInline />
        <div className="rb-hero-veil" />
        <div className="rb-hero-inner">
          <nav className="rb-bc" aria-label="Breadcrumb">
            <Link to="/"><IoHome /></Link>
            <IoChevronForwardOutline className="rb-bc-sep" />
            <span>O'quv jarayoni</span>
            <IoChevronForwardOutline className="rb-bc-sep" />
            <span className="rb-bc-current">{rubric.label}</span>
          </nav>
          <span className="rb-hero-kicker">
            <RubricIcon slug={slug} /> {rubric.kicker}
          </span>
          <h1 className="rb-hero-title">{rubric.label}</h1>
          <p className="rb-hero-desc">{rubric.description}</p>
        </div>
      </section>

      <div className="rb-container">
        {/* ── Toolbar: rukn tablari + qidiruv ── */}
        <div className="rb-toolbar">
          <div className="rb-tabs" role="tablist">
            {RUBRIC_LIST.map((r) => (
              <Link
                key={r.slug}
                to={r.path}
                role="tab"
                aria-selected={r.slug === slug}
                className={`rb-tab ${r.slug === slug ? "active" : ""}`}
              >
                <RubricIcon slug={r.slug} /> {r.label}
              </Link>
            ))}
          </div>
          <form className="rb-search" onSubmit={onSearch}>
            <IoSearchOutline />
            <input
              type="search"
              placeholder="Maqolalardan qidirish..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (!e.target.value) { setQuery(""); setPage(1); }
              }}
            />
          </form>
        </div>

        {loading && (
          <div className="rb-grid">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="rb-card rb-card--skeleton">
                <div className="rb-skel rb-skel-img" />
                <div className="rb-card-body">
                  <div className="rb-skel rb-skel-line short" />
                  <div className="rb-skel rb-skel-line" />
                  <div className="rb-skel rb-skel-line" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rb-state">
            <p>Ma'lumotlarni yuklab bo'lmadi.</p>
            <button type="button" onClick={() => setReloadKey((k) => k + 1)}>Qayta urinish</button>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="rb-state">
            <RubricIcon slug={slug} className="rb-state-icon" />
            <p>{query ? "Qidiruv bo'yicha maqola topilmadi." : "Hozircha maqolalar e'lon qilinmagan."}</p>
          </div>
        )}

        {!loading && !error && featured && (
          <Link to={detailPath(featured)} className="rb-featured">
            <RubricCover post={featured} rubric={rubric} className="rb-featured-cover" />
            <div className="rb-featured-body">
              <span className="rb-badge">Yangi maqola</span>
              <h2>{featured.title}</h2>
              <p>{featured.text}</p>
              <div className="rb-featured-foot">
                <PostMeta post={featured} />
                <span className="rb-more">O'qish <IoArrowForward /></span>
              </div>
            </div>
          </Link>
        )}

        {!loading && !error && rest.length > 0 && (
          <div className="rb-grid">
            {rest.map((post) => (
              <Link key={post.id} to={detailPath(post)} className="rb-card">
                <RubricCover post={post} rubric={rubric} />
                <div className="rb-card-body">
                  <PostMeta post={post} />
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <span className="rb-more">Batafsil <IoArrowForward /></span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <nav className="rb-pagination" aria-label="Sahifalar">
            <button type="button" disabled={page === 1} onClick={() => setPage(page - 1)} aria-label="Oldingi">
              <IoChevronBack />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={n === page ? "active" : ""}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button type="button" disabled={page === totalPages} onClick={() => setPage(page + 1)} aria-label="Keyingi">
              <IoChevronForward />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
