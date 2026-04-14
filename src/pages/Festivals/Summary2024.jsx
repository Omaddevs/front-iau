// src/pages/Festivals/Summary2024.jsx
import React, { useEffect } from "react";
import "./Summary2025.css"; // Reusing the same styling for consistency
import { IoChevronForwardOutline } from "react-icons/io5";

import img1 from "../../festivals-images/festival-2024-image1.jpg";
import img2 from "../../festivals-images/festival-2024-image2.jpg";
import img3 from "../../festivals-images/festival-2024-image3.jpg";
import img4 from "../../festivals-images/festival-2024-image4.jpg";
import img5 from "../../festivals-images/festival-2024-image5.jpg";
import img6 from "../../festivals-images/festival-2024-image6.jpg";
import img7 from "../../festivals-images/festival-2024-image7.jpg";
import img8 from "../../festivals-images/festival-2024-image8.jpg";

const Summary2024 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <div className="summary-page">
            <div className="summary-banner">
                <h1>Life Science Festival 2024</h1>
            </div>

            <div className="summary-content">
                <h2>Summary</h2>
                
                <div className="summary-grid">
                    {images.map((img, index) => (
                        <div key={index} className="summary-card">
                            <img src={img} alt={`Summary Page ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="download-btn-container">
                    <button className="download-btn">
                        Download <IoChevronForwardOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Summary2024;
