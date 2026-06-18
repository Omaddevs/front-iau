import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ResearchProjects.css";
import "./ScientificCouncil.css";
import img1 from "../../research-images/3.png";
import img2 from "../../research-images/4.png";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function ResearchProjects() {
     const [selectedProject, setSelectedProject] = useState(null);
     const { t } = useLanguage();

     const partners1 = [
          "U.Alikhanov atyndagy kokshetau memlekettik universiteti - Kazakistan",
          "Universidade Portucalense Infante D Henrique - Portugal",
          "Hochschule Wismar - Germany",
          "North Kazakhstan State University Named After Manash Kozybayev - Kazakistan",
          "D.Serikbayev East Kazakhstan Technical University – Kazakistan",
          "Kazakh academy of Sport and Tourism - Kazakistan",
          "International Agriculture University - Uzbekistan",
          "Silk Road International University Of Tourism And Cultural Heritage - Uzbekistan",
          "Nukus State Technical University - Uzbekistan",
          "Chamber of Entrepreneurs of Akmola region Atameken – Kazakistan",
          "Association of Women Enretpreneurs - Uzbekistan",
     ];
     const partners2 = [
          "Universitat Politecnica De Valencia (UPV), Spain",
          "Universita Degli Studi Di Cassino E Del Lazio Meridionale (Unicas) - Italy",
          "University of Cyprus (UCY), Cyprus",
          "Sh.U.Alikhanov atyndagy Kokshetau Memlekettik Universiteti (KOKSU) – Kazakistan",
          "Non commercial Joint Stock Company Kazakh National university Names after Al-farabi (KAZNU) – Kazakistan",
          "Institution Khoja Akhmet Yassawi International Kazakh Turkish University (AYU) - Kazakistan",
          "The Regional Environmental Centre For Central Asia-Association (CAREC) - Kazakistan",
          "Ministry of Education and Science (MSHERK) - Kazakistan",
          "Fargona Politexnika Instituti (FPI) Uzbekistan",
          "Toshkent irrigasiya va qishloq xo‘jaligini mexanizatsiyalash Muhandislari instituti (TIIAME-NRU) – Uzbekistan",
          "Toshkent irrigatsiya va qishloq xojaligini mexanizatsiyalash muhandislari instituti milliy tadqiqot universiteti buxoro tabiiy resurslarni (BINRM-TIIAME) - Uzbekistan",
          "Buxoro davlat universiteti (BSU) - Uzbekistan",
          "International Agriculture University (IAU) - Uzbekistan",
          "Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan (MHESIRU) – Uzbekistan",
     ];

     const CoordinatorBlock = () => (
          <div style={{ marginTop: "20px" }}>
               <p style={{ marginBottom: "5px" }}><strong>{t("adm.rpCoordinator")}</strong> Baxtiyorjon Abdusattorov</p>
               <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: 0 }}>
                    <li><b>{t("adm.rpPosition")}</b> {t("x.headOfDeptResearch")}.</li>
                    <li><b>{t("adm.rpPhone")}</b> +998 91 344 54 42; +998 55 517 0071;</li>
                    <li><b>{t("adm.rpEmail")}</b> <a href="mailto:Bakhtiyor.Abdusattarov@rau.ac.uk">Bakhtiyor.Abdusattarov@rau.ac.uk</a></li>
               </ul>
          </div>
     );

     const projects = [
          {
               title: "Diana",
               image: img1,
               description: (
                    <div className="rp-project-details">
                         <h4>{t("adm.rp1Title")}</h4>
                         <p><strong>{t("adm.rpGoal")}</strong> {t("adm.rp1Goal")}</p>
                         <p><strong>{t("adm.rpTasks")}</strong></p>
                         <ul>
                              {t("adm.rp1Tasks").map((item, i) => <li key={i}>{item}</li>)}
                         </ul>
                         <p><strong>{t("adm.rpResults")}</strong></p>
                         <ul>
                              {t("adm.rp1Results").map((item, i) => <li key={i}>{item}</li>)}
                         </ul>
                         <p><strong>{t("adm.rpPartners")}</strong></p>
                         <ol>
                              {partners1.map((item, i) => <li key={i}>{item}</li>)}
                         </ol>
                         <br />
                         <p><strong>{t("adm.rpPeriod")}</strong> 01.11.2025 – 31.10.2028.</p>
                         <p><strong>{t("adm.rpCost")}</strong> 397 788.89 Euro</p>
                         <CoordinatorBlock />
                    </div>
               )
          },
          {
               title: "Leslie",
               image: img2,
               description: (
                    <div className="rp-project-details">
                         <h4>{t("adm.rp2Title")}</h4>
                         <p><strong>{t("adm.rpGoal")}</strong> {t("adm.rp2Goal")}</p>
                         <p><strong>{t("adm.rpTasks")}</strong></p>
                         <ol>
                              {t("adm.rp2Tasks").map((item, i) => <li key={i}>{item}</li>)}
                         </ol>
                         <p><strong>{t("adm.rpResults")}</strong></p>
                         <ol>
                              {t("adm.rp2Results").map((item, i) => <li key={i}>{item}</li>)}
                         </ol>
                         <p><strong>{t("adm.rpPartners")}</strong></p>
                         <ol>
                              {partners2.map((item, i) => <li key={i}>{item}</li>)}
                         </ol>
                         <CoordinatorBlock />
                    </div>
               )
          }
     ];

     const openModal = (project) => {
          setSelectedProject(project);
          document.body.style.overflow = "hidden";
     };

     const closeModal = () => {
          setSelectedProject(null);
          document.body.style.overflow = "auto";
     };

     return (
          <div className="sc-page">
               <div className="sc-hero">
                    <video className="sc-hero-video" autoPlay loop muted playsInline>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="sc-hero-overlay"></div>
                    <div className="sc-hero-content">
                         <h1 className="sc-title">{t("research.heroResearchProjects")}</h1>
                    </div>
               </div>

               <div className="sc-container">
                    <div className="sc-main">
                         <div className="sc-tabs-container">
                              <div className="sc-tabs">
                                   <div className="sc-tab active">{t("x.projectsTab")}</div>
                              </div>
                         </div>

                         <div className="rp-grid" style={{ marginTop: "20px" }}>
                              {projects.map((project, idx) => (
                                   <div key={idx} className="rp-card" onClick={() => openModal(project)} style={{ cursor: "pointer" }}>
                                        <div className="rp-img-box">
                                             <img src={project.image} alt={project.title} />
                                             <div className="rp-strip blue"></div>
                                        </div>
                                        <div className="rp-card-content">
                                             <h3 className="rp-card-title">{project.title}</h3>
                                             <hr className="rp-divider" />
                                             <button className="rp-link">{t("common.seeMore")} &rarr;</button>
                                        </div>
                                   </div>
                              ))}
                         </div>

                         <div className="rp-applications-box" style={{ marginTop: "40px" }}>
                              <h3>{t("common.applyFall")}</h3>
                              <button className="rp-apply-btn" onClick={() => window.open("https://iau-admission.tilda.ws", "_blank")}>{t("common.startApplication")}</button>
                         </div>
                    </div>

                    <aside className="sc-sidebar">
                         <div className="sc-sidebar-box">
                              <h4 className="sc-sidebar-title">{t("researchExtra.sidebarResearch")}</h4>
                              <ul className="sc-sidebar-menu">
                                   <li>
                                        <Link to="/research/scientific-council">{t("research.heroScientificCouncil")}</Link>
                                   </li>
                                   <li className="active">
                                        <Link to="/research/research-projects">{t("research.heroResearchProjects")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/research/research-publication">{t("research.heroResearchPublication")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/research/gucae">{t("researchExtra.gucaeTitle")}</Link>
                                   </li>
                              </ul>
                         </div>
                    </aside>
               </div>

               {selectedProject && (
                    <div className="rp-modal-overlay" onClick={closeModal}>
                         <div className="rp-modal-content" onClick={(e) => e.stopPropagation()}>
                              <button className="rp-modal-close" onClick={closeModal}>&times;</button>
                              <img src={selectedProject.image} alt={selectedProject.title} className="rp-modal-img" />
                              <h2 className="rp-modal-title">{selectedProject.title}</h2>
                              <div className="rp-modal-desc">{selectedProject.description}</div>
                         </div>
                    </div>
               )}
          </div>
     );
}
