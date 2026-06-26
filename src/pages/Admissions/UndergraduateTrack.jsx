import React from "react";
import "./AdmissionsShared.css";
import "./ModernAdmissionsHero.css";
import "./UndergraduateTrack.css";
import AdmissionsBreadcrumbs from "./AdmissionsBreadcrumbs";
import { UNDERGRADUATE_ROOT_PATH } from "./admissionsBreadcrumbPaths";
import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import {
  DEFAULT_UNDERGRADUATE_TRACK,
  isUndergraduateTrack,
  UNDERGRADUATE_TRACKS,
} from "./undergraduateTracks";
import AdmissionsSidebar from "./tracks/AdmissionsSidebar";
import UzbekTrackContent from "./tracks/UzbekTrackContent";
import EnglishTrackContent from "./tracks/EnglishTrackContent";
import RussianTrackContent from "./tracks/RussianTrackContent";

const TRACK_CONTENT = {
  uzbek: UzbekTrackContent,
  english: EnglishTrackContent,
  russian: RussianTrackContent,
};

export default function UndergraduateTrack() {
  const { track: trackParam } = useParams();
  const { t } = useLanguage();

  if (!isUndergraduateTrack(trackParam)) {
    return <Navigate to={`/admissions/undergraduate/${DEFAULT_UNDERGRADUATE_TRACK}`} replace />;
  }

  const activeTrack = UNDERGRADUATE_TRACKS.find((item) => item.id === trackParam);
  const TrackContent = TRACK_CONTENT[trackParam];

  return (
    <div className={`admissions-page ug-track--${trackParam}`}>
      <div className={`admissions-hero ug-hero--${trackParam}`}>
        <video className="admissions-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="admissions-hero-content">
          <AdmissionsBreadcrumbs
            items={[
              { label: t("admissions.pages.undergraduate"), to: UNDERGRADUATE_ROOT_PATH },
              { label: t(`admissions.${activeTrack.labelKey}`), current: true },
            ]}
          />
          <h1>{t(`admissions.${activeTrack.labelKey}`)}</h1>
          <p className="ug-hero-subtitle">{t(`undergradTrack.${trackParam}.heroSubtitle`)}</p>
        </div>
      </div>

      <div className="admissions-container">
        <div className="admissions-main">
          <TrackContent />
        </div>
        <AdmissionsSidebar trackParam={trackParam} />
      </div>
    </div>
  );
}
