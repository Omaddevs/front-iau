import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { INTL_DEPT_ROOT } from "./internationalDeptPages";

export default function InternationalDeptBreadcrumbs({ items = [] }) {
  const { t } = useLanguage();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">🏠</Link>
      <span className="separator">&gt;</span>
      <Link to={INTL_DEPT_ROOT}>{t("intlCoop.breadDept")}</Link>
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
