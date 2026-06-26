import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import {
  IoArrowForwardOutline,
  IoBusinessOutline,
  IoCallOutline,
  IoChatbubblesOutline,
  IoLocationOutline,
  IoLogoYoutube,
  IoMailOutline,
  IoPeopleOutline,
  IoSchoolOutline,
  IoWalkOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./OpenDaysRoadmap.css";

const YOUTUBE_VIDEO_ID = "t9U1d2d6B5Q";
const YOUTUBE_VIDEO_URL = "https://youtu.be/t9U1d2d6B5Q?si=Rdp9UfT0YVxKLDJ3";
const YOUTUBE_THUMBS = [
  `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`,
  `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/sddefault.jpg`,
  `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
];
const YOUTUBE_CHANNEL = "https://www.youtube.com/@iau_2022";

const HIGHLIGHT_ICONS = [
  IoWalkOutline,
  IoSchoolOutline,
  IoPeopleOutline,
  IoChatbubblesOutline,
];

const STEP_ICONS = [
  IoMailOutline,
  IoLocationOutline,
  IoWalkOutline,
  IoSchoolOutline,
  IoChatbubblesOutline,
  IoBusinessOutline,
];

const STEP_LINKS = [
  "mailto:info@iau.uz",
  null,
  null,
  "/admissions/undergraduate",
  "/admissions/how-to-apply",
  "https://iau-admission.tilda.ws",
];

export default function OpenDaysRoadmap() {
  const { t } = useLanguage();
  const copy = (key) => t(`openDaysRoadmap.${key}`);
  const steps = [1, 2, 3, 4, 5, 6];
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(1);

  return (
    <div className="odr-roadmap">
      <section className="odr-intro">
        <div className="odr-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="odr-stats">
          <article>
            <strong>{copy("stat1Value")}</strong>
            <span>{copy("stat1Label")}</span>
          </article>
          <article>
            <strong>{copy("stat2Value")}</strong>
            <span>{copy("stat2Label")}</span>
          </article>
          <article>
            <strong>{copy("stat3Value")}</strong>
            <span>{copy("stat3Label")}</span>
          </article>
        </div>
      </section>

      <section className="odr-video" aria-label={copy("videoTitle")}>
        <div className="odr-video-head">
          <div>
            <h3>{copy("videoTitle")}</h3>
            <p>{copy("videoText")}</p>
          </div>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noreferrer"
            className="odr-youtube-link"
          >
            <IoLogoYoutube />
            {copy("youtubeChannel")}
          </a>
        </div>
        <div className="odr-video-frame">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title={copy("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="odr-video-poster"
              onClick={() => setIsPlaying(true)}
              aria-label={copy("playVideo")}
              style={{ backgroundImage: `url(${YOUTUBE_THUMBS[thumbIndex]})` }}
            >
              <img
                src={YOUTUBE_THUMBS[thumbIndex]}
                alt={copy("videoTitle")}
                className="odr-video-thumb"
                onError={() => {
                  setThumbIndex((prev) => (prev < YOUTUBE_THUMBS.length - 1 ? prev + 1 : prev));
                }}
              />
              <span className="odr-video-overlay" aria-hidden="true" />
              <span className="odr-play-wrap" aria-hidden="true">
                <span className="odr-play-ring odr-play-ring--1" />
                <span className="odr-play-ring odr-play-ring--2" />
                <span className="odr-play-ring odr-play-ring--3" />
                <span className="odr-play-btn">
                  <FaPlay />
                </span>
              </span>
              <span className="odr-play-label">{copy("playVideo")}</span>
            </button>
          )}
        </div>
        <a
          href={YOUTUBE_VIDEO_URL}
          target="_blank"
          rel="noreferrer"
          className="odr-video-direct-link"
        >
          {copy("watchOnYoutube")}
          <IoLogoYoutube />
        </a>
      </section>

      <section className="odr-highlights" aria-label={copy("highlightsTitle")}>
        <h3>{copy("highlightsTitle")}</h3>
        <div className="odr-highlights-grid">
          {[1, 2, 3, 4].map((item, index) => {
            const Icon = HIGHLIGHT_ICONS[index];
            return (
              <article key={item} className="odr-highlight-card">
                <div className="odr-highlight-icon"><Icon /></div>
                <h4>{copy(`highlight${item}Title`)}</h4>
                <p>{copy(`highlight${item}Text`)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="odr-timeline" aria-label={copy("timelineLabel")}>
        <h3 className="odr-timeline-heading">{copy("timelineTitle")}</h3>
        <div className="odr-timeline-track" aria-hidden="true" />
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const link = STEP_LINKS[index];
          const isExternal = link?.startsWith("http") || link?.startsWith("mailto");
          const isCta = step === 1;

          return (
            <article
              key={step}
              className={`odr-step ${isCta ? "odr-step--cta" : ""}`}
              style={{ "--odr-delay": `${index * 0.08}s` }}
            >
              <div className="odr-step-marker">
                <span className="odr-step-num">{String(step).padStart(2, "0")}</span>
                <span className="odr-step-icon"><Icon /></span>
              </div>

              <div className="odr-step-card">
                <div className="odr-step-head">
                  <h4>{copy(`step${step}Title`)}</h4>
                  {step <= 2 && (
                    <span className="odr-step-phase">{copy(`step${step}Phase`)}</span>
                  )}
                </div>
                <p>{copy(`step${step}Text`)}</p>
                {link && (
                  isExternal ? (
                    <a
                      href={link}
                      className={`odr-step-link ${isCta ? "odr-step-link--primary" : ""}`}
                      target={link.startsWith("http") ? "_blank" : undefined}
                      rel={link.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {copy(`step${step}Action`)}
                      <IoArrowForwardOutline />
                    </a>
                  ) : (
                    <Link
                      to={link}
                      className={`odr-step-link ${isCta ? "odr-step-link--primary" : ""}`}
                    >
                      {copy(`step${step}Action`)}
                      <IoArrowForwardOutline />
                    </Link>
                  )
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="odr-help">
        <div className="odr-help-card">
          <h3>{copy("helpTitle")}</h3>
          <p>{copy("helpText")}</p>
          <div className="odr-help-contacts">
            <a href="mailto:info@iau.uz">
              <IoMailOutline />
              info@iau.uz
            </a>
            <a href="tel:+998555170071">
              <IoCallOutline />
              +998 (55) 517 00 71
            </a>
          </div>
        </div>

        <div className="odr-cta-card">
          <h3>{copy("ctaTitle")}</h3>
          <p>{copy("ctaText")}</p>
          <a href="mailto:info@iau.uz?subject=Open%20Day%20Registration" className="odr-cta-btn">
            {copy("ctaAction")}
            <IoArrowForwardOutline />
          </a>
        </div>
      </section>
    </div>
  );
}
