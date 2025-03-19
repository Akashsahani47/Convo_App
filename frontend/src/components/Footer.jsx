import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-xl font-semibold">Convert Word to PDF</h1>
        <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
