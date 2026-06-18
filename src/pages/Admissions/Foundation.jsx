import React, { useState } from "react";
import "./AdmissionsShared.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import heroImg from "../../images/campus.PNG";
import agriImg from "../../iau-images/1.png"; // Placeholder
import businessImg from "../../iau-images/2.png"; // Placeholder
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function Foundation() {
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
                         <div className="breadcrumbs">
                              <Link to="/">🏠</Link>
                              <span className="separator">&gt;</span>
                              <span>{t("admissions.breadAdmissions")}</span>
                              <span className="separator">&gt;</span>
                              <span className="current">{t("admissions.pages.foundation")}</span>
                         </div>
                         <h1>{t("admissions.pages.foundation")}</h1>
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
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box foundation-content">
                              {activeTab === "courseContent" && (
                                   <div className="content-pane fade-in">
                                        <div className="modules-grid">
                                             <div className="module-card">
                                                  <div className="module-img-box">
                                                       <img src={agriImg} alt="Agriculture Modules" />
                                                       <div className="module-strip blue"></div>
                                                  </div>
                                                  <div className="module-info">
                                                       <h4>{t("admissionsExtra.breadAgri")}</h4>
                                                       <hr className="module-divider" />
                                                       <Link to="/admissions/agriculture" className="module-link" style={{ textDecoration: 'none' }}>{t("common.seeMore")} →</Link>
                                                  </div>
                                             </div>

                                             <div className="module-card">
                                                  <div className="module-img-box">
                                                       <img src={businessImg} alt="Business Management Modules" />
                                                       <div className="module-strip solid-blue"></div>
                                                  </div>
                                                  <div className="module-info">
                                                       <h4>{t("admissionsExtra.breadBusiness")}</h4>
                                                       <hr className="module-divider" />
                                                       <Link to="/admissions/business-management" className="module-link" style={{ textDecoration: 'none' }}>{t("common.seeMore")} →</Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabEntry")}</h2>
                                        <p style={{whiteSpace:"pre-line"}}>{t("adm.foundEntry")}</p>
                                   </div>
                              )}

                              {activeTab === "fees" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabFees")}</h2>
                                        <p>{t("adm.feeUzbYear")}</p>
                                        <p>{t("adm.feeIntlYear")}</p>
                                        <p>
                                             {t("adm.dur1yr")}
                                        </p>
                                   </div>
                              )}
                         </div>

                         {/* APPLICATIONS OPEN BOX */}
                         <div className="applications-box">
                              <h3>{t("common.applyFall")}</h3>
                              <button className="apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>{t("common.startApplication")}</button>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>{t("admissionsExtra.sidebarTitle")}</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation">{t("admissions.pages.preFoundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation" className="active-link">{t("admissions.pages.foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/undergraduate">{t("admissions.pages.undergraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/postgraduate">{t("admissions.pages.postgraduate")}</Link>
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
