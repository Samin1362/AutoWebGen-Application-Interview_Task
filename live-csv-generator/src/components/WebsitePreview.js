import React from "react";

const WebsitePreview = ({ data, index }) => {
  const { domain, title, description, phone, address } = data;

  return (
    <div className="card w-full h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-3 rounded-t-lg -mx-6 -mt-6 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{title}</h3>
          <span className="text-xs bg-white/20 px-2 py-1 rounded">
            {domain}
          </span>
        </div>
      </div>

      {/* Website Preview Content */}
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {title} - {description}
            </h1>
            <p className="text-gray-600 mb-4">
              Delivering excellence in every service we provide. Your success is
              our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Get Started
              </button>
              <button className="border-2 border-primary-500 text-primary-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-500 hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Get In Touch
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-2 rounded-lg flex-shrink-0">
                📞
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600 text-sm">{phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-2 rounded-lg flex-shrink-0">
                📍
              </div>
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-gray-600 text-sm">{address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-2 rounded-lg flex-shrink-0">
                ✉️
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">info@{domain}</p>
              </div>
            </div>
          </div>

          {/* Contact Form Preview */}
          <div className="mt-4 p-4 bg-white rounded-lg border">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">
              Send us a Message
            </h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-200 rounded text-xs"
                disabled
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-200 rounded text-xs"
                disabled
              />
              <textarea
                placeholder="Your Message"
                rows="2"
                className="w-full p-2 border border-gray-200 rounded text-xs resize-none"
                disabled
              ></textarea>
              <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 rounded text-xs font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Footer Preview */}
        <div className="bg-gray-800 text-white p-4 rounded-lg -mx-6 -mb-6">
          <div className="text-center">
            <p className="text-sm font-semibold mb-2">{title}</p>
            <p className="text-xs text-gray-300">
              © 2024 {title}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
