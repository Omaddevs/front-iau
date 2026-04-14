import React, { useState } from "react";
import "./AdmissionsShared.css";
import { Link } from "react-router-dom";
import heroImg from "../../images/campus.PNG";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function PreFoundation() {
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
                         <h1>Pre-Foundation</h1>
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
                         <div className="tab-content-box">
                              {activeTab === "courseContent" && (
                                   <div className="content-pane fade-in">
                                        <h2>Course content</h2>
                                        <p>
                                             The Pre-foundation course aims to improve students' academic English abilities to improve their performance in the Foundation year. Through the development of reading, writing, listening, and speaking abilities in several modalities and within English HE educational, subject-relevant agri-business vocabulary, and cultural settings, simultaneously an introduction to the norms of academic English will be offered.
                                        </p>
                                        <p>
                                             As a logical path, Oxford English for Academic Purposes Level B1 Pre-Intermediate is proposed to give continuity to the course, the book consists of 10 units that cover important aspects of academic study subject areas. Additionally, students are going to have workshops, clubs and lectures on different topics such as digital and communication skills.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             Registered applicants will be provided with a Diagnostic test to identify their level of English proficiency. The results of the Diagnostic test will be delivered in 24 hours or less. The result of the test should be a minimum equivalent of Elementary 2 Level, which is:
                                        </p>
                                        <p>
                                             A2 Level – CEFR (Common European Framework of Reference) 0 IELTS score (International English Language Testing System) 55-60 scores on Duolingo English Test
                                        </p>
                                        <p>
                                             The application form can be found at the end of the page to register.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "fees" && (
                                   <div className="content-pane fade-in">
                                        <h2>Fees</h2>
                                        <p>
                                             The tuition fee for the Pre-foundation course is U 3 594 000 (can be paid monthly U 599 000), it covers 6 months of academic study and includes teaching costs, registration and examination fees.
                                        </p>
                                        <p>
                                             Please note that the tuition fee includes a one-time Corinium Language Associates examination (developed on demand to test candidates of the International Agriculture University) fee only.
                                        </p>
                                        <p>
                                             Scholarships
                                        </p>
                                        <p>
                                             Currently, scholarship is not available for short courses. Register here, to receive news about our short courses.
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
