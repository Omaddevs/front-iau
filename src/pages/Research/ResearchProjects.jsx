import React, { useState } from "react";
import "./ResearchProjects.css";
import img1 from "../../research-images/3.png";
import img2 from "../../research-images/4.png";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function ResearchProjects() {
     const [selectedProject, setSelectedProject] = useState(null);

     const projects = [
          {
               title: "Diana",
               image: img1,
               description: (
                    <div className="rp-project-details">
                         <h4>Empowering Women through the Development and Implementation of Rural Tourism Entrepreneurship in Kazakhstan and Uzbekistan</h4>
                         <p><strong>Project goal:</strong> aims to empower rural women in Kazakhstan and Uzbekistan by developing and implementing rural tourism entrepreneurship courses. The project seeks to equip women and tourism students with essential entrepreneurial, digital, and tourism-related skills, enabling them to create sustainable income opportunities, increase employment, and support inclusive economic growth in rural communities.</p>
                         <p><strong>Tasks of the project:</strong></p>
                         <ul>
                              <li>Project management and coordination</li>
                              <li>Staff capacity building.</li>
                              <li>Designing course on Rural tourism entrepreneurship including 4 modules for two target groups</li>
                              <li>Students enrolment and course implementation.</li>
                              <li>Quality Plan: Evaluation and Improvement.</li>
                              <li>Dissemination & Exploitation</li>
                         </ul>
                         <p><strong>Expected results and effect of the project:</strong></p>
                         <ul>
                              <li>Improved skills and capacities of rural women and tourism students through tailored training modules in rural tourism entrepreneurship, digital tools, and business development.</li>
                              <li>Increased employment and self-employment opportunities for rural women by supporting them in creating and managing tourism-related micro-businesses and services.</li>
                              <li>Development and implementation of a structured rural tourism entrepreneurship course, including practical modules adapted to the needs of two target groups: university students and self-employed women.</li>
                              <li>Strengthened role of universities in supporting local development through entrepreneurship education, mentorship, and collaboration with stakeholders.</li>
                              <li>Enhanced quality and attractiveness of rural tourism products and services, promoting local culture, traditions, handicrafts, and rural lifestyles as authentic tourism experiences.</li>
                              <li>Reduction of social and economic inequalities by improving women’s access to education, training, and income-generating activities in rural areas.</li>
                              <li>Contribution to sustainable tourism development aligned with the UN Sustainable Development Goals, particularly SDG 4 (Quality Education), SDG 5 (Gender Equality), and SDG 8 (Decent Work and Economic Growth).</li>
                         </ul>
                         <p><strong>Partner Universities:</strong></p>
                         <ol>
                              <li>U.Alikhanov atyndagy kokshetau memlekettik universiteti - Kazakistan</li>
                              <li>Universidade Portucalense Infante D Henrique - Portugal</li>
                              <li>Hochschule Wismar - Germany</li>
                              <li>North Kazakhstan State University Named After Manash Kozybayev - Kazakistan</li>
                              <li>D.Serikbayev East Kazakhstan Technical University – Kazakistan</li>
                              <li>Kazakh academy of Sport and Tourism - Kazakistan</li>
                              <li>International Agriculture University - Uzbekistan</li>
                              <li>Silk Road International University Of Tourism And Cultural Heritage - Uzbekistan</li>
                              <li>Nukus State Technical University - Uzbekistan</li>
                              <li>Chamber of Entrepreneurs of Akmola region Atameken – Kazakistan</li>
                              <li>Association of Women Enretpreneurs - Uzbekistan</li>
                         </ol>
                         <br />
                         <p><strong>Period of the project:</strong> 01.11.2025 – 31.10.2028.</p>
                         <p><strong>Total cost of the project:</strong> 397 788.89 Euro</p>
                         <div style={{ marginTop: "20px" }}>
                              <p style={{ marginBottom: "5px" }}><strong>Coordinator:</strong> Baxtiyorjon Abdusattorov</p>
                              <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: 0 }}>
                                   <li><b>Position:</b> Head of Department of Master’s and Scientific Research.</li>
                                   <li><b>Phone:</b> +998 91 344 54 42; +998 55 517 0071;</li>
                                   <li><b>Email:</b> <a href="mailto:Bakhtiyor.Abdusattarov@rau.ac.uk">Bakhtiyor.Abdusattarov@rau.ac.uk</a></li>
                              </ul>
                         </div>
                    </div>
               )
          },
          {
               title: "Leslie",
               image: img2,
               description: (
                    <div className="rp-project-details">
                         <h4>Land management, Environment & Solid-waste: inside education and business in Central Asia</h4>
                         <p><strong>Project goal:</strong> to strengthen the capacity of higher education institutions in Kazakhstan and Uzbekistan by developing and implementing innovative micro-credentials and digital learning tools in the field of Sustainable Land Management (SLM). The project aims to modernize BSc and MSc educational programmes, create an integrated online SLM repository, and establish a regional hub and learning incubator that connects universities with regulators and industry needs, supporting green transition and digital transformation in Central Asia.</p>
                         <p><strong>Tasks of the project:</strong></p>
                         <ol>
                              <li>To ensure that decisions are taken on a basis of parity, the partners will establish a governance structure that includes men and women equally as representatives of the associated partners.</li>
                              <li>To develop the Project Benchmarking Procedure and establish the performance indicators.</li>
                              <li>To ensure that all activities of the project are compliant with the approved grant and the contractual requirements, as well as to facilitate that the project objectives are fulfilled at the highest quality and in the most effective ways.</li>
                              <li>To have an objective perspective of an external evaluator on project implementation, progress and impact, in order to provide the participating institutions with impartial monitoring and evaluation of their activities.</li>
                         </ol>
                         <p><strong>Expected results and effect of the project:</strong></p>
                         <ol>
                              <li>Creation of a Sustainable Land Management (SLM) Hub in Kazakhstan and Uzbekistan, bringing together universities and key stakeholders to strengthen regional cooperation and knowledge exchange.</li>
                              <li>Development and implementation of innovative micro-credentials on SLM, ensuring flexible and up-to-date training opportunities aligned with international standards and labour market demands.</li>
                              <li>Production of digital didactic tools and online educational resources to support BSc and MSc programmes, enhancing access to high-quality learning materials and improving digital teaching capacities.</li>
                              <li>Establishment of a Single Online SLM Repository (Toolbox) that integrates all training content and supports long-term use, replication, and sustainability of project outputs.</li>
                              <li>Development of a Pilot Future Learning Incubator, applying innovative STEHEAM-based teaching approaches to engage future students and promote forward-looking learning towards 2030.</li>
                              <li>Improved alignment between universities, regulators, and industries, ensuring that graduates gain relevant competences and that educational programmes respond to real policy and market needs.</li>
                              <li>Contribution to the European Green Deal and sustainability goals, promoting environmentally responsible land management and supporting climate resilience in Central Asia.</li>
                              <li>Strengthened digital transformation of HEIs, enhancing institutional readiness for online and blended learning, and improving the quality and efficiency of education delivery.</li>
                              <li>Long-term impact on sustainable development and environmental protection, by preparing a new generation of skilled professionals capable of supporting smart, sustainable, and inclusive growth in the region.</li>
                         </ol>
                         <p><strong>Partner Universities:</strong></p>
                         <ol>
                              <li>Universitat Politecnica De Valencia (UPV), Spain</li>
                              <li>Universita Degli Studi Di Cassino E Del Lazio Meridionale (Unicas) - Italy</li>
                              <li>University of Cyprus (UCY), Cyprus</li>
                              <li>Sh.U.Alikhanov atyndagy Kokshetau Memlekettik Universiteti (KOKSU) – Kazakistan</li>
                              <li>Non commercial Joint Stock Company Kazakh National university Names after Al-farabi (KAZNU) – Kazakistan</li>
                              <li>Institution Khoja Akhmet Yassawi International Kazakh Turkish University (AYU) - Kazakistan</li>
                              <li>The Regional Environmental Centre For Central Asia-Association (CAREC) - Kazakistan</li>
                              <li>Ministry of Education and Science (MSHERK) - Kazakistan</li>
                              <li>Fargona Politexnika Instituti (FPI) Uzbekistan</li>
                              <li>Toshkent irrigasiya va qishloq xo‘jaligini mexanizatsiyalash Muhandislari instituti (TIIAME-NRU) – Uzbekistan</li>
                              <li>Toshkent irrigatsiya va qishloq xojaligini mexanizatsiyalash muhandislari instituti milliy tadqiqot universiteti buxoro tabiiy resurslarni (BINRM-TIIAME) - Uzbekistan</li>
                              <li>Buxoro davlat universiteti (BSU) - Uzbekistan</li>
                              <li>International Agriculture University (IAU) - Uzbekistan</li>
                              <li>Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan (MHESIRU) – Uzbekistan</li>
                         </ol>
                         <div style={{ marginTop: "20px" }}>
                              <p style={{ marginBottom: "5px" }}><strong>Coordinator:</strong> Baxtiyorjon Abdusattorov</p>
                              <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: 0 }}>
                                   <li><b>Position:</b> Head of Department of Master’s and Scientific Research.</li>
                                   <li><b>Phone:</b> +998 91 344 54 42; +998 55 517 0071;</li>
                                   <li><b>Email:</b> <a href="mailto:Bakhtiyor.Abdusattarov@rau.ac.uk">Bakhtiyor.Abdusattarov@rau.ac.uk</a></li>
                              </ul>
                         </div>
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
          <div className="rp-page">
               <div className="rp-hero">
                    <video className="rp-hero-video" autoPlay loop muted playsInline>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="rp-hero-overlay"></div>
                    <h1 className="rp-title">Research Projects</h1>
               </div>
               <div className="rp-container">
                    <div className="rp-tabs-container">
                         <div className="rp-tabs">
                              <div className="rp-tab active">Research Projects</div>
                         </div>
                    </div>

                    <div className="rp-content-layout">
                         <div className="rp-projects-column">
                              <div className="rp-grid">
                                   {projects.map((project, idx) => (
                                        <div key={idx} className="rp-card" onClick={() => openModal(project)} style={{ cursor: "pointer" }}>
                                             <div className="rp-img-box">
                                                  <img src={project.image} alt={project.title} />
                                                  <div className="rp-strip blue"></div>
                                             </div>
                                             <div className="rp-card-content">
                                                  <h3 className="rp-card-title">{project.title}</h3>
                                                  <hr className="rp-divider" />
                                                  <button className="rp-link">See more &rarr;</button>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    <div className="rp-applications-box">
                         <h3>Applications for Fall 2026 are now open!</h3>
                         <button className="rp-apply-btn" onClick={() => window.open("https://iau-admission.tilda.ws", "_blank")}>
                              Start Your Application &rarr;
                         </button>
                    </div>
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
