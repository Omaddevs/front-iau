import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ResearchProjects.css";
import "./ScientificCouncil.css";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function ResearchPublication() {
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

     return (
          <div className="sc-page">
               <div className="sc-hero">
                    <video className="sc-hero-video" autoPlay loop muted playsInline>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="sc-hero-overlay"></div>
                    <div className="sc-hero-content">
                         <h1 className="sc-title">Research Publication</h1>
                    </div>
               </div>

               <div className="sc-container">
                    <div className="sc-main">
                         <div className="sc-tabs-container">
                              <div className="sc-tabs">
                                   <div className="sc-tab active">Publications</div>
                              </div>
                         </div>

                         <div className="rp-accordions" style={{ marginTop: "20px" }}>
                              {publicationsData.map((pubGroup, idx) => (
                                   <div key={idx} className={`rp-accordion-item ${openPubYear === pubGroup.year ? "open" : ""}`}>
                                        <button className="rp-accordion-header" onClick={() => togglePubYear(pubGroup.year)}>
                                             {pubGroup.year}
                                             <span className="rp-accordion-icon">{openPubYear === pubGroup.year ? "-" : "+"}</span>
                                        </button>
                                        <div className="rp-accordion-body">
                                             <ul>
                                                  {pubGroup.items.map((item, i) => (
                                                       <li key={i}>
                                                            {item.text}{" "}
                                                            {item.link && (
                                                                 <a href={item.link.startsWith("http") ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer">
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

                    <aside className="sc-sidebar">
                         <div className="sc-sidebar-box">
                              <h4 className="sc-sidebar-title">Research</h4>
                              <ul className="sc-sidebar-menu">
                                   <li>
                                        <Link to="/research/scientific-council">IAU Scientific council</Link>
                                   </li>
                                   <li>
                                        <Link to="/research/research-projects">Research projects</Link>
                                   </li>
                                   <li className="active">
                                        <Link to="/research/research-publication">Research publication</Link>
                                   </li>
                                   <li>
                                        <Link to="/research/gucae">German-Uzbek Chain on Central Asian Agricultural Economics (GUCAE)</Link>
                                   </li>
                              </ul>
                         </div>
                    </aside>
               </div>
          </div>
     );
}
