import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";
import { UNDERGRADUATE_TRACKS } from "../undergraduateTracks";

export default function AdmissionsSidebar({ trackParam }) {
  const { t } = useLanguage();

  return (
    <div className="admissions-sidebar">
      <div className="sidebar-box">
        <h3>{t("admissionsExtra.sidebarTitle")}</h3>
        <ul className="sidebar-links">
          <li>
            <Link to="/admissions/pre-foundation">{t("admissions.pages.preFoundation")}</Link>
          </li>
          <li>
            <Link to="/admissions/foundation">{t("admissions.pages.foundation")}</Link>
          </li>
          <li>
            <span className="sidebar-section-label">{t("admissions.pages.undergraduate")}</span>
            <ul className="sidebar-sub-links">
              {UNDERGRADUATE_TRACKS.map((track) => (
                <li key={track.id}>
                  <Link
                    to={track.path}
                    className={track.id === trackParam ? "active-link" : ""}
                  >
                    {t(`admissions.${track.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/admissions/postgraduate">{t("admissions.pages.postgraduate")}</Link>
          </li>
          <li>
            <Link to="/admissions/phd">{t("admissions.pages.phd")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
