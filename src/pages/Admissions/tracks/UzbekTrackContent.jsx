import { Link } from "react-router-dom";
import {
  IoLeafOutline,
  IoRibbonOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import { useLanguage } from "../../../i18n/LanguageContext";
import agriImg from "../../../iau-images/3.png";
import businessImg from "../../../iau-images/4.png";
import image5 from "../../../iau-images/5.png";
import image6 from "../../../iau-images/6.png";
import { UNDERGRADUATE_PROGRAMS, withTrackQuery } from "../undergraduateTracks";

const TRACK_ID = "uzbek";

const PROGRAM_IMAGES = {
  agri: agriImg,
  business: businessImg,
  image5,
  image6,
};

export default function UzbekTrackContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`undergradTrack.uzbek.${key}`);

  const highlights = [
    { icon: <IoLeafOutline />, title: copy("h1Title"), text: copy("h1Text") },
    { icon: <IoRibbonOutline />, title: copy("h2Title"), text: copy("h2Text") },
    { icon: <IoTrendingUpOutline />, title: copy("h3Title"), text: copy("h3Text") },
  ];

  return (
    <>
      <div className="ug-intro ug-intro--uzbek">
        <span className="ug-badge ug-badge--uzbek">{copy("badge")}</span>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="ug-stats ug-stats--uzbek">
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
      </div>

      <div className="ug-highlights ug-highlights--uzbek">
        {highlights.map((item) => (
          <article key={item.title} className="ug-highlight-card">
            <div className="ug-highlight-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="ug-programs ug-programs--uzbek">
        <h2>{copy("programsTitle")}</h2>
        <div className="ug-timeline">
          {UNDERGRADUATE_PROGRAMS.map((program, index) => (
            <article key={program.titleKey} className="ug-timeline-item">
              <div className="ug-timeline-num">{String(index + 1).padStart(2, "0")}</div>
              <div className="ug-timeline-card">
                <div className="ug-timeline-img">
                  <img
                    src={PROGRAM_IMAGES[program.imgKey]}
                    alt={t(`admissions.pages.${program.titleKey}`)}
                  />
                </div>
                <div className="ug-timeline-body">
                  <span className="ug-timeline-tag">{copy("stat2Value")}</span>
                  <h3>{t(`admissions.pages.${program.titleKey}`)}</h3>
                  <Link to={withTrackQuery(program.link, TRACK_ID)} className="ug-timeline-link">
                    {t("common.seeMore")} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="applications-box ug-cta ug-cta--uzbek">
        <h3>{copy("ctaTitle")}</h3>
        <p>{t("undergradTrack.applyHint")}</p>
        <button
          className="apply-btn ug-apply-btn--uzbek"
          type="button"
          onClick={() => window.open("https://iau-admission.tilda.ws", "_blank")}
        >
          {t("common.startApplication")}
        </button>
      </div>
    </>
  );
}
