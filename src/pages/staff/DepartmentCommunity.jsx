import { useEffect, useState } from "react";
import { Link, Navigate, useParams, useLocation } from "react-router-dom";
import StaffCard from "../../components/staff/StaffCard";
import { fetchDepartment } from "../../api/staffApi";
import "./DepartmentCommunity.css";

const teamMenu = [
  { label: "University Staff",      href: "/staff" },
  { label: "Executive",             href: "/staff/rectorate" },
  { label: "Deans",                 href: "/staff/deans" },
  { label: "Heads of Departments",  href: "/staff/heads" },
  { label: "Academic Staff",        href: "/staff/academic-staff" },
];

export default function DepartmentCommunity() {
  const { deptId } = useParams();
  const location   = useLocation();

  const [department, setDepartment] = useState(null);
  const [loading, setLoading]       = useState(true);
  const [notFound, setNotFound]     = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetchDepartment(deptId)
      .then(setDepartment)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [deptId]);

  if (!loading && notFound) {
    return <Navigate to="/staff" replace />;
  }

  return (
    <main className="dcp-page">
      <section className="dcp-body">
        <div className="dcp-container">
          <div className="dcp-layout">
            <section className="dcp-main">

              {loading && (
                <div style={{ padding: "60px 0", display: "flex", justifyContent: "center" }}>
                  <div className="news-spinner" />
                </div>
              )}

              {!loading && department && (
                <>
                  <p className="dcp-subtitle">{department.title}</p>
                  <h1 className="dcp-title">Department community</h1>
                  <div className="dcp-grid">
                    {department.members.map((member) => (
                      <StaffCard
                        key={`${member.name}-${member.id || member.order}`}
                        member={member}
                      />
                    ))}
                  </div>
                </>
              )}
            </section>

            <aside className="dcp-side">
              <div className="dcp-sideCard">
                <h2 className="dcp-sideTitle">Our team</h2>
                {teamMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`dcp-sideLink ${location.pathname === item.href ? "is-active" : ""}`}
                  >
                    <span className="dcp-sideMark" />
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
