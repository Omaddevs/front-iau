// src/components/UsefulLinks/UsefulLinks.jsx
import React from "react";
import "./UsefulLinks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// import the standard gerb and oliy talim images we know exist
import gerbImg from "../../images/gerb.png";
import eduImg from "../../partners/oliy-talim.png";
import rauImg from "../../images/rau-right.png";
import tezkorImg from "../../images/tezkorquiz-logo.webp";
import canvaImg from "../../images/canva-logo.svg";

// A custom SVG icon for the paperclip (attachement) since standard React Icons (IoAttachOutline, IoLinkOutline) works,
// but the design specifically uses a paperclip-like icon
const PaperClipIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="useful-btn-icon"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 1 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

const UsefulLinks = () => {
  const links = [
    {
      id: 1,
      type: "tezkorquiz",
      title: "TezkorQuiz – Milliy bilimlar platformasi",
      urlLabel: "tezkorquiz.uz",
      url: "https://tezkorquiz.uz",
      img: tezkorImg,
    },
    {
      id: 2,
      type: "president",
      title: "O'zbekiston Respublikasi Prezidenti",
      urlLabel: "president.uz",
      url: "https://president.uz",
      img: gerbImg,
    },
    {
      id: 3,
      type: "rau",
      title: "Royal Agricultural University (RAU) VLE",
      urlLabel: "internationalvle.rau.ac.uk",
      url: "https://internationalvle.rau.ac.uk/",
      img: rauImg,
    },
    {
      id: 4,
      type: "data",
      title: "O'zbekiston Respublikasi ochiq ma'lumotlar portali",
      urlLabel: "data.egov.uz",
      url: "https://data.egov.uz",
    },
    {
      id: 5,
      type: "edu",
      title: "O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi",
      urlLabel: "gov.uz/oz/edu",
      url: "https://gov.uz/oz/edu",
      img: eduImg,
    },
    {
      id: 6,
      type: "canva",
      title: "Canva – Online Design Platform",
      urlLabel: "canva.com",
      url: "https://www.canva.com",
      img: canvaImg,
    },
  ];

  const renderLogo = (item) => {
    if (item.type === "tezkorquiz") {
      return <img src={tezkorImg} alt="TezkorQuiz" className="useful-img tezkorquiz" />;
    }
    if (item.type === "data") {
      return (
        <div className="custom-logo data-logo">
          <div className="data-dots">
            {/* 6 dots on top and 3 dots on bottom or so */}
            <div className="dots-row">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dots-row">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dots-row">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="data-text">
            <span>OPEN</span>
            <span>DATA</span>
            <span>PORTAL</span>
          </div>
        </div>
      );
    }
    return <img src={item.img} alt={item.type} className={`useful-img ${item.type}`} />;
  };

  return (
    <section className="useful-links-section">
      <h2 className="useful-section-title">
        Useful <span className="text-teal">Links</span>
      </h2>
      <div className="useful-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={4000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          className="useful-swiper"
        >
          {[...links, ...links.map((l) => ({ ...l, id: l.id + 10 }))].map((item) => (
            <SwiperSlide key={item.id}>
              <div className="useful-card">
                <div className="useful-card-top">{renderLogo(item)}</div>
                <p className="useful-card-title">{item.title}</p>
                <a href={item.url} target="_blank" rel="noreferrer" className="useful-card-btn">
                  <PaperClipIcon />
                  <span>{item.urlLabel}</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UsefulLinks;
