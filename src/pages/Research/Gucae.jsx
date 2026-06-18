import React, { useState, useEffect } from "react";
import "./Gucae.css";
import "./ScientificCouncil.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
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
import img12 from "../../chain-images/chain12.png";
import img13 from "../../chain-images/chain13.png";

export default function Gucae() {
    const [activeTab, setActiveTab] = useState("gucae");
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const memberData1 = [
        { name: "Dr. Ihtiyor Bobojonov", title: "Head of the Chair", img: img1, email: "bobojonov@iamo.de" },
        { name: "Dr. Lena Kuhn", title: "Senior Researcher", img: img2, email: "kuhn@iamo.de" },
        { name: "Dr. Abdulla Primov", title: "Deputy Head of the Chair", img: img4, email: "primov@iamo.de" },
        { name: "Dr. Bekhzod Egamberdiev", title: "Senior Researcher", img: img5, email: "egamberdiev@iamo.de" },
        { name: "Mukhayyo Djuraeva", title: "Senior Researcher", img: img3, email: "djuraeva@iamo.de" },
        { name: "Dr. Shovkat Khodjaev", title: "Senior Researcher", img: img12, email: "khodjaev@iamo.de" },
        { name: "Elyor Urozaliev", title: "PhD student", img: img13, email: "eurozaliev@sbtsue.uz" },
    ];

    const memberData2 = [
        { name: "Dr. Sirojiddin Eshmatov", title: "DSc student", img: img6, email: "sirojiddin.eshmatov@iau.uz" },
        { name: "Asrakulov Javlonbek", title: "PhD student", img: img11, email: "javlonbek.asrakulov@iau.uz" },
        { name: "Bekhzod Kodirkhonov", title: "PhD student", img: img10, email: "bekhzod.kodirkhonov@iau.uz" },
        { name: "Imomjon Khamidov", title: "PhD student", img: img7, email: "imomjon.khamidov@iau.uz" },
        { name: "Jasurbek Abdushukurov", title: "PhD student", img: img8, email: "jasur.abdushukurov@iau.uz" },
    ];

    return (
        <div className="sc-page">
            {/* PAGE HEADER */}
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
                    <h1 className="sc-title">{t("research.heroGucae")}</h1>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="sc-container">
                <div className="sc-main">
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
                        <h2>{t("researchExtra.gucaeTitle")}</h2>
                        <p>{t("x.gucaeIntro")}</p>
                        <p>{t("x.gucaeFocusIntro")}</p>
                        <ul>
                            <li>{t("x.gucaeFocus1")}</li>
                            <li>{t("x.gucaeFocus2")}</li>
                            <li>{t("x.gucaeFocus3")}</li>
                            <li>{t("x.gucaeFocus4")}</li>
                            <li>{t("x.gucaeFocus5")}</li>
                            <li>{t("x.gucaeFocus6")}</li>
                            <li>{t("x.gucaeFocus7")}</li>
                        </ul>
                        <p>{t("x.gucaeOutro")}</p>

                        <h3 className="gucae-section-title">{t("researchExtra.membersOfChair")}</h3>
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

                        <h3 className="gucae-section-title" style={{ marginTop: '40px' }}>{t("researchExtra.dscPhDResearchers")}</h3>
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
                    <div className="gucae-applications-box" style={{ marginTop: '40px' }}>
                        <h3>{t("festivalsExtra.applyFall")}</h3>
                        <button className="gucae-apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>{t("festivalsExtra.startApp")}</button>
                    </div>
                </div>

                <aside className="sc-sidebar">
                    <div className="sc-sidebar-box">
                        <h4 className="sc-sidebar-title">{t("researchExtra.sidebarResearch")}</h4>
                        <ul className="sc-sidebar-menu">
                            <li>
                                <Link to="/research/scientific-council">{t("research.heroScientificCouncil")}</Link>
                            </li>
                            <li>
                                <Link to="/research/research-projects">{t("research.heroResearchProjects")}</Link>
                            </li>
                            <li>
                                <Link to="/research/research-publication">{t("research.heroResearchPublication")}</Link>
                            </li>
                            <li className="active">
                                <Link to="/research/gucae">{t("researchExtra.gucaeTitle")}</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
