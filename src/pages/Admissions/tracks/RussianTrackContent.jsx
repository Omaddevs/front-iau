import { Link } from "react-router-dom";
import { IoBookOutline, IoInformationCircleOutline } from "react-icons/io5";
import { useLanguage } from "../../../i18n/LanguageContext";
import agriImg from "../../../iau-images/3.png";
import businessImg from "../../../iau-images/4.png";
import image5 from "../../../iau-images/5.png";
import image6 from "../../../iau-images/6.png";
import { UNDERGRADUATE_PROGRAMS, withTrackQuery } from "../undergraduateTracks";

const TRACK_ID = "russian";

const PROGRAM_IMAGES = {
  agri: agriImg,
  business: businessImg,
  image5,
  image6,
};

export default function RussianTrackContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`undergradTrack.russian.${key}`);

  return (
    <>
      <div className="ug-russian-layout">
        <div className="ug-russian-main">
          <div className="ug-intro ug-intro--russian">
            <span className="ug-badge ug-badge--russian">{copy("badge")}</span>
            <h2>{copy("introTitle")}</h2>
            <p>{copy("introText")}</p>
          </div>

          <div className="ug-programs ug-programs--russian">
            <h2>{copy("programsTitle")}</h2>
            <div className="ug-table-head">
              <span>{copy("colProgram")}</span>
              <span>{copy("colDuration")}</span>
              <span>{copy("colDegree")}</span>
              <span>{copy("colAction")}</span>
            </div>
            <div className="ug-table-rows">
              {UNDERGRADUATE_PROGRAMS.map((program) => (
                <article key={program.titleKey} className="ug-table-row">
                  <div className="ug-table-program">
                    <div className="ug-table-thumb">
                      <img
                        src={PROGRAM_IMAGES[program.imgKey]}
                        alt={t(`admissions.pages.${program.titleKey}`)}
                      />
                    </div>
                    <h3>{t(`admissions.pages.${program.titleKey}`)}</h3>
                  </div>
                  <div className="ug-table-cell">{copy("durationValue")}</div>
                  <div className="ug-table-cell">{copy("degreeValue")}</div>
                  <Link to={withTrackQuery(program.link, TRACK_ID)} className="ug-table-link">
                    {copy("colAction")} →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="ug-note ug-note--russian">
            <IoInformationCircleOutline />
            <div>
              <h3>{copy("noteTitle")}</h3>
              <p>{copy("noteText")}</p>
            </div>
          </div>
        </div>

        <aside className="ug-russian-aside">
          <div className="ug-aside-card">
            <IoBookOutline className="ug-aside-icon" />
            <div className="ug-stats ug-stats--russian-vertical">
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
        </aside>
      </div>

      <div className="applications-box ug-cta ug-cta--russian">
        <h3>{copy("ctaTitle")}</h3>
        <p>{t("undergradTrack.applyHint")}</p>
        <button
          className="apply-btn ug-apply-btn--russian"
          type="button"
          onClick={() => window.open("https://iau-admission.tilda.ws", "_blank")}
        >
          {t("common.startApplication")}
        </button>
      </div>
    </>
  );
}
