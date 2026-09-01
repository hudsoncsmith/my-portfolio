import { useEffect, useState } from 'react';

const TOOLBAR_OFFSET = 56; // px height of Google's viewer toolbar to crop out

export default function ResumeViewer({ src, style }) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    // Safari's UA also contains "Safari", but so does Chrome's - Chrome
    // (and Edge/Opera, which are Chromium-based) additionally include
    // "Chrome"/"Chromium"/"OPR"/"Edg", which real Safari never does.
    const safari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS|OPR|Edg/.test(ua);
    setIsSafari(safari);
  }, []);

  // Safari: plain embed, exactly as originally implemented.
  if (isSafari) {
    return <embed src={src} type="application/pdf" style={style} />;
  }

  // Chrome (and other non-Safari browsers): Chrome's native <embed>/<iframe>
  // PDF rendering has proven unreliable here, so route through Google's
  // hosted PDF viewer instead, which renders consistently. Its own toolbar
  // is cropped out by clipping the wrapper and shifting the iframe up.
  const absoluteUrl = typeof window !== 'undefined'
    ? new URL(src, window.location.origin).toString()
    : src;
  const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(absoluteUrl)}&embedded=true`;

  return (
    <div style={{ ...style, overflow: 'hidden', position: 'relative' }}>
      <iframe
        src={viewerUrl}
        title="Resume"
        style={{
          position: 'absolute',
          top: -TOOLBAR_OFFSET,
          left: 0,
          width: '100%',
          height: `calc(100% + ${TOOLBAR_OFFSET}px)`,
          border: 'none',
        }}
      />
    </div>
  );
}
