import { useEffect, useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
import { useLanguage } from "../i18n/LanguageContext";
import "./ScrollTopButton.css";

export default function ScrollTopButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setVisible(y > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="app-scroll-top"
      onClick={scrollToTop}
      aria-label={t("intlFao.backToTop")}
      title={t("intlFao.backToTop")}
    >
      <IoChevronUpOutline />
    </button>
  );
}
