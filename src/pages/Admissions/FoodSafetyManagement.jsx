import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import begzodImg from "../../images/begzod.png";

export default function FoodSafetyManagement() {
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
                              <Link to="/admissions/undergraduate">{t("admissions.pages.undergraduate")}</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">BSc (Hons) Food Safety Management</span>
                         </div>
                         <h1>{t("admissions.pages.foodSafety")}</h1>
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
                                        <p>{t("adm.courseFoodSafety")}</p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissionsExtra.tabModules")}</h2>
                                        <p>{t("adm.modulesIntro")}</p>
                                        <h3>
                                             {t("admissionsExtra.yearOne")}
                                        </h3>
                                        <p>
                                             U1021 – People and Organisations<br></br>
                                             U1015 – Business Finance<br></br>
                                             U1019 – Global Business Environment<br></br>
                                             U1018 – Principles of Marketing<br></br>
                                             U1020 – Principles of Economics<br></br>
                                             U1001 – English for Academic Purposes II (EAPII)<br></br>
                                             U1022 – Business Informatics<br></br>
                                             U1013 – Introduction to the Agri-Food Industry<br></br>
                                        </p>
                                        <h3>
                                             {t("admissionsExtra.yearTwo")}
                                        </h3>
                                        <p>
                                             U2031 – Food Science and Technology<br></br>
                                             U2017 – Practical E- Business and E-Commerce<br></br>
                                             U2011 – Introduction to Research Skills<br></br>
                                             U2004 – Personal and Professional Development Skills and Employability<br></br>
                                             U2018 – Operations Management<br></br>
                                             U2025 – Human Nutrition, Health and Society<br></br>
                                             U2026 – People, Food and Society<br></br>
                                             U2027 – Food Safety and Quality Management<br></br>
                                        </p>
                                        <h3>
                                             {t("admissionsExtra.yearThree")}
                                        </h3>
                                        <p>
                                             U3004 – Research Project / Dissertation<br></br>
                                             U3016 – International Business Issues<br></br>
                                             U3017 – Smart Food Systems<br></br>
                                             U3024 – Food, Ethics and Governance<br></br>
                                             U3025 – Inspiring Change in Policy and Practice<br></br>
                                             U3026 – Poverty and Food Security<br></br>
                                             U3027 – Facing the Global Challenges in Food and Agriculture<br></br>
                                        </p>
                                        <h2>
                                             {t("admissionsExtra.careers")}
                                        </h2>
                                        <p style={{whiteSpace:"pre-line"}}>{t("adm.careersDesc")}</p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabEntry")}</h2>
                                        <p style={{whiteSpace:"pre-line"}}>{t("adm.entryReqBsc")}</p>
                                   </div>
                              )}

                              {activeTab === "fees" && (
                                   <div className="content-pane fade-in">
                                        <h2>{t("admissions.tabFees")}</h2>
                                        <p>{t("adm.feeUzbYear")}</p>
                                        <p>{t("adm.feeIntlYear")}</p>
                                        <p>
                                             {t("adm.durBsc")}
                                        </p>
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
                                   <a href="mailto:bekhzod.kodirkhonov@iau.uz" className="profile-email-icon" title={t("x.sendEmail")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={begzodImg} alt="Bekhzod Kodirkhonov" />
                                   <div className="profile-info">
                                        <h4>Bekhzod Kodirkhonov</h4>
                                        <p>{t("x.headOfDepartment")}</p>
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
                                        <Link to="/admissions/undergraduate" className="active-link">{t("admissions.pages.undergraduate")}</Link>
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
