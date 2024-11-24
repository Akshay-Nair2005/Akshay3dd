import React, { useState, useEffect } from "react";
import chaptersData from "../chapters.json";

const BookViewer = () => {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setChapters(chaptersData.chapters);
        setCurrentChapter(chaptersData.chapters[0]); 
      } catch (error) {
        console.error("Error fetching chapters:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchChapters();
  }, []);
  

  const handleZoomIn = () => setFontSize((prev) => prev + 2);
  const handleZoomOut = () => setFontSize((prev) => (prev > 10 ? prev - 2 : prev));
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  if (loading) {
    return <div className="text-center p-6">Loading chapters...</div>;
  }

  if (!chapters.length) {
    return <div className="text-center p-6">No chapters available.</div>;
  }

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Sidebar for Chapters */}
      <div className="w-1/4 border-r border-gray-300 dark:border-gray-700 p-4">
        <h2 className="text-lg font-bold mb-4">Chapters</h2>
        <ul className="space-y-2">
          {chapters.map((chapter) => (
            <li
              key={chapter.id}
              onClick={() => setCurrentChapter(chapter)}
              className={`cursor-pointer p-2 rounded ${
                currentChapter && currentChapter.id === chapter.id
                  ? "bg-button text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {chapter.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Viewer */}
      <div className="flex-1 p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{currentChapter?.title}</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleZoomIn}
              className="px-3 py-1 bg-button text-white rounded"
            >
              Zoom In
            </button>
            <button
              onClick={handleZoomOut}
              className="px-3 py-1 bg-button text-white rounded"
            >
              Zoom Out
            </button>
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Chapter Content */}
        <div
          className="text-base leading-relaxed text-justify"
          style={{ fontSize: `${fontSize}px` }}
        >
          {currentChapter?.content}
        </div>
      </div>
    </div>
  );
};

export default BookViewer;


