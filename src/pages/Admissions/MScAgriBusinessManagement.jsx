import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import baxtiyorImg from "../../images/baxtiyor.png";

export default function MScAgriBusinessManagement() {
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
                              <span className="current">MSc Agri-Business Management</span>
                         </div>
                         <h1>MSc Agri-Business Management</h1>
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
                                             The MSc Agri-Business Management programme has been selected because, although the agri-food sector is a key strategic industry in Uzbekistan, it is one in which there has been very little development of higher level and postgraduate skills, particularly in the wider field of agri-business. This is particularly the case with respect to entrepreneurship and business innovation. With the development of new agricultural clusters, there is now a clearer and more structured process for identifying education and training needs, with the current emphasis very much on entrepreneurship, business development, sustainability, technology, innovation and food security.

                                             A recent report by the USAID Agribusiness Development Program identified that there are currently no Level 7 programmes in Agri-Business Management available in Uzbekistan, despite the growing demand for these higher-level skills. IAU has thus been encouraged by USAID to develop a specialist MSc Agri-Business Management programme, with support and advice on programme development and marketing offered through Missouri State and Texas A&M Universities, which are partners in the USAID Agribusiness program.

                                             Although this programme will be taught at the International Agriculture University (IAU), Tashkent, it will be subject to the University’s rigorous quality assurance procedures which involve subject specialists and internal peer review of the course at periodic intervals, normally of 6 years. This process ensures that the programme engages with the applicable national Subject Benchmarks and references the Framework for Higher Education Qualifications.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>Modules</h2>
                                        <p>
                                             Throughout the programme, students will develop critical skills in observation, thinking and analysis in order to engage with the development of business strategy and innovation in agriculture and food. This will be enhanced by access to practical knowledge and commercial expertise acquired through contact with farm managers, organisations, employers and entrepreneurs.<br></br>
                                        </p>
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
                                             Careers and graduate destinations
                                        </h3>
                                        <p>
                                             This degree programme has been established in response to the Uzbekistan Government’s recognition of skills shortages in agri-business skills, as highlighted by the recent report from the USAID Agribusiness Program. This will be of particular relevance to many agri-food professionals seeking to improve their skills and qualifications. A part-time route will be offered to meet the needs of these candidates.<br></br>

                                             The degree will also be of interest to recent graduates in agriculture and in general business management who want to improve their knowledge and career potential. The degree will therefore open a range of career opportunities on a local, national and international level. Graduates have a wide range of career opportunities within the agri-food business sector, from food production through processing, marketing, distribution and sales.<br></br>

                                             This programme will educate and train the entrepreneurs and business professionals of the future with the specific skills required to gain access to these careers. Alternatively, students may qualify for progression to postgraduate research either at the IAU or RAU or elsewhere.<br></br>
                                        </p>
                                        <p>
                                             Graduates are highly likely to go on to pursue a career within:<br></br>
                                        </p>
                                        <p>
                                             The agricultural and environmental sectors<br></br>
                                             Industries allied to crop and animal production, processing and distribution<br></br>
                                             Business consultancy • Government and international agencies<br></br>
                                             The development of new companies through entrepreneurial initiatives<br></br>
                                             Doctoral study and an academic career<br></br>
                                             Research institutes<br></br>
                                        </p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             The following standard University entry requirements will be appropriate for the MSc Sustainable Agriculture and Food Security programme:<br></br>
                                        </p>
                                        <p>
                                             1. A minimum of GPA 3.0 which is equivalent to a 2.1 honours degree from a UK university.<br></br>

                                             Mature candidates with significant relevant work experience and lower academic qualifications may also be considered for entry, following an interview with the programme managers.<br></br>
                                        </p>
                                        <p>
                                             2. IELTS Academic (UKVI version) min. overall 6, IELTS
                                             Academic (UKVI version) min. overall 6, band score is the conditional entry
                                             case for the postgraduate students. The candidates for the postgraduate degree
                                             with an overall  band score 6.5 are considered unconditionally accepted
                                             students.IELTS Academic (UKVI version) min. overall 6, band score is the conditional entry case for the postgraduate students. The candidates for the postgraduate degree with an overall  band score 6.5 are considered unconditionally accepted students.
                                        </p>
                                        <p>
                                             60 - 78 – TOEFL<br></br>
                                             B2 Level – CEFR (Common European Framework of Reference)<br></br>
                                             120-125 scores on Duolingo English Test<br></br>
                                             Please note that University offers a Corinium Language Associates examination (developed on demand to test candidates of the International Agriculture University) for those who don’t have the above-mentioned certificates on a paid basis.<br></br>
                                             OR: Obtained first degree in an English-speaking country;<br></br>
                                             Obtained first degree from the International Agriculture University, Tashkent;<br></br>
                                             Pass RAU internal integrated English language proficiency (EAP reading and writing) test with 60%.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "fees" && (
                                   <div className="content-pane fade-in">
                                        <h2>Fees</h2>
                                        <p>
                                             Tuition Fees Uzb 44.800.000 UZS per course
                                        </p>
                                        <p>
                                             Tuition Fees International 5.550 USD per year
                                        </p>
                                        <p>
                                             Duration 1 year – full time & 2 year – part time<br></br>
                                        </p>
                                        <p>
                                             Tuition fees cover the cost of a student’s academic studies. This usually includes teaching costs, registration and examination fees (not repeat or trailing modules, re-sit fees or coursework resubmission). Any costs associated with work placements will be the student’s responsibility.
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
                                   <a href="mailto:bakhtiyorjon.abdusattarov@iau.uz" className="profile-email-icon" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={baxtiyorImg} alt="Dr. Abdusattarov Bakhtiyorjon" />
                                   <div className="profile-info">
                                        <h4>Dr. Abdusattarov Bakhtiyorjon</h4>
                                        <p>Head of Department of Master's and Scientific Research</p>
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
                                        <Link to="/admissions/postgraduate" className="active-link">Postgraduate</Link>
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
