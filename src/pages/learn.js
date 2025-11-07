import React, { useState } from "react";

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="page-header container mx-auto mb-32 px-4">
        <h1 className="page-title text-3xl md:text-5xl leading-tight mt-10 mb-3 md:mb-8 max-w-4xl mx-auto text-center md:text-center">
        Home Buying
      </h1>

      <div className="archive-description text-xl md:text-3xl leading-tight mt-3 md:mt-8 mb-12 max-w-4xl mx-auto text-center">
        <p className="font-normal">
          Find home buying resources, guides, and tips for buying and owning a
          home in Canada at VState Homebase.
        </p>
      </div>

      <form
        className="relative w-full md:max-w-2xl mt-12 mx-auto shadow rounded-lg"
        role="search"
        onSubmit={handleSearchSubmit}
      >
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <input
          type="search"
          id="search-input"
          className="w-full max-w-full h-12 md:h-16 p-4 pr-20 text-lg bg-white border border-blacklight rounded-lg outline-none focus:shadow-outline transition ease-in-out duration-150"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute top-0 right-0 p-3 md:p-5 text-blackmedium rounded-lg focus:outline-none focus:shadow-outline"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M9 2a7 7 0 000 14 7 7 0 004.6-1.7l.4.4V16l6 6 2-2-6-6h-1.3l-.4-.4A7 7 0 009 2zm0 2a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" />
          </svg>
        </button>
      </form>
    </header>
  );
};