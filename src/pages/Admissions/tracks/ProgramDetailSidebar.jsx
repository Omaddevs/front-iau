import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";
import {
  getUndergraduateTrackPath,
  getTrackFromSearch,
  UNDERGRADUATE_PROGRAMS,
  withTrackQuery,
} from "../undergraduateTracks";

export default function ProgramDetailSidebar({ activeId }) {
  const { t } = useLanguage();
  const { search } = useLocation();
  const trackId = getTrackFromSearch(search);

  return (
    <div className="admissions-sidebar">
      <div className="sidebar-box pd-sidebar">
        <h3>{t("admissionsExtra.sidebarTitle")}</h3>
        <Link to={getUndergraduateTrackPath(trackId)} className="pd-back-link">
          ← {t("progDetail.backToPrograms")}
        </Link>
        <ul className="sidebar-links pd-program-links">
          {UNDERGRADUATE_PROGRAMS.map((program) => (
            <li key={program.titleKey}>
              <Link
                to={withTrackQuery(program.link, trackId)}
                className={program.titleKey === activeId ? "active-link" : ""}
              >
                {t(`admissions.pages.${program.titleKey}`)}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="sidebar-links pd-other-links">
          <li><Link to="/admissions/pre-foundation">{t("admissions.pages.preFoundation")}</Link></li>
          <li><Link to="/admissions/foundation">{t("admissions.pages.foundation")}</Link></li>
          <li><Link to="/admissions/postgraduate">{t("admissions.pages.postgraduate")}</Link></li>
          <li><Link to="/admissions/phd">{t("admissions.pages.phd")}</Link></li>
        </ul>
      </div>
    </div>
  );
}
