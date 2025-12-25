"use client";

import { useNavigation } from "./NavigationProvider";

export default function TopNavbar() {
  const { setSidebarOpen } = useNavigation();

  return (
    <header className="fixed top-0 z-50 w-full bg-black text-white border-b border-white/10">
      <div className="flex items-center justify-between px-4 h-14">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-sm hover:opacity-80"
          >
            <span className="text-lg">☰</span>
            <span className="hidden md:inline">Explore</span>
          </button>

          {/* <input
            type="search"
            placeholder="Search"
            className="hidden md:block bg-transparent border border-white/20 px-3 py-1 text-sm"
          /> */}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 font-semibold tracking-wide">
          SAPIENSPACE
        </div>

        {/* Right */}
        <nav className="flex items-center gap-6 text-sm">
          <a href="/news" className="hover:underline">News & Events</a>
          <a href="/blogs" className="hover:underline">Blogs</a>
          <a href="/multimedia" className="hover:underline">Multimedia</a>
        </nav>

      </div>
    </header>
  );
}
