import React, { useState } from "react";
import "./AdmissionsShared.css";
import { Link } from "react-router-dom";
import heroImg from "../../images/campus.PNG";
import agriImg from "../../iau-images/1.png"; // Placeholder
import businessImg from "../../iau-images/2.png"; // Placeholder
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function Foundation() {
     const [activeTab, setActiveTab] = useState("courseContent");

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
                              <span>Admissions</span>
                              <span className="separator">&gt;</span>
                              <span className="current">Foundation</span>
                         </div>
                         <h1>Foundation</h1>
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
                                        Course content
                                   </button>
                                   <button
                                        className={`tab-btn ${activeTab === "entryRequirements" ? "active" : ""}`}
                                        onClick={() => setActiveTab("entryRequirements")}
                                   >
                                        Entry requirements
                                   </button>
                                   <button
                                        className={`tab-btn ${activeTab === "fees" ? "active" : ""}`}
                                        onClick={() => setActiveTab("fees")}
                                   >
                                        Fees
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
                                                       <h4>Agriculture Modules</h4>
                                                       <hr className="module-divider" />
                                                       <Link to="/admissions/agriculture" className="module-link" style={{ textDecoration: 'none' }}>See more →</Link>
                                                  </div>
                                             </div>

                                             <div className="module-card">
                                                  <div className="module-img-box">
                                                       <img src={businessImg} alt="Business Management Modules" />
                                                       <div className="module-strip solid-blue"></div>
                                                  </div>
                                                  <div className="module-info">
                                                       <h4>Business Management Modules</h4>
                                                       <hr className="module-divider" />
                                                       <Link to="/admissions/business-management" className="module-link" style={{ textDecoration: 'none' }}>See more →</Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             The following standard University entry requirements will be appropriate for the Foundation Year programme: IELTS Academic (UKVI version) min. overall 5.0, min. 5.0 in all subscores (5,0 in Writing) or the equivalent of either:
                                        </p>
                                        <p>
                                             43-58 – PTE 43-58 in all subscores (29-36 in Writing) 35-45 – TOEFL 16 in all subscores (14 in Writing) B1, B2 Level – CEFR (Common European Framework of Reference) 75-80 scores on Duolingo English Test
                                        </p>
                                        <p>
                                             Please note that University offers a Corinium Language Associates examination (developed on demand to test candidates of the International Agriculture University) for those who don’t have the above-mentioned certificates on a paid basis.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "fees" && (
                                   <div className="content-pane fade-in">
                                        <h2>Fees</h2>
                                        <p>
                                             Tuition Fees Uzb 29 900 000 UZS per year
                                        </p>
                                        <p>
                                             Tuition Fees International 3,700 USD per year
                                        </p>
                                        <p>
                                             Duration 1 year – full time
                                        </p>
                                   </div>
                              )}
                         </div>

                         {/* APPLICATIONS OPEN BOX */}
                         <div className="applications-box">
                              <h3>Applications for Fall 2026 are now open!</h3>
                              <button className="apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>Start Your Application →</button>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>Admissions</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation">Pre-Foundation</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation" className="active-link">Foundation</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/undergraduate">Undergraduate</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/postgraduate">Postgraduate</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/phd">PhD and DSc Programmes</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>
     );
}
