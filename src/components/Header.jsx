import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import {
  IoArrowForwardOutline,
  IoSchoolOutline,
  IoRibbonOutline,
  IoFlaskOutline,
  IoBookOutline,
} from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import HeroVideo from "../images/hero.mp4";
import leftRibbon from "../images/left-ribbon.png";
import rightRibbon from "../images/right-ribbon.png";
import { useLanguage } from "../i18n/LanguageContext";

const easePro = [0.22, 1, 0.36, 1];

const pageStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePro },
  },
};

const btnPop = {
  hidden: { opacity: 0, y: 22, scale: 0.98, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePro },
  },
};



export default function Header() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const cards = [
    {
      title: t("header.cards.preFoundation.title"),
      sub: t("header.cards.preFoundation.sub"),
      icon: <IoSchoolOutline />,
      tone: "teal",
      link: "/admissions/pre-foundation",
    },
    {
      title: t("header.cards.foundation.title"),
      sub: t("header.cards.foundation.sub"),
      icon: <IoBookOutline />,
      tone: "blue",
      link: "/admissions/foundation",
    },
    {
      title: t("header.cards.undergraduate.title"),
      sub: t("header.cards.undergraduate.sub"),
      icon: <IoSchoolOutline />,
      tone: "green",
      link: "/admissions/undergraduate/english",
    },
    {
      title: t("header.cards.postgraduate.title"),
      sub: t("header.cards.postgraduate.sub"),
      icon: <IoRibbonOutline />,
      tone: "blue2",
      link: "/admissions/postgraduate",
    },
    {
      title: t("header.cards.phd.title"),
      sub: t("header.cards.phd.sub"),
      icon: <IoFlaskOutline />,
      tone: "teal",
      link: "/admissions/phd",
    },
  ];

  return (
    <motion.section
      className="hero"
      variants={pageStagger}
      initial={false}
      animate={false}
    >
      <img src={leftRibbon} alt="Left Ribbon" className="hero-ribbon hero-ribbon-left" />
      <img src={rightRibbon} alt="Right Ribbon" className="hero-ribbon hero-ribbon-right" />

      <div className="hero-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-image"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <motion.h1 className="hero-title-center" initial={false} animate={false}>
            {t("x.heroLine1")}<br></br> <span style={{ color: "#F9F8F3", WebkitTextFillColor: "#F9F8F3" }}>{t("x.heroLine2")}</span>
          </motion.h1>

          <div className="hero-btn-group">
            <motion.button
              className="hero-btn"
              type="button"
              initial={false}
              animate={false}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}
            >
              {t("header.applyNow")} <IoArrowForwardOutline />
            </motion.button>

            {/* <motion.button
              className="hero-btn hero-btn--apply"
              type="button"
              variants={btnPop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={() => navigate('/admissions/undergraduate/english')}
            >
              {t("header.applyNow")} <IoArrowForwardOutline />
            </motion.button> */}
          </div>

          <motion.div className="hero-stack-carousel" initial={false} animate={false}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={14}
              slidesPerView={1.2}
              breakpoints={{
                560: { slidesPerView: 2.2 },
                760: { slidesPerView: 3.2 },
                1180: { slidesPerView: 4 },
              }}
              loop={true}
              speed={7000} // makes it smooth and continuous
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
              allowTouchMove={false}
              className="hero-swiper"
            >
              {cards.map((c, i) => (
                <SwiperSlide key={i}>
                  <button
                    className={`hero-card ${c.tone}`}
                    type="button"
                    onClick={() => {
                      if (c.link && c.link !== "#") {
                        navigate(c.link);
                      }
                    }}
                  >
                    <div className="hero-card-ic">{c.icon}</div>
                    <div className="hero-card-txt">
                      <div className="hero-card-title">{c.title}</div>
                      <div className="hero-card-sub">{c.sub}</div>
                    </div>

                    <div className="hero-card-arrow">
                      <IoArrowForwardOutline />
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
