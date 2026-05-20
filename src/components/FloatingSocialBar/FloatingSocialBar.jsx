// ============================================================
//  FloatingSocialBar.jsx  ·  IAU University  ·  2025
//  Floating vertical social-media pill — left edge
//  Glassmorphism · Animated labels on hover
//  WCAG 2.1 — aria-labels, keyboard accessible
// ============================================================

import React from "react";
import "./FloatingSocialBar.css";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoFacebook,
} from "react-icons/io5";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

// ── Social links config ──────────────────────────────────────
const SOCIALS = [
  {
    id:    "instagram",
    icon:  <IoLogoInstagram aria-hidden="true" />,
    label: "Instagram",
    href:  "https://www.instagram.com/iau_uz/",
    color: "#E1306C",
  },
  {
    id:    "telegram",
    icon:  <FaTelegramPlane aria-hidden="true" />,
    label: "Telegram",
    href:  "https://t.me/iau_uz",
    color: "#229ED9",
  },
  {
    id:    "facebook",
    icon:  <IoLogoFacebook aria-hidden="true" />,
    label: "Facebook",
    href:  "https://www.facebook.com/iau.uz",
    color: "#1877F2",
  },
  {
    id:    "youtube",
    icon:  <IoLogoYoutube aria-hidden="true" />,
    label: "YouTube",
    href:  "https://www.youtube.com/@iau_2022",
    color: "#FF0000",
  },
  {
    id:    "linkedin",
    icon:  <FaLinkedinIn aria-hidden="true" />,
    label: "LinkedIn",
    href:  "https://www.linkedin.com/school/international-agriculture-university/",
    color: "#0A66C2",
  },
];

export default function FloatingSocialBar() {
  return (
    <nav
      className="fsb"
      aria-label="Social media links"
      role="navigation"
    >
      <ul className="fsb__list" role="list">
        {SOCIALS.map(({ id, icon, label, href, color }) => (
          <li key={id} className="fsb__item">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="fsb__link"
              aria-label={`Follow us on ${label} (opens in new tab)`}
              style={{ "--fsb-c": color }}
            >
              <span className="fsb__icon">{icon}</span>
              <span className="fsb__lbl" aria-hidden="true">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
