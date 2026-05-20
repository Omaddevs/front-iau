import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { IoCalendarOutline, IoChevronForwardOutline, IoHome } from "react-icons/io5";
import "./EkofaolNewsDetail.css";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import { fetchEkofaolNewsDetail } from "../../api/ecoactiveNewsApi";

export default function EkofaolNewsDetail() {
  const { id } = useParams();
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

  const bodyParagraphs = useMemo(
    () =>
      (news?.body || "")
        .split(/\n\n|\r\n\r\n/)
        .map((p) => p.trim())
        .filter(Boolean),
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
            <Link to="/student-life/ekofaol-talabalar">Ekofaol talabalar</Link>
            <IoChevronForwardOutline className="eco-nd-bc-sep" />
            <span>Yangilik</span>
          </div>
          <h1 className="eco-nd-hero-title">{loading ? "Loading..." : news?.title || "Yangilik topilmadi"}</h1>
        </div>
      </div>

      <div className="eco-nd-body">
        <div className="eco-nd-left">
          {loading && <div className="eco-nd-loading">Yuklanmoqda...</div>}
          {error && <div className="eco-nd-error">{error}</div>}
          {!loading && !error && news && (
            <>
              <div className="eco-nd-meta">
                <span>
                  <IoCalendarOutline /> {news.date}
                </span>
              </div>
              <div className="eco-nd-cover">
                <img src={news.img} alt={news.title} />
              </div>
              <div className="eco-nd-article">
                {bodyParagraphs.length > 0 ? bodyParagraphs.map((p, idx) => <p key={idx}>{p}</p>) : <p>{news.text}</p>}
              </div>
              {news.gallery_images?.length > 0 && (
                <div className="eco-nd-gallery">
                  {news.gallery_images.map((g, idx) => (
                    <div className="eco-nd-gallery-item" key={idx}>
                      <img src={g.image} alt={g.caption || news.title} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <aside className="eco-nd-sidebar">
          <div className="eco-nd-sb-menu">
            <div className="eco-nd-sb-title">Ekofaol talabalar</div>
            <ul>
              <li>
                <Link to="/student-life/ekofaol-talabalar" className="active">
                  Yangiliklar
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
