import React, { useState, useCallback } from "react";
import Papa from "papaparse";

const CsvUpload = ({ onDataParsed }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateCsvData = (data) => {
    if (!data || data.length === 0) {
      throw new Error("CSV file is empty");
    }

    const requiredColumns = [
      "domain",
      "title",
      "description",
      "phone",
      "address",
    ];
    const headers = Object.keys(data[0]);

    const missingColumns = requiredColumns.filter(
      (col) => !headers.includes(col)
    );
    if (missingColumns.length > 0) {
      throw new Error(`Missing required columns: ${missingColumns.join(", ")}`);
    }

    return data.filter((row) => row.domain && row.title); // Filter out empty rows
  };

  const handleFile = useCallback(
    (file) => {
      if (!file) return;

      if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
        setError("Please upload a CSV file");
        return;
      }

      setIsLoading(true);
      setError("");

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          try {
            const validatedData = validateCsvData(results.data);
            onDataParsed(validatedData);
            setError("");
          } catch (err) {
            setError(err.message);
          } finally {
            setIsLoading(false);
          }
        },
        error: (error) => {
          setError(`Failed to parse CSV: ${error.message}`);
          setIsLoading(false);
        },
      });
    },
    [onDataParsed]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const downloadSampleCsv = () => {
    const sampleData = `domain,title,description,phone,address
foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
bookbazaar.com,Book Bazaar,Buy and sell books online,01911223344,"Shop 22, New Market, Chittagong"`;

    const blob = new Blob([sampleData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample-websites.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Upload Your CSV File
        </h2>
        <p className="text-gray-600">
          Upload a CSV file with columns: domain, title, description, phone,
          address
        </p>
        <button
          onClick={downloadSampleCsv}
          className="mt-2 text-primary-500 hover:text-primary-700 text-sm underline"
        >
          Download Sample CSV
        </button>
      </div>

      <div
        className={`upload-zone ${isDragOver ? "dragover" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mb-4"></div>
            <p className="text-gray-600">Parsing CSV file...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Drag and drop your CSV file here
            </p>
            <p className="text-gray-500 mb-4">or</p>
            <label className="btn-primary cursor-pointer">
              Choose File
              <input
                type="file"
                className="hidden"
                accept=".csv"
                onChange={handleFileInput}
              />
            </label>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-medium">Error:</p>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">
          Required CSV Format:
        </h3>
        <div className="text-sm text-blue-700">
          <p>
            <strong>Columns:</strong> domain, title, description, phone, address
          </p>
          <p>
            <strong>Example:</strong>
          </p>
          <code className="block mt-1 p-2 bg-white rounded text-xs">
            domain,title,description,phone,address
            <br />
            example.com,My Business,Great service,123-456-7890,123 Main St
          </code>
        </div>
      </div>
    </div>
  );
};

export default CsvUpload;
