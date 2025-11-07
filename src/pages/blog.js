import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

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
const navLinks = [
  'Buying', 'Selling', 'Renting', 'News & Trends', 'Finance', 
  'Home Improvement', 'Home Design', 'Places', 'Lifestyle', 'Glossary'
];
const latestArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2025/11/b-lenders-canada-424x283.jpg' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/08/sold-home-prices-424x283.png' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/05/Property-Tax-by-Province-424x283.png' },
];
const BuyingArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2019/03/down-payment-assistance-programs-hero-424x239.jpg' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2023/05/What-Home-Buyers-Want-424x283.png' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2018/03/large-home-with-vibrant-landscaping-424x239.jpeg' },
];
const SellingArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/08/woman-sitting-in-a-room-reading-424x239.jpeg' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2019/04/two-women-and-one-man-collaborating-424x239.jpeg' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/10/long-distance-movers-canada-424x283.png' },
];
const RentingArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/12/the-cost-of-owning-a-fur-friend-in-canada-hero-1-424x239.jpg' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/08/renters-guide-hero-424x239.jpg' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/01/responsibilities-of-a-renter-hero-424x239.jpg' },
];
const NewsArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2023/09/Home-Buyer-Sentiment-Survey-424x283.png' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/10/Zenith-Awards-Top-Tips-For-2025-424x283.png' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/06/Advice-for-Buyers-and-Sellers-from-a-Real-Estate-Pro-424x283.png' },
];
const FinanceArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/08/mortage-default-guide-hero-424x239.jpg' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/08/sold-home-prices-424x283.png' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2024/03/How-much-does-home-insurance-cost-424x283.png' },
];
const ImprovementArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2022/03/84497-Hero-Images-Batch_4_Superside_D1-424x283.png' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2021/02/sustainable-home-upgrades-hero-424x239.jpg' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2018/03/diy-projects-for-homeowners-hero-424x239.jpg' },
];
const DesignArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2017/10/top-10-interior-designers-in-canada-hero-424x239.jpg' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/09/declutter-your-space-hero-424x239.jpg' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2023/12/Modern-Farmhouse-424x239.png' },
];
const PlacesArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2021/06/best-beaches-canada-424x283.png' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2023/07/Calgary-Noise-Bylaws-Regulations-424x283.png' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2025/06/tiny-homes-ontario-424x283.png' },
];
const LifestyleArticles = [
  { title: 'The Future of Real Estate', image: 'https://www.zolo.ca/blog/wp-content/uploads/2018/09/Living-in-Suburbs-424x276.png' },
  { title: 'Smart Home Technology Trends', image: 'https://www.zolo.ca/blog/wp-content/uploads/2023/08/The-Sims-Houses-424x283.png' },
  { title: 'Best Time to Sell in Canada', image: 'https://www.zolo.ca/blog/wp-content/uploads/2020/12/hero-1-1-424x239.jpg' },
];

const marketLinks = [
  'Calgary Real Estate', 'Kelowna Real Estate', 'Surrey Real Estate',
  'Edmonton Real Estate', 'Mississauga Real Estate', 'Toronto Real Estate',
  'Hamilton Real Estate', 'Ottawa Real Estate', 'Vancouver Real Estate',
  'Kamloops Real Estate', 'Richmond Real Estate', 'Victoria Real Estate',
];
const SubNavigation = () => (
  <nav className="border-b border-gray-100 bg-white shadow-sm">
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
    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl mx-auto">
      Real Estate Trends & Home Insights
    </h1>
    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
      Find inspiration for the home, Canadian real estate news and market trend reports across Canada at VState Homebase.
    </p>
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
      {BuyingArticles.map((article, index) => (
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
      {SellingArticles.map((article, index) => (
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
      {RentingArticles.map((article, index) => (
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
      {NewsArticles.map((article, index) => (
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
      {FinanceArticles.map((article, index) => (
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
      {ImprovementArticles.map((article, index) => (
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
      {DesignArticles.map((article, index) => (
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
      {PlacesArticles.map((article, index) => (
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
      {LifestyleArticles.map((article, index) => (
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
      <div className="mb-8 lg:mb-0 lg:col-span-1">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-snug text-blue-500 tracking-tight">
          Find homes <br className="hidden lg:inline"/>
          on VState
        </h2>
      </div>
      <div className="lg:col-span-3">
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
export default function Blog(){
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
      </main>
      <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-16 py-12 md:py-20 max-w-6xl">
        <h1 className="text-4xl font-light text-gray-800 mb-10 md:mb-16">
          About VState
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-gray-700 text-lg leading-relaxed">
          <div>
            <p className="mb-6">
              VState brings home buyers, renters and sellers **authoritative news, views and trends** that touch on personal finance issues and help explain Canada’s real estate marketplace.
            </p>

            <h3 className="font-semibold text-xl mt-10 mb-4 text-gray-800">
              For story inquiries or expert commentary:
            </h3>
            <p className="mb-4">
              <a href="mailto:press@vstate.ca" className="text-blue-600 hover:text-blue-800 font-medium">
                press@VState.ca
              </a>
            </p>

            <h3 className="font-semibold text-xl mt-10 mb-4 text-gray-800">
              Follow us
            </h3>
            <div className="flex space-x-3">
              <a 
                href="Facebook" 
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:border-blue-600 hover:text-blue-600 transition duration-200"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="twitter" 
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:border-blue-400 hover:text-blue-400 transition duration-200"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="mb-6">
              Find inspiration for the home at VState Blog. Read articles on **home improvement ideas, home design trends, and general homeowner tips**. Learn about real estate trends across Canada, including market reports and the best places to buy in Canada.
            </p>
            <p>
              Whether you’re renting or looking to buy a home, we have you covered with first time home buyer and renter guides. **Learn about real estate trends, mortgages and more** at VState Blog.
            </p>
          </div>
        </div>
      </div>
      <footer className="w-full border-t border-gray-200 mt-20 md:mt-40 pt-8 pb-4">
        <div className="container mx-auto px-4 md:px-16 max-w-6xl">
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm font-semibold text-gray-700 mb-6">
            <a href="About Us" className="hover:text-blue-600 whitespace-nowrap">About Us</a>
            <a href="Careers" className="hover:text-blue-600 whitespace-nowrap">Careers</a>
            <a href="Contact" className="hover:text-blue-600 whitespace-nowrap">Contact</a>
            <a href="Privacy and terms" className="hover:text-blue-600 whitespace-nowrap">Privacy & Terms</a>
            <a href="sitemap" className="hover:text-blue-600 whitespace-nowrap">Sitemap</a>
            <a href="blog" className="hover:text-blue-600 whitespace-nowrap">Blog</a>
            <a href="Mobile" className="hover:text-blue-600 whitespace-nowrap">Mobile</a>
            <a href="Glosarry" className="hover:text-blue-600 whitespace-nowrap">Glossary</a>
          </div>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            VState.ca, the VState Web App, and the VState App are operated under license from Questrade, Inc. VState Ventures Ltd., its subsidiaries, and Questrade, Inc. are members of the Questrade Group of Companies. Questrade Group of Companies means Questrade Financial Group Inc. and its affiliates that provide deposit, investment, loan, securities, mortgages, real estate and other products or services.
          </p>
        </div>
      </footer>
    </div>

    </div>
  );
};