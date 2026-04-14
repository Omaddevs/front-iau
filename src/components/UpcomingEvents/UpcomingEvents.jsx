import "./UpcomingEvents.css";
import { IoChevronForwardOutline, IoLocationOutline } from "react-icons/io5";

const events = [
  {
    id: 1,
    title: "First Central Asia Conference on Sports Science invites extended abstract submissions",
    place: "New Uzbekistan University",
    dateFrom: "28 April",
    dateTo: "30 April",
    year: "2026",
    time: "09:00",
  },
  {
    id: 2,
    title: "International workshop on smart agriculture and climate-resilient farming systems",
    place: "New Uzbekistan University",
    dateFrom: "02 May",
    dateTo: "04 May",
    year: "2026",
    time: "10:00",
  },
  {
    id: 3,
    title: "Open lecture series for prospective students and partner institutions",
    place: "New Uzbekistan University",
    dateFrom: "10 May",
    dateTo: "12 May",
    year: "2026",
    time: "11:00",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="upev" aria-label="Upcoming Events">
      <div className="upev__container">
        <div className="upev__head">
          <h2 className="upev__title">
            Upcoming <span>Events</span>
          </h2>

          <a className="upev__more" href="/">
            See more <IoChevronForwardOutline />
          </a>
        </div>

        <div className="upev__row">
          {events.map((event) => (
            <article className="upev-card" key={event.id}>
              <div className="upev-card__left">
                <h3 className="upev-card__title">{event.title}</h3>

                <p className="upev-card__place">
                  <IoLocationOutline />
                  <span>{event.place}</span>
                </p>
              </div>

              <div className="upev-card__right">
                <p className="upev-card__date">{event.dateFrom}</p>
                <p className="upev-card__date">{event.dateTo}</p>
                <p className="upev-card__year">{event.year}</p>
                <p className="upev-card__time">{event.time}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="upev__label">Section</p>
      </div>
    </section>
  );
}
