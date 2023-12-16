import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-sm">
      <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span className="text-slate-500">My</span>
        <span className="text-slate-700">Estate</span>
      </h1>
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    </header>
  );
}
