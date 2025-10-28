import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-white py-6 px-4 lg:px-16 text-gray-700 font-sans border-t border-gray-200">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="flex flex-wrap text-lg font-bold mb-4 lg:mb-0 space-x-4">
          <a href="ZR" className="hover:text-blue-600">VState Realty, Brokerage</a>
          <a href="Contact" className="hover:text-blue-600">Contact</a>
          <a href="Privacy" className="hover:text-blue-600">Privacy & Terms</a>
          <a href="site" className="hover:text-blue-600">Sitemap</a>
          <a href="mobile" className="hover:text-blue-600">Mobile</a>
          <button className="flex items-center hover:text-blue-600">
            Offices <span className="ml-1">+</span>
          </button>
        </div>
        
        {/* Right Section: Join Button */}
        <div className="flex items-center space-x-12">
          <h2 className="text-xl font-bold text-gray-800 hidden lg:block">Are You a REALTOR®?</h2>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg text-base whitespace-nowrap">
            Join VState Today!
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        
        {/* Listing Details (Left) */}
        <div className="text-sm mb-4 sm:mb-0">
                    <div className="flex space-x-4 justify-left">
          <a href="fb" className="border border-gray-400 p-2 rounded-full hover:bg-gray-100">
            <FaFacebookF className="w-4 h-4 text-gray-700" />
          </a>
          <a href="ft" className="border border-gray-400 p-2 rounded-full hover:bg-gray-100">
            <FaTwitter className="w-4 h-4 text-gray-700" />
          </a>
        </div>
          <p className="font-bold text-lg">
            Newest Listing 30 Randall James Drive, Ottawa, ON
          </p>
          <p className="text-lg text-gray-500">
            Updated: October 27th 2025 9:48 am CT
          </p>
        </div>
      </div>
      <div className="text-xs space-y-4">
        <p className='text-lg'>
          <strong className="text-lg">VState Realty, Brokerage</strong>, the VState Web App, and the VState App are operated under license from Questrade, Inc. VState Ventures Ltd., its subsidiaries, Community Trust Company ("CTC"), Flexiti Financial Inc. and Questrade, Inc. are members of the **Questrade Group of Companies**. Questrade Group of Companies means Questrade Financial Group Inc. and its affiliates that provide deposit, investment, loan, securities, mortgages, real estate and other products or services.
        </p>
        <p className='text-lg'>
          The **REALTOR® trademark** is controlled by The Canadian Real Estate Association (**CREA**) and identifies real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos identify professional services rendered by REALTOR® members of CREA to effect the purchase, sale and lease of real estate as part of a cooperative selling system. <span className="text-gray-500">0.45 index</span>
        </p>
      </div>
      
    </footer>
  )
}