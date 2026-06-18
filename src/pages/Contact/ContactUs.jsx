import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ContactUs.css";
import {
     IoCall,
     IoMail,
     IoLocationSharp,
     IoTimeOutline,
     IoLogoInstagram,
     IoPaperPlane,
     IoLogoFacebook,
     IoLogoYoutube,
     IoCheckmarkCircleOutline,
     IoAlertCircleOutline,
} from "react-icons/io5";

import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { submitContactForm } from "../../api/contactApi";

export default function ContactUs() {
     const [form, setForm]       = useState({ name: "", phone: "", message: "" });
     const [sending, setSending] = useState(false);
     const [success, setSuccess] = useState(null);
     const [apiError, setApiError] = useState(null);
     const { t } = useLanguage();

     const handleChange = (e) => {
          setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (!form.name || !form.phone || !form.message) return;
          setSending(true);
          setSuccess(null);
          setApiError(null);
          try {
               await submitContactForm(form);
               setSuccess(t("contact.successMsg"));
               setForm({ name: "", phone: "", message: "" });
          } catch (err) {
               setApiError(err.message || t("contact.errorMsg"));
          } finally {
               setSending(false);
          }
     };

     return (
          <div className="contact-page">
               <div className="contact-hero">
                    <video autoPlay loop muted playsInline className="contact-hero-img" style={{ objectFit: 'cover' }}>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="contact-hero-overlay"></div>
                    <h1 className="contact-title">{t("contact.heroTitle")}</h1>
               </div>

               <div className="contact-container">

                    <div className="contact-cards-grid">
                         {/* LEFT CARD: INFO */}
                         <div className="contact-card">
                              <h2>{t("contact.infoTitle")}</h2>

                              <div className="contact-info-list">
                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoCall />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">{t("contact.phone")}</span>
                                             <span className="contact-value">+998 (55) 517 00 71</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoPaperPlane />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">{t("contact.telegram")}</span>
                                             <span className="contact-value">+998 (99) 981-09-19</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoMail />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">{t("contact.email")}</span>
                                             <span className="contact-value">info@iau.uz</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoLocationSharp />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">{t("contact.location")}</span>
                                             <span className="contact-value">{t("contact.address")}</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoTimeOutline />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">{t("contact.workingHours")}</span>
                                             <span className="contact-value">{t("contact.workingHoursVal")}</span>
                                        </div>
                                   </div>
                              </div>

                              <div className="contact-socials">
                                   <a href="https://www.instagram.com/iau_uz" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoLogoInstagram />
                                   </a>
                                   <a href="https://t.me/iau_uz" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoPaperPlane /> {/* Telegram icon */}
                                   </a>
                                   <a href="https://www.facebook.com/share/WND1PuA6C6xFT8mU/?mibextid=qi2Omg" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoLogoFacebook />
                                   </a>
                                   <a href="https://youtube.com/@iau_2022" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoLogoYoutube />
                                   </a>
                              </div>
                         </div>

                         {/* RIGHT CARD: FORM */}
                         <div className="contact-card">
                              <h2>{t("contact.formTitle")}</h2>

                              {success && (
                                   <div className="contact-feedback contact-feedback--success">
                                        <IoCheckmarkCircleOutline /> {success}
                                   </div>
                              )}
                              {apiError && (
                                   <div className="contact-feedback contact-feedback--error">
                                        <IoAlertCircleOutline /> {apiError}
                                   </div>
                              )}

                              <form className="contact-form" onSubmit={handleSubmit}>
                                   <div className="form-row">
                                        <div className="form-group">
                                             <label>{t("contact.nameLabel")}</label>
                                             <input
                                                  type="text"
                                                  name="name"
                                                  placeholder={t("contact.namePlaceholder")}
                                                  value={form.name}
                                                  onChange={handleChange}
                                                  required
                                             />
                                        </div>
                                        <div className="form-group">
                                             <label>{t("contact.phoneLabel")}</label>
                                             <input
                                                  type="text"
                                                  name="phone"
                                                  placeholder={t("contact.phonePlaceholder")}
                                                  value={form.phone}
                                                  onChange={handleChange}
                                                  required
                                             />
                                        </div>
                                   </div>

                                   <div className="form-group" style={{ flex: 1 }}>
                                        <label>{t("contact.messageLabel")}</label>
                                        <textarea
                                             name="message"
                                             placeholder={t("contact.messagePlaceholder")}
                                             value={form.message}
                                             onChange={handleChange}
                                             required
                                        />
                                   </div>

                                   <button type="submit" className="submit-btn" disabled={sending}>
                                        {sending ? t("contact.sending") : t("contact.sendBtn")}
                                   </button>
                              </form>
                         </div>
                    </div>

                    {/* MAP SECTION */}
                    <div className="contact-map-wrapper">
                         {/* Embed Google Map centered on location without default marker */}
                         <iframe
                              src="https://maps.google.com/maps?q=International%20Agricultural%20University,%20Университетская%20улица%202,%20Тоshkent,%20Toshkent,%20Uzbekistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="International Agriculture University Map"
                         ></iframe>
                    </div>

               </div>
          </div>
     );
}
