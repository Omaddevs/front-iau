import { Link } from "react-router-dom";
import {
  IoArrowForwardOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoCardOutline,
  IoCheckmarkCircleOutline,
  IoDocumentAttachOutline,
  IoHomeOutline,
  IoMailOutline,
  IoMailOpenOutline,
  IoRibbonOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./OfferHolderGuideRoadmap.css";

const STEP_ICONS = [
  IoMailOpenOutline,
  IoCheckmarkCircleOutline,
  IoDocumentAttachOutline,
  IoCardOutline,
  IoHomeOutline,
  IoSchoolOutline,
];

const STEP_LINKS = [
  null,
  "https://iau-admission.tilda.ws",
  null,
  "/admissions/tuition-fees",
  "/student-life/international-students",
  "/student-life/academic-calendar",
];

export default function OfferHolderGuideRoadmap() {
  const { t } = useLanguage();
  const copy = (key) => t(`offerHolderRoadmap.${key}`);
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <div className="ohg-roadmap">
      <section className="ohg-congrats">
        <IoRibbonOutline className="ohg-congrats-icon" aria-hidden="true" />
        <div>
          <h2>{copy("congratsTitle")}</h2>
          <p>{copy("congratsText")}</p>
        </div>
      </section>

      <section className="ohg-intro">
        <div className="ohg-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="ohg-stats">
          <article>
            <strong>6</strong>
            <span>{copy("statSteps")}</span>
          </article>
          <article>
            <strong>{copy("statDeadlineValue")}</strong>
            <span>{copy("statDeadline")}</span>
          </article>
          <article>
            <strong>{copy("statSupportValue")}</strong>
            <span>{copy("statSupport")}</span>
          </article>
        </div>
      </section>

      <section className="ohg-conditions">
        <h3>{copy("conditionsTitle")}</h3>
        <div className="ohg-conditions-grid">
          {[1, 2, 3].map((item) => (
            <article key={item}>
              <IoCheckmarkCircleOutline />
              <span>{copy(`condition${item}`)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ohg-timeline" aria-label={copy("timelineLabel")}>
        <div className="ohg-timeline-track" aria-hidden="true" />
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const link = STEP_LINKS[index];
          const isExternal = link?.startsWith("http");
          const isCta = step === 2;

          return (
            <article
              key={step}
              className={`ohg-step ${isCta ? "ohg-step--cta" : ""}`}
              style={{ "--ohg-delay": `${index * 0.08}s` }}
            >
              <div className="ohg-step-marker">
                <span className="ohg-step-num">{String(step).padStart(2, "0")}</span>
                <span className="ohg-step-icon"><Icon /></span>
              </div>

              <div className="ohg-step-card">
                <div className="ohg-step-head">
                  <h3>{copy(`step${step}Title`)}</h3>
                  {step <= 2 && (
                    <span className="ohg-step-phase">{copy(`step${step}Phase`)}</span>
                  )}
                </div>
                <p>{copy(`step${step}Text`)}</p>

                {step === 3 && (
                  <ul className="ohg-doc-list">
                    {[1, 2, 3, 4, 5].map((doc) => (
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
                      className={`ohg-step-link ${isCta ? "ohg-step-link--primary" : ""}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy(`step${step}Action`)}
                      <IoArrowForwardOutline />
                    </a>
                  ) : (
                    <Link
                      to={link}
                      className={`ohg-step-link ${isCta ? "ohg-step-link--primary" : ""}`}
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

      <section className="ohg-help">
        <div className="ohg-help-card">
          <h3>{copy("helpTitle")}</h3>
          <p>{copy("helpText")}</p>
          <div className="ohg-help-contacts">
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

        <div className="ohg-cta-card">
          <h3>{copy("ctaTitle")}</h3>
          <p>{copy("ctaText")}</p>
          <Link to="/student-life/academic-calendar" className="ohg-cta-btn">
            <IoCalendarOutline />
            {copy("ctaAction")}
            <IoArrowForwardOutline />
          </Link>
        </div>
      </section>
    </div>
  );
}
