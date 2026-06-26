import { Link } from "react-router-dom";
import {
  IoAnalyticsOutline,
  IoArrowForwardOutline,
  IoBusOutline,
  IoCheckmarkCircleOutline,
  IoGlobeOutline,
  IoLeafOutline,
  IoShieldCheckmarkOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { useLanguage } from "../../../i18n/LanguageContext";
import agriImg from "../../../iau-images/3.png";
import businessImg from "../../../iau-images/4.png";
import image5 from "../../../iau-images/5.png";
import image6 from "../../../iau-images/6.png";
import { UNDERGRADUATE_PROGRAMS, withTrackQuery } from "../undergraduateTracks";

const TRACK_ID = "english";

const PROGRAM_IMAGES = {
  agri: agriImg,
  business: businessImg,
  image5,
  image6,
};

const CARD_ICONS = {
  economics: IoStatsChartOutline,
  logistics: IoBusOutline,
  safety: IoShieldCheckmarkOutline,
  smart: IoLeafOutline,
};

function EnglishProgramCard({ program, t, copy, index, trackId }) {
  const { englishCard } = program;
  const theme = englishCard.theme;
  const Icon = CARD_ICONS[theme];
  const title = t(`admissions.pages.${program.titleKey}`);
  const teaser = copy(englishCard.teaserKey);
  const badge = copy(englishCard.badgeKey);

  const programPath = withTrackQuery(program.link, trackId);

  if (theme === "economics") {
    return (
      <Link to={programPath} className={`ug-en-card ug-en-card--${theme}`}>
        <div className="ug-en-card-visual">
          <img src={PROGRAM_IMAGES[program.imgKey]} alt={title} />
          <div className="ug-en-card-glass">
            <span className="ug-en-card-badge">{badge}</span>
            <span className="ug-en-card-degree">{englishCard.degree}</span>
          </div>
        </div>
        <div className="ug-en-card-content">
          <div className="ug-en-card-icon-wrap">
            <Icon />
          </div>
          <h3>{title}</h3>
          <p>{teaser}</p>
          <span className="ug-en-card-cta">
            {copy("exploreProgram")} <IoArrowForwardOutline />
          </span>
        </div>
      </Link>
    );
  }

  if (theme === "logistics") {
    return (
      <Link to={programPath} className={`ug-en-card ug-en-card--${theme}`}>
        <div className="ug-en-card-route">
          <span /><span /><span /><span />
        </div>
        <div className="ug-en-card-split">
          <div className="ug-en-card-thumb">
            <img src={PROGRAM_IMAGES[program.imgKey]} alt={title} />
          </div>
          <div className="ug-en-card-body">
            <span className="ug-en-card-badge ug-en-card-badge--blue">{badge}</span>
            <div className="ug-en-card-title-row">
              <Icon />
              <h3>{title}</h3>
            </div>
            <p>{teaser}</p>
            <span className="ug-en-card-cta">
              {copy("exploreProgram")} <IoArrowForwardOutline />
            </span>
          </div>
        </div>
        <span className="ug-en-card-num">{String(index + 1).padStart(2, "0")}</span>
      </Link>
    );
  }

  if (theme === "safety") {
    return (
      <Link to={programPath} className={`ug-en-card ug-en-card--${theme}`}>
        <div className="ug-en-card-shield">
          <IoShieldCheckmarkOutline />
        </div>
        <div className="ug-en-card-thumb ug-en-card-thumb--round">
          <img src={PROGRAM_IMAGES[program.imgKey]} alt={title} />
        </div>
        <div className="ug-en-card-body">
          <span className="ug-en-card-badge ug-en-card-badge--amber">{badge}</span>
          <h3>{title}</h3>
          <p>{teaser}</p>
          <span className="ug-en-card-cta">
            {copy("exploreProgram")} <IoArrowForwardOutline />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={programPath} className={`ug-en-card ug-en-card--${theme}`}>
      <div className="ug-en-card-tech-grid" aria-hidden="true" />
      <div className="ug-en-card-banner">
        <img src={PROGRAM_IMAGES[program.imgKey]} alt={title} />
        <div className="ug-en-card-banner-overlay">
          <Icon />
          <span className="ug-en-card-badge ug-en-card-badge--green">{badge}</span>
        </div>
      </div>
      <div className="ug-en-card-body ug-en-card-body--smart">
        <h3>{title}</h3>
        <p>{teaser}</p>
        <div className="ug-en-card-metrics">
          <span><IoLeafOutline /> SDG</span>
          <span><IoAnalyticsOutline /> Data</span>
          <span><IoGlobeOutline /> Global</span>
        </div>
        <span className="ug-en-card-cta">
          {copy("exploreProgram")} <IoArrowForwardOutline />
        </span>
      </div>
    </Link>
  );
}

export default function EnglishTrackContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`undergradTrack.english.${key}`);
  const requirements = [copy("req1"), copy("req2"), copy("req3")];

  return (
    <>
      <div className="ug-intro ug-intro--english">
        <span className="ug-badge ug-badge--english">{copy("badge")}</span>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="ug-req-chips">
          {requirements.map((req) => (
            <span key={req} className="ug-req-chip">
              <IoCheckmarkCircleOutline />
              {req}
            </span>
          ))}
        </div>
      </div>

      <div className="ug-partnership ug-partnership--english">
        <IoGlobeOutline />
        <span>{copy("partnership")}</span>
      </div>

      <div className="ug-stats ug-stats--english">
        <div className="ug-stat">
          <strong>{copy("stat1Value")}</strong>
          <span>{copy("stat1Label")}</span>
        </div>
        <div className="ug-stat">
          <strong>{copy("stat2Value")}</strong>
          <span>{copy("stat2Label")}</span>
        </div>
        <div className="ug-stat">
          <strong>{copy("stat3Value")}</strong>
          <span>{copy("stat3Label")}</span>
        </div>
      </div>

      <div className="ug-programs ug-programs--english">
        <h2>{copy("programsTitle")}</h2>
        <div className="ug-en-showcase">
          {UNDERGRADUATE_PROGRAMS.map((program, index) => (
            <EnglishProgramCard
              key={program.titleKey}
              program={program}
              t={t}
              copy={copy}
              index={index}
              trackId={TRACK_ID}
            />
          ))}
        </div>
      </div>

      <div className="applications-box ug-cta ug-cta--english">
        <h3>{copy("ctaTitle")}</h3>
        <p>{t("undergradTrack.applyHint")}</p>
        <button
          className="apply-btn"
          type="button"
          onClick={() => window.open("https://iau-admission.tilda.ws", "_blank")}
        >
          {t("common.startApplication")}
        </button>
      </div>
    </>
  );
}
