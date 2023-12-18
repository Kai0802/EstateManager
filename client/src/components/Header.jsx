import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="text-indigo-300">My</span>
          <span className="text-purple-300">Estate</span>
        </h1>
        <form className="relative">
          <input
            className="appearance-none bg-white bg-opacity-20 rounded-full py-2 pl-4 pr-10 w-full sm:w-auto focus:outline-none focus:bg-opacity-100 focus:ring-2 focus:ring-purple-300 transition duration-200 text-gray-700 placeholder-white-800"
            type="text"
            placeholder="Search properties..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <FaSearch className="text-gray-500 hover:text-gray-700 transition duration-200" />
          </button>
        </form>
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="hover:text-indigo-300 transition duration-300"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
