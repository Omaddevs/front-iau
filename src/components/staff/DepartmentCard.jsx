import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import "./DepartmentCard.css";

const AVATAR_FALLBACK = "https://placehold.co/80x80/e2e8f0/94a3b8?text=IAU";

export default function DepartmentCard({ department }) {
  const preview = (department.members || []).slice(0, 5);
  const linkId  = department.slug || department.id;

  return (
    <article className="sdc-card">
      <Link className="sdc-link" to={`/staff/${linkId}`} aria-label={`Open ${department.title}`}>
        <h3 className="sdc-title">{department.title}</h3>
        <div className="sdc-line" />

        <div className="sdc-bottom">
          <div className="sdc-avatars" aria-hidden="true">
            {preview.map((member) => (
              <img
                key={member.name}
                src={member.photo_src || member.photoUrl || AVATAR_FALLBACK}
                alt=""
                className="sdc-avatar"
                loading="lazy"
                onError={(e) => { e.target.src = AVATAR_FALLBACK; }}
              />
            ))}
          </div>

          <span className="sdc-more">
            See more <IoChevronForwardOutline />
          </span>
        </div>
      </Link>
    </article>
  );
}
