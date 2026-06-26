import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoAirplaneOutline,
  IoCallOutline,
  IoGlobeOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoTimeOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./InternationalDepartmentContent.css";

const MISSION_ICONS = [
  IoGlobeOutline,
  IoAirplaneOutline,
  IoPeopleOutline,
  IoTrophyOutline,
  IoSchoolOutline,
];

const STAFF = [
  {
    roleKey: "staff2Role",
    nameKey: "staff2Name",
    email: "Laziz.Sharipov@rau.ac.uk",
    phone: "+998 (55) 517 00 71 (015)",
    hoursKey: "staffHoursFull",
    photo: null,
  },
  {
    roleKey: "staff3Role",
    nameKey: "staff3Name",
    email: "aziza.artikova@iau.uz",
    phone: null,
    hoursKey: "staffHoursHalf",
    photo: null,
  },
];

function staffInitials(name) {
  return name
    .replace(/^(Dr\.|Prof\.)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function StaffAvatar({ name, photo, className = "" }) {
  const [failed, setFailed] = useState(false);
  const showImage = photo && !failed;

  if (showImage) {
    return (
      <img
        src={photo}
        alt={name}
        className={`icd-staff-avatar ${className}`.trim()}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  const initials = staffInitials(name);

  return (
    <div className={`icd-staff-avatar icd-staff-avatar--placeholder ${className}`.trim()} aria-hidden="true">
      {initials || <IoPersonOutline />}
    </div>
  );
}

export default function CooperationDepartmentContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`intlCoop.${key}`);

  return (
    <div className="icd-content">
      <section className="icd-intro">
        <div className="icd-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introP1")}</p>
        <p>{copy("introP2")}</p>
        <p>{copy("introP3")}</p>
      </section>

      <section className="icd-missions" aria-labelledby="icd-missions-title">
        <h3 id="icd-missions-title">{copy("missionsTitle")}</h3>
        <div className="icd-missions-grid">
          {[1, 2, 3, 4, 5].map((num, index) => {
            const Icon = MISSION_ICONS[index];
            return (
              <article key={num} className="icd-mission-card">
                <div className="icd-mission-num">{String(num).padStart(2, "0")}</div>
                <div className="icd-mission-icon"><Icon /></div>
                <h4>{copy(`mission${num}Title`)}</h4>
                <p>{copy(`mission${num}Text`)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="icd-staff" aria-labelledby="icd-staff-title">
        <div className="icd-staff-head">
          <h3 id="icd-staff-title">{copy("staffTitle")}</h3>
          <p>{copy("staffSubtitle")}</p>
        </div>

        <div className="icd-staff-table-wrap">
          <table className="icd-staff-table">
            <thead>
              <tr>
                <th className="icd-col-photo">{copy("colPhoto")}</th>
                <th>{copy("colRole")}</th>
                <th>{copy("colName")}</th>
                <th>{copy("colContacts")}</th>
                <th>{copy("colHours")}</th>
              </tr>
            </thead>
            <tbody>
              {STAFF.map((member) => {
                const name = copy(member.nameKey);
                return (
                <tr key={member.nameKey}>
                  <td className="icd-col-photo" data-label={copy("colPhoto")}>
                    <StaffAvatar name={name} photo={member.photo} />
                  </td>
                  <td data-label={copy("colRole")}>{copy(member.roleKey)}</td>
                  <td data-label={copy("colName")}>
                    <strong>{name}</strong>
                  </td>
                  <td data-label={copy("colContacts")}>
                    <a href={`mailto:${member.email}`} className="icd-contact-link">
                      <IoMailOutline />
                      {member.email}
                    </a>
                    {member.phone && (
                      <a href="tel:+998555170071" className="icd-contact-link">
                        <IoCallOutline />
                        {member.phone}
                      </a>
                    )}
                  </td>
                  <td data-label={copy("colHours")}>
                    <span className="icd-hours">
                      <IoTimeOutline />
                      {copy(member.hoursKey)}
                    </span>
                  </td>
                </tr>
              );
              })}
            </tbody>
          </table>
        </div>

        <div className="icd-staff-cards">
          {STAFF.map((member) => {
            const name = copy(member.nameKey);
            return (
            <article key={member.nameKey} className="icd-staff-card">
              <StaffAvatar name={name} photo={member.photo} className="icd-staff-avatar--card" />
              <p className="icd-staff-card-role">{copy(member.roleKey)}</p>
              <h4>{name}</h4>
              <a href={`mailto:${member.email}`} className="icd-contact-link">
                <IoMailOutline />
                {member.email}
              </a>
              {member.phone && (
                <a href="tel:+998555170071" className="icd-contact-link">
                  <IoCallOutline />
                  {member.phone}
                </a>
              )}
              <span className="icd-hours">
                <IoTimeOutline />
                {copy(member.hoursKey)}
              </span>
            </article>
          );
          })}
        </div>
      </section>

      <section className="icd-reference">
        <div>
          <h3>{copy("referenceTitle")}</h3>
          <p>{copy("referenceText")}</p>
        </div>
        <Link to="/contact" className="icd-reference-btn">
          {copy("referenceAction")}
        </Link>
      </section>
    </div>
  );
}
