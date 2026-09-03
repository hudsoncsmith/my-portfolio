import { useEffect, useState } from 'react';
import PdfCanvasViewer from './PdfCanvasViewer';

export default function ResumeViewer({ src, style }) {
  const [isSafari, setIsSafari] = useState(null);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    // Safari's UA also contains "Safari", but so does Chrome's - Chrome
    // (and Edge/Opera, which are Chromium-based, plus Android Chrome and
    // iOS Chrome/CriOS) additionally include "Chrome"/"Chromium"/"OPR"/
    // "Edg"/"CriOS", which real Safari (desktop or iOS) never does.
    const safari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS|OPR|Edg/.test(ua);
    setIsSafari(safari);
  }, []);

  if (isSafari === null) {
    return <div style={style} />;
  }

  // Safari (desktop and iOS): plain embed, exactly as originally
  // implemented - this already renders correctly there.
  if (isSafari) {
    return <embed src={src} type="application/pdf" style={style} />;
  }

  // Everything else (desktop Chrome, Android Chrome, etc.): native
  // embedded PDF viewing is unreliable across this browser family, so
  // render the PDF ourselves via canvas, which works identically
  // everywhere regardless of the browser's own PDF support.
  return <PdfCanvasViewer src={src} style={style} />;
}
