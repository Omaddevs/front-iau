// src/components/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
    IoMailOutline,
    IoCallOutline,
    IoEyeOutline,
    IoSearchOutline,
    IoLogoInstagram,
    IoLogoYoutube,
    IoLogoFacebook,
    IoChevronDownOutline,
    IoChevronForwardOutline,
    IoMenuOutline,
    IoCloseOutline,
} from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import navbarLogo from "../images/navbarLogo.PNG";
import { useLanguage } from "../i18n/LanguageContext";
import { UNDERGRADUATE_TRACKS } from "../pages/Admissions/undergraduateTracks";

export default function Navbar() {
    const [scrolled, setScrolled]   = useState(false);
    const [langOpen, setLangOpen]   = useState(false);
    const [openDD, setOpenDD]       = useState(null);
    const [openSubDD, setOpenSubDD] = useState(null);
    const [openFestSubDD, setOpenFestSubDD] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [a11yActive, setA11yActive] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const location = useLocation();
    const navigate = useNavigate();
    const navRef = useRef(null);

    // ── Listen for accessibility settings changes ─────────────
    useEffect(() => {
        const handler = (e) => setA11yActive(e.detail?.count > 0);
        window.addEventListener("iau:a11y:changed", handler);
        // Check initial state from localStorage
        try {
            const s = JSON.parse(localStorage.getItem("iau_a11y_v1") || "{}");
            const active = Object.values(s).some((v) => v === true) || (s.fontSize && s.fontSize !== 16);
            setA11yActive(!!active);
        } catch {}
        return () => window.removeEventListener("iau:a11y:changed", handler);
    }, []);

    // ✅ OurStaff va shunga o‘xshash hero-baner page lar
    const isStaffListPage = location.pathname === "/staff";
    const isStaffDetailPage = location.pathname.startsWith("/staff/");
    const isLegacyStaffPage =
        location.pathname === "/our-staff" || location.pathname === "/department-community";

    // ✅ Admissions page lar
    const isAdmissionsPage = location.pathname.startsWith("/admissions");

    const overlayPages = ["/our-staff"];
    const overlayMode = overlayPages.includes(location.pathname);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onRouteCheck = () => setScrolled(window.scrollY > 30);
        onRouteCheck();
    }, [location.pathname]);

    useEffect(() => {
        const onDoc = (e) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target)) {
                setLangOpen(false);
                setOpenDD(null);
                setOpenSubDD(null);
                setOpenFestSubDD(null);
            }
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
    }, [mobileOpen]);

    const dropdowns = useMemo(
        () => ({
            about: [
                "PRE-FOUNDATION",
                "FOUNDATION",
                "UNDERGRADUATE",
                "POSTGRADUATE",
                "PhD AND DSc PROGRAMMES",
            ],
            research: [
                "ACADEMIC CALENDAR FOR 2025/2026",
                "INTERNATIONAL STUDENTS",
                "STUDENT HANDBOOK",
                "PRESENTATION FOR APPLICANTS",
                "CAREER SERVICES",
                "IAU CLUBS",
                "STUDENTS CREATIVITY",
                "INTERVIEWS",
                "ECO-ACTIVE STUDENTS",
            ],
            admissionsHub: [
                "HOW TO APPLY",
                "TUITION FEES",
                "OPEN DAYS AT IAU",
            ],
            researchMenu: ["IAU SCIENTIFIC COUNCIL", "RESEARCH PROJECTS", "RESEARCH PUBLICATION", "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)"],
            life: {
                items: [
                    {
                        name: "INTERNATIONAL COOPERATION DEPARTMENT",
                        type: "link",
                        path: "/international-department/cooperation",
                    },
                    {
                        name: "FESTIVALS",
                        type: "group",
                        items: [
                            {
                                name: "LIFE SCIENCE FESTIVAL - 2025",
                                subItems: ["SUMMARY OF EVENT 2025"],
                            },
                            {
                                name: "LIFE SCIENCE FESTIVAL - 2024",
                                subItems: ["SUMMARY OF EVENT 2024"],
                            },
                            {
                                name: "LIFE SCIENCE FESTIVAL - 2023",
                                subItems: ["SUMMARY OF EVENT 2023"],
                            },
                            {
                                name: "22 REASONS TO ATTEND",
                                subItems: [],
                            },
                        ],
                    },
                    {
                        name: "CAREER SERVICES CENTER",
                        type: "link",
                        path: "/international-department/career-services",
                    },
                    {
                        name: "FAO ELEARNING ACADEMY",
                        type: "link",
                        path: "https://elearning.fao.org/",
                        external: true,
                    },
                    {
                        name: "FAQ",
                        type: "link",
                        path: "/international-department/faq",
                    },
                ],
            },
            news: ["ABOUT UNIVERSITY", "OUR STAFF", "CONTACT"],
        }),
        []
    );
    const hiddenStudentLifeItems = new Set([
        "INTERNATIONAL STUDENTS",
        "PRESENTATION FOR APPLICANTS",
        "CAREER SERVICES",
        "IAU CLUBS",
        "STUDENTS CREATIVITY",
        "INTERVIEWS",
    ]);

    // ── nav dropdown label lookup (key → translated string) ──
    const nl = (key) => t(`nav.${key}`);
    const navLabels = {
        "PRE-FOUNDATION": nl("preFoundation"),
        "FOUNDATION": nl("foundation"),
        "UNDERGRADUATE": nl("undergraduate"),
        "POSTGRADUATE": nl("postgraduate"),
        "PhD AND DSc PROGRAMMES": nl("phdDsc"),
        "HOW TO APPLY": nl("howToApply"),
        "TUITION FEES": nl("tuitionFees"),
        "OPEN DAYS AT IAU": nl("openDaysAtIau"),
        "ACADEMIC CALENDAR FOR 2025/2026": nl("academicCalendar"),
        "INTERNATIONAL STUDENTS": nl("internationalStudents"),
        "STUDENT HANDBOOK": nl("studentHandbook"),
        "PRESENTATION FOR APPLICANTS": nl("presentationApplicants"),
        "CAREER SERVICES": nl("careerServices"),
        "IAU CLUBS": nl("iauClubs"),
        "STUDENTS CREATIVITY": nl("studentsCreativity"),
        "INTERVIEWS": nl("interviews"),
        "ECO-ACTIVE STUDENTS": nl("ecoActiveStudents"),
        "IAU SCIENTIFIC COUNCIL": nl("scientificCouncil"),
        "RESEARCH PROJECTS": nl("researchProjects"),
        "RESEARCH PUBLICATION": nl("researchPublication"),
        "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)": nl("gucae"),
        "INTERNATIONAL COOPERATION DEPARTMENT": nl("internationalCooperationDepartment"),
        "CAREER SERVICES CENTER": nl("careerServicesCenter"),
        "FAO ELEARNING ACADEMY": nl("faoElearningAcademy"),
        "FAQ": nl("faqMenu"),
        "FESTIVALS": nl("festivals"),
        "LIFE SCIENCE FESTIVAL": nl("lifeScienceFestival"),
        "LIFE SCIENCE FESTIVAL - 2025": nl("festival2025"),
        "LIFE SCIENCE FESTIVAL - 2024": nl("festival2024"),
        "LIFE SCIENCE FESTIVAL - 2023": nl("festival2023"),
        "SUMMARY OF EVENT 2025": nl("summary2025"),
        "SUMMARY OF EVENT 2024": nl("summary2024"),
        "SUMMARY OF EVENT 2023": nl("summary2023"),
        "22 REASONS TO ATTEND": nl("reasons22"),
        "ABOUT UNIVERSITY": nl("aboutUniversity"),
        "OUR STAFF": nl("staffMenu"),
        "CONTACT": nl("contact"),
        "UZBEK": t("admissions.trackUzbek"),
        "ENGLISH": t("admissions.trackEnglish"),
        "RUSSIAN": t("admissions.trackRussian"),
    };
    const nL = (x) => navLabels[x] || x;

    const admissionsHubRoutes = {
        "HOW TO APPLY": "/admissions/how-to-apply",
        "TUITION FEES": "/admissions/tuition-fees",
        "OPEN DAYS AT IAU": "/admissions/open-days",
    };

    const closeAll = () => {
        setLangOpen(false);
        setOpenDD(null);
        setOpenSubDD(null);
        setOpenFestSubDD(null);
    };

    const navigateIntlLink = (item) => {
        closeAll();
        if (item.external || item.path?.startsWith("http")) {
            window.open(item.path, "_blank", "noopener,noreferrer");
            return;
        }
        navigate(item.path);
    };

    const navigateFestivalSummary = (subItem) => {
        closeAll();
        if (subItem === "SUMMARY OF EVENT 2025") navigate("/festivals/summary-2025");
        if (subItem === "SUMMARY OF EVENT 2024") navigate("/festivals/summary-2024");
        if (subItem === "SUMMARY OF EVENT 2023") navigate("/festivals/summary-2023");
    };

    const navigateFestivalLeaf = (name) => {
        if (name === "22 REASONS TO ATTEND") {
            closeAll();
            navigate("/festivals/22-reasons");
            return true;
        }
        return false;
    };

    const goStaff = () => {
        closeAll();
        setMobileOpen(false);
        navigate("/staff");
    };

    const isScientificCouncilPage = location.pathname.startsWith("/research/scientific-council");
    const isResearchProjectsPage =
        location.pathname.startsWith("/research/research-projects") ||
        location.pathname.startsWith("/research/research-publication");
    const isGucaePage = location.pathname.startsWith("/research/gucae");

    const isAboutPage = location.pathname === "/about";
    const isContactPage = location.pathname === "/contact";

    const isFestivalsPage = location.pathname.startsWith("/festivals");
    const isInternationalDeptPage = location.pathname.startsWith("/international-department");
    const isAcademicCalendarPage = location.pathname.startsWith("/student-life/academic-calendar");
    const isStudentHandbookPage = location.pathname.startsWith("/student-life/student-handbook");
    const isPresentationApplicantsPage = location.pathname.startsWith("/student-life/presentation-for-applicants");
    const isIauClubsPage = location.pathname.startsWith("/student-life/iau-clubs");
    const isInternationalStudentsPage = location.pathname.startsWith("/student-life/international-students");
    const isEkofaolTalabalarPage = location.pathname.startsWith("/student-life/ekofaol-talabalar");
    const isLatestNewsPage = location.pathname.startsWith("/latest-news");
    const isNewsDetailPage = location.pathname.startsWith("/news/");
    const isEventsPage = location.pathname.startsWith("/events");
    const solidWhiteMode =
        isStaffListPage || isStaffDetailPage || isLegacyStaffPage || isAdmissionsPage || isScientificCouncilPage || isResearchProjectsPage || isGucaePage || isAboutPage || isContactPage || isFestivalsPage || isInternationalDeptPage || isAcademicCalendarPage || isStudentHandbookPage || isPresentationApplicantsPage || isIauClubsPage || isInternationalStudentsPage || isEkofaolTalabalarPage || isLatestNewsPage || isNewsDetailPage || isEventsPage;

    return (
        <header
            className={`navx ${scrolled ? "is-scrolled" : ""} ${overlayMode ? "navx--overlay" : ""
                } ${solidWhiteMode ? "navx--solid" : ""}`}
            ref={navRef}
            style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
            {/* ================= TOP STRIP ================= */}
            <div className="navx-top">
                <div className="navx-container">
                    <div className="navx-top-row">
                        <div className="navx-top-left">
                            <a className="navx-top-link" href="mailto:info@iau.uz">
                                <IoMailOutline /> info@iau.uz
                            </a>
                            <span className="navx-sep" />
                            <a className="navx-top-link" href="tel:+998555170071">
                                <IoCallOutline /> +998 (55) 517 00 71
                            </a>
                        </div>

                        <div className="navx-top-center">
                            <div className="navx-test-badge">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                                    <defs>
                                        <linearGradient id="testBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#4a7ec7" />
                                            <stop offset="100%" stopColor="#1eb894" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#testBadgeGrad)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                                {t("nav.testBadge")}
                            </div>
                        </div>

                        <div className="navx-top-right">
                            {/* ── Accessibility trigger ── */}
                            <button
                                className={`navx-iconBtn navx-a11y-btn`}
                                type="button"
                                aria-label="Open accessibility settings"
                                aria-controls="a11y-panel"
                                title="Accessibility Settings (WCAG 2.1)"
                                onClick={() => window.dispatchEvent(new CustomEvent("iau:a11y:toggle"))}
                            >
                                <IoEyeOutline />
                                {a11yActive && (
                                    <span className="navx-a11y-dot" aria-hidden="true" />
                                )}
                            </button>

                            <button
                                className="navx-iconBtn"
                                type="button"
                                aria-label="Search"
                            >
                                <IoSearchOutline />
                            </button>

                            <a className="navx-iconA" href="https://www.instagram.com/iau_uz/" aria-label="Instagram">
                                <IoLogoInstagram />
                            </a>
                            <a className="navx-iconA" href="https://www.youtube.com/@iau_2022?si=wpViWkIgyDb5xzc-" aria-label="YouTube">
                                <IoLogoYoutube />
                            </a>
                            <a className="navx-iconA" href="https://www.facebook.com/iau.uz?mibextid=qi2Omg&rdid=SykNsNKJUEFOsEIh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FWND1PuA6C6xFT8mU%2F%3Fmibextid%3Dqi2Omg#" aria-label="Facebook">
                                <IoLogoFacebook />
                            </a>
                            <a className="navx-iconA" href="https://t.me/iau_uz" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>

                            <div className={`navx-lang ${langOpen ? "open" : ""}`}>
                                <button
                                    type="button"
                                    className="navx-langBtn"
                                    onClick={() => {
                                        closeAll();
                                        setLangOpen((v) => !v);
                                    }}
                                >
                                    <span className="navx-flag">
                                        {lang === "uz" ? "UZ" : lang === "ru" ? "RU" : "EN"}
                                    </span>
                                    <span>{t("nav.langLabel")}</span>
                                    <IoChevronDownOutline className="navx-chev" />
                                </button>

                                <div className="navx-langMenu">
                                    <button type="button" className={lang === "uz" ? "active-lang" : ""} onClick={() => { setLang("uz"); setLangOpen(false); }}>
                                        UZ — O’zbek
                                    </button>
                                    <button type="button" className={lang === "ru" ? "active-lang" : ""} onClick={() => { setLang("ru"); setLangOpen(false); }}>
                                        RU — Русский
                                    </button>
                                    <button type="button" className={lang === "en" ? "active-lang" : ""} onClick={() => { setLang("en"); setLangOpen(false); }}>
                                        EN — English
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAV ================= */}
            <nav className="navx-main" aria-label="Main Navigation">
                <div className="navx-container">
                    <div className="navx-main-row">
                        <Link
                            className="navx-brand"
                            to="/"
                            onClick={() => setMobileOpen(false)}
                        >
                            <img
                                src={navbarLogo}
                                alt="University Logo"
                                className="navx-logo"
                            />
                        </Link>

                        <div className="navx-links">
                            <div className={`navx-dd ${openDD === "about" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "about" ? null : "about"));
                                    }}
                                >
                                    {t("nav.programmes")} <IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.about.map((x) => {
                                        if (x === "PRE-FOUNDATION") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/pre-foundation");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "FOUNDATION") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/foundation");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "UNDERGRADUATE") {
                                            return (
                                                <div key={nL(x)} className={`navx-ddSubMenuContainer ${openSubDD === "UNDERGRADUATE" ? "open" : ""}`}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setOpenSubDD((prev) => (prev === "UNDERGRADUATE" ? null : "UNDERGRADUATE"));
                                                        }}
                                                        className="navx-ddAction"
                                                    >
                                                        {nL(x)}{" "}
                                                        <IoChevronForwardOutline className={`navx-subChev ${openSubDD === "UNDERGRADUATE" ? "open" : ""}`} />
                                                    </a>
                                                    <div className="navx-ddSubMenu">
                                                        {UNDERGRADUATE_TRACKS.map((track) => (
                                                            <button
                                                                key={track.id}
                                                                type="button"
                                                                className="navx-subItemBtn"
                                                                onClick={() => {
                                                                    closeAll();
                                                                    navigate(track.path);
                                                                }}
                                                            >
                                                                {t(`admissions.${track.labelKey}`)}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        if (x === "POSTGRADUATE") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/postgraduate");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "PhD AND DSc PROGRAMMES") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/phd");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        return (
                                            <a key={nL(x)} href="#" onClick={() => setOpenDD(null)}>
                                                {nL(x)}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "admissionsHub" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "admissionsHub" ? null : "admissionsHub"));
                                    }}
                                >
                                    {t("nav.admissions")} <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.admissionsHub.map((x) => (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-ddAction"
                                            onClick={() => {
                                                closeAll();
                                                navigate(admissionsHubRoutes[x]);
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "research" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "research" ? null : "research"));
                                    }}
                                >
                                    {t("nav.studentLife")} <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.research.map((x) => (
                                        hiddenStudentLifeItems.has(x) ? null :
                                        x === "ACADEMIC CALENDAR FOR 2025/2026" ? (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-ddAction"
                                                onClick={() => {
                                                    closeAll();
                                                    navigate("/student-life/academic-calendar");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        ) : x === "STUDENT HANDBOOK" ? (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-ddAction"
                                                onClick={() => {
                                                    closeAll();
                                                    navigate("/student-life/student-handbook");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        ) : x === "INTERNATIONAL STUDENTS" ? (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-ddAction"
                                                onClick={() => {
                                                    closeAll();
                                                    navigate("/student-life/international-students");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        ) : x === "PRESENTATION FOR APPLICANTS" ? (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-ddAction"
                                                onClick={() => {
                                                    closeAll();
                                                    navigate("/student-life/presentation-for-applicants");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        ) : x === "IAU CLUBS" ? (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-ddAction"
                                                onClick={() => {
                                                    closeAll();
                                                    navigate("/student-life/iau-clubs");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        ) : x === "ECO-ACTIVE STUDENTS" ? (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-ddAction"
                                                onClick={() => {
                                                    closeAll();
                                                    navigate("/student-life/ekofaol-talabalar");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        ) : (
                                            <a key={nL(x)} href="#" onClick={() => setOpenDD(null)}>
                                                {nL(x)}
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>

                            <div
                                className={`navx-dd ${openDD === "researchMenu" ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "researchMenu" ? null : "researchMenu"));
                                    }}
                                >
                                    {t("nav.research")} <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.researchMenu.map((x) => {
                                        if (x === "IAU SCIENTIFIC COUNCIL") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/research/scientific-council");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "RESEARCH PROJECTS") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/research/research-projects");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "RESEARCH PUBLICATION") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/research/research-publication");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/research/gucae");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        return (
                                            <a key={nL(x)} href="#" onClick={() => setOpenDD(null)}>
                                                {nL(x)}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "life" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "life" ? null : "life"));
                                        if (openDD === "life") {
                                            setOpenSubDD(null);
                                            setOpenFestSubDD(null);
                                        }
                                    }}
                                >
                                    {t("nav.internationalDepartment")} <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu navx-intl-menu">
                                    {dropdowns.life.items.map((item) => {
                                        if (item.type === "link") {
                                            return (
                                                <button
                                                    key={item.name}
                                                    type="button"
                                                    className="navx-ddAction navx-intl-link"
                                                    onClick={() => navigateIntlLink(item)}
                                                >
                                                    {nL(item.name)}
                                                </button>
                                            );
                                        }

                                        if (item.type !== "group") return null;

                                        return (
                                            <div
                                                key={item.name}
                                                className={`navx-ddSubMenuContainer ${openSubDD === item.name ? "open" : ""}`}
                                            >
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setOpenFestSubDD(null);
                                                        setOpenSubDD((prev) => (prev === item.name ? null : item.name));
                                                    }}
                                                    className="navx-ddAction"
                                                >
                                                    {nL(item.name)}{" "}
                                                    <IoChevronForwardOutline className={`navx-subChev ${openSubDD === item.name ? "open" : ""}`} />
                                                </a>
                                                {item.items && (
                                                    <div className="navx-ddSubMenu">
                                                        {item.items.map((x) => (
                                                            <div
                                                                key={nL(x.name)}
                                                                className={`navx-ddSubMenuContainer ${openFestSubDD === x.name ? "open" : ""}`}
                                                            >
                                                                <a
                                                                    href="#"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        if (x.subItems && x.subItems.length === 0) {
                                                                            if (!navigateFestivalLeaf(x.name)) {
                                                                                setOpenDD(null);
                                                                                setOpenSubDD(null);
                                                                                setOpenFestSubDD(null);
                                                                            }
                                                                        } else {
                                                                            setOpenFestSubDD((prev) => (prev === x.name ? null : x.name));
                                                                        }
                                                                    }}
                                                                    className="navx-ddAction"
                                                                >
                                                                    {nL(x.name)}{" "}
                                                                    {x.subItems && x.subItems.length > 0 && (
                                                                        <IoChevronForwardOutline className={`navx-subChev ${openFestSubDD === x.name ? "open" : ""}`} />
                                                                    )}
                                                                </a>
                                                                {x.subItems && x.subItems.length > 0 && (
                                                                    <div className="navx-ddSubMenu">
                                                                        {x.subItems.map((subItem) => (
                                                                            <button
                                                                                key={nL(subItem)}
                                                                                className="navx-subItemBtn"
                                                                                onClick={() => navigateFestivalSummary(subItem)}
                                                                            >
                                                                                {nL(subItem)}
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "news" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "news" ? null : "news"));
                                    }}
                                >
                                    {t("nav.about")} <IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.news.map((x) => {
                                        if (x === "ABOUT UNIVERSITY") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/about");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "OUR STAFF") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={goStaff}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }
                                        if (x === "CONTACT") {
                                            return (
                                                <button
                                                    key={nL(x)}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/contact");
                                                    }}
                                                >
                                                    {nL(x)}
                                                </button>
                                            );
                                        }

                                        return (
                                            <a key={nL(x)} href="#" onClick={() => setOpenDD(null)}>
                                                {nL(x)}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <button className="navx-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => { setOpenDD(null); navigate("/latest-news"); }}>
                                {t("nav.latestNews")}
                            </button>
                        </div>

                        <div className="navx-cta">
                            <button className="navx-apply" type="button" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>
                                {t("common.applyNow")} <IoChevronForwardOutline className="navx-applyArrow" />
                            </button>
                        </div>

                        <button
                            className="navx-burger"
                            type="button"
                            aria-label="Open menu"
                            onClick={() => {
                                closeAll();
                                setMobileOpen(true);
                            }}
                        >
                            <IoMenuOutline />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ================= MOBILE OVERLAY MENU ================= */}
            <div className={`navx-mOverlay ${mobileOpen ? "open" : ""}`}>
                <div className="navx-mPanel">
                    <div className="navx-mTop">
                        <div className="navx-mBrand">
                            <span style={{ fontSize: "17px", fontWeight: "800", color: "rgba(255,255,255,0.95)", letterSpacing: "0.2px" }}>
                                International Agriculture University
                            </span>
                        </div>

                        <button
                            className="navx-mClose"
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                        >
                            <IoCloseOutline />
                        </button>
                    </div>

                    <div className="navx-mSearch">
                        <IoSearchOutline />
                        <input placeholder={lang === "uz" ? "Qidirish..." : lang === "ru" ? "Поиск..." : "Search..."} />
                    </div>

                    <div className="navx-mLinks">
                        <details>
                            <summary>
                                {t("nav.programmes")} <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.about.map((x) => {
                                    if (x === "PRE-FOUNDATION") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/pre-foundation");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "FOUNDATION") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/foundation");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "UNDERGRADUATE") {
                                        return (
                                            <details key={nL(x)} className="navx-mNested">
                                                <summary>{nL(x)}</summary>
                                                <div className="navx-mDD navx-mDD--nested">
                                                    {UNDERGRADUATE_TRACKS.map((track) => (
                                                        <button
                                                            key={track.id}
                                                            type="button"
                                                            className="navx-mDDbtn"
                                                            onClick={() => {
                                                                setMobileOpen(false);
                                                                navigate(track.path);
                                                            }}
                                                        >
                                                            {t(`admissions.${track.labelKey}`)}
                                                        </button>
                                                    ))}
                                                </div>
                                            </details>
                                        );
                                    }
                                    if (x === "POSTGRADUATE") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/postgraduate");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "PhD AND DSc PROGRAMMES") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/phd");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    return (
                                        <a key={nL(x)} href="#" onClick={() => setMobileOpen(false)}>
                                            {nL(x)}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>

                        <details>
                            <summary>
                                {t("nav.admissions")} <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.admissionsHub.map((x) => (
                                    <button
                                        key={nL(x)}
                                        type="button"
                                        className="navx-mDDbtn"
                                        onClick={() => {
                                            setMobileOpen(false);
                                            navigate(admissionsHubRoutes[x]);
                                        }}
                                    >
                                        {nL(x)}
                                    </button>
                                ))}
                            </div>
                        </details>

                        <details>
                            <summary>
                                {t("nav.studentLife")} <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                    {dropdowns.research.map((x) => (
                                    hiddenStudentLifeItems.has(x) ? null :
                                    x === "ACADEMIC CALENDAR FOR 2025/2026" ? (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-mDDbtn"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate("/student-life/academic-calendar");
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ) : x === "STUDENT HANDBOOK" ? (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-mDDbtn"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate("/student-life/student-handbook");
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ) : x === "INTERNATIONAL STUDENTS" ? (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-mDDbtn"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate("/student-life/international-students");
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ) : x === "PRESENTATION FOR APPLICANTS" ? (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-mDDbtn"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate("/student-life/presentation-for-applicants");
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ) : x === "IAU CLUBS" ? (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-mDDbtn"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate("/student-life/iau-clubs");
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ) : x === "ECO-ACTIVE STUDENTS" ? (
                                        <button
                                            key={nL(x)}
                                            type="button"
                                            className="navx-mDDbtn"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate("/student-life/ekofaol-talabalar");
                                            }}
                                        >
                                            {nL(x)}
                                        </button>
                                    ) : (
                                        <a key={nL(x)} href="#" onClick={() => setMobileOpen(false)}>
                                            {nL(x)}
                                        </a>
                                    )
                                ))}
                            </div>
                        </details>

                        <details>
                            <summary>
                                {t("nav.research")} <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.researchMenu.map((x) => {
                                    if (x === "IAU SCIENTIFIC COUNCIL") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/research/scientific-council");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "RESEARCH PROJECTS") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/research/research-projects");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "RESEARCH PUBLICATION") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/research/research-publication");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/research/gucae");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    return (
                                        <a key={nL(x)} href="#" onClick={() => setMobileOpen(false)}>
                                            {nL(x)}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>

                        <details>
                            <summary>
                                {t("nav.internationalDepartment")} <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD navx-mIntl">
                                {dropdowns.life.items.map((item) => {
                                    if (item.type === "link") {
                                        return (
                                            <button
                                                key={item.name}
                                                type="button"
                                                className="navx-mSubBtn navx-mSubBtn--full"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigateIntlLink(item);
                                                }}
                                            >
                                                {nL(item.name)}
                                            </button>
                                        );
                                    }

                                    if (item.type !== "group") return null;

                                    return (
                                        <details key={item.name} className="navx-mSubDetails">
                                            <summary>
                                                {nL(item.name)} <IoChevronDownOutline />
                                            </summary>
                                            <div className="navx-mSubDD">
                                                {item.items?.map((x) => (
                                                    x.subItems && x.subItems.length === 0 ? (
                                                        <button
                                                            key={nL(x.name)}
                                                            className="navx-mSubBtn navx-mSubBtn--full"
                                                            onClick={() => {
                                                                setMobileOpen(false);
                                                                navigateFestivalLeaf(x.name);
                                                            }}
                                                        >
                                                            {nL(x.name)}
                                                        </button>
                                                    ) : (
                                                        <details key={nL(x.name)} className="navx-mSubDetails">
                                                            <summary>
                                                                {nL(x.name)} <IoChevronDownOutline />
                                                            </summary>
                                                            {x.subItems && x.subItems.length > 0 && (
                                                                <div className="navx-mSubDD">
                                                                    {x.subItems.map((subItem) => (
                                                                        <button
                                                                            key={nL(subItem)}
                                                                            className="navx-mSubBtn"
                                                                            onClick={() => {
                                                                                setMobileOpen(false);
                                                                                navigateFestivalSummary(subItem);
                                                                            }}
                                                                        >
                                                                            {nL(subItem)}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </details>
                                                    )
                                                ))}
                                            </div>
                                        </details>
                                    );
                                })}
                            </div>
                        </details>

                        <details>
                            <summary>
                                {t("nav.about")} <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.news.map((x) => {
                                    if (x === "ABOUT UNIVERSITY") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/about");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "OUR STAFF") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={goStaff}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    if (x === "CONTACT") {
                                        return (
                                            <button
                                                key={nL(x)}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/contact");
                                                }}
                                            >
                                                {nL(x)}
                                            </button>
                                        );
                                    }
                                    return (
                                        <a key={nL(x)} href="#" onClick={() => setMobileOpen(false)}>
                                            {nL(x)}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>

                        <button className="navx-mLink" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }} onClick={() => { setMobileOpen(false); navigate("/latest-news"); }}>
                            {t("nav.latestNews")}
                        </button>
                    </div>

                    <div className="navx-mActions">
                        <div className="navx-mExtras">
                            <div className={`navx-lang ${langOpen ? "open" : ""}`}>
                                <button
                                    type="button"
                                    className="navx-langBtn"
                                    onClick={() => {
                                        closeAll();
                                        setLangOpen((v) => !v);
                                    }}
                                >
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span className="navx-flag">{lang === "uz" ? "UZ" : lang === "ru" ? "RU" : "EN"}</span>
                                        <span>{t("nav.langLabel")}</span>
                                    </span>
                                    <IoChevronDownOutline className="navx-chev" />
                                </button>
                                <div className="navx-langMenu">
                                    <button type="button" className={lang === "uz" ? "active-lang" : ""} onClick={() => { setLang("uz"); setLangOpen(false); }}>
                                        UZ — O’zbek
                                    </button>
                                    <button type="button" className={lang === "ru" ? "active-lang" : ""} onClick={() => { setLang("ru"); setLangOpen(false); }}>
                                        RU — Русский
                                    </button>
                                    <button type="button" className={lang === "en" ? "active-lang" : ""} onClick={() => { setLang("en"); setLangOpen(false); }}>
                                        EN — English
                                    </button>
                                </div>
                            </div>

                            <div className="navx-mSocials">
                                <a className="navx-iconA" href="https://www.instagram.com/iau_uz/" aria-label="Instagram">
                                    <IoLogoInstagram />
                                </a>
                                <a className="navx-iconA" href="https://www.youtube.com/@iau_2022?si=wpViWkIgyDb5xzc-" aria-label="YouTube">
                                    <IoLogoYoutube />
                                </a>
                                <a className="navx-iconA" href="https://www.facebook.com/iau.uz?mibextid=qi2Omg&rdid=SykNsNKJUEFOsEIh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FWND1PuA6C6xFT8mU%2F%3Fmibextid%3Dqi2Omg#" aria-label="Facebook">
                                    <IoLogoFacebook />
                                </a>
                                <a className="navx-iconA" href="https://t.me/iau_uz" aria-label="Telegram">
                                    <FaTelegramPlane />
                                </a>
                            </div>
                        </div>

                        <button className="navx-apply wide" type="button" onClick={() => window.open('https://iau-admission.tilda.ws', '_blank')}>
                            {t("common.applyNow")} <IoChevronForwardOutline className="navx-applyArrow" />
                        </button>

                        <div className="navx-mContacts">
                            <a href="mailto:info@iau.uz">
                                <IoMailOutline /> info@iau.uz
                            </a>
                            <a href="tel:+998555170071">
                                <IoCallOutline /> +998 (55) 517 00 71
                            </a>
                        </div>
                    </div>
                </div>

                <button
                    className="navx-mBackdrop"
                    type="button"
                    aria-label="Close menu backdrop"
                    onClick={() => setMobileOpen(false)}
                />
            </div>
        </header>
    );
}
