import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import begzodImg from "../../images/begzod.png";

export default function AgricultureModules() {
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
                              <Link to="/admissions/foundation">Foundation</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">Agriculture Modules</span>
                         </div>
                         <h1>Agriculture Modules</h1>
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
                                        className={`tab-btn ${activeTab === "modules" ? "active" : ""}`}
                                        onClick={() => setActiveTab("modules")}
                                   >
                                        Modules
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
                                   <button
                                        className={`tab-btn ${activeTab === "scholarships" ? "active" : ""}`}
                                        onClick={() => setActiveTab("scholarships")}
                                   >
                                        Scholarships
                                   </button>
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box">
                              {activeTab === "courseContent" && (
                                   <div className="content-pane fade-in">
                                        <h2>Course content</h2>
                                        <p>
                                             The BSc (Hons) Agriculture (Foundation Year) produces graduates who understand the complexity of modern agriculture and land management and are capable of working within the sector in a variety of roles. Graduates will have been exposed to a range of agricultural practices and will be confident to assist with the practical application of production methods including agronomy, livestock and land management in modern global agriculture.
                                        </p>
                                        <p>
                                             Graduates will also be able to evaluate the use of contemporary technology and business management practices in agriculture and will be capable of applying their knowledge and understanding of the diversity of the agricultural sector to propose effective solutions to common industry problems.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>Modules</h2>
                                        <p>
                                             All our programmes provide practical skills and training opportunities, a focus on innovation and guidance for personal growth and development, insights into global challenges and perspectives, and the development and integration of research-informed teaching. Module content is designed to address the UN’s Sustainable Development Goals, reflecting our shared commitment to the national and global challenges of sustainability, climate change and reduced carbon / net zero aims.
                                        </p>
                                        <h3>
                                             Foundation Year
                                        </h3>
                                        <p>
                                             U0001 – English for Academic Purposes I (EAPI)<br></br>
                                             U0005 – Agro-Bioscience<br></br>
                                             U0002 – Digital Skills<br></br>
                                             U0004 – Agri-food Business and Marketing<br></br>
                                             U0003 – Sustainable Development<br></br>
                                             U0006 – Agriculture and Farming<br></br>
                                        </p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             The following standard University entry requirements will be appropriate for the Foundation Year programme:
                                             1. IELTS Academic (UKVI version) min. overall 5.0, min. 5.0 in all subscores (5,0 in Writing) or the equivalent of either:

                                             43-58 – PTE 43-58 in all subscores (29-36 in Writing)
                                             35-45 – TOEFL 16 in all subscores (14 in Writing)
                                             B1, B2 Level – CEFR (Common European Framework of Reference)
                                             75-80 scores on Duolingo English Test
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

                              {activeTab === "scholarships" && (
                                   <div className="content-pane fade-in">
                                        <h2>Scholarships</h2>
                                        <p>
                                             The International Agriculture University offers scholarships and grants for local students. Grantees will have an opportunity to study postgraduate or undergraduate courses with 0 tuition fee, covered by the Ministry of Agriculture. Currently, local students of the International Agriculture University are able to apply for scholarships from the Ministry of Agriculture and more.
                                        </p>
                                   </div>
                              )}
                         </div>

                         {/* BOTTOM ROW: PROFILE & APPLICATIONS */}
                         <div className="agri-bottom-row">
                              {/* PROFILE CARD */}
                              <div className="profile-card">
                                   <a href="mailto:bekhzod.kodirkhonov@iau.uz" className="profile-email-icon" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={begzodImg} alt="Bekhzod Kodirkhonov" />
                                   <div className="profile-info">
                                        <h4>Bekhzod Kodirkhonov</h4>
                                        <p>Head of Department</p>
                                   </div>
                              </div>

                              {/* APPLICATIONS OPEN BOX */}
                              <div className="applications-box">
                                   <h3>Applications for Fall 2026 are now open!</h3>
                                   <button className="apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>Start Your Application →</button>
                              </div>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>Admissions</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation" className="active-link">Pre-Foundation</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation">Foundation</Link>
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
