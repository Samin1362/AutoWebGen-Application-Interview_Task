import React from "react";
import Header from "../Header";

const Layout = ({ children, siteName, navigation }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header siteName={siteName} navigation={navigation} />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{siteName}</h3>
              <p className="text-gray-300 leading-relaxed">
                Delivering excellence in every service we provide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
              <ul className="space-y-2">
                <li><a href="#delivery" className="text-gray-300 hover:text-white transition-colors duration-300">Delivery</a></li>
                <li><a href="#support" className="text-gray-300 hover:text-white transition-colors duration-300">Support</a></li>
                <li><a href="#consultation" className="text-gray-300 hover:text-white transition-colors duration-300">Consultation</a></li>
                <li><a href="#maintenance" className="text-gray-300 hover:text-white transition-colors duration-300">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h4>
              <p className="text-gray-300 mb-2">Ready to get started?</p>
              <p className="text-gray-300">Contact us today!</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-300">
              &copy; 2024 {siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;