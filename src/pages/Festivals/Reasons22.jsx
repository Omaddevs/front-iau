import React, { useState, useEffect } from "react";
import "./Reasons22.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function Reasons22() {
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
                    <h1>22 reasons to attend Life Sciences Festival</h1>
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
                                    <h2>22 reasons to attend Life Sciences Festival</h2>
                                    <p>
                                        1 – Free lectures and presentations (as many as 10 thematic sessions)<br></br>
                                        2 – Face-to-face meetings with the teachers (from United Kingdom, Germany, USA, India, Mexico, Poland, Kazakhstan, Uzbekistan and other countries)<br></br>
                                        3 – B2B meetings (leading companies in agro-food industry in Uzbekistan)<br></br>
                                        4 – Meeting with academic advisors (Admission Offices of two Universities are open all day long)<br></br>
                                        5 – Consultations on your career (Job Fair)<br></br>
                                        6 – Improving your English (among other a Workshop for IELTS Teachers)<br></br>
                                        7 – Exhibition of innovations (You can jump into a John Deere tractor!)<br></br>
                                        8 – Visiting a bee-farm (Are you afraid of a bee?)<br></br>
                                        9 – Food sampling<br></br>
                                        10 – Training how to operate a drone<br></br>
                                        11 – Present your own achievements (Take part in a “Hyde Park Session”)<br></br>
                                        12 – Meetings with students in the Students Club (informal get together)<br></br>
                                        13 – Visiting the Students’ Art Gallery<br></br>
                                        14 – Networking with colleagues (You can post your any message on the Communication Wall)<br></br>
                                        15 – Dancing with friends at our disco-place<br></br>
                                        16 – Buying and selling agro foods, hand-made art and more (Mini bazaar)<br></br>
                                        17 – Having a photo in an academic toga (Impress your family!)<br></br>
                                        18 – Attending an evening concert<br></br>
                                        19 – Watching a movie in open-air night cinema (Horror!)<br></br>
                                        20 – Joining the international association of young specialists -“American Society for Microbiology”<br></br>
                                        21 – Joining “World Food Forum – Global Youth Action”<br></br>
                                        22 – Finally: to learn more about INTERNATIONAL AGRICULTURE UNIVERSITY!<br></br>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* APPLICATIONS OPEN BOX */}
                        <div className="reasons22-applications-box">
                            <h3>Applications for Fall 2026 are now open!</h3>
                            <button className="reasons22-apply-btn" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>Start Your Application &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
