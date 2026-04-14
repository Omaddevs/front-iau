// src/components/EventsSection.jsx
import "./EventsSection.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoLocationOutline, IoChevronForwardOutline } from "react-icons/io5";
import { fetchUpcomingEvents, fetchPreviousEvents } from "../api/eventsApi";

export default function EventsSection() {
  const [tab, setTab]         = useState("upcoming");
  const [events, setEvents]   = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fn = tab === "upcoming" ? fetchUpcomingEvents : fetchPreviousEvents;
    fn()
      .then(setEvents)
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, [tab]);

  const easePro = [0.22, 1, 0.36, 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show:   { opacity: 1, y: 0,  filter: "blur(0px)",
              transition: { duration: 0.9, ease: easePro } },
    exit:   { opacity: 0, y: -16, filter: "blur(8px)",
              transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="evx"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, ease: easePro }}
    >
      <div className="evx-container">

        {/* HEAD */}
        <div className="evx-head">
          <h2 className="evx-title">
            University <span>Events</span>
          </h2>
          <Link className="evx-more" to="/events">
            See more <IoChevronForwardOutline />
          </Link>
        </div>

        {/* TABS */}
        <div className="evx-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === "upcoming"}
            className={`evx-tab ${tab === "upcoming" ? "evx-tab--active" : ""}`}
            onClick={() => setTab("upcoming")}
          >
            Upcoming Events
          </button>
          <button
            role="tab"
            aria-selected={tab === "previous"}
            className={`evx-tab ${tab === "previous" ? "evx-tab--active" : ""}`}
            onClick={() => setTab("previous")}
          >
            Previous Events
          </button>
        </div>

        {/* CARDS */}
        <div className="evx-trackWrap">
          {loading ? (
            <div className="evx-loading">
              <div className="evx-spinner" />
            </div>
          ) : events.length === 0 ? (
            <p className="evx-empty">No {tab} events at the moment.</p>
          ) : (
            <motion.div
              className="evx-track"
              role="list"
              key={tab}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <AnimatePresence>
                {events.map((e) => (
                  <motion.article
                    className="evx-card"
                    key={e.id}
                    role="listitem"
                    variants={cardVariants}
                    layout
                  >
                    <Link className="evx-card-link" to={`/events/${e.id}`}>
                      {/* LEFT */}
                      <div className="evx-left">
                        <h3 className="evx-h3" title={e.title}>{e.title}</h3>
                        <div className="evx-divider" />
                        <div className="evx-loc">
                          <span className="evx-locIc"><IoLocationOutline /></span>
                          <span className="evx-locTx">{e.location}</span>
                        </div>
                      </div>

                      {/* RIGHT — blue date panel */}
                      <div className="evx-right" aria-label="Event date and time">
                        <div className="evx-date">
                          <div className="evx-dateTop">
                            <span>{e.date_from}</span>
                            {e.date_to && e.date_to !== e.date_from && (
                              <span>{e.date_to}</span>
                            )}
                          </div>
                          <div className="evx-year">{e.year}</div>
                        </div>
                        {e.time && <div className="evx-time">{e.time}</div>}
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </motion.section>
  );
}
