import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DepartmentCard from "../../components/staff/DepartmentCard";
import { fetchDepartments } from "../../api/staffApi";
import "./StaffDepartments.css";

const teamMenu = [
  { label: "University Staff",      href: "/staff" },
  { label: "Rectorate",             href: "/staff/rectorate" },
  { label: "Deans",                 href: "/staff/deans" },
  { label: "Heads of Departments",  href: "/staff/heads" },
  { label: "Academic Staff",        href: "/staff/academic-staff" },
];

export default function StaffDepartments() {
  const location = useLocation();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

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
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our team</span>
            <span>/</span>
            <strong>University Staff</strong>
          </nav>
          <h1 className="sdp-title">University Staff</h1>
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
                  <p>Failed to load staff data. Make sure the backend server is running.</p>
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
                <h2 className="sdp-sideTitle">Our team</h2>
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
