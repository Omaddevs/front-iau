import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import "./InternationalDepartmentContent.css";

const FAQ_COUNT = 3;

export default function InternationalFaqContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`intlDeptFaq.${key}`);
  const [openId, setOpenId] = useState(1);

  return (
    <div className="icd-content">
      <section className="icd-faq-intro">
        <div className="icd-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
      </section>

      <section className="icd-faq-list" aria-label={copy("introTitle")}>
        {Array.from({ length: FAQ_COUNT }, (_, i) => i + 1).map((id) => {
          const isOpen = openId === id;
          return (
            <article key={id} className={`icd-faq-item ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="icd-faq-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : id)}
              >
                <span>{copy(`faq${id}Q`)}</span>
                <IoChevronDownOutline className="icd-faq-chevron" />
              </button>
              {isOpen && (
                <div className="icd-faq-answer">
                  <p>{copy(`faq${id}A`)}</p>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
