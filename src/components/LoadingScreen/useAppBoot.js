import { useCallback, useEffect, useRef, useState } from "react";

const FADE_MS = 280;
// Loader kamida shuncha ko'rsatiladi (intro video ko'rinishi uchun).
const BOOT_MIN_MS = 2200;
// Hech narsa kutilmagan holatda majburiy yopish (xavfsizlik chegarasi).
const BOOT_MAX_MS = 6000;

export function useAppBoot() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const finishedRef = useRef(false);
  const maxTimerRef = useRef(null);
  const minTimerRef = useRef(null);
  const minPassedRef = useRef(false);
  const windowLoadedRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (maxTimerRef.current) {
      window.clearTimeout(maxTimerRef.current);
      maxTimerRef.current = null;
    }
    if (minTimerRef.current) {
      window.clearTimeout(minTimerRef.current);
      minTimerRef.current = null;
    }
  }, []);

  const completeBoot = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    clearTimers();

    setLoaderExiting(true);
    window.setTimeout(() => {
      setShowLoader(false);
      setLoaderExiting(false);
    }, FADE_MS);
  }, [clearTimers]);

  // Minimal ko'rsatish vaqti o'tgandan keyin app tayyor bo'lsa yopamiz.
  const maybeComplete = useCallback(() => {
    if (minPassedRef.current && windowLoadedRef.current) {
      completeBoot();
    }
  }, [completeBoot]);

  useEffect(() => {
    // Minimal ko'rsatish vaqti.
    minTimerRef.current = window.setTimeout(() => {
      minPassedRef.current = true;
      maybeComplete();
    }, BOOT_MIN_MS);

    // App resurslari yuklanib bo'lganini kuzatamiz.
    const onWindowLoad = () => {
      windowLoadedRef.current = true;
      maybeComplete();
    };

    if (document.readyState === "complete") {
      windowLoadedRef.current = true;
    } else {
      window.addEventListener("load", onWindowLoad);
    }

    // Majburiy chegarani har doim qo'yamiz.
    maxTimerRef.current = window.setTimeout(completeBoot, BOOT_MAX_MS);

    return () => {
      clearTimers();
      window.removeEventListener("load", onWindowLoad);
    };
  }, [completeBoot, maybeComplete, clearTimers]);

  const booting = showLoader || loaderExiting;

  return { showLoader, loaderExiting, completeBoot, booting };
}
