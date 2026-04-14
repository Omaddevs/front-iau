import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import javlonbekImg from "../../images/javlonbek-asrakulov.png";

export default function AgroLogistics() {
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
                              <Link to="/admissions/undergraduate">Undergraduate</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">BSc (Hons) Agro-Logistics</span>
                         </div>
                         <h1>BSc (Hons) Agro-Logistics</h1>
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
                                        <h2>Course content</h2>
                                        <p>
                                             BSc Agro-Logistics focuses on organisations of all kinds from multinational corporations to social enterprises and charities. This holistic approach ensures that students develop the skills to respond to the evolving needs of all businesses, irrespective of sector. Students on this pathway will develop logistics and operations management expertise from our team of internationally renowned researchers. They will introduce students to the practices of purchasing and supply, logistics and distribution and advanced operations management. With their support, students will build a skill set to respond to current developments and challenges in business and society, while preparing to launch a successful career in the logistics industry or pursue further postgraduate study and research.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>Modules</h2>
                                        <p>
                                             All our programmes provide practical skills and training opportunities, a focus on innovation and guidance for personal growth and development, insights into global challenges and perspectives, and the development and integration of research-informed teaching. Module content is designed to address the UN’s Sustainable Development Goals, reflecting our shared commitment to the national and global challenges of sustainability, climate change and reduced carbon / net zero aims.
                                        </p><br></br>
                                        <h3>
                                             Year one
                                        </h3>
                                        <p>
                                             U1021 – People and Organisations<br></br>
                                             U1015 – Business Finance<br></br>
                                             U1019 – Global Business Environment<br></br>
                                             U1018 – Principles of Marketing<br></br>
                                             U1020 – Principles of Economics<br></br>
                                             U1001 – English for Academic Purposes II <br></br>
                                             U1022 – Business Informatics<br></br>
                                             U1013 – Intro to the Agri-Food Industry
                                        </p>
                                        <h3>
                                             Year two
                                        </h3>
                                        <p>
                                             U2032 – Logistics Information Technology<br></br>
                                             U2017 – Practical E- Business and E-Commerce<br></br>
                                             U2011 – Introduction to Research Skills<br></br>
                                             U2004 – Personal and Professional Development Skills and Employability<br></br>
                                             U2018 – Operations Management<br></br>
                                             U2019 – Agricultural Products Logistics<br></br>
                                             U2020 – Supply Chain Management <br></br>
                                             U2021 – Logistics Systems Planning and Design
                                        </p>
                                        <h3>
                                             Year three
                                        </h3>
                                        <p>
                                             U3004 – Dissertation<br></br>
                                             U3016 – International Business Issues<br></br>
                                             U3017 – Smart Food Systems<br></br>
                                             U3018 – International Logistics Practice <br></br>
                                             U3019 – International Marketing<br></br>
                                             U3020 – Strategic Management<br></br>
                                             U3021 – Corporate Finance
                                        </p>
                                        <h2>
                                             Careers and graduate destinations
                                        </h2>
                                        <p>
                                             Upon graduation, students are aware of the importance of the pillars of sustainability, animal welfare and soil management to the success of the agricultural industry and the complex interaction between elements within an enterprise, and how these can be utilised to produce sustainable performance that has a positive impact on the success of the parent business.<br></br>
                                        </p>
                                        <p>
                                             You could progress into a range of careers including:<br></br>
                                        </p>
                                        <p>
                                             Agricultural policy<br></br>
                                             Farm management<br></br>
                                             Enterprise/unit operator in agricultural or production-based enterprises either domestically or internationally.<br></br>
                                             Food security and safety<br></br>
                                             Farm business / agricultural consultancy<br></br>
                                        </p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             Students completing successfully the BSc (Hons) Agriculture (Foundation Year) can progress to the BSc Farm Business Management degree. Meanwhile, the following standard University entry requirements will be appropriate for those who didn’t complete the Foundation Year of the current programme:<br></br>
                                        </p>
                                        <p>
                                             1. IELTS Academic (UKVI version) min. overall 6.0 with no element below 5.0 or the equivalent of either:<br></br>

                                             B1 Level – CEFR (Common European Framework of Reference)<br></br>
                                             85-90 scores on Duolingo English Test<br></br>
                                             Please note that University offers a Corinium Language Associates examination (developed on demand to test candidates of the International Agriculture University) for those who don’t have the above-mentioned certificates on a paid basis.<br></br>

                                             2. 104 UCAS Tariff points or the equivalent of either:<br></br>

                                             Successful completion of Year 2 (Transcript) from a University 4-year degree OR<br></br>
                                             Successful completion of Year 1 (Transcript) from a University 4-year degree<br></br>
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
                                             Duration 4 years – full time
                                        </p>
                                   </div>
                              )}

                              {/* {activeTab === "scholarships" && (
                                   <div className="content-pane fade-in">
                                        <h2>Scholarships</h2>
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
                                   <a href="mailto:javlonbek.asrakulov@iau.uz" className="profile-email-icon" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={javlonbekImg} alt="Javlonbek Asrakulov" />
                                   <div className="profile-info">
                                        <h4>Javlonbek Asrakulov</h4>
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
                                        <Link to="/admissions/undergraduate" className="active-link">Undergraduate</Link>
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
