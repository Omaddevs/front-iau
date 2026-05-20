// ============================================================
//  AccessibilityToolbar.jsx  ·  IAU University  ·  2025
//  Triggered via navbar eye-icon (CustomEvent: iau:a11y:toggle)
//  WCAG 2.1 AA — keyboard, screen-reader, localStorage, TTS
// ============================================================

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import { createPortal } from "react-dom";
import "./AccessibilityToolbar.css";
import {
  IoAccessibilityOutline,
  IoCloseOutline,
  IoRefreshOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoContrastOutline,
  IoSunnyOutline,
  IoReaderOutline,
  IoHandRightOutline,
  IoVolumeHighOutline,
  IoPauseOutline,
  IoStopOutline,
  IoTextOutline,
  IoColorPaletteOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { FaFont } from "react-icons/fa";

// ── Constants ────────────────────────────────────────────────
const STORAGE_KEY = "iau_a11y_v1";
const FONT_BASE   = 16;
const FONT_STEP   = 2;
const FONT_MIN    = 12;
const FONT_MAX    = 26;

const DEFAULTS = Object.freeze({
  fontSize:  FONT_BASE,
  contrast:  false,
  grayscale: false,
  blueLight: false,
  noImages:  false,
  readGuide: false,
  dyslexia:  false,
  textSpace: false,
  bigCursor: false,
});

// ── Helpers ──────────────────────────────────────────────────
const loadSettings = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
  } catch { return { ...DEFAULTS }; }
};

const saveSettings = (s) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
};

const applyToDOM = (s) => {
  const h    = document.documentElement;
  const root = document.getElementById("root");
  const scale = s.fontSize / FONT_BASE;

  // ── Font size ──────────────────────────────────────────────
  // zoom scales ALL content (px, rem, clamp) uniformly.
  // Panel is rendered via createPortal into document.body
  // (outside #root), so it is NOT affected by this zoom.
  if (root) {
    root.style.zoom = scale !== 1 ? String(scale) : "";
  }
  // Also set html font-size so rem-based elements scale too
  h.style.fontSize = scale !== 1 ? `${s.fontSize}px` : "";
  // Prevent horizontal overflow when zoomed in
  document.body.style.overflowX = scale > 1 ? "hidden" : "";

  // ── Other a11y classes ─────────────────────────────────────
  h.classList.toggle("a11y--contrast",  s.contrast);
  h.classList.toggle("a11y--grayscale", s.grayscale);
  h.classList.toggle("a11y--blue",      s.blueLight);
  h.classList.toggle("a11y--noimages",  s.noImages);
  h.classList.toggle("a11y--dyslexia",  s.dyslexia);
  h.classList.toggle("a11y--spacing",   s.textSpace);
  h.classList.toggle("a11y--bigcursor", s.bigCursor);
};

// ── Feature Button ───────────────────────────────────────────
function Btn({ id, active, onClick, label, icon, children }) {
  return (
    <button
      id={id}
      className={`a11y-btn${active ? " is-on" : ""}`}
      onClick={onClick}
      aria-pressed={active}
      aria-label={`${label} — ${active ? "on" : "off"}`}
      type="button"
    >
      {active && <IoCheckmarkOutline className="a11y-btn__chk" aria-hidden="true" />}
      <span className="a11y-btn__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="a11y-btn__lbl">{children}</span>
    </button>
  );
}

