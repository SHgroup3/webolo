import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ListingCard = ({ data }) => {
  const { 
    price, 
    details, 
    address, 
    brokerage, 
    mls, 
    type, 
    image, 
    time, 
    isCommercial 
  } = data;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      
      {/* Image Section */}
      <div className="relative h-64 sm:h-52 md:h-64 lg:h-52 xl:h-64 bg-gray-200">
        <img 
          src={image} 
          alt={address} 
          className="w-full h-full object-cover" 
        />
        
        {/* 'For Sale/Rent/Lease' Tag */}
        <span 
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-full ${
            type === 'For Sale' ? 'bg-green-600' : 
            type === 'For Rent' ? 'bg-orange-600' : 
            'bg-orange-600' // For Lease
          }`}
        >
          {type}
        </span>
        
        {/* Time Tag */}
        <span className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
          {time}
        </span>
      </div>

      {/* Details Section */}
      <div className="p-4">
        
        {/* Price and Heart Icon */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-bold text-gray-900">{price}</p>
          <FaHeart className="w-5 h-5 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
        
        {/* Property Details */}
        <p className={`text-sm text-gray-700 mb-1 ${isCommercial ? 'hidden' : 'block'}`}>
          {details}
        </p>
        
        {/* Address */}
        <p className="text-sm text-gray-700 mb-2 font-medium">
          {address}
        </p>
        
        {/* Brokerage and MLS */}
        <div className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-100">
          <p>
            <span className="font-semibold">MLS® {mls}</span> | {brokerage}
          </p>
          {isCommercial && <p className="text-right text-green-700 font-semibold">Office</p>}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;