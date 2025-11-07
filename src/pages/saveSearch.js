import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SavedSearches(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="flex items-center justify-center min-h-screen bg-white flex-col">
      <FiSearch className="text-red-600 w-32 h-32 flex-col" />
      <h2 className="text-2xl font-semibold mt-2">Save your favouirte Searches</h2>
      <p>You don't have any saved searches yet. Get started by tapping the Save Search</p>
      <p>button at the top of any search page. Make sure you're signed in.</p>

         <button className="mt-8 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
            Start Exploring
          </button>
      </div>
      </div>
    
    )
}