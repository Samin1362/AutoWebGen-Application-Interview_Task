import React from "react";

const Hero = ({ title, subtitle, ctaText = "Learn More", showCTA = true }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center py-16">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary text-lg">{ctaText}</button>
              <button className="btn-secondary text-lg">Contact Us</button>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full w-48 h-48 top-12 left-12 opacity-80 animate-bounce"></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 rounded-full w-36 h-36 top-4 right-4 opacity-70 animate-bounce"
              style={{ animationDelay: "-2s" }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full w-24 h-24 bottom-12 left-4 opacity-60 animate-bounce"
              style={{ animationDelay: "-4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