// ════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ════════════════════════════════════════════════════════════
export default function AccessibilityToolbar() {
  const [open,      setOpen]      = useState(false);
  const [settings,  setSettings]  = useState(loadSettings);
  const [ttsStatus, setTtsStatus] = useState("idle");
  const [guideY,    setGuideY]    = useState(-200);

  const panelRef = useRef(null);
  const firstBtnRef = useRef(null);

  // ── Mount: restore + listen for navbar toggle event ───────
  useEffect(() => {
    applyToDOM(settings);

    // Navbar eye-button fires this event
    const onToggle = () => setOpen((v) => !v);
    window.addEventListener("iau:a11y:toggle", onToggle);
    return () => window.removeEventListener("iau:a11y:toggle", onToggle);
  }, []); // eslint-disable-line

  // ── Settings changed: apply + persist + notify navbar ─────
  useEffect(() => {
    applyToDOM(settings);
    saveSettings(settings);
    // Tell navbar how many settings are active (for dot indicator)
    window.dispatchEvent(
      new CustomEvent("iau:a11y:changed", { detail: { count: countActive(settings) } })
    );
  }, [settings]);

  // ── Reading guide ─────────────────────────────────────────
  useEffect(() => {
    if (!settings.readGuide) return;
    const fn = (e) => setGuideY(e.clientY);
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, [settings.readGuide]);

  // ── Outside click closes panel ────────────────────────────
  useEffect(() => {
    if (!open) return;
    const fn = (e) => {
      if (!panelRef.current?.contains(e.target)) setOpen(false);
    };
    // Small delay so the toggle-click doesn't immediately close
    const id = setTimeout(() => document.addEventListener("mousedown", fn), 80);
    return () => { clearTimeout(id); document.removeEventListener("mousedown", fn); };
  }, [open]);

  // ── Escape key ────────────────────────────────────────────
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape" && open) setOpen(false); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [open]);

  // ── Focus trap ────────────────────────────────────────────
  useEffect(() => {
    if (!open || !panelRef.current) return;
    // Focus first button when panel opens
    setTimeout(() => firstBtnRef.current?.focus(), 50);

    const trap = (e) => {
      if (e.key !== "Tab" || !panelRef.current) return;
      const els = [...panelRef.current.querySelectorAll(
        'button:not([disabled]), [tabindex="0"]'
      )];
      if (!els.length) return;
      const [first, last] = [els[0], els[els.length - 1]];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  // ── Helpers ───────────────────────────────────────────────
  const toggle = useCallback(
    (key) => setSettings((p) => ({ ...p, [key]: !p[key] })),
    []
  );

  const adjustFont = useCallback(
    (delta) => setSettings((p) => ({
      ...p,
      fontSize: Math.min(FONT_MAX, Math.max(FONT_MIN, p.fontSize + delta)),
    })),
    []
  );

  const resetAll = useCallback(() => {
    window.speechSynthesis?.cancel();
    setTtsStatus("idle");
    setSettings({ ...DEFAULTS });
  }, []);

  // ── TTS ───────────────────────────────────────────────────
  const speakPage = useCallback(() => {
    if (!window.speechSynthesis) return;
    const main = document.querySelector("main, [role='main'], #root > div");
    const text = ((main || document.body).innerText || "").slice(0, 8000);
    const utt  = new SpeechSynthesisUtterance(text);
    utt.lang  = "en-US"; utt.rate = 0.92;
    utt.onend = utt.onerror = () => setTtsStatus("idle");
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
    setTtsStatus("speaking");
  }, []);

  const pauseResume = useCallback(() => {
    if (ttsStatus === "speaking") {
      window.speechSynthesis.pause(); setTtsStatus("paused");
    } else if (ttsStatus === "paused") {
      window.speechSynthesis.resume(); setTtsStatus("speaking");
    }
  }, [ttsStatus]);

  const stopTts = useCallback(() => {
    window.speechSynthesis?.cancel(); setTtsStatus("idle");
  }, []);

  const fontPct = Math.round(settings.fontSize / FONT_BASE * 100);
  const fontBarW = Math.round((settings.fontSize - FONT_MIN) / (FONT_MAX - FONT_MIN) * 100);

  // ════════════════════════════════════════════════════════════
  // createPortal renders directly into document.body (outside
  // #root), so the panel is unaffected by #root zoom scaling.
  return createPortal(
    <>
      {/* ── Reading Guide ───────────────────────────────── */}
      {settings.readGuide && (
        <div
          className="a11y-guide"
          style={{ top: `${guideY}px` }}
          aria-hidden="true"
          role="presentation"
        />
      )}

      {/* ── Blue-light overlay (position:fixed, not filter) ── */}
      {settings.blueLight && (
        <div className="a11y-bluelight" aria-hidden="true" />
      )}

      {/* ── Backdrop ─────────────────────────────────────── */}
      <div
        className={`a11y-back${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Panel ────────────────────────────────────────── */}
      <aside
        ref={panelRef}
        id="a11y-panel"
        className={`a11y-panel${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Accessibility settings"
        aria-hidden={!open}
      >
        {/* ─── Header ──────────────────────────────────── */}
        <div className="a11y-hd">
          <div className="a11y-hd__info">
            <div className="a11y-hd__title">
              <IoAccessibilityOutline aria-hidden="true" />
              Accessibility
            </div>
            <div className="a11y-hd__sub">WCAG 2.1 AA · Settings auto-saved</div>
          </div>
          <button
            ref={firstBtnRef}
            className="a11y-hd__close"
            onClick={() => setOpen(false)}
            aria-label="Close accessibility panel"
            type="button"
          >
            <IoCloseOutline aria-hidden="true" />
          </button>
        </div>

        {/* ─── Scrollable body ─────────────────────────── */}
        <div className="a11y-body">

          {/* ══ Text ══════════════════════════════════════ */}
          <section className="a11y-sec" aria-labelledby="a11y-ttl-text">
            <h3 id="a11y-ttl-text" className="a11y-sec__ttl">
              <FaFont aria-hidden="true" />
              Text
            </h3>

            {/* Font-size stepper */}
            <div className="a11y-font" role="group" aria-label="Font size">
              <button
                className="a11y-font__btn"
                onClick={() => adjustFont(-FONT_STEP)}
                disabled={settings.fontSize <= FONT_MIN}
                aria-label="Decrease font size"
                type="button"
              >
                <span aria-hidden="true" className="a11y-font__a a11y-font__a--sm">A</span>
              </button>

              <div className="a11y-font__mid">
                <span
                  className="a11y-font__pct"
                  aria-live="polite"
                  aria-atomic="true"
                  aria-label={`Font size ${fontPct}%`}
                >
                  {fontPct}<span className="a11y-font__unit">%</span>
                </span>
                {/* Progress bar */}
                <div className="a11y-font__bar" aria-hidden="true">
                  <div
                    className="a11y-font__fill"
                    style={{ width: `${fontBarW}%` }}
                  />
                </div>
              </div>

              <button
                className="a11y-font__btn"
                onClick={() => adjustFont(FONT_STEP)}
                disabled={settings.fontSize >= FONT_MAX}
                aria-label="Increase font size"
                type="button"
              >
                <span aria-hidden="true" className="a11y-font__a a11y-font__a--lg">A</span>
              </button>
            </div>

            <div className="a11y-grid">
              <Btn
                active={settings.dyslexia}
                onClick={() => toggle("dyslexia")}
                label="Dyslexia-friendly font"
                icon={<span className="a11y-ico--text" aria-hidden="true">Dy</span>}
              >
                Dyslexia<br />Font
              </Btn>
              <Btn
                active={settings.textSpace}
                onClick={() => toggle("textSpace")}
                label="Increased text spacing"
                icon={<IoTextOutline size={22} />}
              >
                Text<br />Spacing
              </Btn>
            </div>
          </section>

          {/* ══ Vision ════════════════════════════════════ */}
          <section className="a11y-sec" aria-labelledby="a11y-ttl-vision">
            <h3 id="a11y-ttl-vision" className="a11y-sec__ttl">
              <IoEyeOutline aria-hidden="true" />
              Vision
            </h3>
            <div className="a11y-grid a11y-grid--3">
              <Btn active={settings.contrast} onClick={() => toggle("contrast")}
                label="High contrast mode" icon={<IoContrastOutline size={22} />}>
                High<br />Contrast
              </Btn>
              <Btn active={settings.grayscale} onClick={() => toggle("grayscale")}
                label="Black and white mode" icon={<IoColorPaletteOutline size={22} />}>
                Black<br />&amp; White
              </Btn>
              <Btn active={settings.blueLight} onClick={() => toggle("blueLight")}
                label="Blue light reduction" icon={<IoSunnyOutline size={22} />}>
                Blue<br />Light
              </Btn>
            </div>
          </section>

          {/* ══ Interface ═════════════════════════════════ */}
          <section className="a11y-sec" aria-labelledby="a11y-ttl-ui">
            <h3 id="a11y-ttl-ui" className="a11y-sec__ttl">
              <IoHandRightOutline aria-hidden="true" />
              Interface
            </h3>
            <div className="a11y-grid a11y-grid--3">
              <Btn active={settings.noImages} onClick={() => toggle("noImages")}
                label={settings.noImages ? "Show images" : "Hide images"}
                icon={settings.noImages
                  ? <IoEyeOffOutline size={22} />
                  : <IoEyeOutline size={22} />}>
                {settings.noImages ? "Show\nImages" : "Hide\nImages"}
              </Btn>
              <Btn active={settings.readGuide} onClick={() => toggle("readGuide")}
                label="Reading guide" icon={<IoReaderOutline size={22} />}>
                Read<br />Guide
              </Btn>
              <Btn active={settings.bigCursor} onClick={() => toggle("bigCursor")}
                label="Large cursor" icon={<IoHandRightOutline size={22} />}>
                Big<br />Cursor
              </Btn>
            </div>
          </section>

          {/* ══ Audio ═════════════════════════════════════ */}
          <section className="a11y-sec" aria-labelledby="a11y-ttl-audio">
            <h3 id="a11y-ttl-audio" className="a11y-sec__ttl">
              <IoVolumeHighOutline aria-hidden="true" />
              Audio
            </h3>
            <div className="a11y-tts">
              <button
                className={`a11y-tts__main${ttsStatus === "speaking" ? " is-on" : ""}`}
                onClick={speakPage}
                disabled={ttsStatus !== "idle"}
                aria-label="Read page aloud"
                type="button"
              >
                <IoVolumeHighOutline size={18} aria-hidden="true" />
                Read Page
              </button>
              <button
                className={`a11y-tts__ctrl${ttsStatus === "paused" ? " is-on" : ""}`}
                onClick={pauseResume}
                disabled={ttsStatus === "idle"}
                aria-label={ttsStatus === "paused" ? "Resume" : "Pause"}
                type="button"
              >
                <IoPauseOutline size={18} aria-hidden="true" />
              </button>
              <button
                className="a11y-tts__ctrl"
                onClick={stopTts}
                disabled={ttsStatus === "idle"}
                aria-label="Stop reading"
                type="button"
              >
                <IoStopOutline size={18} aria-hidden="true" />
              </button>
            </div>

            {ttsStatus !== "idle" && (
              <p className="a11y-tts__status" role="status" aria-live="polite">
                <span className="a11y-tts__dot" aria-hidden="true" />
                {ttsStatus === "speaking" ? "Reading page…" : "Paused"}
              </p>
            )}
          </section>

          {/* ══ Reset ═════════════════════════════════════ */}
          <button
            className="a11y-reset"
            onClick={resetAll}
            aria-label="Reset all accessibility settings to default"
            type="button"
          >
            <IoRefreshOutline size={16} aria-hidden="true" />
            Reset All Settings
          </button>
        </div>

        {/* ─── Footer ──────────────────────────────────── */}
        <footer className="a11y-foot">
          <IoAccessibilityOutline size={12} aria-hidden="true" />
          IAU University · WCAG 2.1 AA
        </footer>
      </aside>
    </>,
    document.body   // ← outside #root, unaffected by zoom
  );
}

// ── helper used before settings state is set ────────────────
function countActive(s) {
  const bools = ["contrast","grayscale","blueLight","noImages",
                 "readGuide","dyslexia","textSpace","bigCursor"];
  return bools.filter((k) => s[k]).length + (s.fontSize !== FONT_BASE ? 1 : 0);
}
