import { useEffect, useState } from 'react';

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

  // Chrome (and other non-Safari browsers): load the PDF directly in an
  // iframe using Chrome's native PDF viewer, with its toolbar/side panel
  // hidden via the standard #toolbar=0&navpanes=0 fragment params it
  // honors natively - no third-party viewer or cropping hacks needed.
  return <iframe src={`${src}#toolbar=0&navpanes=0&scrollbar=0`} title="Resume" style={style} />;
}
