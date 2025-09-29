import React from "react";
import WebsitePreview from "./WebsitePreview";

const PreviewGrid = ({ websites, onClear }) => {
  if (!websites || websites.length === 0) {
    return null;
  }

  const downloadAllSites = () => {
    // Create a summary of all generated sites
    const summary = websites.map((site, index) => ({
      index: index + 1,
      domain: site.domain,
      title: site.title,
      description: site.description,
      phone: site.phone,
      address: site.address,
      url: `Preview #${index + 1}`,
    }));

    const csvContent = [
      "Index,Domain,Title,Description,Phone,Address,Preview",
      ...summary.map(
        (site) =>
          `${site.index},"${site.domain}","${site.title}","${site.description}","${site.phone}","${site.address}","${site.url}"`
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-websites-summary.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Generated Websites
          </h2>
          <p className="text-gray-600 mt-1">
            {websites.length} website{websites.length !== 1 ? "s" : ""}{" "}
            generated from your CSV
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={downloadAllSites} className="btn-secondary text-sm">
            📥 Download Summary
          </button>
          <button
            onClick={onClear}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
          >
            🗑️ Clear All
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">🌐</div>
            <div>
              <p className="text-blue-700 font-semibold">Total Sites</p>
              <p className="text-2xl font-bold text-blue-800">
                {websites.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="bg-green-500 text-white p-2 rounded-lg mr-3">
              ✅
            </div>
            <div>
              <p className="text-green-700 font-semibold">Success Rate</p>
              <p className="text-2xl font-bold text-green-800">100%</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="bg-purple-500 text-white p-2 rounded-lg mr-3">
              ⚡
            </div>
            <div>
              <p className="text-purple-700 font-semibold">Generated</p>
              <p className="text-2xl font-bold text-purple-800">Live</p>
            </div>
          </div>
        </div>
      </div>

      {/* Website Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {websites.map((website, index) => (
          <div key={`${website.domain}-${index}`} className="h-full">
            <div className="h-full max-h-[600px] overflow-y-auto">
              <WebsitePreview data={website} index={index} />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button (if needed for many sites) */}
      {websites.length > 6 && (
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing all {websites.length} websites. Scroll individual cards to
            see full content.
          </p>
        </div>
      )}
    </div>
  );
};

export default PreviewGrid;
