import React, { useState } from "react";
import CsvUpload from "./components/CsvUpload";
import PreviewGrid from "./components/PreviewGrid";

function App() {
  const [websites, setWebsites] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleDataParsed = (data) => {
    setWebsites(data);
    setIsDataLoaded(true);
  };

  const handleClearAll = () => {
    setWebsites([]);
    setIsDataLoaded(false);
  };

  const handleUploadNew = () => {
    setIsDataLoaded(false);
    // Keep the existing websites but show upload again
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                🚀 Live CSV Website Generator
              </h1>
              <p className="text-gray-600 mt-1">
                Upload a CSV file and generate beautiful website previews
                instantly
              </p>
            </div>

            {isDataLoaded && (
              <button onClick={handleUploadNew} className="btn-primary">
                📁 Upload New CSV
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isDataLoaded ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <CsvUpload onDataParsed={handleDataParsed} />
          </div>
        ) : (
          <PreviewGrid websites={websites} onClear={handleClearAll} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              Built with ❤️ using React, Tailwind CSS, and PapaParse
            </p>
            <p className="text-sm text-gray-500 mt-2">
              No backend needed - everything runs in your browser
            </p>
          </div>
        </div>
      </footer>

      {/* Features Section (shown when no data loaded) */}
      {!isDataLoaded && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your business data into beautiful website previews in
              seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📁</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. Upload CSV
              </h3>
              <p className="text-gray-600">
                Upload your CSV file with business information including domain,
                title, description, phone, and address
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                2. Instant Processing
              </h3>
              <p className="text-gray-600">
                Our app parses your CSV data client-side and generates website
                previews in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                3. View Results
              </h3>
              <p className="text-gray-600">
                See all your generated websites in a beautiful grid layout with
                hero sections and contact information
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
