import React, { useState } from "react";
import { FiSearch, FiHeart, FiBell, FiMenu, FiX } from "react-icons/fi";
import VState from "../assets/VState.jpeg";
import Modal from './modal'; 
import ModalContent from "./ModelContent";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [modalStep, setModalStep] = useState(0);

  const handleOpenModal = () => setModalStep(1); // Sign In پر کلک کرنے پر step 1
  const handleCloseModal = () => setModalStep(0);
  return (
    <nav className="w-full bg-white shadow-sm border-b px-6 py-4 ">
      {/* Main container */}
      <div className="w-full px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={VState}
            alt="logo"
            className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain"
            loading="lazy"
            draggable="false"
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
          <button onClick={handleOpenModal} 
          className="bg-gray-300 rounded-md px-3 py-1 hover:bg-gray-100"> 
            Sign In
          </button>
         <Modal isOpen={modalStep > 0} onClose={handleCloseModal}>
        {/* ModalContent کو current step اور step change کرنے کا function بھیجیں گے */}
        <ModalContent 
          currentStep={modalStep} 
          setModalStep={setModalStep} 
          onClose={handleCloseModal}
        />
      </Modal>
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
            <a href="buy" className="hover:text-blue-600">Buy</a>
            <a href="sell" className="hover:text-blue-600">Sell</a>
            <a href="blog" className="hover:text-blue-600">Blog</a>
            <a href="jobs" className="hover:text-blue-600">Jobs</a>
            <div className="flex space-x-4">
              <FiHeart className="cursor-pointer hover:text-blue-600" />
              <FiBell className="cursor-pointer hover:text-blue-600" />
            </div>
            <button
             onClick={handleOpenModal}
             className="border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100">
              Sign In
            </button>
            {/* Modal Component */}
      <Modal isOpen={modalStep > 0} onClose={handleCloseModal}>
        {/* ModalContent کو current step اور step change کرنے کا function بھیجیں گے */}
        <ModalContent 
          currentStep={modalStep} 
          setModalStep={setModalStep} 
          onClose={handleCloseModal}
        />
      </Modal>
          </div>
        </div>
      )}
    </nav>
  );
}
