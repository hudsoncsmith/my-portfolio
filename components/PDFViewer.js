// PDFViewer.js
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onError = (error) => {
    setError(error);
  };

  return (
    <div>
      {error ? (
        <p>Error loading PDF: {error.message}</p>
      ) : (
        <div>
          <Document
            file={process.env.PUBLIC_URL + pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onError={onError}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;