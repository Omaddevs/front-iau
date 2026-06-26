import { useState } from "react";
import { useLocation } from "react-router-dom";
import AdmissionsBreadcrumbs from "./AdmissionsBreadcrumbs";
import { UNDERGRADUATE_ROOT_PATH } from "./admissionsBreadcrumbPaths";
import {
  IoAnalyticsOutline,
  IoArrowForwardOutline,
  IoBusOutline,
  IoCheckmarkCircleOutline,
  IoCubeOutline,
  IoFlaskOutline,
  IoLeafOutline,
  IoMailOutline,
  IoRocketOutline,
  IoShieldCheckmarkOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import {
  DEFAULT_UNDERGRADUATE_TRACK,
  getUndergraduateTrackPath,
  getTrackFromSearch,
  UNDERGRADUATE_TRACKS,
} from "./undergraduateTracks";
import { getProgramDetail } from "./undergraduateProgramDetails";
import ProgramDetailSidebar from "./tracks/ProgramDetailSidebar";
import "./AdmissionsShared.css";
import "./ModernAdmissionsHero.css";
import "./ProgramDetailPage.css";

const SKILL_ICONS = {
  skillQuant: IoStatsChartOutline,
  skillPolicy: IoAnalyticsOutline,
  skillResearch: IoFlaskOutline,
  skillConsult: IoRocketOutline,
};

const FLOW_ICONS = [IoCubeOutline, IoBusOutline, IoArrowForwardOutline, IoCheckmarkCircleOutline];

function ModulePills({ items }) {
  return (
    <div className="pd-module-pills">
      {items.map((item) => (
        <span key={item} className="pd-module-pill">{item}</span>
      ))}
    </div>
  );
}

function YearAccordion({ year, label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`pd-year-acc ${open ? "open" : ""}`}>
      <button type="button" className="pd-year-acc-btn" onClick={() => setOpen((v) => !v)}>
        <span className="pd-year-num">{label}</span>
        <span className="pd-year-label">{year}</span>
        <span className="pd-year-chev">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pd-year-body">{children}</div>}
    </div>
  );
}

function ProfileCard({ profile, t }) {
  return (
    <div className="pd-profile">
      <a href={`mailto:${profile.email}`} className="pd-profile-mail" title={t("x.sendEmail")}>
        <IoMailOutline />
      </a>
      <img src={profile.img} alt={profile.name} />
      <div>
        <h4>{profile.name}</h4>
        <p>{t(`x.${profile.roleKey}`)}</p>
      </div>
    </div>
  );
}

function ApplyBox({ t, theme }) {
  return (
    <div className={`pd-apply pd-apply--${theme}`}>
      <h3>{t("progDetail.applyCta")}</h3>
      <p>{t("common.applyFall")}</p>
      <button
        type="button"
        className="apply-btn"
        onClick={() => window.open("https://iau-admission.tilda.ws", "_blank")}
      >
        {t("common.startApplication")}
      </button>
    </div>
  );
}

