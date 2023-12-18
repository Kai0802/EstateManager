import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full sm:max-w-md px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h1 className="text-3xl text-center font-semibold text-gray-700 my-7">
          Sign Up
        </h1>
        <form className="space-y-6" action="#" method="POST">
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            placeholder="username"
            id="username"
            name="username"
            required
          />
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="email"
            placeholder="email"
            id="email"
            name="email"
            required
          />
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="password"
            placeholder="password"
            id="password"
            name="password"
            required
          />
          <button
            className="w-full bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-1 mt-6 text-center">
          <p className="text-gray-600">Have an account?</p>
          <Link to="/sign-in" className="text-indigo-500 hover:text-indigo-600">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
