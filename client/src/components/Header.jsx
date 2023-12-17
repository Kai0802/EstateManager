import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-400 slate shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-700">My</span>
          <span className="text-slate-900">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex items-center gap-4">
          <Link to="/">
            <li className="text-slate-800 hidden sm:inline hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="text-slate-800 hidden sm:inline hover:underline">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="text-slate-800 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
