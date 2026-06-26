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
import { useLanguage } from "../../i18n/LanguageContext";

export default function AcademicsProgram() {
  const { t } = useLanguage();

  const programCards = [
    { title: t("academics.preFoundation"), icon: <IoSchoolOutline />, link: "/admissions/pre-foundation" },
    { title: t("academics.foundation"),    icon: <IoRibbonOutline />, link: "/admissions/foundation" },
    { title: t("academics.undergraduate"), icon: <IoFlaskOutline />,  link: "/admissions/undergraduate/english" },
    { title: t("academics.postgraduate"),  icon: <IoBookOutline />,   link: "/admissions/postgraduate" },
  ];

  const statTiles = [
    { value: "900+", label: t("academics.students"),   icon: <IoSchoolOutline />,   tone: "tone-a" },
    { value: "100+", label: t("academics.staff"),      icon: <IoPeopleOutline />,   tone: "tone-b" },
    { value: "2",    label: t("academics.faculties"),  icon: <IoBusinessOutline />, tone: "tone-c" },
    { value: "13",   label: t("academics.programmes"), icon: <IoLibraryOutline />,  tone: "tone-d" },
  ];

  return (
    <section className="apg" aria-label="Academics and Program">
      <div className="apg__container">
        <header className="apg__head">
          <h2 className="apg__title">
            {t("academics.title")} <span>{t("academics.titleHighlight")}</span>
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

              <Link className="apg-card__more" to={card.link}>
                {t("news.seeMore")} <IoChevronForwardOutline />
              </Link>
            </article>
          ))}
        </div>

        <div className="apg__bottom">
          <article className="apg-about">
            <p className="apg-about__label">IAU</p>

            <h3 className="apg-about__title">
              {t("x.aboutTitle")}
              <br />
              <span>{t("x.aboutTitleSpan")}</span>
            </h3>

            <p className="apg-about__text">
              {t("x.aboutText")}
            </p>

            <Link className="apg-about__btn" to="/about">
              {t("news.seeMore")} <IoChevronForwardOutline />
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
