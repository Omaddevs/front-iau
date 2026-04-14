import "./AcademicsProgram.css";
import {
  IoBookOutline,
  IoChevronForwardOutline,
  IoFlaskOutline,
  IoLibraryOutline,
  IoPeopleOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const programCards = [
  {
    title: "Pre-Foundation",
    count: "",
    icon: <IoSchoolOutline />,
    link: "/admissions/pre-foundation",
  },
  {
    title: "Foundation",
    count: "",
    icon: <IoRibbonOutline />,
    link: "/admissions/foundation",
  },
  {
    title: "Undergraduate",
    count: "",
    icon: <IoFlaskOutline />,
    link: "/admissions/undergraduate",
  },
  {
    title: "Postgraduate",
    count: "",
    icon: <IoBookOutline />,
    link: "/admissions/postgraduate",
  },
];

const statTiles = [
  {
    value: "900+",
    label: "Students",
    icon: <IoSchoolOutline />,
    tone: "tone-a",
  },
  {
    value: "100+",
    label: "Staff",
    icon: <IoPeopleOutline />,
    tone: "tone-b",
  },
  {
    value: "2",
    label: "Faculties",
    icon: <IoBusinessOutline />,
    tone: "tone-c",
  },
  {
    value: "13",
    label: "Programmes",
    icon: <IoLibraryOutline />,
    tone: "tone-d",
  },
];

export default function AcademicsProgram() {
  return (
    <section className="apg" aria-label="Academics and Program">
      <div className="apg__container">
        <header className="apg__head">
          <h2 className="apg__title">
            Academics & <span>Program</span>
          </h2>
          <div className="apg__divider" />
        </header>

        <div className="apg__cards">
          {programCards.map((card) => (
            <article className="apg-card" key={card.title}>
              <div className="apg-card__badge" aria-hidden="true">
                {card.icon}
              </div>

              <h3 className="apg-card__title">{card.title}</h3>
              <p className="apg-card__count">{card.count}</p>

              <Link className="apg-card__more" to={card.link}>
                See more <IoChevronForwardOutline />
              </Link>
            </article>
          ))}
        </div>

        <div className="apg__bottom">
          <article className="apg-about">
            <p className="apg-about__label">IAU</p>

            <h3 className="apg-about__title">
              About International
              <br />
              <span>Agriculture University</span>
            </h3>

            <p className="apg-about__text">
              International Agriculture University combines science-based education with
              practice-oriented learning, preparing students for modern agri-food systems,
              innovation, and global professional opportunities.
            </p>

            <Link className="apg-about__btn" to="/about">
              More about us <IoChevronForwardOutline />
            </Link>
          </article>

          <div className="apg-stats">
            {statTiles.map((tile) => (
              <article className={`apg-stat ${tile.tone}`} key={tile.label}>
                <div className="apg-stat__icon" aria-hidden="true">
                  {tile.icon}
                </div>
                <div className="apg-stat__watermark" aria-hidden="true">
                  {tile.icon}
                </div>
                <p className="apg-stat__value">{tile.value}</p>
                <p className="apg-stat__label">{tile.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
