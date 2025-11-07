import { useState, useRef, useEffect } from "react";
import { FiSearch, FiHeart, FiBell, FiMenu, FiX } from "react-icons/fi";
import VState from "../assets/VState.jpeg";
import Modal from "./modal";
import ModalContent from "./ModelContent";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalStep, setModalStep] = useState(0);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleOpenModal = () => setModalStep(1);
  const handleCloseModal = () => setModalStep(0);

  const toggleBuyDropdown = () => {
    setIsSellOpen(false);
    setIsBuyOpen(!isBuyOpen);
  };
  const toggleSellDropdown = () => {
    setIsBuyOpen(false);
    setIsSellOpen(!isSellOpen);
  };
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };
  const buyMenuItems = [
    { label: "Kamloops Real Estate", to: "/kamloops-real-estate" },
    { label: "Houses for Sale", to: "/houses-for-sale" },
    { label: "Condos for Sale", to: "/condos-for-sale" },
    { label: "Townhouses for Sale", to: "/townhouses-for-sale" },
    { label: "Open Houses", to: "/open-houses" },
    { label: "Commercial", to: "/commercial" },
    { label: "New Listings", to: "/new-listings" },
    { label: "Learn about home buying", to: "/learn-buying", isButton: true },
  ];

  const sellMenuItems = [
    { label: "Sell with VState", to: "/Sell-zolo" },
    { label: "How Much Is My Home Worth?", to: "/home-worth" },
    { label: "Learn about home selling", to: "/learn-selling", isButton: true },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b px-6 py-4">
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={VState}
            alt="logo"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by location..."
              className="bg-transparent focus:outline-none flex-grow text-sm text-gray-700"
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <div className="relative">
            <button
              onClick={toggleBuyDropdown}
              className="flex items-center font-semibold hover:text-blue-600"
            >
              Buy
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isBuyOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isBuyOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {buyMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setIsBuyOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                      item.isButton
                        ? "border-t border-gray-200 text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleSellDropdown}
              className="flex items-center font-semibold hover:text-blue-600"
            >
              Sell
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isSellOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isSellOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {sellMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setIsSellOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                      item.isButton
                        ? "border-t border-gray-200 text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" className="hover:text-blue-600 font-medium">
            Blog
          </Link>
          <Link to="/jobs" className="hover:text-blue-600 font-medium">
            Jobs
          </Link>
          <div className="relative" ref={dropdownRef}>
            <FiHeart
              className="cursor-pointer hover:text-blue-600 text-2xl"
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="text-gray-700">
                  <li
                    onClick={() => handleNavigate("/saved-searches")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Saved Searches
                  </li>
                  <li
                    onClick={() => handleNavigate("/saved-homes")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Saved Homes
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/notifications">
            <FiBell className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Link>
          <button
            onClick={handleOpenModal}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Sign In
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 border-t pt-4 space-y-3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by location..."
              className="bg-transparent focus:outline-none flex-grow text-sm text-gray-700"
            />
          </div>

           <div className="relative">
            <button
              onClick={toggleBuyDropdown}
              className="flex items-center font-semibold hover:text-blue-600"
            >
              Buy
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isBuyOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isBuyOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {buyMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setIsBuyOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                      item.isButton
                        ? "border-t border-gray-200 text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
           <div className="relative">
            <button
              onClick={toggleSellDropdown}
              className="flex items-center font-semibold hover:text-blue-600"
            >
              Sell
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isSellOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isSellOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {sellMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setIsSellOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                      item.isButton
                        ? "border-t border-gray-200 text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" className="block text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link to="/jobs" className="block text-gray-700 hover:text-blue-600">
            Jobs
          </Link>
          <div className="relative" ref={dropdownRef}>
            <FiHeart
              className="cursor-pointer hover:text-blue-600 text-2xl"
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="text-gray-700">
                  <li
                    onClick={() => handleNavigate("/saved-searches")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Saved Searches
                  </li>
                  <li
                    onClick={() => handleNavigate("/saved-homes")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Saved Homes
                  </li>
                </ul>
              </div>
            )}
          </div>
                    <Link to="/notifications">
            <FiBell className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Link>
          <button
            onClick={handleOpenModal}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 w-full"
          >
            Sign In
          </button>
        </div>
      )}
      <Modal isOpen={modalStep > 0} onClose={handleCloseModal}>
        <ModalContent
          currentStep={modalStep}
          setModalStep={setModalStep}
          onClose={handleCloseModal}
        />
      </Modal>
    </nav>
  );
}
