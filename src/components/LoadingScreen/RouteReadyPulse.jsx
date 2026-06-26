import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteReadyPulse({ onReady }) {
  const location = useLocation();

  useEffect(() => {
    onReady(location.pathname);
  }, [location.pathname, onReady]);

  return null;
}
