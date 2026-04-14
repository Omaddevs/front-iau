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

const cards = [
  {
    title: "Pre-Foundation",
    sub: "Browse the pre-foundation courses",
    icon: <IoSchoolOutline />,
    tone: "teal",
    link: "/admissions/pre-foundation",
  },
  {
    title: "Foundation",
    sub: "Browse the foundation programs",
    icon: <IoBookOutline />,
    tone: "blue",
    link: "/admissions/foundation",
  },
  {
    title: "Undergraduate",
    sub: "Browse the undergraduate degrees",
    icon: <IoSchoolOutline />,
    tone: "green",
    link: "/admissions/undergraduate",
  },
  {
    title: "Postgraduate",
    sub: "Browse the postgraduate degrees",
    icon: <IoRibbonOutline />,
    tone: "blue2",
    link: "/admissions/postgraduate",
  },
  {
    title: "PhD and DSc Programmes",
    sub: "Browse the programs",
    icon: <IoFlaskOutline />,
    tone: "teal",
    link: "/admissions/phd",
  },
];

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

const fadeDown = {
  hidden: { opacity: 0, y: -18, filter: "blur(10px)" },
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

  return (
    <motion.section
      className="hero"
      variants={pageStagger}
      initial="hidden"
      animate="show"
    >
      <img src={leftRibbon} alt="Left Ribbon" className="hero-ribbon hero-ribbon-left" />
      <img src={rightRibbon} alt="Right Ribbon" className="hero-ribbon hero-ribbon-right" />

      <motion.div className="hero-bg" variants={fadeDown}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-image"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: easePro }}
      />

      <div className="hero-container">
        <div className="hero-content">
          <motion.h1 className="hero-title-center" variants={fadeUp}>
            SCIENCE-BASED<br></br> <span style={{ color: "#F9F8F3", WebkitTextFillColor: "#F9F8F3" }}>PRACTICE-ORIENTED</span>
          </motion.h1>

          <div className="hero-btn-group">
            <motion.button
              className="hero-btn"
              type="button"
              variants={btnPop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}
            >
              Apply Now <IoArrowForwardOutline />
            </motion.button>

            {/* <motion.button
              className="hero-btn hero-btn--apply"
              type="button"
              variants={btnPop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={() => navigate('/admissions/undergraduate')}
            >
              Apply Now <IoArrowForwardOutline />
            </motion.button> */}
          </div>

          <motion.div className="hero-stack-carousel" variants={fadeUp}>
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
