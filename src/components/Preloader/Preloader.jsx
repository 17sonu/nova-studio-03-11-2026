import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer;
    let exitTimer;
    let finishTimer;
    let currentProgress = 0;
    let pageLoaded = document.readyState === "complete";
    const startTime = Date.now();

    const updateProgress = () => {
      if (currentProgress < 90) {
        currentProgress = Math.min(currentProgress + Math.random() * 8 + 2, 90);
        setProgress(Math.floor(currentProgress));
      }
    };

    progressTimer = setInterval(updateProgress, 120);

    const finishLoading = () => {
      pageLoaded = true;

      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 3000 - elapsed);

      finishTimer = setTimeout(() => {
        clearInterval(progressTimer);
        setProgress(100);

        exitTimer = setTimeout(() => {
          setExiting(true);

          setTimeout(() => {
            setVisible(false);
          }, 750);
        }, 350);
      }, remainingTime);
    };

    if (pageLoaded) {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
      clearTimeout(exitTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${exiting ? "preloader-exit" : ""}`}>
      <div className="preloader-glow glow-one" />
      <div className="preloader-glow glow-two" />

      <div className="preloader-content">
        <div className="preloader-symbol">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <span>NS</span>
          </div>
          <div className="orbit-dot" />
        </div>

        <div className="preloader-brand">
          <h1>
            NOVA <span>STUDIO</span>
          </h1>
          <p>ENGINEERING IDEAS. BUILDING THE FUTURE.</p>
        </div>

        <div className="preloader-progress">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="progress-info">
            <span>
              {progress === 100
                ? "READY TO EXPLORE"
                : "INITIALIZING EXPERIENCE"}
            </span>
            <span className="progress-number">
              {String(progress).padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>

      <div className="preloader-footer">
        <span>DESIGNED TO INNOVATE</span>
        <span>© NOVA STUDIO</span>
      </div>
    </div>
  );
}
