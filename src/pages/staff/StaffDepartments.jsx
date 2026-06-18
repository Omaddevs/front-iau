import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import DepartmentCard from "../../components/staff/DepartmentCard";
import { fetchDepartments } from "../../api/staffApi";
import "./StaffDepartments.css";

export default function StaffDepartments() {
  const location = useLocation();
  const { t } = useLanguage();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

  const teamMenu = [
    { label: t("dept.universityStaff"),    href: "/staff" },
    { label: t("dept.academicCommunity"),  href: "/staff/rectorate" },
    { label: t("dept.otherOrgs"),          href: "/staff/deans" },
    { label: t("dept.universityStructure"),href: "/staff/heads" },
  ];

  useEffect(() => {
    fetchDepartments()
      .then(setDepartments)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="sdp-page">
      <section className="sdp-hero">
        <div className="sdp-hero__container">
          <nav className="sdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("common.home")}</Link>
            <span>/</span>
            <span>{t("dept.ourTeam")}</span>
            <span>/</span>
            <strong>{t("staff.heroTitle")}</strong>
          </nav>
          <h1 className="sdp-title">{t("staff.heroTitle")}</h1>
        </div>
      </section>

      <section className="sdp-body">
        <div className="sdp-container">
          <div className="sdp-layout">
            <section className="sdp-main">
              {loading && (
                <div className="sdp-loading">
                  <div className="news-spinner" />
                </div>
              )}
              {error && (
                <div className="sdp-error">
                  <p>{t("common.failedToLoad")}</p>
                </div>
              )}
              {!loading && !error && (
                <div className="sdp-grid">
                  {departments.map((dept) => (
                    <DepartmentCard key={dept.slug || dept.id} department={dept} />
                  ))}
                </div>
              )}
            </section>

            <aside className="sdp-side">
              <div className="sdp-sideCard">
                <h2 className="sdp-sideTitle">{t("dept.ourTeam")}</h2>
                {teamMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`sdp-sideLink ${location.pathname === item.href ? "is-active" : ""}`}
                  >
                    <span className="sdp-sideMark" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
