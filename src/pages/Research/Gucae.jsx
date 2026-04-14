import React, { useState, useEffect } from "react";
import "./Gucae.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { IoMail } from "react-icons/io5";

import img1 from "../../chain-images/chain1.png";
import img2 from "../../chain-images/chain2.png";
import img3 from "../../chain-images/chain3.png";
import img4 from "../../chain-images/chain4.png";
import img5 from "../../chain-images/chain5.png";
import img6 from "../../chain-images/chain6.png";
import img7 from "../../chain-images/chain7.png";
import img8 from "../../chain-images/chain8.png";
import img10 from "../../chain-images/chain10.png";
import img11 from "../../chain-images/chain11.png";

export default function Gucae() {
    const [activeTab, setActiveTab] = useState("gucae");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const memberData1 = [
        { name: "Dr. Ihtiyor Bobojonov", title: "Head of the Chair", img: img1, email: "bobojonov@iamo.de" },
        { name: "Dr. Lena Kuhn", title: "Senior Researcher", img: img2, email: "kuhn@iamo.de" },
        { name: "Dr. Abdulla Primov", title: "Deputy Head of the Chair", img: img4, email: "primov@iamo.de" },
        { name: "Mukhayyo Djuraeva", title: "Senior Researcher", img: img3, email: "djuraeva@iamo.de" },
        { name: "Bekhzod Egamberdiev", title: "Senior Researcher", img: img5, email: "egamberdiev@iamo.de" },
    ];

    const memberData2 = [
        { name: "Sirojiddin Eshmatov", title: "DSc student", img: img6, email: "sirojiddin.eshmatov@iau.uz" },
        { name: "Asrakulov Javlonbek", title: "PhD student", img: img11, email: "javlonbek.asrakulov@iau.uz" },
        { name: "Bekhzod Kodirkhonov", title: "PhD student", img: img10, email: "bekhzod.kodirkhonov@iau.uz" },
        { name: "Imomjon Khamidov", title: "PhD student", img: img7, email: "imomjon.khamidov@iau.uz" },
        { name: "Jasurbek Abdushukurov", title: "PhD student", img: img8, email: "jasur.abdushukurov@iau.uz" },
    ];

    return (
        <div className="gucae-page">
            {/* PAGE HEADER */}
            <div className="gucae-hero">
                <video
                    className="gucae-hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="gucae-hero-overlay"></div>
                <div className="gucae-hero-content">
                    <h1>German-Uzbek Chair on Central Asian Agricultural<br />Economics (GUCAE)</h1>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="gucae-container-wrap">
                <div className="gucae-container">
                    {/* LEFT COMPONENT */}
                    <div className="gucae-main">
                        {/* TABS */}
                        <div className="gucae-tabs-container">
                            <div className="gucae-tabs-list">
                                <button
                                    className={`gucae-tab-btn ${activeTab === "gucae" ? "active" : ""}`}
                                    onClick={() => setActiveTab("gucae")}
                                >
                                    GUCAE
                                </button>
                            </div>
                        </div>

                        {/* TAB CONTENT */}
                        <div className="gucae-tab-content-box fade-in">
                            <h2>German-Uzbek Chair on Central Asian Agricultural Economics (GUCAE)</h2>
                            <p>
                                The German-Uzbek Chair on Central Asian Agricultural Economics (GUCAE) was established in cooperation with IAMO and IAU to implement high-level research and capacity building of junior researchers from Central Asia.
                            </p>
                            <p>GUCAE's research focuses on the following areas:</p>
                            <ul>
                                <li>Improving productivity and efficiency in the agricultural sector of Uzbekistan</li>
                                <li>Integration of agricultural value chains in global markets</li>
                                <li>Determine the impact of climate change on agricultural production and rural livelihoods</li>
                                <li>Design and efficiency of agricultural insurance and risk management</li>
                                <li>Crop estimation and yield predictions with remote sensing technologies</li>
                                <li>Study consumer behavior in the food industry</li>
                                <li>Analyze drivers and impact of innovation adoption among farmers</li>
                            </ul>
                            <p>
                                At the same time, GUCAE is aiming at dedicated transfer of their findings to an audience outside academia, including government institutions and business actors in the agri-food industry and the financial sector.
                            </p>

                            <h3 className="gucae-section-title">Members of the Chair</h3>
                            <div className="gucae-members-grid">
                                {memberData1.map((member, i) => (
                                    <div key={i} className="gucae-member-card">
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} className="gucae-member-mail-icon">
                                                <IoMail />
                                            </a>
                                        )}
                                        <div className="gucae-member-img-wrap">
                                            <img src={member.img} alt={member.name} />
                                        </div>
                                        <div className="gucae-member-info">
                                            <h4>{member.name}</h4>
                                            <p>{member.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="gucae-section-title" style={{ marginTop: '40px' }}>DSc and PhD Researchers of the Chair</h3>
                            <div className="gucae-members-grid">
                                {memberData2.map((member, i) => (
                                    <div key={i} className="gucae-member-card">
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} className="gucae-member-mail-icon">
                                                <IoMail />
                                            </a>
                                        )}
                                        <div className="gucae-member-img-wrap">
                                            <img src={member.img} alt={member.name} />
                                        </div>
                                        <div className="gucae-member-info">
                                            <h4>{member.name}</h4>
                                            <p>{member.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* APPLICATIONS OPEN BOX */}
                        <div className="gucae-applications-box">
                            <h3>Applications for Fall 2026 are now open!</h3>
                            <button className="gucae-apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>Start Your Application &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
