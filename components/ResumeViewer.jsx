import { useEffect, useState } from 'react';

export default function ResumeViewer({ src, style }) {
  const [mode, setMode] = useState(null); // 'safari' | 'chrome' | 'mobile'

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(ua);

    if (isMobile) {
      // Neither iOS Safari nor mobile Chrome/Android reliably render an
      // embedded PDF inline (iOS embed scaling is broken, Android Chrome
      // often shows nothing at all). Mobile browsers handle a direct link
      // to a PDF very well on their own, so skip embedding entirely there.
      setMode('mobile');
      return;
    }

    // Desktop: Safari's UA also contains "Safari", but so does Chrome's -
    // Chrome (and Edge/Opera, which are Chromium-based) additionally
    // include "Chrome"/"Chromium"/"OPR"/"Edg", which real Safari never does.
    const safari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS|OPR|Edg/.test(ua);
    setMode(safari ? 'safari' : 'chrome');
  }, []);

  if (mode === null) {
    return <div style={style} />;
  }

  if (mode === 'mobile') {
    return (
      <div
        style={{
          ...style,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '260px',
          padding: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(245,250,255,0.9) 0%, rgba(225,240,255,0.9) 100%)',
        }}
      >
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.25rem' }}>
          Your device's PDF viewer works best opened directly.
        </p>
        <a
          className="cta-button"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Resume
        </a>
      </div>
    );
  }

  // Desktop Safari: plain embed, exactly as originally implemented.
  if (mode === 'safari') {
    return <embed src={src} type="application/pdf" style={style} />;
  }

  // Desktop Chrome (and other non-Safari desktop browsers): load the PDF
  // directly in an iframe using the native PDF viewer, with its toolbar
  // hidden via the standard #toolbar=0&navpanes=0 fragment params.
  return <iframe src={`${src}#toolbar=0&navpanes=0&scrollbar=0`} title="Resume" style={style} />;
}
