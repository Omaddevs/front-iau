import "./Section.css";
import { motion } from "framer-motion";
import President from "../images/president.jpg"; // o'ng rasm
import Gerb from "../images/gerb.png"; // chapdagi emblema
import Pattern from "../images/sectionImage.jpg"; // fon uchun

export default function VisionSection() {
  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const leftPanel = {
    hidden: { opacity: 0, x: -34, y: 12, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: easePro },
    },
  };

  const rightImg = {
    hidden: { opacity: 0, x: 34, y: 12, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: easePro, delay: 0.05 },
    },
  };

  return (
    <motion.section
      className="vision-section"
      style={{ backgroundImage: `url(${Pattern})` }}
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="vision-container">
        <motion.div className="vision-card" variants={wrap}>
          {/* LEFT SIDE: Content */}
          <motion.div className="vision-left" variants={leftPanel}>
            <h2 className="vision-title">
              <span className="quote-icon quote-top">“</span>
              Our main goal is to develop agriculture based on science-based methods and best{" "}
              <span className="vision-last-word">
                practices
                <span className="quote-icon quote-bottom">”</span>
              </span>
            </h2>

            <div className="vision-author">
              <img src={Gerb} alt="Gerb" className="vision-gerb" />
              <div className="vision-author-info">
                <h4>Shavkat Mirziyoyev</h4>
                <span>President of the Republic of Uzbekistan</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image */}
          <motion.div className="vision-right" variants={rightImg}>
            <div className="vision-image-wrapper">
              <div className="flag-border"></div>
              <img src={President} alt="President" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
