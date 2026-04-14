// src/components/NewsSection.jsx
import "./NewsSection.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IoCalendarOutline,
  IoEyeOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import { fetchFeaturedNews } from "../api/newsApi";

const PLACEHOLDER = "https://placehold.co/600x400/1a6b3a/ffffff?text=IAU+News";

export default function NewsSection() {
  const [items, setItems]     = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedNews()
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40, filter: "blur(12px)" },
    show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: easePro } },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -60, y: 20, filter: "blur(12px)" },
    show:   { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: easePro } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 60, y: 20, filter: "blur(12px)" },
    show:   { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: easePro } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(12px)" },
    show:   { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: easePro } },
  };

  if (loading || items.length === 0) return null;

  const featured  = items[0];
  const gridCards = items.slice(1, 5);

  return (
    <motion.section
      id="latest-news"
      className="newsx"
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="newsx-container">
        {/* HEAD */}
        <motion.div className="newsx-head" variants={fadeDown}>
          <h2 className="newsx-title">
            University <span>News</span>
          </h2>
          <Link to="/latest-news" className="newsx-more">
            See more <IoChevronForwardOutline />
          </Link>
        </motion.div>

        <div className="newsx-grid newsx-grid--noSide">
          {/* FEATURED */}
          <motion.article className="newsx-feature" variants={fadeLeft}>
            <Link className="newsx-media" to={`/news/${featured.id}`} aria-label={featured.title}>
              <img
                src={featured.img || PLACEHOLDER}
                alt={featured.title}
                onError={(e) => { e.target.src = PLACEHOLDER; }}
              />
              <div className="newsx-metaBar">
                <span className="newsx-chip">
                  <IoCalendarOutline /> {featured.date}
                </span>
                <span className="newsx-chip">
                  <IoEyeOutline /> {featured.views}
                </span>
              </div>
            </Link>
            <Link className="newsx-h3" to={`/news/${featured.id}`}>
              {featured.title}
            </Link>
          </motion.article>

          {/* 4 CARDS */}
          <motion.div className="newsx-mid newsx-mid--wide" variants={wrap}>
            {gridCards.map((c, index) => (
              <motion.article
                className="newsx-card"
                key={c.id}
                variants={index % 2 === 0 ? fadeRight : fadeUp}
              >
                <Link className="newsx-media sm" to={`/news/${c.id}`} aria-label={c.title}>
                  <img
                    src={c.img || PLACEHOLDER}
                    alt={c.title}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                  />
                  <div className="newsx-metaBar sm">
                    <span className="newsx-chip">
                      <IoCalendarOutline /> {c.date}
                    </span>
                    <span className="newsx-chip">
                      <IoEyeOutline /> {c.views}
                    </span>
                  </div>
                </Link>
                <Link className="newsx-h4" to={`/news/${c.id}`} title={c.title}>
                  {c.title}
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
