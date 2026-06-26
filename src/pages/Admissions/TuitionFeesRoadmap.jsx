import { Link } from "react-router-dom";
import {
  IoArrowForwardOutline,
  IoCallOutline,
  IoCardOutline,
  IoCashOutline,
  IoCheckmarkCircleOutline,
  IoGlobeOutline,
  IoMailOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./TuitionFeesRoadmap.css";

const STEP_ICONS = [
  IoSchoolOutline,
  IoCashOutline,
  IoCheckmarkCircleOutline,
  IoRibbonOutline,
  IoCardOutline,
  IoWalletOutline,
];

const STEP_LINKS = [
  "/admissions/undergraduate",
  null,
  null,
  "/admissions/how-to-apply",
  null,
  "/admissions/offer-holder-guide",
];

const FEE_TIERS = [
  { key: "undergrad", icon: IoSchoolOutline, accent: "green" },
  { key: "intl", icon: IoGlobeOutline, accent: "blue" },
  { key: "postgrad", icon: IoRibbonOutline, accent: "purple" },
];

export default function TuitionFeesRoadmap() {
  const { t } = useLanguage();
  const copy = (key) => t(`tuitionFeesRoadmap.${key}`);
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <div className="tfr-roadmap">
      <section className="tfr-intro">
        <div className="tfr-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="tfr-stats">
          <article>
            <strong>{copy("statLocalValue")}</strong>
            <span>{copy("statLocal")}</span>
          </article>
          <article>
            <strong>{copy("statIntlValue")}</strong>
            <span>{copy("statIntl")}</span>
          </article>
          <article>
            <strong>{copy("statScholarValue")}</strong>
            <span>{copy("statScholar")}</span>
          </article>
        </div>
      </section>

      <section className="tfr-tiers" aria-label={copy("tiersLabel")}>
        <h3>{copy("tiersTitle")}</h3>
        <div className="tfr-tiers-grid">
          {FEE_TIERS.map(({ key, icon: Icon, accent }) => (
            <article key={key} className={`tfr-tier tfr-tier--${accent}`}>
              <div className="tfr-tier-icon"><Icon /></div>
              <h4>{copy(`${key}Title`)}</h4>
              <p className="tfr-tier-price">{copy(`${key}Price`)}</p>
              <p className="tfr-tier-note">{copy(`${key}Note`)}</p>
              <Link to={copy(`${key}Link`)} className="tfr-tier-link">
                {copy(`${key}Action`)}
                <IoArrowForwardOutline />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="tfr-includes">
        <h3>{copy("includesTitle")}</h3>
        <div className="tfr-includes-grid">
          {[1, 2, 3, 4, 5].map((item) => (
            <article key={item}>
              <IoCheckmarkCircleOutline />
              <span>{copy(`include${item}`)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="tfr-timeline" aria-label={copy("timelineLabel")}>
        <h3 className="tfr-timeline-heading">{copy("timelineTitle")}</h3>
        <div className="tfr-timeline-track" aria-hidden="true" />
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const link = STEP_LINKS[index];
          const isCta = step === 4;

          return (
            <article
              key={step}
              className={`tfr-step ${isCta ? "tfr-step--cta" : ""}`}
              style={{ "--tfr-delay": `${index * 0.08}s` }}
            >
              <div className="tfr-step-marker">
                <span className="tfr-step-num">{String(step).padStart(2, "0")}</span>
                <span className="tfr-step-icon"><Icon /></span>
              </div>

              <div className="tfr-step-card">
                <div className="tfr-step-head">
                  <h4>{copy(`step${step}Title`)}</h4>
                  {step <= 2 && (
                    <span className="tfr-step-phase">{copy(`step${step}Phase`)}</span>
                  )}
                </div>
                <p>{copy(`step${step}Text`)}</p>
                {link && (
                  <Link
                    to={link}
                    className={`tfr-step-link ${isCta ? "tfr-step-link--primary" : ""}`}
                  >
                    {copy(`step${step}Action`)}
                    <IoArrowForwardOutline />
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="tfr-help">
        <div className="tfr-help-card">
          <h3>{copy("helpTitle")}</h3>
          <p>{copy("helpText")}</p>
          <div className="tfr-help-contacts">
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

        <div className="tfr-cta-card">
          <h3>{copy("ctaTitle")}</h3>
          <p>{copy("ctaText")}</p>
          <Link to="/admissions/how-to-apply" className="tfr-cta-btn">
            {copy("ctaAction")}
            <IoArrowForwardOutline />
          </Link>
        </div>
      </section>
    </div>
  );
}
