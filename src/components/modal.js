import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Agar modal band hai (isOpen === false) to kuch bhi render na karein
  if (!isOpen) return null;

  return (
    // Backdrop Overlay (Poori screen ko dark karne ke liye)
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center"
      onClick={onClose} // Backdrop par click karne se modal band ho jaye
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md mx-auto"
        onClick={(e) => e.stopPropagation()} // Isse modal ke andar click karne par modal band nahi hoga
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;