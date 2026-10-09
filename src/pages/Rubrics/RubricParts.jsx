import { IoBulbOutline, IoRibbonOutline } from "react-icons/io5";

export function RubricIcon({ slug, ...props }) {
  return slug === "bir-ixtiro-tarixi" ? <IoBulbOutline {...props} /> : <IoRibbonOutline {...props} />;
}

/** Rasm bo'lmasa — rukn belgisi bilan bezatilgan zaxira muqova. */
export function RubricCover({ post, rubric, className = "" }) {
  if (post.img) {
    return (
      <div className={`rb-cover ${className}`}>
        <img src={post.img} alt={post.title} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`rb-cover rb-cover--empty rb-cover--${rubric.slug} ${className}`} aria-hidden="true">
      <RubricIcon slug={rubric.slug} className="rb-cover-icon" />
      <span className="rb-cover-label">{rubric.label}</span>
    </div>
  );
}
