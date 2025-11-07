import React, {useState} from "react";
import Footer from "../components/Footer";

export default function HomeWorthEstimate() {

      const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How is my home value calculated?",
      answer:
        "With VState's Canadian home value estimator, we take a variety of factors into calculating your property value. This includes nearby home values, sales price history, location, and real estate market trends. Our home value calculator is an estimate of your property value and not an official appraisal.",
    },
    {
      question: "How do I find the market value of my house?",
      answer:
        "Enter your address above to find an immediate estimate of your home's market value. Use our home valuation tool above to find the market value of your property or nearby homes to see how much your home is worth.",
    },
    {
      question: "What's a home appraisal and how do I get one?",
      answer:
        "A home appraisal is an official home valuation by a licensed home appraiser or REALTOR®. It's an unbiased opinion of the market value of your home and is used for mortgage purposes. VState can help connect you with a local REALTOR® to get an official home appraisal.",
    },
    {
      question: "How do I get my home listed for sale?",
      answer:
        "If you're ready to sell your home, congratulations! At VState, we are happy to help list your home for sale and help you leverage your home equity. Please contact us to discuss options and connect with a local real estate agent.",
    },
  ];
  return (
    <div className="min-h-screen mt-24 flex flex-col items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-2xl font-semibold mb-2">
          How much is my home worth?
        </h1>
        <p className="text-gray-600 mb-6">
          Get a free home value estimate immediately.
        </p>
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="Enter your address"
            className="border border-gray-300 rounded-md w-80 p-2 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-400">
            Ex: 123-456 100 Street, Toronto, ON
          </p>
          <button className="mt-8 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
            Get My Instant Estimate
          </button>
        </div>
      </div>
      <div className="mt-24">
        <section className="max-w-4xl mx-auto my-10 px-4 text-gray-700">
      <p className="mb-4">
        Find out how much your home is worth with VState's Home Value Calculator
        Tool. Get an instant estimate of the current value of your house by
        entering your address above. VState estimates Canadian home values based
        upon many factors, including nearby homes, comparable properties,
        recently sold properties, Canadian Census data, location, and other real
        estate market information. Our home value estimator is a starting point
        for determining your home's value and not an official appraisal or
        REALTOR® recommended selling price.
      </p>

      <p className="mb-4">
        Looking for other ways to value your house? Contact your real estate
        agent to do a market comparison report or get an appraisal done by a
        licensed real estate appraiser. A licensed home appraiser or REALTOR®
        can visually inspect your home to determine fair market value and assist
        with pricing recommendations before listing on the MLS® database.
      </p>

      <p className="mb-8">
        Understanding the value of your house can be helpful in determining to
        sell, estimating list price or simply evaluating your real estate assets
        and home equity. VState uses a proprietary method for evaluating your home
        online to give you an idea of your home's worth in the current Canadian
        real estate market and property valuation.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-6">
        FAQs About VState's Home Value Estimator
      </h2>

      <div className="border-t border-gray-300 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-gray-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
      </div>
      <Footer />
    </div>
  );
}
