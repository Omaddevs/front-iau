import "./PartnersSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import agrobank from "../partners/agrobank.svg";
import fao from "../partners/fao.png";
import markaziybank from "../partners/markaziybank.png";
import oliytalim from "../partners/oliy-talim.png";
import qishloq from "../partners/qishloq1.png";
import rau from "../partners/rau1.png";
import turonbank from "../partners/turon-bank.png";
import worldbank from "../partners/world-bank 1.png";
import iamo from "../partners/iamo.svg";

const PaperClipIconGradient = () => (
     <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient-partner)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="partner-link-icon"
     >
          <defs>
               <linearGradient id="gradient-partner" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2b70ab" />
                    <stop offset="100%" stopColor="#1ba487" />
               </linearGradient>
          </defs>
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 1 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
     </svg>
);

const partnersData = [
     { img: agrobank, url: "https://agrobank.uz", label: "agrobank.uz" },
     { img: fao, url: "https://fao.org", label: "fao.org" },
     { img: markaziybank, url: "https://cbu.uz", label: "cbu.uz" },
     { img: oliytalim, url: "https://gov.uz/oz/edu", label: "gov.uz/oz/edu" },
     { img: qishloq, url: "https://agro.uz", label: "agro.uz" },
     { img: rau, url: "https://rau.ac.uk", label: "rau.ac.uk" },
     { img: turonbank, url: "https://turonbank.uz", label: "turonbank.uz" },
     { img: worldbank, url: "https://worldbank.org", label: "worldbank.org" },
     { img: iamo, url: "https://www.iamo.de/home", label: "iamo.de" }
];

export default function PartnersSection() {

     return (
          <section className="partners-section">
               <div className="partners-container">
                    <h2 className="partners-title">
                         Our <span className="text-teal">Partners</span>
                    </h2>

                    <div className="partners-slider-wrapper">
                         <Swiper
                              modules={[Autoplay]}
                              spaceBetween={30}
                              slidesPerView={2}
                              breakpoints={{
                                   560: { slidesPerView: 3 },
                                   760: { slidesPerView: 4 },
                                   1024: { slidesPerView: 5 },
                                   1200: { slidesPerView: 6 },
                              }}
                              loop={true}
                              speed={5000} // makes it smooth and continuous
                              autoplay={{
                                   delay: 0,
                                   disableOnInteraction: false,
                                   pauseOnMouseEnter: false,
                              }}
                              allowTouchMove={false}
                              className="partners-swiper"
                         >
                              {partnersData.map((item, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="partner-card">
                                             <div className="partner-img-wrapper">
                                                  <img
                                                       src={item.img}
                                                       alt={`Partner ${index + 1}`}
                                                  />
                                             </div>
                                             <a href={item.url} target="_blank" rel="noreferrer" className="partner-gradient-btn">
                                                  <PaperClipIconGradient />
                                                  <span className="partner-btn-text">{item.label}</span>
                                             </a>
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          </section>
     );
}
