import { useState } from "react";
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
               setSuccess("Your application has been received. We will contact you shortly.");
               setForm({ name: "", phone: "", message: "" });
          } catch (err) {
               setApiError(err.message || "Something went wrong. Please try again.");
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
                    <h1 className="contact-title">Contact us</h1>
               </div>

               <div className="contact-container">

                    <div className="contact-cards-grid">
                         {/* LEFT CARD: INFO */}
                         <div className="contact-card">
                              <h2>Contact information</h2>

                              <div className="contact-info-list">
                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoCall />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Phone number:</span>
                                             <span className="contact-value">+998 (99) 981-09-19</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoMail />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Email address:</span>
                                             <span className="contact-value">info@iau.uz</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoLocationSharp />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Location:</span>
                                             <span className="contact-value">University street №2 Kibray, Tashkent Uzbekistan, 111200</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoTimeOutline />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Work time:</span>
                                             <span className="contact-value">Mon - Fri: 09:00 - 18:00</span>
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
                              <h2>Send an application</h2>

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
                                             <label>Name:</label>
                                             <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="Enter"
                                                  value={form.name}
                                                  onChange={handleChange}
                                                  required
                                             />
                                        </div>
                                        <div className="form-group">
                                             <label>Phone number:</label>
                                             <input
                                                  type="text"
                                                  name="phone"
                                                  placeholder="Enter"
                                                  value={form.phone}
                                                  onChange={handleChange}
                                                  required
                                             />
                                        </div>
                                   </div>

                                   <div className="form-group" style={{ flex: 1 }}>
                                        <label>Message:</label>
                                        <textarea
                                             name="message"
                                             placeholder="Enter"
                                             value={form.message}
                                             onChange={handleChange}
                                             required
                                        />
                                   </div>

                                   <button type="submit" className="submit-btn" disabled={sending}>
                                        {sending ? "Sending…" : "Send application"}
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
