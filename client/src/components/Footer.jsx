import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="sm:flex sm:justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">MyEstate</h2>
            <p className="text-slate-300 text-sm">
              Your trusted partner in finding the perfect home.
            </p>
          </div>
          <nav className="flex flex-wrap justify-between mt-4 sm:mt-0">
            <Link
              to="/"
              className="text-slate-300 text-sm hover:text-slate-400 mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-slate-300 text-sm hover:text-slate-400 mr-4"
            >
              About Us
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-slate-400 text-xs">
          <p>
            © {new Date().getFullYear()} MyEstate, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
