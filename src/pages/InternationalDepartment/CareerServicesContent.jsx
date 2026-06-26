import { Link } from "react-router-dom";
import {
  IoAirplaneOutline,
  IoBriefcaseOutline,
  IoCalendarOutline,
  IoChatbubblesOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoMicOutline,
  IoPeopleOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./InternationalDepartmentContent.css";

const SERVICE_ICONS = [
  IoChatbubblesOutline,
  IoBriefcaseOutline,
  IoSearchOutline,
  IoDocumentTextOutline,
  IoMicOutline,
  IoRibbonOutline,
  IoAirplaneOutline,
  IoSchoolOutline,
  IoPeopleOutline,
  IoCalendarOutline,
];

export default function CareerServicesContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`intlCareer.${key}`);
  const services = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="icd-content">
      <section className="icd-intro icd-career-intro">
        <div className="icd-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introP1")}</p>
        <p>{copy("introP2")}</p>
        <p>{copy("introP3")}</p>
      </section>

      <section className="icd-services" aria-labelledby="icd-services-title">
        <div className="icd-services-head">
          <h3 id="icd-services-title">{copy("servicesTitle")}</h3>
          <p>{copy("servicesSubtitle")}</p>
        </div>
        <div className="icd-services-grid">
          {services.map((num, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <article key={num} className="icd-service-card">
                <div className="icd-service-icon"><Icon /></div>
                <h4>{copy(`service${num}Title`)}</h4>
                <p>{copy(`service${num}Text`)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="icd-reference icd-career-cta">
        <div>
          <h3>{copy("ctaTitle")}</h3>
          <p>{copy("ctaText")}</p>
        </div>
        <div className="icd-career-cta-actions">
          <a href="mailto:info@iau.uz" className="icd-reference-btn">
            <IoMailOutline />
            {copy("ctaAction")}
          </a>
          <Link to="/admissions/how-to-apply" className="icd-career-cta-secondary">
            {copy("ctaSecondary")}
          </Link>
        </div>
      </section>
    </div>
  );
}
