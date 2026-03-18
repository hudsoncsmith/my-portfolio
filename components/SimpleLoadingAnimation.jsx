import React, { useEffect, useState } from 'react';

const SimpleLoadingAnimation = ({ onFinished }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation (shortened for snappier loading)
    const totalDuration = 1500; // 1.5 seconds total
    const incrementInterval = 50; // Update every 50ms
    const incrementAmount = (incrementInterval / totalDuration) * 100;

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + incrementAmount;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, incrementInterval);

    // Start fade out animation after duration
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);

      // Call onFinished after fade out animation completes
      setTimeout(() => {
        if (onFinished) onFinished();
      }, 500);
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeOutTimer);
    };
  }, [onFinished]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="simple-loading-container">
        {/* Logo */}
        <div className="loading-logo">
          <img
            src="/images/IMG_8837.png"
            alt="Hudson's Logo"
          />
        </div>

        {/* Text that appears one line at a time */}
        <div className="loading-text-container">
          <div className="loading-text" style={{ animationDelay: '0.2s' }}>
            Creative Problem Solver
          </div>
          <div className="loading-text" style={{ animationDelay: '0.7s' }}>
            Roboticist
          </div>
          <div className="loading-text" style={{ animationDelay: '1.2s' }}>
            Physicist
          </div>
          <div className="loading-text" style={{ animationDelay: '1.7s' }}>
            Mechanical Engineer
          </div>
        </div>

        {/* Loading bar with percentage */}
        <div className="simple-loading-bar-container">
          <div
            className="simple-loading-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default SimpleLoadingAnimation;
