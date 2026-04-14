import React, { useState } from "react";
import "./ResearchProjects.css";

import img1 from "../../research-images/3.png";
import img2 from "../../research-images/4.png";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function ResearchProjects() {
     const [selectedProject, setSelectedProject] = useState(null);
     const [openPubYear, setOpenPubYear] = useState(null);

     const togglePubYear = (year) => {
          setOpenPubYear(openPubYear === year ? null : year);
     };

     const publicationsData = [
          {
               year: "2026",
               items: [
                    { text: "Egamberdiev B. et al. (2026). Consequences of increased farm resilience on food security in Tajikistan. Food Security.", link: "https://doi.org/10.1007/s12571-026-01668-3" },
                    { text: "Alimov J. et al. (2026). Shifting drivers of holocene fire regimes in Uzbekistan: From natural factors to anthropogenic impact.", link: "https://doi.org/10.1016/j.ancene.2026.100531" },
                    { text: "Alimov J. et al. (2026). BrGDGT-based palaeothermometer in drylands: the necessity to constrain aridity and salinity as confounding factors to ensure the robustness of calibrations.", link: "https://doi.org/10.5194/bg-23-1013-2026" },
                    { text: "Alimov J. et al. (2026). Mid-Holocene wet optimum and Early-Late Holocene arid phases shaped steppe-forest vegetation and human societies of Uzbekistan: Multi-proxy evidence from Lake Fazilman.", link: "https://doi.org/10.1016/j.catena.2025.109759" },
                    { text: "Primov A. (2026). Assessing the current state of food security in Uzbekistan: trends, challenges, and policy implications. Working paper.", link: "https://hdl.handle.net/10419/334548" }
               ]
          },
          {
               year: "2025",
               items: [
                    { text: "Sergei Ya. (2025). Phycoremediation Using Freshwater Algae and Safe Ecology In: Remediation of Pollution and Climatic Changes to Avoid Environmental Risks. Springer Nature", link: "" },
                    { text: "Sergei Ya. (2025). Selenium Metabolism in Crops. In: Selenium in Sustainable Agriculture: A Soil to Spoon Prospective. Bood chapter. Springer Nature", link: "" },
                    { text: "Nurullaev A. et al. (2025). Determinants of Market Participation among Milk Producers in Kyrgyzstan. Cambridge University Press.", link: "https://doi.org/10.1017/aae.2024.35" },
                    { text: "Alimov J et al. (2025). Exploring the Potential of Trichoderma harzianum THNUU‑1 for bio‑Valorization of Agricultural Waste Springer Nature", link: "https://link.springer.com/article/10.1007/s12649-025-02896-y" },
                    { text: "M.Aminova et al. (2025). Integrity and Transparency in Sports: A Survey Review. The Open Sports Sciences Journal", link: "http://dx.doi.org/10.2174/011875399X353976250203045235" },
                    { text: "Michael Brody et al. (2025). A Year Marked by Extreme Precipitation and Floods: Weather and Climate Extremes in 2024. Advances in Atmospheric Sciences", link: "https://link.springer.com/article/10.1007/s00376-025-4540-4" },
                    { text: "Egamberdiev B. et al. (2025). Women’s Empowerment in Agriculture for Nutritional and Food Security Benefits in Tajikistan: Latent Analysis Approach. EconStore", link: "https://hdl.handle.net/10419/312281" },
                    { text: "Egamberdiev B. et al. (2025). The Resilience Paradox: A Climate Change Coping Mechanism in the Farm Households from Samarkand Region of Uzbekistan. Working paper.", link: "https://hdl.handle.net/10419/313179" },
                    { text: "Primov A. (2025). Crop Diversification Analysis at the Farm Level: Empirical Evidence from Different Regions of Uzbekistan. Working paper.", link: "https://hdl.handle.net/10419/313532" },
                    { text: "Primov A. (2025). Status and Extent of Crop Diversification Index in Uzbekistan and its Empirical Analysis. Working paper.", link: "https://hdl.handle.net/10419/313531" },
                    { text: "Xamidov I, Egamberdiev B. (2025). Public perception of environmental problems in Central Asia: results from the Life in Transition survey. Working paper.", link: "https://hdl.handle.net/10419/314939" },
                    { text: "Yuldashev I. et al. (2025). Modeling And Numerical Solution of Liquid Filtration Processes in Multilayer Oil Fields. Rezekne Academy of Technologies.", link: "https://doi.org/10.17770/etr2025vol2.8594" },
                    { text: "A. Artikova et al. (2025). Industrial Pollution and PM2.5 analyses in Oskemen. Working paper.", link: "https://hdl.handle.net/10419/316141" },
                    { text: "Alimov J. et al. (2025). First paleoenvironmental calibrations for modern pollen rain of Tajikistan and Uzbekistan: A case study of pollen-vegetation functional biogeography of Arid Central Asia. Global and Planetary Change.", link: "https://doi.org/10.1016/j.gloplacha.2025.104857" },
                    { text: "Alimov J. et al. (2025). Eco‑Friendly Biodegradation of Plant Biomass Using Multienzyme‑Producing Trichoderma harzianum for Sustainable Feed Improvement. Waste and Biomass Valorization.", link: "https://link.springer.com/article/10.1007/s12649-025-03132-3" },
                    { text: "Michael B. et al. (2025). Central Asian Compound Flooding in 2024 Contributed by Climate Warming and Interannual Variability. Advances in Atmospheric Sciences.", link: "https://link.springer.com/article/10.1007/s00376-025-4425-6" },
                    { text: "Egamberdiev B. et al. (2025). Institutional Trust and Subjective Well‑Being in Post‑Soviet Countries. Comparative Economic Studies.", link: "https://doi.org/10.1057/s41294-025-00259-z" },
                    { text: "Kodirkhonov B. (2025) Certificates or Safety? Unpacking the effectiveness of Food Safety Management Systems. Working paper.", link: "https://hdl.handle.net/10419/323484" },
                    { text: "Mirakbarova Z. et al. (2025). Discovery and expression of insecticidal proteins via genome mining of novel Bacillus thuringiensis strain Bt1Fo. Front. Microbiol.", link: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2025.1679336/full" },
                    { text: "Asrorov A. et al. (2025). Molecular mechanisms of the phytoimmune system against Fusarium oxysporum f.sp. vasinfectum and Verticillium dahliae in cotton plants. Plant Science Today.", link: "https://doi.org/10.14719/pst.8872" },
                    { text: "Asrorov A. et al. (2025). Recent efforts to increase Soybean (Glycine max L.) tolerance to abiotic stresses using CRISPR-Cas technology. Plant Science Today", link: "https://doi.org/10.14719/pst.8822" },
                    { text: "Egamberdiev B. et al. (2025). Public perception of environmental problems in Central Asia: results from the Life in Transition survey, MPRA Munich Personal RePEc Archive.", link: "https://hdl.handle.net/10419/314939" },
                    { text: "Artikova A. et al. (2025) How Real Is Climate Change? Public Perception in Central Asia, Caucasus Region and Eastern Europe. Working paper.", link: "https://hdl.handle.net/10419/330338" },
                    { text: "Egamberdiev B. et al. (2025) Women’s empowerment for farm resilience in Ethiopia: a three-step approach for latent class analysis. Review of Agricultural, Food and Environmental Studies.", link: "https://link.springer.com/article/10.1007/s41130-025-00243-2" },
                    { text: "Sergei Ya. and Muzaffarova D (2025). Cross-Border Issues and Cooperation in Central Asia: Investment and Development Opportunities. Global Neighbours Insights.", link: "https://cdn.sanity.io/files/vl0713zo/production/3bc32660d92a730d0bf906eecd15bbbaf673ccdf.pdf" },
                    { text: "DJuraeva M. et al. (2025) To specialize or not to specialize? A technical efficiency analysis in three transition economies. European Review of Agricultural Economics.", link: "https://hdl.handle.net/10419/337412" },
                    { text: "Primov A. et al. (2025). Crop diversification and its effect on farm income: evidence from a farm survey in Uzbekistan. Journal of Social and Economic Development.", link: "https://link.springer.com/article/10.1007/s40847-025-00488-z" },
                    { text: "Asrorov A. et al. (2025). Salicylic acid in cotton plant resistance to biotic factors. Plant Breeding and Biotechnology.", link: "https://doi.org/10.9787/PBB.2025.13.265" }
               ]
          },
          {
               year: "2024",
               items: [
                    { text: "Michael B. et al. (2024). The Global Energy and Water Exchanges Project in Central Asia: The Case for a Regional Hydroclimate Project. Advances in Atmospheric Sciences.", link: "https://link.springer.com/article/10.1007/s00376-023-3384-2" },
                    { text: "Alimov J. et al. (2024). At the Shores of a Vanishing Sea: Microbial Communities of Aral and Southern Aral Sea Region. Microbiology", link: "https://link.springer.com/article/10.1134/S0026261723602944" },
                    { text: "Primov A. et al. (2024). Farmers on the front line: Perceptions, practices and discrepancies from the Aral Sea's Karakalpakstan and Khorezm regions. Irrigation and Drainage.", link: "https://doi.org/10.1002/ird.2922" },
                    { text: "Muhammad U. et al. (2024). Utilising Nanoparticles as Innovative Elicitors to Enhance Bioactive Compounds in Plants. International Journal of Research and Advances in Agricultural Sciences.", link: "https://www.researchgate.net/publication/377963544_" },
                    { text: "Muhammad U. et al. (2024). Vertical Farming and Urban Agriculture: A Review of the Current State and Future Prospects in Crop Production. Plants. International Journal of Research and Advances in Agricultural Sciences.", link: "https://www.researchgate.net/publication/382553942_" },
                    { text: "Muhammad U. et al. (2024). Agritourism as an Emerging Sustainable Tourism Industry in Uzbekistan. Sustainability (MDPI)", link: "https://doi.org/10.3390/su16177519" },
                    { text: "Rahimi A. (2024). Global Research Trends on Colorectal Cancer (2014-2023): A Scientometric and Visualized Study. Iranian Medicine.", link: "https://doi.org/10.34172/aim.31944" }
               ]
          },
          {
               year: "2023",
               items: [
                    { text: "Neil R. et al. (2023). Metabolomics reveals the response of hydroprimed maize to mitigate the impact of soil salinization. Front. Plant Sci.", link: "https://doi:10.3389/fpls.2023.1109460" },
                    { text: "Neil R. et al. (2023). Improving farming practice through localized land tenure reform: a study of the “Three Rights Separation Reform” implemented in a Shanghai suburb, China. Geografi sk Tidsskrift-Danish Journal of Geography.", link: "https://doi.org/10.1080/00167223.2023.2213741" },
                    { text: "Primov A. et al. (2023). Crop Diversification in the Aral Sea Region: Long-Term Situation Analysis. Sustainability.", link: "https://doi.org/10.3390/su151310221" },
                    { text: "Egamberdieva D. et al. (2023). Bacterial Bioprotectants: Biocontrol Traits and Induced Resistance to Phytopathogens. Microbiol. Res.", link: "https://doi.org/10.3390/microbiolres14020049" }
               ]
          }
     ];

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

                         <br/>
                         <p><strong>Period of the project:</strong> 01.11.2025 – 31.10.2028.</p>
                         <p><strong>Total cost of the project:</strong> 397 788.89 Euro</p>

                         <div style={{marginTop: '20px'}}>
                              <p style={{marginBottom: '5px'}}><strong>Coordinator:</strong> Baxtiyorjon Abdusattorov</p>
                              <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: 0 }}>
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

                         <div style={{marginTop: '20px'}}>
                              <p style={{marginBottom: '5px'}}><strong>Coordinator:</strong> Baxtiyorjon Abdusattorov</p>
                              <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: 0 }}>
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
          document.body.style.overflow = "hidden"; // Prevent background scroll
     };

     const closeModal = () => {
          setSelectedProject(null);
          document.body.style.overflow = "auto";
     };

     return (
          <div className="rp-page">
               <div className="rp-hero">
                    <video
                         className="rp-hero-video"
                         autoPlay
                         loop
                         muted
                         playsInline
                    >
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
                                        <div key={idx} className="rp-card" onClick={() => openModal(project)} style={{cursor: "pointer"}}>
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

                         <div className="rp-publications-column">
                              <h2 className="rp-publications-title">Publications</h2>
                              <div className="rp-accordions">
                                   {publicationsData.map((pubGroup, idx) => (
                                        <div key={idx} className={`rp-accordion-item ${openPubYear === pubGroup.year ? 'open' : ''}`}>
                                             <button 
                                                  className="rp-accordion-header" 
                                                  onClick={() => togglePubYear(pubGroup.year)}
                                             >
                                                  {pubGroup.year}
                                                  <span className="rp-accordion-icon">
                                                       {openPubYear === pubGroup.year ? '-' : '+'}
                                                  </span>
                                             </button>
                                             <div className="rp-accordion-body">
                                                  <ul>
                                                       {pubGroup.items.map((item, i) => (
                                                            <li key={i}>
                                                                 {item.text}{' '}
                                                                 {item.link && (
                                                                      <a href={item.link.startsWith('http') ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer">
                                                                           {item.link}
                                                                      </a>
                                                                 )}
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    <div className="rp-applications-box">
                         <h3>Applications for Fall 2026 are now open!</h3>
                         <button className="rp-apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>Start Your Application &rarr;</button>
                    </div>

               </div>

               {/* Modal Overlay */}
               {selectedProject && (
                    <div className="rp-modal-overlay" onClick={closeModal}>
                         <div className="rp-modal-content" onClick={(e) => e.stopPropagation()}>
                              <button className="rp-modal-close" onClick={closeModal}>&times;</button>
                              <img src={selectedProject.image} alt={selectedProject.title} className="rp-modal-img" />
                              <h2 className="rp-modal-title">{selectedProject.title}</h2>
                              <div className="rp-modal-desc">
                                   {selectedProject.description}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
}
