import React from 'react';

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

// Navigation Links
const navLinks = [
  'Buying', 'Selling', 'Renting', 'News & Trends', 'Finance', 
  'Home Improvement', 'Home Design', 'Places', 'Lifestyle', 'Glossary'
];

// Mock content for the Latest section
const latestArticles = [
  { title: 'The Future of Real Estate', image: 'https://placehold.co/400x250/F87171/FFFFFF?text=Article+1' },
  { title: 'Smart Home Technology Trends', image: 'https://placehold.co/400x250/34D399/FFFFFF?text=Article+2' },
  { title: 'Best Time to Sell in Canada', image: 'https://placehold.co/400x250/60A5FA/FFFFFF?text=Article+3' },
];

const marketLinks = [
  'Calgary Real Estate', 'Kelowna Real Estate', 'Surrey Real Estate',
  'Edmonton Real Estate', 'Mississauga Real Estate', 'Toronto Real Estate',
  'Hamilton Real Estate', 'Ottawa Real Estate', 'Vancouver Real Estate',
  'Kamloops Real Estate', 'Richmond Real Estate', 'Victoria Real Estate',
];



const SubNavigation = () => (
  <nav className="border-b border-gray-100 bg-white shadow-sm">
    {/* Scrollable Nav for Mobile */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
      <div className="flex space-x-6 whitespace-nowrap py-3">
        {navLinks.map((link) => (
          <a
            key={link}
            href="SN"
            className={`text-sm font-medium transition hover:text-blue-600 ${
              link === 'News & Trends' ? 'text-blue-600 border-b-2 border-blue-600 pb-2' : 'text-gray-700'
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
    {/* Main Headline */}
    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl mx-auto">
      Real Estate Trends & Home Insights
    </h1>
    
    {/* Subtitle */}
    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
      Find inspiration for the home, Canadian real estate news and market trend reports across Canada at VState Homebase.
    </p>
    
    {/* Search Bar */}
    <div className="flex justify-center">
      <div className="w-full max-w-lg relative">
        <input
          type="search"
          placeholder="Search VState Homebase..."
          className="w-full pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-md transition"
        />
        <button
          className="absolute right-0 top-0 mt-3 mr-4 text-gray-500 hover:text-blue-600"
          aria-label="Search"
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  </div>
);

const LatestSection = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Latest</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Buying = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Buying</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Selling = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Selling</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Renting = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Renting</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const NewsandTrends = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">News and Trends</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Finance = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Finance</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const HomeImprovement = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Home Improvement</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Design = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Home Design</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Places = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Places</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const Lifestyle = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Lifestyle</h2>
      <a href="all" className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center transition">
        View all
        <ArrowRightIcon />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestArticles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500">Read more...</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const MarketLinksSection = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-12">
      {/* Title Column (Takes 1/4th width on large screens) */}
      <div className="mb-8 lg:mb-0 lg:col-span-1">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-snug text-blue-600 tracking-tight">
          Find homes <br className="hidden lg:inline"/>
          on VState
        </h2>
      </div>

      {/* Links Grid (Takes 3/4th width on large screens) */}
      <div className="lg:col-span-3">
        {/* Responsive Grid: 1 column on phone, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
          {marketLinks.map((link, index) => (
            <a
              key={index}
              href="market"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
// Custom utility class for scrollbar hiding (for the sub-navigation on mobile)
const GlobalStyles = () => (
  <style>
    {`
      /* Hide scrollbar for Chrome, Safari and Opera */
      .scrollbar-hide::-webkit-scrollbar {
          display: none;
      }
      /* Hide scrollbar for IE, Edge and Firefox */
      .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }
    `}
  </style>
);


// --- Main App Component ---
export default function Jobs(){
  return (
    <div className="min-h-screen bg-white font-sans">
      <GlobalStyles />
      <SubNavigation />
      <main>
        <HeroSection />
        <LatestSection />
        <Buying/>
        <Selling/>
        <Renting/>
        <MarketLinksSection/>
        <NewsandTrends/>
        <Finance/>
        <HomeImprovement/>
        <Design/>
        <Places/>
        <Lifestyle/>

        {/* Placeholder for more sections like Trending, Categories, etc. */}
      </main>
      
      {/* Simple Footer Placeholder */}
      <footer className="bg-gray-50 border-t border-gray-100 mt-12 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VState Technologies. All rights reserved.
      </footer>
    </div>
  );
};