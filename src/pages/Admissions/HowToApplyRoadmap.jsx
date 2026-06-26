import { Link } from "react-router-dom";
import {
  IoArrowForwardOutline,
  IoCallOutline,
  IoCheckmarkCircleOutline,
  IoClipboardOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoRocketOutline,
  IoSchoolOutline,
  IoSendOutline,
  IoSparklesOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./HowToApplyRoadmap.css";

const STEP_ICONS = [
  IoSchoolOutline,
  IoClipboardOutline,
  IoDocumentTextOutline,
  IoSendOutline,
  IoTimeOutline,
  IoSparklesOutline,
  IoRocketOutline,
];

const STEP_LINKS = [
  "/admissions/undergraduate",
  "/admissions/tuition-fees",
  null,
  "https://iau-admission.tilda.ws",
  null,
  "/admissions/offer-holder-guide",
  "/admissions/open-days",
];

export default function HowToApplyRoadmap() {
  const { t } = useLanguage();
  const copy = (key) => t(`howToApplyRoadmap.${key}`);
  const steps = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="hta-roadmap">
      <section className="hta-intro">
        <div className="hta-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="hta-stats">
          <article>
            <strong>7</strong>
            <span>{copy("statSteps")}</span>
          </article>
          <article>
            <strong>{copy("statTimeValue")}</strong>
            <span>{copy("statTime")}</span>
          </article>
          <article>
            <strong>100%</strong>
            <span>{copy("statOnline")}</span>
          </article>
        </div>
      </section>

      <section className="hta-timeline" aria-label={copy("timelineLabel")}>
        <div className="hta-timeline-track" aria-hidden="true" />
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const link = STEP_LINKS[index];
          const isExternal = link?.startsWith("http");
          const isCta = step === 4;

          return (
            <article
              key={step}
              className={`hta-step ${isCta ? "hta-step--cta" : ""}`}
              style={{ "--hta-delay": `${index * 0.08}s` }}
            >
              <div className="hta-step-marker">
                <span className="hta-step-num">{String(step).padStart(2, "0")}</span>
                <span className="hta-step-icon"><Icon /></span>
              </div>

              <div className="hta-step-card">
                <div className="hta-step-head">
                  <h3>{copy(`step${step}Title`)}</h3>
                  {step <= 3 && (
                    <span className="hta-step-phase">{copy(`step${step}Phase`)}</span>
                  )}
                </div>
                <p>{copy(`step${step}Text`)}</p>

                {step === 3 && (
                  <ul className="hta-doc-list">
                    {[1, 2, 3, 4].map((doc) => (
                      <li key={doc}>
                        <IoCheckmarkCircleOutline />
                        {copy(`doc${doc}`)}
                      </li>
                    ))}
                  </ul>
                )}

                {link && (
                  isExternal ? (
                    <a
                      href={link}
                      className={`hta-step-link ${isCta ? "hta-step-link--primary" : ""}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy(`step${step}Action`)}
                      <IoArrowForwardOutline />
                    </a>
                  ) : (
                    <Link
                      to={link}
                      className={`hta-step-link ${isCta ? "hta-step-link--primary" : ""}`}
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

      <section className="hta-help">
        <div className="hta-help-card">
          <h3>{copy("helpTitle")}</h3>
          <p>{copy("helpText")}</p>
          <div className="hta-help-contacts">
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

        <div className="hta-cta-card">
          <h3>{copy("ctaTitle")}</h3>
          <p>{copy("ctaText")}</p>
          <a
            className="hta-cta-btn"
            href="https://iau-admission.tilda.ws"
            target="_blank"
            rel="noreferrer"
          >
            {t("common.startApplication")}
            <IoArrowForwardOutline />
          </a>
        </div>
      </section>
    </div>
  );
}
