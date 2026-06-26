import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { ADMISSIONS_ROOT_PATH } from "./admissionsBreadcrumbPaths";

export default function AdmissionsBreadcrumbs({ items = [] }) {
  const { t } = useLanguage();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">🏠</Link>
      <span className="separator">&gt;</span>
      <Link to={ADMISSIONS_ROOT_PATH}>{t("admissions.breadAdmissions")}</Link>
      {items.map((item) => (
        <Fragment key={item.key ?? `${item.to ?? "current"}-${item.label}`}>
          <span className="separator">&gt;</span>
          {item.current || !item.to ? (
            <span className={item.current ? "current" : undefined}>{item.label}</span>
          ) : (
            <Link to={item.to}>{item.label}</Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
