import { IoMailOutline } from "react-icons/io5";
import "./StaffCard.css";

const FALLBACK = "https://placehold.co/260x300/e2e8f0/94a3b8?text=IAU";

export default function StaffCard({ member }) {
  const src = member.photo_src || member.photoUrl || FALLBACK;
  return (
    <article className="stc-card">
      <div className="stc-photoWrap">
        <img
          src={src}
          alt={member.name}
          className="stc-photo"
          loading="lazy"
          onError={(e) => { e.target.src = FALLBACK; }}
        />
        
        <a 
          className="stc-email-float" 
          href={member.email && member.email !== "#" ? `mailto:${member.email}` : "mailto:info@iau.uz"}
          aria-label={"Email " + member.name}
        >
          <div className="stc-email-circle">
             <IoMailOutline />
          </div>
        </a>
      </div>

      <div className="stc-body">
        <h3 className="stc-name">{member.name}</h3>
        <div className="stc-line" />
        <p className="stc-position">{member.position}</p>
      </div>
    </article>
  );
}
