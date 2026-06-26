import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import AdmissionsBreadcrumbs from "./AdmissionsBreadcrumbs";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import baxtiyorImg from "../../images/baxtiyor.png";

export default function MScAgriBusinessManagement() {
     const [activeTab, setActiveTab] = useState("courseContent");
     const { t } = useLanguage();

     return (
          <div className="admissions-page">
               {/* PAGE HEADER */}
               <div className="admissions-hero">
                    <video
                         className="admissions-hero-video"
                         autoPlay
                         loop
                         muted
                         playsInline
                    >
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                    <div className="admissions-hero-content">
                         <AdmissionsBreadcrumbs
                              items={[
                                   { label: t("admissions.pages.postgraduate"), to: "/admissions/postgraduate" },
                                   { label: t("admissions.pages.mscAgriBusiness"), current: true },
                              ]}
                         />
                         <h1>{t("admissions.pages.mscAgriBusiness")}</h1>
                    </div>
               </div>

               {/* MAIN CONTENT AREA */}
               <div className="admissions-container">

                    {/* LEFT COMPONENT */}
                    <div className="admissions-main">
                         {/* TABS */}
                         <div className="tabs-container">
                              <div className="tabs-list">
                                   <button
                                        className={`tab-btn ${activeTab === "courseContent" ? "active" : ""}`}
                                        onClick={() => setActiveTab("courseContent")}
                                   >
                                        {t("admissions.tabCourse")}
                                   </button>
                                   <button
                                        className={`tab-btn ${activeTab === "modules" ? "active" : ""}`}
                                        onClick={() => setActiveTab("modules")}
                                   >
                                        {t("admissionsExtra.tabModules")}
                                   </button>
                                   <button
                                        className={`tab-btn ${activeTab === "entryRequirements" ? "active" : ""}`}
                                        onClick={() => setActiveTab("entryRequirements")}
                                   >
                                        {t("admissions.tabEntry")}
                                   </button>
                                   <button
                                        className={`tab-btn ${activeTab === "fees" ? "active" : ""}`}
                                        onClick={() => setActiveTab("fees")}
                                   >
                                        {t("admissionsExtra.tabFees")}
                                   </button>
                                   {/* <button
                                        className={`tab-btn ${activeTab === "scholarships" ? "active" : ""}`}
                                        onClick={() => setActiveTab("scholarships")}
                                   >
                                        Scholarships
                                   </button> */}
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box">
                              {activeTab === "courseContent" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabCourse")}</h2>
                                        <p style={{whiteSpace:"pre-line"}}>{t("adm.courseMscAgri")}</p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissionsExtra.tabModules")}</h2>
                                        <p>{t("adm.mscThroughout")}</p>
                                        <h3>
                                             Core Modules
                                        </h3>
                                        <p>
                                             U4413 – Research Skills<br></br>
                                             U4414 – Dissertation<br></br>
                                             New – Leadership and Business Strategy<br></br>
                                             New – Sustainable Agricultural Systems<br></br>
                                             U4086 – Financial Management<br></br>
                                             U4260 – Marketing Strategy<br></br>
                                             U4023 – Operations Management<br></br>
                                             U4263 – Entrepreneurship and Business Planning<br></br>
                                             New – English for Academic Purposes<br></br>
                                        </p>
                                        <h3>
                                             {t("admissionsExtra.careers")}
                                        </h3>
                                        <p style={{whiteSpace:"pre-line"}}>{t("adm.mscAgriCareers")}</p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabEntry")}</h2>
                                        <p style={{whiteSpace:"pre-line"}}>{t("adm.mscAgriEntry")}</p>
                                   </div>
                              )}

                              {activeTab === "fees" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabFees")}</h2>
                                        <p>{t("adm.feeUzbCourse")}</p>
                                        <p>{t("adm.feeIntlYearMsc")}</p>
                                        <p>
                                             {t("adm.dur1yr2pt")}<br></br>
                                        </p>
                                        <p>{t("adm.mscFeesNote")}</p>
                                   </div>
                              )}

                              {/* {activeTab === "scholarships" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissionsExtra.tabScholarships")}</h2>
                                        <p>
                                             The International Agriculture University offers scholarships and grants for local students. Grantees will have an opportunity to study postgraduate or undergraduate courses with 0 tuition fee, covered by the Ministry of Agriculture. Currently, local students of the International Agriculture University are able to apply for scholarships from the Ministry of Agriculture and more.
                                        </p>
                                   </div>
                              )} */}
                         </div>

                         {/* BOTTOM ROW: PROFILE & APPLICATIONS */}
                         <div className="agri-bottom-row">
                              {/* PROFILE CARD */}
                              <div className="profile-card">
                                   <a href="mailto:bakhtiyorjon.abdusattarov@iau.uz" className="profile-email-icon" title={t("x.sendEmail")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={baxtiyorImg} alt="Dr. Abdusattarov Bakhtiyorjon" />
                                   <div className="profile-info">
                                        <h4>Dr. Abdusattarov Bakhtiyorjon</h4>
                                        <p>{t("x.headOfDeptResearch")}</p>
                                   </div>
                              </div>

                              {/* APPLICATIONS OPEN BOX */}
                              <div className="applications-box">
                                   <h3>{t("common.applyFall")}</h3>
                                   <button className="apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>{t("common.startApplication")}</button>
                              </div>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>{t("admissionsExtra.sidebarTitle")}</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation" className="active-link">{t("admissions.pages.preFoundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation">{t("admissions.pages.foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/undergraduate">{t("admissions.pages.undergraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/postgraduate" className="active-link">{t("admissions.pages.postgraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/phd">{t("admissions.pages.phd")}</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>
     );
}
