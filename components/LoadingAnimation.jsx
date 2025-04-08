import React, { useEffect, useState } from 'react';

const LoadingAnimation = ({ onFinished }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const totalDuration = 8000; // 8 seconds total
    const incrementInterval = 50; // Update every 50ms
    const incrementAmount = (incrementInterval / totalDuration) * 100;

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + incrementAmount;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, incrementInterval);

    // Start fade out animation after 8 seconds
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);

      // Call onFinished after fade out animation completes
      setTimeout(() => {
        if (onFinished) onFinished();
      }, 1000);
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeOutTimer);
    };
  }, [onFinished]);

  // Calculate postcard position based on progress - stop at center (50%)
  const postcardPosition = `${Math.min(progress * 0.5, 50)}%`;

  // Postcard will stop at center (50%, 50%)

  // Generate 30 envelopes with unique, responsive paths
  const generateEnvelopes = () => {
    const envelopes = [];
    const totalEnvelopes = 30; // Thirty envelopes for better coverage

    // Get window dimensions for responsive positioning
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

    // Function to generate random target position (percentage of viewport)
    const randomTarget = () => {
      return {
        x: Math.floor(Math.random() * 90) + 5, // 5% to 95% of screen width
        y: Math.floor(Math.random() * 90) + 5  // 5% to 95% of screen height
      };
    };

    // Generate responsive starting and ending positions
    const generatePositions = () => {
      const positions = [];

      for (let i = 0; i < totalEnvelopes; i++) {
        // Delay increases with each envelope
        const delay = 0.3 + (i * 0.15);

        // Determine starting position (far outside viewport)
        let startX, startY;
        const side = i % 4; // 0=right, 1=bottom, 2=left, 3=top

        if (side === 0) {
          // From right
          startX = windowWidth * 3;
          startY = Math.random() * windowHeight * 1.5 - windowHeight * 0.25;
        } else if (side === 1) {
          // From bottom
          startX = Math.random() * windowWidth * 1.5 - windowWidth * 0.25;
          startY = windowHeight * 3;
        } else if (side === 2) {
          // From left
          startX = -windowWidth * 2;
          startY = Math.random() * windowHeight * 1.5 - windowHeight * 0.25;
        } else {
          // From top
          startX = Math.random() * windowWidth * 1.5 - windowWidth * 0.25;
          startY = -windowHeight * 2;
        }

        // Generate random target position
        const target = randomTarget();

        positions.push([startX, startY, target.x, target.y, delay]);
      }

      return positions;
    };

    // Generate all envelope positions
    const envelopePositions = generatePositions();

    for (let i = 0; i < totalEnvelopes; i++) {
      // Make envelope size responsive to screen size
      const size = Math.min(windowWidth, windowHeight) * 0.4; // 40% of the smaller screen dimension

      // Get the predetermined positions and delay
      const startX = envelopePositions[i][0];
      const startY = envelopePositions[i][1];
      const endX = envelopePositions[i][2];
      const endY = envelopePositions[i][3];
      const delay = envelopePositions[i][4];

      // Consistent duration
      const duration = 6; // Slightly faster to create more dynamic pile-up

      // Slight rotation for more natural look
      const rotation = (i % 5) * 3 - 6; // Small variations: -6, -3, 0, 3, 6 degrees

      // For responsive design, we don't need interception points
      // but we'll calculate them for compatibility with existing animation
      const interceptX = endX / 2; // Half of the target percentage
      const interceptY = endY / 2; // Half of the target percentage

      // Alternate between front and back envelopes
      const isBackEnvelope = i % 2 === 0;
      const envelopeClass = isBackEnvelope ? 'floating-envelope back' : 'floating-envelope front';

      envelopes.push(
        <div
          key={i}
          className={envelopeClass}
          style={{
            '--size': `${size}px`,
            '--start-x': `${startX}px`,
            '--start-y': `${startY}px`,
            '--intercept-x': `${interceptX}%`,
            '--intercept-y': `${interceptY}%`,
            '--end-x': `${endX}%`,
            '--end-y': `${endY}%`,
            '--delay': `${delay}s`,
            '--duration': `${duration}s`,
            '--rotation': `${rotation}deg`,
            zIndex: 20 - i // Earlier envelopes appear on top
          }}
        />
      );
    }
    return envelopes;
  };

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Floating Envelopes */}
      <div className="envelope-container">
        {generateEnvelopes()}
      </div>

      <div className="postcard-container">
        <div
          className="postcard"
          style={{ left: postcardPosition }}
        >
          {/* Airmail Postcard Front */}
          <div className="postcard-front airmail">
            <div className="airmail-border"></div>
            <div className="postcard-title">POSTCARD</div>
            <div className="airmail-text">AIR MAIL</div>
            <div className="vertical-divider"></div>

            {/* Top Right Stamp (Futuristic) */}
            <div className="postcard-stamp">
              <div className="futuristic-stamp">
                <div className="stamp-inner">
                  <div className="stamp-circle"></div>
                  <div className="stamp-scan-line"></div>
                </div>
              </div>
            </div>

            {/* Postmark */}
            <div className="postcard-postmark">
              <div className="digital-timestamp">
                <div className="timestamp-circle">
                  <span>{new Date().getFullYear()}</span>
                </div>
                <div className="timestamp-scan"></div>
              </div>
            </div>

            {/* Left Side - Message Area */}
            <div className="postcard-message">
              <div className="address-logo">
                <img
                  src="/images/IMG_8837.png"
                  alt="Hudson's Logo"
                />
              </div>
            </div>

            {/* Right Side - Address Area */}
            <div className="postcard-address">
              <div className="address-lines">
                <div className="address-line-container">
                  <div className="address-line"></div>
                  <p className="address-text">Creative Problem Solver</p>
                </div>
                <div className="address-line-container">
                  <div className="address-line"></div>
                  <p className="address-text">Roboticist</p>
                </div>
                <div className="address-line-container">
                  <div className="address-line"></div>
                  <p className="address-text">Physicist</p>
                </div>
                <div className="address-line-container">
                  <div className="address-line"></div>
                  <p className="address-text">Mechanical Engineer</p>
                </div>
                <div className="address-line-container">
                  <div className="address-line"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Postcard Back (shadow/edge effect) */}
          <div className="postcard-back"></div>
        </div>
      </div>

      {/* No loading bar - removed */}
    </div>
  );
};

export default LoadingAnimation;
