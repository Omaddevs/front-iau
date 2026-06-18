import React, { useState, useEffect } from "react";
import "./Reasons22.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function Reasons22() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState("22reasons");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="reasons22-page">
            {/* PAGE HEADER */}
            <div className="reasons22-hero">
                <video
                    className="reasons22-hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="reasons22-hero-overlay"></div>
                <div className="reasons22-hero-content">
                    <h1>{t("festivalsExtra.heroReasons22")}</h1>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="reasons22-container-wrap">
                <div className="reasons22-container">
                    {/* LEFT COMPONENT */}
                    <div className="reasons22-main">
                        {/* TABS */}
                        <div className="reasons22-tabs-container">
                            <div className="reasons22-tabs-list">
                                <button
                                    className={`reasons22-tab-btn ${activeTab === "22reasons" ? "active" : ""}`}
                                    onClick={() => setActiveTab("22reasons")}
                                >
                                    22 reasons
                                </button>
                            </div>
                        </div>

                        {/* TAB CONTENT */}
                        <div className="reasons22-tab-content-box">
                            {activeTab === "22reasons" && (
                                <div className="reasons22-content-pane fade-in">
                                    <h2>{t("festivalsExtra.heroReasons22")}</h2>
                                    <p style={{whiteSpace:"pre-line"}}>{t("adm.reasons22List")}</p>
                                </div>
                            )}
                        </div>

                        {/* APPLICATIONS OPEN BOX */}
                        <div className="reasons22-applications-box">
                            <h3>{t("festivalsExtra.applyFall")}</h3>
                            <button className="reasons22-apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>{t("festivalsExtra.startApp")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
