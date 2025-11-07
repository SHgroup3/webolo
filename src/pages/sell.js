import React, {useState} from 'react';
import {Search, Quote, Plus, Minus } from 'lucide-react';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <p className="text-lg font-semibold text-gray-700 mb-3">
            Sell your home with VState
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            The largest audience of <span className="text-red-600">home shoppers</span> in Canada want to buy your home
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            If you're ready to sell or simply looking for advice, tap into the power of Canada's most popular digital brokerage.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md">
            <input
              type="text"
              placeholder="ex. 1234 Anywhere Street, Toronto"
              className="flex-grow p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
            <button className="flex items-center justify-center px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
              Sell My Home
              <Search className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-96 lg:h-[450px]">
          <div className="absolute inset-0 flex items-center justify-center">
             {/*  */}
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gray-200 overflow-hidden shadow-2xl">
              <img src="https://www.zolo.ca/img/hero-fam2.jpg" alt="Home shoppers family" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute top-1/4 left-0 w-20 h-20 bg-blue-500 rounded-full opacity-60 hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-60 hidden lg:block"></div>
          <div className="absolute top-1/8 right-0 w-28 h-28 bg-green-500 rounded-full opacity-60 hidden lg:block"></div>
        </div>

      </div>
    </section>
  );
};

const SellFaster = ({ imageSrc, title, description }) => (
  // h-full aur flex-col use kiya hai taki content evenly distributed ho
  <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300 border-t-4 border-transparent hover:border-green-500 flex flex-col items-center justify-start h-full">
    
    {/* Image/Icon Container (Size ko maintain rakha hai) */}
    <div className="mx-auto w-25 h-25 mb-6"> 
      <img 
        src={imageSrc} 
        alt={title} 
        // object-contain ensures the image fits inside the 16x16 box
        className="w-full h-full object-contain" 
      />
    </div>
    
    {/* Title (Thoda bada font) */}
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      {title}
    </h3>
    
    {/* Description (Flex-grow se yeh content ko neeche push karega agar zyada lines hain) */}
    <p className="text-gray-600 text-sm mt-auto"> 
      {description}
    </p>
  </div>
);
const SellFasterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900 mb-2">
            Sell Faster. Sell for More..
          </h2>
          <p className="text-lg text-gray-600 text-left ml-0 max-w-3xl mx-auto">
            The more your home is viewed, the better your results. No one can deliver more home buyers than VState.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <SellFaster 
            imageSrc="https://www.zolo.ca/img/hero-visibility.jpg"
            title="The Most Visibility" 
            description="Home shoppers visit VState over 16 million times each month, making it the most popular brokerage site in the entire country."
          />
          <SellFaster 
            imageSrc="https://www.zolo.ca/img/hero-digital-contract.jpg" 
            title="Everything digital first" 
            description="VState launched in 2012 as a digital first brokerage. It is in our DNA. Office meetings and fax machines are the old way. Get the new way."
          />
          <SellFaster 
            imageSrc="https://www.zolo.ca/img/hero-experience.jpg"
            title="Experience on your side" 
            description="You don't sell a home every day, but we do. Local VState agents traded almost $2 billion worth of real estate in 2020."
          />
          <SellFaster
            imageSrc="https://www.zolo.ca/img/hero-local-agents.jpg"
            title="Real, local agents" 
            description="From strategically pricing and marketing your home – through to moving day, VState agents have your back."
          />
        </div>

      </div>
    </section>
  );
};
const FeatureCard = ({ imageSrc, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300 border-t-4 border-transparent hover:border-green-500 flex flex-col items-center justify-start h-full">
    <div className="mx-auto w-25 h-25 mb-6"> 
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-contain" 
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-sm mt-auto"> 
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900 mb-2">
            Your home will stand out
          </h2>
          <p className="text-lg text-gray-600 text-left ml-0 max-w-3xl mx-auto">
            Use the power of our huge audience to find the best buyer for your special property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <FeatureCard 
            imageSrc="https://www.zolo.ca/img/hero-featured-listing.jpg"
            title="Featured Listing" 
            description="Get the top slots on VState, use our millions of account holders to put your home before all others."
          />
          <FeatureCard 
            imageSrc="https://www.zolo.ca/img/hero-notifications.jpg" 
            title="Email & Notifications" 
            description="With over 500,000 messages sent per day, VState home shoppers get alerted to new listings very quickly."
          />
          <FeatureCard 
            imageSrc="https://www.zolo.ca/img/hero-3d-tour.jpg"
            title="3D Walkthrough" 
            description="Give digital home shoppers the in-home experience without having to be there. Convenient and safe."
          />
          <FeatureCard 
            imageSrc="https://www.zolo.ca/img/hero-pro-photos.jpg"
            title="Professional Photos" 
            description="Standing out amongst the competition on Day 1 is critical. Let us show off your home properly."
          />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Experience a 3D Walkthrough. It's just like being there.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Show off your property to more home shoppers without the hassle of them actually being inside.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-300">
          <img 
            src="https://photos.zolo.ca/7-old-oak-road-toronto-W5150344-3-p.jpg?2021-04-19+20%3A28%3A06" 
            alt="3D Walkthrough of a living room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition duration-300">
              <span className="text-5xl text-gray-900 pb-1">▶</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-gray-900 text-white text-xs px-3 py-1 rounded-full font-medium">
             3D Walkthrough
          </div>
        </div>

      </div>
    </section>
  );
};
const TestimonialCard = ({ quote, name, location }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-red-500 h-full flex flex-col justify-between">
    <Quote className="w-8 h-8 text-red-500 mb-4" fill="currentColor" />
    <p className="text-gray-700 text-lg italic mb-6 flex-grow">
      {quote}
    </p>
    <div>
      <p className="font-bold text-gray-900 text-base">{name}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What customers say about the VState experience
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            When you trade almost $2 billion of real estate each year, there will be a lot of happy home sellers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <TestimonialCard
            quote="We knew our home was in the hands of somebody who was genuine and fair, and acted in our best interest - not just making a quick deal. She understood our needs and most of all she understood our vision."
            name="The Rubio-Naranjo Family"
            location="Clarington, ON"
          />
          <TestimonialCard
            quote="I highly recommend VState as the brokerage to sell your home. Knowledgeable & professional agents that get you top dollar."
            name="Emmanuel O."
            location="Kitchener/Waterloo, ON"
          />
          <TestimonialCard
            quote="When the unexpected hit, we saw our Realtor quickly switch gears and do what it took to get the better deal than we ever could have expected. She handled every twist and turn with grace and integrity, and kept us at ease through the entire process."
            name="Menka Sarkov"
            location="Ajax, ON"
          />
          <TestimonialCard
            quote="Our  Realtor was quick to respond to my requests and was amazing at coordinating with my tight time schedule. Very knowledgeable and helpful. Highly recommend VState!"
            name="Rachel"
            location="Ottawa, ON"
          />
        </div>
        <div className="text-center pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started. Sell to the most home shoppers in Canada.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Take advantage of our popularity and make your home even more popular.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="ex. 1234 Anywhere Street, Toronto"
              className="flex-grow p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
            <button className="flex items-center justify-center px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
              Sell My Home
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <Minus className="w-6 h-6 text-gray-600" />
        ) : (
          <Plus className="w-6 h-6 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 pr-10">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How does home selling with VState work?",
      answer: "VState connects you with top local real estate agents who provide personalized support from listing to closing, using VState's massive digital reach to find the right buyer quickly.",
    },
    {
      question: "Can VState sell my home quickly?",
      answer: "Yes, VState's platform exposes your listing to millions of active home shoppers, often resulting in a faster sale than traditional methods. Our agents are focused on getting you the best results efficiently.",
    },
    {
      question: "Does VState have real estate agents in my area?",
      answer: "VState partners with a vast network of experienced, local agents across Canada. Enter your address in the 'Get Started' section to find a top agent near you.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            What to know about selling with VState.
          </p>
        </div>
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function SellPage(){
  return (
    <div>
      <main>
        <HeroSection />
        <SellFasterSection />
        <FeaturesSection /> 
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};