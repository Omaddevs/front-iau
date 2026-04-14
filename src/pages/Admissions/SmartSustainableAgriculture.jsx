import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import begzodImg from "../../images/begzod.png";

export default function SmartSustainableAgriculture() {
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
                              <Link to="/admissions/postgraduate">Postgraduate</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">MSc Sustainable Agriculture and Food Security</span>
                         </div>
                         <h1>MSc Sustainable Agriculture and Food Security</h1>
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
                                             The BSc (Hons) Smart Sustainable Agriculture  produces graduates who understand the complexity of modern agriculture and land management and are capable of working within the sector in a variety of roles. Graduates will have been exposed to a range of agricultural practices and will be confident to assist with the practical application of production methods including agronomy, livestock and land management in modern global agriculture.
                                        </p>
                                        <p>
                                             This is a multi-disciplinary degree programme combining the study of management with agricultural processes, giving you an understanding of the economic and business principles that underlie management and its application to agricultural and land-based industries.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>Modules</h2>
                                        <p>
                                             All our programmes provide practical skills and training opportunities, a focus on innovation and guidance for personal growth and development, insights into global challenges and perspectives, and the development and integration of research-informed teaching. Module content is designed to address the UN’s Sustainable Development Goals, reflecting our shared commitment to the national and global challenges of sustainability, climate change and reduced carbon / net zero aims.<br></br>
                                        </p>
                                        <h3>
                                             Year one
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
                                             Year two
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
                                             Year three
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
                                             Careers and graduate destinations
                                        </h2>
                                        <p>
                                             Upon graduation, students are aware of the importance of the pillars of sustainability, animal welfare and soil management to the success of the agricultural industry and the complex interaction between elements within an enterprise, and how these can be utilised to produce sustainable performance that has a positive impact on the success of the parent business.<br></br>
                                             You could progress into a range of careers including:<br></br>
                                             Livestock nutrition<br></br>
                                             Herd/flock health planning<br></br>
                                             Biosecurity<br></br>
                                             Agricultural policy<br></br>
                                             Research<br></br>
                                             Farm management<br></br>
                                             Food and Fibre processing<br></br>
                                             Food security and safety<br></br>
                                             Agricultural consultancy<br></br>
                                        </p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             Students completing successfully the BSc (Hons) Agriculture (Foundation Year) can progress to the BSc Farm Business Management degree. Meanwhile, the following standard University entry requirements will be appropriate for those who didn’t complete the Foundation Year of the current programme:<br></br>
                                             1. IELTS Academic (UKVI version) min. overall 5.0 with no element below 5.0 or the equivalent of either:<br></br>
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
