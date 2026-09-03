import { useEffect, useRef, useState } from 'react';

// Renders a PDF entirely via <canvas> using pdf.js, with no dependence on
// the browser's own native PDF viewer - works identically everywhere,
// as flat static page images (no scrolling/zooming viewer chrome).
// Each page renders in its own bordered card so page breaks read as
// intentional rather than as a stray gap from blank space at the end
// of a page's own content.
export default function PdfCanvasViewer({ src, style }) {
  const containerRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const pdfjsLib = await import('pdfjs-dist/build/pdf');
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

        const loadingTask = pdfjsLib.getDocument(src);
        const pdfDoc = await loadingTask.promise;
        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = '';
        const containerWidth = containerRef.current.clientWidth;

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
          if (cancelled) return;
          const page = await pdfDoc.getPage(pageNum);
          const unscaledViewport = page.getViewport({ scale: 1 });
          const scale = containerWidth / unscaledViewport.width;
          const viewport = page.getViewport({ scale });

          const card = document.createElement('div');
          card.style.marginBottom = pageNum < pdfDoc.numPages ? '1.5rem' : '0';
          card.style.borderRadius = '12px';
          card.style.overflow = 'hidden';
          card.style.border = '1px solid #e0e0e0';
          card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';

          const canvas = document.createElement('canvas');
          canvas.style.display = 'block';
          canvas.style.width = '100%';
          const context = canvas.getContext('2d');

          // Render at device pixel ratio for crisp text on high-DPI screens.
          const dpr = window.devicePixelRatio || 1;
          canvas.width = viewport.width * dpr;
          canvas.height = viewport.height * dpr;
          context.scale(dpr, dpr);

          if (cancelled || !containerRef.current) return;
          card.appendChild(canvas);
          containerRef.current.appendChild(card);
          await page.render({ canvasContext: context, viewport }).promise;
        }
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (error) {
    return (
      <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a className="cta-button" href={src} target="_blank" rel="noopener noreferrer">Open Resume</a>
      </div>
    );
  }

  return <div ref={containerRef} style={style} />;
}
