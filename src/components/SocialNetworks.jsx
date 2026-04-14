import { useRef, useState, useEffect, useCallback } from "react";
import "./SocialNetworks.css";
import {
  FaInstagram, FaTelegramPlane, FaFacebookF,
  FaYoutube, FaLinkedinIn,
} from "react-icons/fa";

import instagramImg from "../social-media-images/instagram.jpg";
import telegramImg  from "../social-media-images/telegram.jpg";
import facebookImg  from "../social-media-images/facebook.jpg";
import youtubeImg   from "../social-media-images/youtube.jpg";
import linkedinImg  from "../social-media-images/facebook.jpg";

const NETWORKS = [
  { name: "Instagram", icon: <FaInstagram />,     img: instagramImg, url: "https://www.instagram.com/iau_uz?igsh=MW1qeTZ5N3YyazhneA==" },
  { name: "Telegram",  icon: <FaTelegramPlane />, img: telegramImg,  url: "https://t.me/iau_uz" },
  { name: "Facebook",  icon: <FaFacebookF />,     img: facebookImg,  url: "https://www.facebook.com/share/WND1PuA6C6xFT8mU/?mibextid=qi2Omg" },
  { name: "YouTube",   icon: <FaYoutube />,       img: youtubeImg,   url: "https://youtube.com/@iau_2022?si=wpViWkIgyDb5xzc-" },
  { name: "LinkedIn",  icon: <FaLinkedinIn />,    img: linkedinImg,  url: "https://www.linkedin.com/school/international-agriculture-university/" },
];

export default function SocialNetworks() {
  const trackRef   = useRef(null);
  const [active, setActive]     = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* detect mobile/tablet */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1100);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* update active dot on scroll */
  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cardW = el.firstElementChild?.offsetWidth || 160;
    const gap   = 14;
    const idx   = Math.round(el.scrollLeft / (cardW + gap));
    setActive(Math.min(idx, NETWORKS.length - 1));
  }, []);

  /* scroll to card when dot clicked */
  const scrollTo = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const cardW = el.firstElementChild?.offsetWidth || 160;
    const gap   = 14;
    el.scrollTo({ left: idx * (cardW + gap), behavior: "smooth" });
    setActive(idx);
  };

  return (
    <section className="social-networks-section">
      <div className="sn-bg-icons" />

      <div className="sn-container">
        {/* ── Text ── */}
        <div className="sn-text-content">
          <h2 className="sn-title">
            Subscribe to our pages<br />
            on <span className="sn-highlight">social networks</span>
          </h2>
          <p className="sn-subtitle">Follow the latest news about us</p>
        </div>

        {/* ── Phones + scroll indicator ── */}
        <div className="sn-scroll-area">
          {/* right fade "more" shadow — only on mobile/tablet */}
          {isMobile && <div className="sn-fade-right" />}

          <div
            className="sn-phones-wrapper"
            ref={trackRef}
            onScroll={onScroll}
          >
            {NETWORKS.map((net, idx) => (
              <div key={idx} className="sn-phone-card">
                <div className="sn-phone-screen">
                  <div className="sn-notch" />
                  <img
                    src={net.img}
                    alt={`${net.name} page`}
                    className="sn-screen-img"
                  />
                </div>
                <div className="sn-button-overlay">
                  <a
                    href={net.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sn-action-btn"
                  >
                    {net.icon} {net.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* dots indicator — only on mobile/tablet */}
          {isMobile && (
            <div className="sn-dots" role="tablist" aria-label="Scroll indicator">
              {NETWORKS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Go to ${NETWORKS[i].name}`}
                  className={`sn-dot${active === i ? " sn-dot--active" : ""}`}
                  onClick={() => scrollTo(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
