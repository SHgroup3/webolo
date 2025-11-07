import React from "react";
import { FiHeart } from "react-icons/fi";

export default function SavedHome(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="flex items-center justify-center min-h-screen bg-white flex-col">
      <FiHeart className="text-red-600 w-32 h-32 flex-col" />
      <h2 className="text-2xl font-semibold mt-2">Save your favouirte Home</h2>
      <p>You don't have any saved homes yet.</p>
      <p>Save homes by tapping the Heart icon at the top of a listing tile or page.</p>

         <button className="mt-8 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
            Start Exploring
          </button>
      </div>
      </div>
    
    )
}