import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import baxtiyorImg from "../../images/baxtiyor.png";

export default function MScSustainableAgriculture() {
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
                                             The MSc Sustainable Agriculture and Food Security programme has been selected specifically to address the sustainability requirements in Uzbekistan’s Agriculture Development Strategy.  While supporting the transition of agriculture towards sustainable production systems is a global priority, the needs are acute in Uzbekistan and Middle Asia due to the increasingly extreme environmental conditions being accelerated by climate change.

                                             Developments in our understanding of how to farm sustainably through embracing the complexity of integrated systems offer many opportunities to improve both environmental and food security in Uzbekistan and across the region. Students completing this programme will thus gain a comprehensive appreciation of the wide range of new and innovative approaches to sustainable farming systems that combine crops and livestock with active management of the natural environment. In addition to the subject-specific material, all Masters students will have the opportunity to learn about entrepreneurship and business management.

                                             The programme attracts students from a wide range of backgrounds, experiences and ages. The diversity of the participants is an important dynamic in this programme and plays a key role in discussing and addressing the Sustainable Development Goals (SDG) related to food and farming. This diversity encourages new and alternative ways of rethinking agricultural and food systems, improving livelihoods and protecting the environment. Students within the programme learn key competencies that are relevant to public administration, international development/funding agencies, research and business sectors.
                                        </p>
                                   </div>
                              )}

                              {activeTab === "modules" && (
                                   <div className="content-pane fade-in">
                                        <h2>Modules</h2>
                                        <p>
                                             Throughout the programme, students will develop critical skills in observation, thinking and analysis to engage with the development of technology and innovation in agriculture and food. This will be enhanced by access to practical knowledge and commercial expertise acquired through contact with farm managers, organisations, employers and entrepreneurs.
                                        </p>
                                        <h3>
                                             Core Modules
                                        </h3>
                                        <p>
                                             U4413 – Research Skills<br></br>
                                             U4414 – Dissertation<br></br>
                                             New – Sustainable Agricultural Systems<br></br>
                                             New – International Rural Development and Food Security<br></br>
                                             New – Leadership and Business Strategy<br></br>
                                             New – Applied Natural and Environmental Science<br></br>
                                             New – English for Academic Purposes<br></br>
                                        </p>

                                        <h2>
                                             Careers and graduate destinations
                                        </h2>
                                        <p>
                                             This degree programme has been established in response to the Uzbekistan Government’s recognition of skills shortages in sustainable agriculture and food security, focussing on new knowledge about sustainable production systems and new approaches to addressing food justice and security. This will be of particular relevance to many agri-food professionals seeking to improve their skills and qualifications. A part-time route will be offered to meet the needs of these candidates.

                                             The degree will also be of interest to recent graduates in agriculture and agri-business who want to improve their knowledge and career potential. Graduates of this programme will have a wide range of career opportunities within agri-business, agri-environment, agriculture and food policy and production. This programme educates and trains professionals of the future with the specific skills required to gain access to these careers. This programme will be particularly attractive to students who wish to pursue a specialist career (e.g., as an organic or regenerative farmer or technical adviser).

                                             Studying sustainable agriculture and food security also develops the skills needed for other advanced careers in associated areas such as accountancy, land administration, law and the media. Alternatively, students may qualify for progression to postgraduate research either at the IAU or RAU or elsewhere.

                                             Graduates are likely to enter production, policy, and research and consultancy careers in the agricultural and food quality sector, within:

                                             The agricultural industry, as a farmer or agricultural consultant
                                             The food industry
                                             International organisations - United Nations (UN), Food and Agriculture Organization (FAO) etc
                                             Government departments
                                             NGOs internationally
                                             Research institutes
                                        </p>
                                   </div>
                              )}

                              {activeTab === "entryRequirements" && (
                                   <div className="content-pane fade-in">
                                        <h2>Entry requirements</h2>
                                        <p>
                                             The following standard University entry requirements will be appropriate for the MSc Sustainable Agriculture and Food Security programme:

                                             1. A minimum of GPA 3.0 which is equivalent to a 2.1 honours degree from a UK university.

                                             Mature candidates with significant relevant work experience and lower academic qualifications may also be considered for entry, following an interview with the programme managers.

                                             2. IELTS Academic (UKVI version) min. overall 6, band score is the conditional entry case for the postgraduate students. The candidates for the postgraduate degree with an overall  band score 6.5 are considered unconditionally accepted students.

                                             60 - 78 – TOEFL
                                             B2 Level – CEFR (Common European Framework of Reference)
                                             120-125 scores on Duolingo English Test
                                             Please note that University offers a Corinium Language Associates examination (developed on demand to test candidates of the International Agriculture University) for those who don’t have the above-mentioned certificates on a paid basis.

                                             OR: Obtained first degree in an English-speaking country;

                                             Obtained first degree from the International Agriculture University, Tashkent;

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
                                             Tuition Fees International 5.550 USD per course
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
