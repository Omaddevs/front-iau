import { useEffect } from "react";
import {
  IoCallOutline,
  IoDocumentTextOutline,
  IoDownloadOutline,
  IoGlobeOutline,
  IoOpenOutline,
  IoStarOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import InternationalDeptBreadcrumbs from "./InternationalDeptBreadcrumbs";
import "../StudentLife/AcademicCalendar.css";
import "./InternationalDepartmentContent.css";
import "./KelajakkaQadamProgram.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const PDF_URL = "/pdfs/tadbirkorlikka-ilk-qadam.pdf";

export default function KelajakkaQadamProgramPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kq = (key) => t(`kelajakkaQadam.${key}`);
  const title = t("nav.kqTadbirkorlikkaIlkQadam");

  return (
    <div className="academic-calendar-page kq-doc-page">
      <div className="ac-hero">
        <video className="ac-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="ac-hero-overlay" />
        <div className="ac-hero-content">
          <InternationalDeptBreadcrumbs
            items={[
              { label: t("nav.careerServicesCenter"), to: "/international-department/career-services" },
              { label: title, current: true },
            ]}
          />
          <h1>{title}</h1>
        </div>
      </div>

      <div className="ac-container kq-doc-container">
        <aside className="ac-sidebar kq-doc-sidebar">
          <div className="ac-sidebar-box">
            <h3 className="kq-doc-sidebar-title">
              <IoStarOutline />
              {kq("sidebarTitle")}
            </h3>
            <ul className="ac-sidebar-links kq-doc-links">
              <li>
                <a href="#" className="active kq-doc-link" onClick={(e) => e.preventDefault()}>
                  <IoDocumentTextOutline className="kq-doc-link-icon" />
                  <span>{title}</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="ac-main kq-doc-main">
          <div className="ac-calendar-card kq-doc-card">
            <div className="kq-doc-toolbar">
              <div className="kq-doc-toolbar-title">
                <span className="kq-doc-toolbar-heading">{title}</span>
                <span className="kq-doc-toolbar-sub">{kq("pdfLabel")}</span>
              </div>
              <div className="kq-doc-toolbar-actions">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kq-doc-btn kq-doc-btn--ghost"
                >
                  <IoOpenOutline />
                  {kq("openNewTab")}
                </a>
                <a href={PDF_URL} download className="kq-doc-btn kq-doc-btn--solid">
                  <IoDownloadOutline />
                  {kq("downloadPdf")}
                </a>
              </div>
            </div>
            <div className="ac-pdf-container kq-doc-pdf-container">
              <iframe
                src={PDF_URL}
                width="100%"
                height="800px"
                className="ac-pdf-iframe"
                title={title}
              />
            </div>
          </div>

          <div className="icd-reference kq-doc-cta">
            <div>
              <h3>{kq("ctaTitle")}</h3>
              <p>{kq("ctaText")}</p>
              <span className="kq-doc-cta-powered">{kq("poweredBy")}</span>
            </div>
            <div className="icd-career-cta-actions">
              <a
                href="https://nbu.uz/kichik-biznes/kreditlar/yangi-kelajakka-qadam-kreditlari"
                target="_blank"
                rel="noopener noreferrer"
                className="icd-reference-btn"
              >
                <IoGlobeOutline />
                {kq("ctaWebsite")}
              </a>
              <a href="tel:+78148 00 10" className="icd-career-cta-secondary">
                <IoCallOutline />
                {kq("ctaPhone")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
