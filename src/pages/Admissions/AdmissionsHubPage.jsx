import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import AdmissionsBreadcrumbs from "./AdmissionsBreadcrumbs";
import HowToApplyRoadmap from "./HowToApplyRoadmap";
import OfferHolderGuideRoadmap from "./OfferHolderGuideRoadmap";
import TuitionFeesRoadmap from "./TuitionFeesRoadmap";
import OpenDaysRoadmap from "./OpenDaysRoadmap";
import { useLanguage } from "../../i18n/LanguageContext";
import { ADMISSIONS_HUB_PAGES, getAdmissionsHubPage } from "./admissionsHubPages";
import "./AdmissionsShared.css";
import "./ModernAdmissionsHero.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const ROADMAP_PAGES = {
  "how-to-apply": HowToApplyRoadmap,
  "offer-holder-guide": OfferHolderGuideRoadmap,
  "tuition-fees": TuitionFeesRoadmap,
  "open-days": OpenDaysRoadmap,
};

export default function AdmissionsHubPage({ pageId }) {
  const { t } = useLanguage();
  const page = getAdmissionsHubPage(pageId);
  const RoadmapContent = page ? ROADMAP_PAGES[page.id] : null;
  const hasRoadmap = Boolean(RoadmapContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  if (!page) {
    return <Navigate to="/admissions/how-to-apply" replace />;
  }

  return (
    <div className={`admissions-page ${hasRoadmap ? "hta-page" : ""}`}>
      <div className={`admissions-hero ${hasRoadmap ? "hta-hero" : ""}`}>
        <video className="admissions-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        {!hasRoadmap && <div className="hero-overlay" />}
        <div className="admissions-hero-content">
          <AdmissionsBreadcrumbs
            items={[{ label: t(`admissionsHub.${page.titleKey}`), current: true }]}
          />
          <h1>{t(`admissionsHub.${page.titleKey}`)}</h1>
        </div>
      </div>

      <div className="admissions-container">
        <div className="admissions-main">
          {RoadmapContent ? (
            <RoadmapContent />
          ) : (
            <div className="tab-content-box content-pane">
              {t(`admissionsHub.${page.bodyKey}`)
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
            </div>
          )}
        </div>

        <aside className="admissions-sidebar">
          <div className="sidebar-box">
            <h3>{t("admissionsHub.sidebarTitle")}</h3>
            <ul className="sidebar-links">
              {ADMISSIONS_HUB_PAGES.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={item.id === page.id ? "active-link" : ""}
                  >
                    {t(`admissionsHub.${item.titleKey}`)}
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
