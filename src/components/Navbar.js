import React, { useState } from "react";
import { FiSearch, FiHeart, FiBell, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b px-6 py-4 ">
      {/* Main container */}
      <div className="w-full px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 115 30'%3e%3crect width='6.1' height='9.9' rx='.8' fill='%23008fd5'%3e%3c/rect%3e%3crect y='12' width='6.1' height='18' rx='.8' fill='%23fdb725'%3e%3c/rect%3e%3crect x='8.2' width='6.1' height='15' rx='.8' fill='%2348b6e2'%3e%3c/rect%3e%3crect x='8.2' y='17.1' width='6.1' height='12.9' rx='.8' fill='%2371bf44'%3e%3c/rect%3e%3crect x='16.4' width='6.1' height='6.1' rx='.8' fill='%23008fd5'%3e%3c/rect%3e%3crect x='16.4' y='8.2' width='6.1' height='21.8' rx='.8' fill='%23f36f21'%3e%3c/rect%3e%3crect x='24.6' width='6.1' height='21.8' rx='.8' fill='%23008fd5'%3e%3c/rect%3e%3crect x='24.6' y='23.9' width='6.1' height='6.1' rx='.8' fill='%23fdb725'%3e%3c/rect%3e%3crect x='32.8' width='6.1' height='17.4' rx='.8' fill='%2348b6e2'%3e%3c/rect%3e%3crect x='32.8' y='19.5' width='6.1' height='10.5' rx='.8' fill='%2371bf44'%3e%3c/rect%3e%3cpath d='M101.3 25c-1.2-.6-2.2-1.6-2.8-3.1s-.9-3.8-.9-6.7.3-5.2 1-6.8c.6-1.6 1.6-2.6 2.8-3.2s2.9-.9 4.9-.9c2.1 0 3.7.3 5 .9 1.2.6 2.2 1.6 2.8 3.2s.9 3.8.9 6.8-.3 5.2-.9 6.7a5.4 5.4 0 0 1-2.8 3.1c-1.2.6-2.9.8-5 .8s-3.7-.3-5-.8zm7.7-3.5c.6-.4 1.1-1 1.3-2 .3-1 .4-2.4.4-4.4s-.1-3.5-.4-4.5-.7-1.6-1.3-2c-.6-.3-1.5-.5-2.7-.5s-2.1.2-2.7.5-1.1 1-1.4 2-.4 2.5-.4 4.5.1 3.4.4 4.4.7 1.6 1.3 2 1.5.5 2.8.5c1.2 0 2.1-.2 2.7-.5zm-13.4.6h-8.2V5.3a.94.94 0 0 0-1-1h-2.3c-.5.1-.8.5-.8 1v19.5a.94.94 0 0 0 1 1h11.3c.5 0 .9-.4 1-.9v-1.8a1.08 1.08 0 0 0-1-1zm-29 2.9c-1.2-.6-2.2-1.6-2.8-3.1s-.9-3.8-.9-6.7.3-5.2 1-6.8c.6-1.6 1.6-2.6 2.8-3.2s2.9-.9 4.9-.9c2.1 0 3.7.3 5 .9 1.2.6 2.2 1.6 2.8 3.2s.9 3.8.9 6.8-.3 5.2-.9 6.7a5.4 5.4 0 0 1-2.8 3.1c-1.2.6-2.9.8-5 .8s-3.7-.3-5-.8zm7.7-3.5c.6-.4 1.1-1 1.3-2 .3-1 .4-2.4.4-4.4s-.1-3.5-.4-4.5-.7-1.6-1.3-2c-.6-.3-1.5-.5-2.7-.5s-2.1.2-2.7.5-1.1 1-1.4 2-.4 2.5-.4 4.5.1 3.4.4 4.4.7 1.6 1.3 2 1.5.5 2.8.5c1.2 0 2.1-.2 2.7-.5zm-14.4.6h-8.4l9.1-13.6c.1-.2.2-.4.2-.6V5.1c-.1-.5-.5-.8-1-.8H47.1a.94.94 0 0 0-1 1v2c0 .5.4.9.9.9h8.9l-9.6 13.6c-.2.2-.2.4-.2.6v2.5c0 .5.4.9.9.9h12.9c.5 0 .9-.4.9-.9V23c0-.5-.4-.9-.9-.9z' fill='%23282828'%3e%3c/path%3e%3c/svg%3e"
            alt="logo"
            className="h-8 w-auto"
          />
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-6 py-4 w-96">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by location..."
            className="bg-transparent focus:outline-none flex-grow text-sm text-gray-700"
          />
        </div>
        </a>

        {/* Right: Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 mr-16">
          <a href="/buy" className="hover:text-blue-600 font-normal text-lg">Buy</a>
          <a href="/sell" className="hover:text-blue-600 font-md text-lg">Sell</a>
          <a href="/blog" className="hover:text-blue-600 font-md text-lg">Blog</a>
          <a href="/jobs" className="hover:text-blue-600 font-md text-lg">Jobs</a>
          <FiHeart className="cursor-pointer hover:text-blue-600 text-2xl" />
          <FiBell className="cursor-pointer hover:text-blue-600 text-2xl" />
          <button className="bg-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">
            Sign In
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col items-center space-y-3 py-4 text-gray-700">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-11/12">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search by location..."
                className="bg-transparent focus:outline-none flex-grow text-sm text-gray-700"
              />
            </div>
            <a href="#" className="hover:text-blue-600">Buy</a>
            <a href="#" className="hover:text-blue-600">Sell</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
            <a href="#" className="hover:text-blue-600">Jobs</a>
            <div className="flex space-x-4">
              <FiHeart className="cursor-pointer hover:text-blue-600" />
              <FiBell className="cursor-pointer hover:text-blue-600" />
            </div>
            <button className="border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
