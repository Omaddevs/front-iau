import React, { useState } from "react";
import "./ScientificCouncil.css";

import gapImg from "../../research-image/gap-image.jpg";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const members = [
     {
          name: "Iroda Rustamova (Chairman)",
          role: "Department of Business Management, Tashkent State Agrarian University, Doctor of Economics (DSc), Professor",
          image: gapImg,
          imagePos: "right"
     },
     {
          name: "Munira Aminova (Deputy chairman)",
          role: "Rector of the International Agricultural University, Doctor of Political Science (DSc)",
          // desc: "Acting Rector of the International Agricultural University – Secretary of the Supervisory Board\nDr. Munira Aminova is newly appointed Rector of International Agriculture University. She has a long-standing career as an academic. She worked in the European, UK and the US universities for the last 19 years. The last 14 years she lived in Belgium and worked at the Vrije Universiteit Belgium in different capacities. She was a Dean of a business school with 3 branches in Brussels, Luxembourg and Shanghai.Munira Aminova holds a PhD from Vrije Universiteit Brussel in Political Sciences (2011). She also holds an MBA in Public Service from University of Birmingham (UK). Beyond her academic career, she is a leading expert in entrepreneurship and innovation, as well as public administration, governance and civil service. She has also continuously advised a wide range of international organizations, such as the United Nations, UNDP, USAID, ZEF, IWMI and others. Since 2018 Munira Aminova has been working together with the International Telecommunication Union (ITU) in a capacity of Regional Consultant. Munira Aminova is also an expert evaluator for the EU projects Erasmus+ and Horizon2020.",
          image: gapImg,
          imagePos: "left"
     },
     {
          name: "Abdulla Primov (Academician)",
          role: "Vice Rector for Academic Affairs of the International Agriculture University",
          // desc: "Academician of the Academy of Sciences of the Republic of Uzbekistan, Doctor of Agricultural Sciences, Professor. He actively participates in the public and political life of the country, is a member of the Committee on Agrarian, Water Management Issues and Ecology of the Legislative Chamber of the Oliy Majlis.",
          image: gapImg,
          imagePos: "right"
     },
     {
          name: "Shavkat Hasanov",
          role: "Head of the Department of Agriculture, Ministry of Agriculture of the Republic of Uzbekistan",
          image: gapImg,
          imagePos: "left"
     },
     {
          name: "Slawomir Wroblewski",
          role: "Professor of the Department of Agriculture, International Agriculture University",
          // desc: "A distinguished university expert, he holds a PhD degree in Economics and Management. He previously served as head of department and project manager in several local and foreign authorities. He managed the Royal Danish Academy... and EU pre-accession assistance. He worked as a visiting professor in several universities globally: USA, UK, Germany... He completed his postdoctoral research at the Center...",
          image: gapImg,
          imagePos: "right"
     },
     {
          name: "Ihtiyor Bobojonov",
          role: "Lecturer, Department of Agriculture, International Agriculture University. Senior Researcher at IAMO (Leibniz Institute of Agricultural Development in Transition Economies).",
          // desc: "He has a wealth of experience in the sector of Agriculture. He worked previously on development projects in CIS, African countries. His scientific works are deeply published in Scopus Web. He is recognized as a leading expert in climate change...",
          image: gapImg,
          imagePos: "left"
     },
     {
          name: "Somebody",
          role: "Loading",
          image: gapImg,
          imagePos: "right"
     },
     {
          name: "Bekhzod Egamberdiev",
          role: "Assistant professor of the New Uzbekistan University",
          // desc: "He was awarded the title of Professor of the Academy of Sciences of the Republic of Uzbekistan... His scientific works are deeply published in Web of Science, Scopus...",
          image: gapImg,
          imagePos: "left"
     },
     {
          name: "Mardon Nasirov",
          role: "Associate Professor, Department of Agriculture, International Agriculture University",
          image: gapImg,
          imagePos: "right"
     },
     {
          name: "Aziz Karimov",
          role: "Head of the Department of Agriculture, International Agriculture University",
          image: gapImg,
          imagePos: "left"
     }
];

export default function ScientificCouncil() {
     return (
          <div className="sc-page">
               <div className="sc-hero">
                    <video
                         className="sc-hero-video"
                         autoPlay
                         loop
                         muted
                         playsInline
                    >
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="sc-hero-overlay"></div>
                    <h1 className="sc-title">The Members of the Scientific Council</h1>
               </div>

               <div className="sc-container">
                    <div className="sc-main">

                         <div className="sc-tabs-container">
                              <div className="sc-tabs">
                                   <div className="sc-tab active">All members</div>
                              </div>
                         </div>

                         <div className="sc-list">
                              {members.map((member, idx) => (
                                   <div key={idx} className={`sc-member-card ${member.imagePos === 'right' ? 'flex-row-reverse' : ''}`}>
                                        <div className="sc-text-content">
                                             <h3 className="sc-member-name">{member.name}</h3>
                                             <p className="sc-member-role">{member.role}</p>
                                             {member.desc && <p className="sc-member-desc">{member.desc}</p>}
                                        </div>
                                        <div className="sc-image-content">
                                             <img src={member.image} alt={member.name} className="sc-member-img" />
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    <aside className="sc-sidebar">
                         <div className="sc-sidebar-box">
                              <h4 className="sc-sidebar-title">Research</h4>
                              <ul className="sc-sidebar-menu">
                                   <li className="active"><a href="#">IAU Scientific council</a></li>
                                   <li><a href="/research/gucae">German-Uzbek Chain on Central Asian Agricultural Economics (GUCAE)</a></li>
                              </ul>
                         </div>
                    </aside>
               </div>
          </div>
     );
}
