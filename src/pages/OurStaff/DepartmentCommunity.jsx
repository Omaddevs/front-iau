import "./DepartmentCommunity.css";
import { Link, useLocation } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import sideImg from "../../images/campus.png"; // o'ngdagi kichik rasm o'rniga
import staff1 from '../../images/staff1.jpg'
import staff2 from '../../images/staff2.png'
import staff3 from '../../images/staff3.png'

const STAFF = [
  {
    id: 1,
    name: "Anvar Tursunov",
    role: "Vice Rector for Academic affairs",
    email: "anvar@gmail.com",
    photo: staff1,
  },
  {
    id: 2,
    name: "Abdulla Primov",
    role: "Vice Rector for Scientific Research, Innovation and Spirituality",
    email: "abdulla@gmail.com",
    photo: staff2,
  },
  {
    id: 3,
    name: "Sunnatilla Rashidov",
    role: "Vice Rector for Finance and Economic affairs",
    email: "sunnatilla@gmail.com",
    photo: staff3,
  },
];

export default function DepartmentCommunity() {
  const location = useLocation();
  const deptTitle =
    location.state?.title || "Department of Control and Execution Control";

  return (
    <main className="dcx-page">
      <section className="dcx-body">
        <div className="dcx-container">
          <div className="dcx-layout">
            {/* LEFT */}
            <div className="dcx-left">
              <h2 className="dcx-title">Department community</h2>

              <div className="dcx-grid">
                {STAFF.map((p) => (
                  <article className="dcx-card" key={p.id}>
                    <div className="dcx-photo">
                      <img src={p.photo} alt={p.name} />
                    </div>

                    <div className="dcx-info">
                      <h3 className="dcx-name">{p.name}</h3>
                      <div className="dcx-line" />
                      <div className="dcx-role">{p.role}</div>

                      <a className="dcx-email" href={`mailto:${p.email}`}>
                        <span className="dcx-emailIc">
                          <IoMailOutline />
                        </span>
                        <span>{p.email}</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <aside className="dcx-side">
              <div className="dcx-sideCard">
                <div className="dcx-sideTitle">Our team</div>

                <Link className="dcx-sideLink active" to="/our-staff">
                  <span className="dcx-sideMark" />
                  University Staff
                </Link>

                <a className="dcx-sideLink" href="#">
                  Academic Community
                </a>
                <a className="dcx-sideLink" href="#">
                  Other separate organizations
                </a>
                <a className="dcx-sideLink" href="#">
                  University structure
                </a>
              </div>

              {/* Reach out block */}
              <div className="dcx-reach">
                <div className="dcx-reachText">
                  <div className="dcx-reachTitle">Reach out</div>
                  <div className="dcx-reachSub">to the Rector</div>
                  <button className="dcx-reachBtn" type="button">
                    Submit Request
                  </button>
                </div>

                <div className="dcx-reachImg">
                  <img src={sideImg} alt="University" />
                </div>
              </div>

              <div className="dcx-sidePhoto">
                <div className="dcx-sidePhotoInner">
                  <div className="dcx-sidePhotoPlaceholder">{deptTitle}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