function EconomicsLayout({ program, t }) {
  const { modules, skills, profile, image, courseKeys } = program;

  return (
    <>
      <div className="pd-hero-strip pd-hero-strip--economics">
        <div className="pd-hero-strip-img">
          <img src={image} alt="" />
        </div>
        <div className="pd-hero-strip-stats">
          <div><strong>BSc(Hons)</strong><span>{t("progDetail.heroStatDegree")}</span></div>
          <div><strong>4</strong><span>{t("progDetail.heroStatYears")}</span></div>
          <div><strong>8+</strong><span>{t("progDetail.heroStatModules")}</span></div>
        </div>
      </div>

      <section className="pd-panel pd-panel--economics">
        <h2>{t("progDetail.overview")}</h2>
        {courseKeys.map((key) => (
          <p key={key} className="pd-lead">{t(`adm.${key}`)}</p>
        ))}
      </section>

      <section className="pd-skills-grid">
        <h2>{t("progDetail.keySkills")}</h2>
        <div className="pd-skills">
          {skills.map((skillKey) => {
            const Icon = SKILL_ICONS[skillKey];
            return (
              <article key={skillKey} className="pd-skill-card">
                <Icon />
                <span>{t(`progDetail.${skillKey}`)}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pd-panel">
        <h2>{t("progDetail.modules")}</h2>
        <p className="pd-muted">{t("adm.modulesIntro")}</p>
        <YearAccordion year={t("admissionsExtra.yearOne")} label="01" defaultOpen>
          <ModulePills items={modules.year1} />
        </YearAccordion>
        <YearAccordion year={t("admissionsExtra.yearTwo")} label="02">
          <ModulePills items={modules.year2} />
        </YearAccordion>
        <YearAccordion year={t("admissionsExtra.yearThree")} label="03">
          <ModulePills items={modules.year3} />
        </YearAccordion>
      </section>

      <section className="pd-split">
        <div className="pd-panel">
          <h2>{t("progDetail.requirements")}</h2>
          <p className="pd-pre">{t("adm.entryReqBsc")}</p>
        </div>
        <div className="pd-panel pd-fees-card">
          <h2>{t("progDetail.fees")}</h2>
          <p>{t("adm.feeUzbYear")}</p>
          <p>{t("adm.feeIntlYear")}</p>
          <p className="pd-fees-highlight">{t("adm.durBsc")}</p>
        </div>
      </section>

      <section className="pd-careers-scroll">
        <h2>{t("progDetail.careers")}</h2>
        <p className="pd-pre">{t("adm.careersDesc")}</p>
        <div className="pd-career-cards">
          {t("adm.careersList").split("\n").filter(Boolean).map((career) => (
            <article key={career} className="pd-career-card">{career}</article>
          ))}
        </div>
      </section>

      <div className="pd-bottom">
        <ProfileCard profile={profile} t={t} />
        <ApplyBox t={t} theme="economics" />
      </div>
    </>
  );
}

function LogisticsLayout({ program, t }) {
  const { modules, flowSteps, profile, image, courseKeys } = program;

  return (
    <>
      <div className="pd-flow-banner">
        <img src={image} alt="" className="pd-flow-bg" />
        <div className="pd-flow-steps">
          <h2>{t("progDetail.supplyFlow")}</h2>
          <div className="pd-flow-track">
            {flowSteps.map((stepKey, i) => {
              const Icon = FLOW_ICONS[i];
              return (
                <div key={stepKey} className="pd-flow-node">
                  <div className="pd-flow-icon"><Icon /></div>
                  <span>{t(`progDetail.${stepKey}`)}</span>
                  {i < flowSteps.length - 1 && <div className="pd-flow-line" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="pd-panel pd-panel--logistics">
        <h2>{t("progDetail.overview")}</h2>
        {courseKeys.map((key) => (
          <p key={key}>{t(`adm.${key}`)}</p>
        ))}
      </section>

      <section className="pd-timeline-modules">
        <h2>{t("progDetail.modules")}</h2>
        <p className="pd-muted">{t("adm.modulesIntro")}</p>
        {[
          { year: t("admissionsExtra.yearOne"), items: modules.year1 },
          { year: t("admissionsExtra.yearTwo"), items: modules.year2 },
          { year: t("admissionsExtra.yearThree"), items: modules.year3 },
        ].map((block, i) => (
          <div key={block.year} className="pd-timeline-block">
            <div className="pd-timeline-marker">{i + 1}</div>
            <div className="pd-timeline-content">
              <h3>{block.year}</h3>
              <ModulePills items={block.items} />
            </div>
          </div>
        ))}
      </section>

      <section className="pd-checklist-section">
        <h2>{t("progDetail.requirements")}</h2>
        <div className="pd-checklist">
          {t("adm.entryReqBsc").split("\n\n").map((block) => (
            <div key={block.slice(0, 20)} className="pd-check-item">
              <IoCheckmarkCircleOutline />
              <p>{block}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pd-ticket-fees">
        <div className="pd-ticket">
          <h2>{t("progDetail.fees")}</h2>
          <p>{t("adm.feeUzbYear")}</p>
          <p>{t("adm.feeIntlYear")}</p>
          <span className="pd-ticket-stub">{t("adm.durBsc")}</span>
        </div>
        <div className="pd-panel">
          <h2>{t("progDetail.careers")}</h2>
          <p className="pd-pre">{t("adm.careersDesc")}</p>
          {program.showCareersList && (
            <p className="pd-pre">{t("adm.careersList")}</p>
          )}
        </div>
      </section>

      <div className="pd-bottom">
        <ProfileCard profile={profile} t={t} />
        <ApplyBox t={t} theme="logistics" />
      </div>
    </>
  );
}

function SafetyLayout({ program, t }) {
  const { modules, pillars, profile, image, courseKeys } = program;
  const [activeYear, setActiveYear] = useState(1);
  const yearData = {
    1: modules.year1,
    2: modules.year2,
    3: modules.year3,
  };

  return (
    <>
      <div className="pd-safety-hero">
        <img src={image} alt="" />
        <div className="pd-safety-overlay">
          <IoShieldCheckmarkOutline />
        </div>
      </div>

      <section className="pd-pillars">
        <h2>{t("progDetail.safetyPillars")}</h2>
        <div className="pd-pillar-grid">
          {pillars.map((key) => (
            <article key={key} className="pd-pillar-card">
              <IoShieldCheckmarkOutline />
              <h3>{t(`progDetail.${key}`)}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="pd-panel pd-panel--safety">
        <h2>{t("progDetail.overview")}</h2>
        {courseKeys.map((key) => (
          <p key={key}>{t(`adm.${key}`)}</p>
        ))}
      </section>

      <section className="pd-year-tabs">
        <h2>{t("progDetail.modules")}</h2>
        <p className="pd-muted">{t("adm.modulesIntro")}</p>
        <div className="pd-tab-bar">
          {[1, 2, 3].map((yr) => (
            <button
              key={yr}
              type="button"
              className={activeYear === yr ? "active" : ""}
              onClick={() => setActiveYear(yr)}
            >
              {t("progDetail.year")} {yr}
            </button>
          ))}
        </div>
        <div className="pd-tab-panel">
          <ModulePills items={yearData[activeYear]} />
        </div>
      </section>

      <section className="pd-split">
        <div className="pd-panel">
          <h2>{t("progDetail.requirements")}</h2>
          <p className="pd-pre">{t("adm.entryReqBsc")}</p>
        </div>
        <div className="pd-panel pd-fees-card pd-fees-card--safety">
          <h2>{t("progDetail.fees")}</h2>
          <p>{t("adm.feeUzbYear")}</p>
          <p>{t("adm.feeIntlYear")}</p>
          <p className="pd-fees-highlight">{t("adm.durBsc")}</p>
        </div>
      </section>

      <section className="pd-panel">
        <h2>{t("progDetail.careers")}</h2>
        <p className="pd-pre">{t("adm.careersDesc")}</p>
      </section>

      <div className="pd-bottom">
        <ProfileCard profile={profile} t={t} />
        <ApplyBox t={t} theme="safety" />
      </div>
    </>
  );
}

function SmartLayout({ program, t }) {
  const { modules, metrics, profile, image, courseKeys } = program;

  return (
    <>
      <div className="pd-smart-hero">
        <img src={image} alt="" />
        <div className="pd-smart-metrics">
          {metrics.map((key) => (
            <div key={key} className="pd-metric">
              <IoLeafOutline />
              <span>{t(`progDetail.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="pd-panel pd-panel--smart">
        <h2>{t("progDetail.overview")}</h2>
        {courseKeys.map((key) => (
          <p key={key}>{t(`adm.${key}`)}</p>
        ))}
      </section>

      <section className="pd-smart-modules">
        <h2>{t("progDetail.modules")}</h2>
        <p className="pd-muted">{t("adm.modulesIntro")}</p>

        <div className="pd-smart-year">
          <h3>{t("admissionsExtra.yearOne")}</h3>
          <ModulePills items={modules.year1} />
        </div>

        <div className="pd-smart-year">
          <h3>{t("admissionsExtra.yearTwo")}</h3>
          <h4>{t("progDetail.coreModules")}</h4>
          <ModulePills items={modules.year2Core} />
          <h4>{t("progDetail.electiveModules")}</h4>
          <div className="pd-elective-grid">
            {modules.year2Elective.map((item) => (
              <span key={item} className="pd-elective-pill">{item}</span>
            ))}
          </div>
        </div>

        <div className="pd-smart-year">
          <h3>{t("admissionsExtra.yearThree")}</h3>
          <h4>{t("progDetail.coreModules")}</h4>
          <ModulePills items={modules.year3Core} />
          <h4>{t("progDetail.electiveModules")}</h4>
          <div className="pd-elective-grid">
            {modules.year3Elective.map((item) => (
              <span key={item} className="pd-elective-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-split">
        <div className="pd-panel">
          <h2>{t("progDetail.requirements")}</h2>
          <p className="pd-pre">{t("adm.entryReqBsc")}</p>
        </div>
        <div className="pd-panel pd-fees-card pd-fees-card--smart">
          <h2>{t("progDetail.fees")}</h2>
          <p>{t("adm.feeUzbYear")}</p>
          <p>{t("adm.feeIntlYear")}</p>
          <p className="pd-fees-highlight">{t("adm.durBsc")}</p>
        </div>
      </section>

      <section className="pd-panel">
        <h2>{t("progDetail.careers")}</h2>
        <p className="pd-pre">{t("adm.careersDesc")}</p>
      </section>

      <div className="pd-bottom">
        <ProfileCard profile={profile} t={t} />
        <ApplyBox t={t} theme="smart" />
      </div>
    </>
  );
}

const LAYOUTS = {
  economics: EconomicsLayout,
  logistics: LogisticsLayout,
  safety: SafetyLayout,
  smart: SmartLayout,
};

export default function ProgramDetailPage({ programId }) {
  const { t } = useLanguage();
  const { search } = useLocation();
  const trackId = getTrackFromSearch(search);
  const activeTrack =
    UNDERGRADUATE_TRACKS.find((item) => item.id === trackId)
    ?? UNDERGRADUATE_TRACKS.find((item) => item.id === DEFAULT_UNDERGRADUATE_TRACK);
  const program = getProgramDetail(programId);

  if (!program) return null;

  const Layout = LAYOUTS[program.layout];

  return (
    <div className={`admissions-page pd-page pd-page--${program.layout}`}>
      <div className={`admissions-hero pd-hero pd-hero--${program.layout}`}>
        <video className="admissions-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="admissions-hero-content">
          <AdmissionsBreadcrumbs
            items={[
              { label: t("admissions.pages.undergraduate"), to: UNDERGRADUATE_ROOT_PATH },
              {
                label: t(`admissions.${activeTrack.labelKey}`),
                to: getUndergraduateTrackPath(trackId),
              },
              { label: t(`admissionsExtra.${program.breadcrumbKey}`), current: true },
            ]}
          />
          <h1>{t(`admissions.pages.${program.titleKey}`)}</h1>
        </div>
      </div>

      <div className="admissions-container">
        <div className="admissions-main pd-main">
          <Layout program={program} t={t} />
        </div>
        <ProgramDetailSidebar activeId={program.titleKey} />
      </div>
    </div>
  );
}
