import "./OurStaff.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const teamMenu = [
  { label: "University Staff", href: "/staff" },
  { label: "Executive", href: "/staff/rectorate" },
  { label: "Deans", href: "/staff/deans" },
  { label: "Heads of Departments", href: "/staff/heads" },
  { label: "Academic Staff", href: "/staff/academic-staff" },
];
import staffHero from "../../images/campus.png"; // xohlasang o'zing rasm qo'yasan

import departmentsData from "../../data/departments.json";

const DEPARTMENTS = departmentsData.map(dep => ({
  title: dep.title,
  avatars: dep.members.slice(0, 4).map(m => m.photoUrl),
}));

export default function OurStaff() {
  const navigate = useNavigate();
  const location = useLocation();

  const goDepartment = (title) => {
    navigate("/department-community", { state: { title } });
  };

  return (
    <main className="os-page">
      {/* HERO */}
      <section className="os-hero">
        <div className="os-hero-bg">
          {/* agar rasm kerak bo'lmasa, comment qil */}
          <img src={staffHero} alt="University" />
        </div>
        <div className="os-hero-overlay" />

        <div className="os-hero-inner">
          <nav className="os-breadcrumb">
            <Link to="/" className="os-crumb">
              Home
            </Link>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb">About NewUU</span>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb">Leadership</span>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb">Our team</span>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb os-crumbActive">University Staff</span>
          </nav>

          <h1 className="os-title">University Staff</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="os-body">
        <div className="os-container">
          <div className="os-layout">
            {/* LEFT: CARDS */}
            <div className="os-grid">
              {DEPARTMENTS.map((d, idx) => (
                <article
                  className="os-card"
                  key={idx}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${d.title}`}
                  onClick={() => goDepartment(d.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goDepartment(d.title);
                    }
                  }}
                >
                  <h3 className="os-cardTitle">{d.title}</h3>
                  <div className="os-cardLine" />

                  <div className="os-cardBottom">
                    <div className="os-avatars">
                      {d.avatars.map((src, i) => (
                        <img
                          className="os-avatar"
                          src={src}
                          alt="staff"
                          key={i}
                        />
                      ))}
                    </div>

                    <button
                      className="os-moreBtn"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // ✅ card clickini to'xtatadi
                        goDepartment(d.title);
                      }}
                    >
                      See more <span className="os-arrow">→</span>
                    </button>
                  </div>

                  {/* pattern background */}
                  <span className="os-pattern" aria-hidden="true" />
                </article>
              ))}
            </div>

            {/* RIGHT: SIDEBAR */}
            <aside className="os-side">
              <div className="os-sideCard">
                <div className="os-sideTitle">Our team</div>

                {teamMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`os-sideLink ${location.pathname === item.href ? "active" : ""}`}
                  >
                    <span className="os-sideMark" />
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="os-sidePhoto">
                <div className="os-sidePhotoInner">
                  {/* pastdagi rasmni xohlasang qo'yasan */}
                  <div className="os-sidePhotoPlaceholder">Photo</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
