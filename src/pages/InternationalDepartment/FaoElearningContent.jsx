import {
  IoArrowForwardOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import faoLogo from "../../images/fao-elearning-academy.png";
import "./InternationalDepartmentContent.css";

const THEMATIC_KEYS = [
  "theme1",
  "theme2",
  "theme3",
  "theme4",
  "theme5",
  "theme6",
  "theme7",
  "theme8",
  "theme9",
  "theme10",
  "theme11",
  "theme12",
];

const BENEFIT_KEYS = [
  "benefit1",
  "benefit2",
  "benefit3",
  "benefit4",
  "benefit5",
  "benefit6",
];

export default function FaoElearningContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`intlFao.${key}`);

  return (
    <div className="icd-content">
      <section className="icd-intro icd-fao-intro">
        <div className="icd-fao-intro-layout">
          <div className="icd-fao-intro-copy">
            <div className="icd-intro-badge">{copy("badge")}</div>
            <h2>{copy("introTitle")}</h2>
            <p>{copy("introP1")}</p>
            <p>{copy("introP2")}</p>
            <p>{copy("introP3")}</p>
          </div>
          <div className="icd-fao-logo-card" aria-hidden="true">
            <img src={faoLogo} alt="FAO eLearning Academy" className="icd-fao-logo" />
          </div>
        </div>
      </section>

      <section className="icd-fao-topics" aria-labelledby="fao-topics-title">
        <div className="icd-services-head">
          <h3 id="fao-topics-title">{copy("topicsTitle")}</h3>
          <p>{copy("topicsSubtitle")}</p>
        </div>
        <div className="icd-fao-topic-grid">
          {THEMATIC_KEYS.map((key) => (
            <article key={key} className="icd-fao-topic-card">
              <IoCheckmarkCircleOutline />
              <span>{copy(key)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="icd-fao-why" aria-labelledby="fao-why-title">
        <h3 id="fao-why-title">{copy("whyTitle")}</h3>
        <ul>
          {BENEFIT_KEYS.map((key) => (
            <li key={key}>
              <IoCheckmarkCircleOutline />
              <span>{copy(key)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="icd-reference icd-fao-cta">
        <div>
          <h3>{copy("ctaTitle")}</h3>
          <p>{copy("ctaText")}</p>
        </div>
        <a
          href="https://elearning.fao.org/"
          target="_blank"
          rel="noreferrer"
          className="icd-reference-btn"
        >
          {copy("ctaAction")}
          <IoArrowForwardOutline />
        </a>
      </section>
    </div>
  );
}
