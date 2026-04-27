import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ScientificCouncil.css";

import gapImg from "../../research-image/gap-image.jpg";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const members = [
     {
          id: 1,
          name: "Rustamova Iroda Baxramjanovna (Chair)",
          code: "08.00.04",
          role: "Professor, Department of Business Management, Tashkent State Agrarian University, Doctor of Science (DSc) in Economics"
     },
     {
          id: 2,
          name: "Munira Aminova Abdugafurovna (Deputy Chair)",
          code: "08.00.04",
          role: "Rector of the International Agriculture University, Doctor of Science (DSc) in Political Science"
     },
     {
          id: 3,
          name: "Primov Abdulla Egamkulovich (Secretary)",
          code: "08.00.04",
          role: "Vice-Rector for Scientific Affairs, Innovations and Spirituality, International Agriculture University, Doctor of Philosophy (PhD) in Economics, Associate Professor"
     },
     {
          id: 4,
          name: "Slavomir Wroblewski",
          code: "08.00.04",
          role: "Head of Department, International Agriculture University, Doctor of Science (DSc) in Economics (Poland)"
     },
     {
          id: 5,
          name: "Hasanov Shavkat Tursunqulovich",
          code: "08.00.04",
          role: "Rector of the Samarkand Institute of Agro-Innovations and Research, Doctor of Science (DSc) in Economics, Professor"
     },
     {
          id: 6,
          name: "Nazarkulov Umidjon Raximjanovich",
          code: "08.00.04",
          role: "Associate Professor, Tashkent State University of Economics, Doctor of Science (DSc) in Economics"
     },
     {
          id: 7,
          name: "Bobojonov Ihtiyor Bahtiyorovich",
          code: "08.00.04",
          role: "Leibniz Institute of Agricultural Development in Transition Economies (IAMO), Doctor of Science (DSc) in Economics, (Germany)"
     },
     {
          id: 8,
          name: "Djanibekov Nodir Davranovich",
          code: "08.00.04",
          role: "Leibniz Institute of Agricultural Development in Transition Economies (IAMO), Doctor of Science (DSc) in Economics, (Germany)"
     },
     {
          id: 9,
          name: "Hamidov Ahmad Muhammadxonovich",
          code: "08.00.04",
          role: "Humboldt University of Berlin (HUB), Doctor of Science (DSc) in Economics, (Germany)"
     },
     {
          id: 10,
          name: "Karimov Aziz Akmalovich",
          code: "08.00.04",
          role: "Food and Agriculture Organization (FAO), Doctor of Science (DSc) in Economics, (Hungary)"
     },
     {
          id: 11,
          name: "Egamberdiev Bekhzod Baxodirovich",
          code: "08.00.04",
          role: "Associate Professor, Department of Economics, New Uzbekistan University, Doctor of Philosophy (PhD) in Economics"
     },
     {
          id: 12,
          name: "Askarov Nazimjon Niyozovich",
          code: "08.00.04",
          role: "Head of the Department for Development of Agrobusiness Entities' Activities and Marketing, International Center for Strategic Development and Research in Food and Agriculture, Doctor of Science (DSc) in Economics"
     },
     {
          id: 13,
          name: "Babadjanov Jakhongir Madiyarovich",
          code: "08.00.04",
          role: "Associate Professor, Department of Agribusiness, International Agriculture University, Doctor of Philosophy (PhD) in Economics"
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
                    <div className="sc-hero-content">
                         <h1 className="sc-title">
                              Membership of the Scientific Council No. PhD.08/2025.27.12.I.15.01 for Conferring
                              Academic Degrees in Economic Sciences under the International Agriculture University
                         </h1>
                         <p className="sc-subtitle">08.00.04 – Agricultural Economics</p>
                    </div>
               </div>

               <div className="sc-container">
                    <div className="sc-main">

                         <div className="sc-tabs-container">
                              <div className="sc-tabs">
                                   <div className="sc-tab active">All members</div>
                              </div>
                         </div>

                         <div className="sc-table-wrapper">
                              <table className="sc-table">
                                   <thead>
                                        <tr>
                                             <th className="th-tr">T/r</th>
                                             <th className="th-name">Full Name</th>
                                             <th className="th-code">Specialty Code</th>
                                             <th className="th-role">Place of Work, Position, Academic Degree, Academic Title</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {members.map((member) => {
                                             const nameWords = member.name.split(" ");
                                             const firstPart = nameWords.slice(0, 2).join(" ");
                                             const secondPart = nameWords.slice(2).join(" ");
                                             
                                             return (
                                                  <tr key={member.id}>
                                                       <td className="td-tr">{member.id}</td>
                                                       <td className="td-name">
                                                            <strong>
                                                                 {firstPart}
                                                                 {secondPart && <><br />{secondPart}</>}
                                                            </strong>
                                                       </td>
                                                       <td className="td-code">{member.code}</td>
                                                       <td className="td-role">{member.role}</td>
                                                  </tr>
                                             );
                                        })}
                                   </tbody>
                              </table>
                         </div>
                    </div>

                    <aside className="sc-sidebar">
                         <div className="sc-sidebar-box">
                              <h4 className="sc-sidebar-title">Research</h4>
                              <ul className="sc-sidebar-menu">
                                   <li className="active">
                                        <Link to="/research/scientific-council">IAU Scientific council</Link>
                                   </li>
                                   <li>
                                        <Link to="/research/research-projects">Research projects</Link>
                                   </li>
                                   <li>
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
