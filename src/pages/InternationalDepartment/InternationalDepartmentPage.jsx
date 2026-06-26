import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import CooperationDepartmentContent from "./CooperationDepartmentContent";
import InternationalFaqContent from "./InternationalFaqContent";
import CareerServicesContent from "./CareerServicesContent";
import InternationalDeptBreadcrumbs from "./InternationalDeptBreadcrumbs";
import { getIntlDeptPage, INTL_DEPT_PAGES } from "./internationalDeptPages";
import "../Admissions/AdmissionsShared.css";
import "../Admissions/ModernAdmissionsHero.css";
import "./InternationalDepartmentPage.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const PAGE_CONTENT = {
  cooperation: CooperationDepartmentContent,
  "career-services": CareerServicesContent,
  faq: InternationalFaqContent,
};

export default function InternationalDepartmentPage({ pageId }) {
  const { t } = useLanguage();
  const page = getIntlDeptPage(pageId);
  const Content = page ? PAGE_CONTENT[page.id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  if (!page || !Content) {
    return <Navigate to="/international-department/cooperation" replace />;
  }

  const pageTitle = t(`nav.${page.titleKey}`);

  return (
    <div className="admissions-page intl-dept-page hta-page">
      <div className="admissions-hero intl-dept-hero hta-hero">
        <video className="admissions-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="admissions-hero-content">
          <InternationalDeptBreadcrumbs
            items={[{ label: pageTitle, current: true }]}
          />
          <h1>{pageTitle}</h1>
        </div>
      </div>

      <div className="admissions-container">
        <div className="admissions-main">
          <Content />
        </div>

        <aside className="admissions-sidebar">
          <div className="sidebar-box">
            <h3>{t("intlCoop.sidebarTitle")}</h3>
            <ul className="sidebar-links">
              {INTL_DEPT_PAGES.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={item.id === page.id ? "active-link" : ""}
                  >
                    {t(`nav.${item.titleKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
