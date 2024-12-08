import PdfView from '../components/PdfView';
import React, { useEffect, useState } from "react";


const PdfViewer = () => {
  const [bookUrl, setBookUrl] = useState("");

  useEffect(() => {
    const fetchBookUrl = async () => {
      try {
        const response = await fetch("http://localhost:5000/book/674ee6e800220ecd5464");
        const data = await response.json();
        console.log(data);
        setBookUrl(data.response.Novel_url);
      } catch (error) {
        console.error("Error fetching book URL:", error);
      }
    };

    fetchBookUrl();
  }, []);
  return (
    <>
      {bookUrl ? (
        <PdfView pdfUrl={bookUrl} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default PdfViewer