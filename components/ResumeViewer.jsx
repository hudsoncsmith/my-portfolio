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

  if (isSafari) {
    return <embed src={src} type="application/pdf" style={style} />;
  }

  return <iframe src={src} title="Resume" style={style} />;
}
