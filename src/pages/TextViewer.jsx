import React, { useState, useEffect } from "react";
import chaptersData from "../chapters.json";

const BookViewer = () => {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  if (loading) {
    return <div className="text-center p-6">Loading chapters...</div>;
  }

  if (!chapters.length) {
    return <div className="text-center p-6">No chapters available.</div>;
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "bg-[#021331] text-white" : "bg-white text-black"}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 shadow-sm shadow-black shadow-bottom">
        <div className="flex items-center space-x-4 ">
          <button
            onClick={toggleSidebar}
            className="px-3 py-2 bg-button text-white rounded focus:outline-none"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
          <h1 className="text-lg font-bold">{currentChapter?.title}</h1>
        </div>
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

      <div className="flex flex-1">
        {/* Sidebar for Chapters */}
        {/* Sidebar for Chapters */}
        {isSidebarOpen && (
          <div
            className={`relative w-64 border-r border-gray-300 dark:border-gray-700
    transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">Chapters</h2>
              <ul className="space-y-2">
                {chapters.map((chapter) => (
                  <li
                    key={chapter.id}
                    onClick={() => {
                      setCurrentChapter(chapter);
                      setIsSidebarOpen(false); // Close sidebar after selection
                    }}
                    className={`cursor-pointer p-2 rounded ${currentChapter && currentChapter.id === chapter.id
                        ? "bg-button text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                  >
                    {chapter.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main Viewer */}
        <div className="flex-1 p-6 overflow-y-auto" style={{ fontSize: `${fontSize}px` }}>
          {currentChapter?.content}
        </div>
      </div>
    </div>
  );
};

export default BookViewer;
