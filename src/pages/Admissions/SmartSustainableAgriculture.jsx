import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import begzodImg from "../../images/begzod.png";

export default function SmartSustainableAgriculture() {
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
                              <Link to="/admissions/postgraduate">{t("admissions.pages.postgraduate")}</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">MSc Sustainable Agriculture and Food Security</span>
                         </div>
                         <h1>{t("admissions.pages.mscSustainable")}</h1>
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
                                        <p>{t("adm.courseSmart1")}</p>
                                        <p>{t("adm.courseSmart2")}</p>
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
                                             U1007 – Soil and the Environment<br></br>
                                             New – Data Science and Management<br></br>
                                             U1422 – Ecosystem Services and Sustainability<br></br>
                                             U1441 – Applied Animal Science<br></br>
                                             U1442 – Applied Plant Science<br></br>
                                             U1001 – English for Academic Purposes II (EAPII)<br></br>
                                             U1325 – Agriculture and Food Systems<br></br>
                                             U1445 – Innovation and Technology<br></br>
                                        </p>
                                        <h3>
                                             {t("admissionsExtra.yearTwo")}
                                        </h3>
                                        <i>
                                             <h3>
                                                  Core Modules
                                             </h3>
                                        </i>
                                        <p>
                                             U2004 – Professional Development<br></br>
                                             New – Managing Smart Agricultural Systems<br></br>
                                             U2011 – Introduction to Research Skills<br></br>
                                             U2373 – Agronomy<br></br>
                                             U2372 – Animal Health and Welfare<br></br>
                                             U2349 – The Resilience of Agro-Ecosystems<br></br>
                                        </p>
                                        <i>
                                             <h3>
                                                  Plus any two electives from the list below
                                             </h3>
                                        </i>
                                        <p>
                                             New – Regenerative Food Systems<br></br>
                                             New – Fresh Produce Production<br></br>
                                             New – Grassland and Forage Production<br></br>
                                             New – Fibre Production (Plant and Animal)<br></br>
                                             New – Urban and Controlled Environment Systems<br></br>
                                             New – Precision Agriculture<br></br>
                                        </p>
                                        <h3>
                                             {t("admissionsExtra.yearThree")}
                                        </h3>
                                        <i>
                                             <h3>
                                                  Core Modules
                                             </h3>
                                        </i>
                                        <p>
                                             U3004 – Research Project / Dissertation<br></br>
                                             U3330 – Technology and Agroecological Innovation<br></br>
                                             U3329 – Climate Change and Natural Resource Challenges<br></br>
                                             U3331 – Food Supply Systems and Policy<br></br>
                                             U3332 – Specialist Study (Shell Module)<br></br>
                                        </p>
                                        <i>
                                             <h3>
                                                  Plus any two electives from the list below
                                             </h3>
                                        </i>
                                        <p>
                                             New – Sustainable Farm Management<br></br>
                                             New – Agronomy Challenges and Solutions<br></br>
                                             New – Land Tenure and Governance<br></br>
                                             New – Livestock System Challenges and Solutions<br></br>
                                             New – Data Application and Innovation<br></br>
                                             New – Applied Agri-Finance<br></br>
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
