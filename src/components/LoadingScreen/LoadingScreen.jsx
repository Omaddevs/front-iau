import { useCallback, useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

const LOADING_VIDEO_SRC = "/videos/iau-loading.mp4";
const END_BUFFER_SEC = 0.45;

export default function LoadingScreen({
  exiting = false,
  lockScroll = true,
  onComplete,
  loop = false,
}) {
  const videoRef = useRef(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const rafRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const notifyComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onCompleteRef.current?.();
  }, []);

  useEffect(() => {
    if (!lockScroll) return undefined;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [lockScroll]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return undefined;

    const play = () => {
      video.play().catch(() => {});
    };

    // Loop rejimida (boot ekranida) faqat ijroni ta'minlaymiz va
    // stall bo'lsa qayta tiklaymiz — tugashni kuzatish kerak emas.
    if (loop) {
      const resume = () => play();
      play();
      video.addEventListener("loadeddata", play);
      video.addEventListener("canplay", play);
      video.addEventListener("stalled", resume);
      video.addEventListener("waiting", resume);
      video.addEventListener("suspend", resume);
      return () => {
        video.removeEventListener("loadeddata", play);
        video.removeEventListener("canplay", play);
        video.removeEventListener("stalled", resume);
        video.removeEventListener("waiting", resume);
        video.removeEventListener("suspend", resume);
      };
    }

    const checkNearEnd = () => {
      if (completedRef.current) return;
      const { duration, currentTime, ended } = video;
      if (ended) {
        notifyComplete();
        return;
      }
      if (Number.isFinite(duration) && duration > 0) {
        const remaining = duration - currentTime;
        if (remaining <= END_BUFFER_SEC) {
          notifyComplete();
        }
      }
    };

    const onTick = () => {
      checkNearEnd();
      if (!completedRef.current) {
        rafRef.current = requestAnimationFrame(onTick);
      }
    };

    const onEnded = () => notifyComplete();
    const onTimeUpdate = () => checkNearEnd();

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    video.addEventListener("loadedmetadata", checkNearEnd);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    rafRef.current = requestAnimationFrame(onTick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      video.removeEventListener("loadedmetadata", checkNearEnd);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [videoFailed, loop, notifyComplete]);

  useEffect(() => {
    if (videoFailed) {
      const timer = window.setTimeout(notifyComplete, 400);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [videoFailed, notifyComplete]);

  return (
    <div
      className={`iau-loader ${exiting ? "iau-loader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      {!videoFailed ? (
        <video
          ref={videoRef}
          className="iau-loader__video"
          src={LOADING_VIDEO_SRC}
          autoPlay
          muted
          loop={loop}
          playsInline
          preload="auto"
          onError={() => setVideoFailed(true)}
        />
      ) : (
        <div className="iau-loader__fallback" aria-hidden="true">
          <div className="iau-loader__spinner" />
        </div>
      )}
    </div>
  );
}
