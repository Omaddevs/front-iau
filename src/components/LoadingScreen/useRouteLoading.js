import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const NAV_MIN_MS = 700;
const NAV_MAX_MS = 15000;
const FADE_MS = 450;

export function useRouteLoading(booting) {
  const location = useLocation();
  const [navLoading, setNavLoading] = useState(false);
  const [navExiting, setNavExiting] = useState(false);
  const pathRef = useRef(location.pathname);
  const hideTimerRef = useRef(null);
  const maxTimerRef = useRef(null);
  const navStartRef = useRef(0);
  const readyPathRef = useRef(location.pathname);

  const clearTimers = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (maxTimerRef.current) {
      window.clearTimeout(maxTimerRef.current);
      maxTimerRef.current = null;
    }
  };

  const hideNavLoader = useCallback(() => {
    const elapsed = performance.now() - navStartRef.current;
    const wait = Math.max(0, NAV_MIN_MS - elapsed);

    hideTimerRef.current = window.setTimeout(() => {
      setNavExiting(true);
      hideTimerRef.current = window.setTimeout(() => {
        setNavLoading(false);
        setNavExiting(false);
      }, FADE_MS);
    }, wait);
  }, []);

  useEffect(() => {
    if (booting) return;
    if (pathRef.current === location.pathname) return;

    pathRef.current = location.pathname;
    readyPathRef.current = null;
    clearTimers();
    setNavExiting(false);
    setNavLoading(true);
    navStartRef.current = performance.now();

    maxTimerRef.current = window.setTimeout(() => {
      hideNavLoader();
    }, NAV_MAX_MS);

    return clearTimers;
  }, [location.pathname, booting, hideNavLoader]);

  const onRouteReady = useCallback(
    (pathname) => {
      if (booting || !navLoading) return;
      if (readyPathRef.current === pathname) return;
      if (pathname !== location.pathname) return;

      readyPathRef.current = pathname;
      if (maxTimerRef.current) {
        window.clearTimeout(maxTimerRef.current);
        maxTimerRef.current = null;
      }
      hideNavLoader();
    },
    [booting, navLoading, location.pathname, hideNavLoader]
  );

  return { navLoading, navExiting, onRouteReady };
}
