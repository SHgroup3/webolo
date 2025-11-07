import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaBullseye, FaBan, FaUsers, FaTools } from 'react-icons/fa';
import { FaEnvelopeOpenText, FaPhoneAlt, FaCalendarCheck, FaSun, FaCalendar } from 'react-icons/fa';  // Feature icons
import Footer from "../components/Footer";

const testimonials = [
  {
    quote: "I worked in another brokerage for a year and a half but had never had any support. With VState, support is not only through the friendly and helpful team but mostly of my mentor. I like the cutting edge technology that makes our marketing and paperwork much easier. I’m impressed by Vic and Maurita Chanta. They have big improvements in my response rate and efficiency.",
    author: "Steven Yaacov",
    title: "Sales Representative, VState Realty",
    image: "https://www.zolo.ca/images/agent-63.jpg"
  },
  {
    quote: "The VState CRM makes me feel like I have an assistant at VState. VState gives you the leads. They will give you so many leads you are capable of handling. They clients I speak to are motivated. And if they aren't motivated for now, they are motivated for later.",
    author: "Almotaz Ayub",
    title: "Sales Representative, VState Realty",
    image: "https://www.zolo.ca/images/agent-553.jpg"
  },
  {
    quote: "You truly are mentored, that by a ZVL, but by a person who has been through it so he is giving you their experience to learn from. VState is the real deal.",
    author: "Giovane Zunft",
    title: "Sales Representative, VState Realty",
    image: "https://www.zolo.ca/images/agent-29.jpg"
  },
  {
    quote: "VState CRM is super easy to use. It’s very user friendly. The interface is fantastic. I never feel like I am left alone to do a deal. I always have help. If you're a new agent, VState is a great place to start.",
    author: "Tyler Drygshow",
    title: "Sales Representative,VState  Realty",
    image: "https://www.zolo.ca/images/agent-164.jpg"
  }
];

const weekSchedule = [
  { 
    day: "Monday", 
    icon: FaEnvelopeOpenText, 
    task: "Finalizing Offers", 
    description: "Your client wants to buy. Let’s get this deal done. Remove subjects on a deal from 2 weeks ago." 
  },
  { 
    day: "Tuesday", 
    icon: FaPhoneAlt, 
    task: "New Clients", 
    description: "Cold-call to try and find new leads. Introduce yourself to new clients provided by the VState lead system. Evaluate their needs by asking open ended questions. Schedule a few in-person meetings to go over new client needs." 
  },
  { 
    day: "Wednesday", 
    icon: FaCalendarCheck, 
    task: "Meetings", 
    description: "Cold-call to try and find new leads. Follow up with a handful of existing clients. Ask more questions. Make more money. Sign an agent agreement with a new home buyer." 
  },
  { 
    day: "Thursday", 
    icon: FaSun, 
    task: "Flex Day", 
    description: "Sit in on a webinar on how to generate more leads. Take in your nephew's soccer game. Dinner party with friends." 
  },
   { 
    day: "Friday", 
    icon: FaSun, 
    task: "Flex day", 
    description: "Cold-call to try and find new leads. Introduce yourself to new clients provided by the VState lead system. Evaluate their needs by asking open ended questions. Schedule a few in-person meetings to go over new client needs." 
  },
  {day : "Saturday", 
    icon: FaCalendar, 
    task: "Showing", 
    description: "Cold-call to try and find new leads. Introduce yourself to new clients provided by the VState lead system. Evaluate their needs by asking open ended questions. Schedule a few in-person meetings to go over new client needs." 
  },
   { 
    day: "Sunday", 
    icon: FaCalendar, 
    task: "Prepare Offers", 
    description: "Cold-call to try and find new leads. Introduce yourself to new clients provided by the VState lead system. Evaluate their needs by asking open ended questions. Schedule a few in-person meetings to go over new client needs." 
  },
];



export default function RealtorPage() {
  return (
    <div className="container mx-auto px-4 md:px-16 py-10 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            Are You a Realtor?
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Over 10 million people searching for homes on VState each month, need you!
          </p>
          <p className="text-xl font-semibold text-blue-600 mb-10">
            No Desk Fees · Free Leads · 1-on-1 Coaching
          </p>
          <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-12">
            <img
              src="https://via.placeholder.com/1280x720?text=Realtor+Video+Placeholder" // Placeholder image URL
              alt="Realtor talking"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer">
              <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" /> 
                </svg>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-light text-gray-800 mb-6">
            How VState is Different
          </h2>
          <p className="text-base text-gray-600 mb-10 max-w-2xl">
            Our agents spend their time with customers — not printers, programmers, marketing agencies, and consultants. VState technology allows our agents to operate 100% from home or on the road — more meetings, more showings, more customer care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-16"> 
            <div className="flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FaBullseye className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                100% of Leads Provided
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                You’ll never have to spend your own money on marketing, branding, or leads again. That means you can focus on customer care and closing deals.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FaBan className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Desk Fees... Really
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                You’ll never pay desk fees. No personal marketing costs have to ever leave your pocket. You’ll make more money, without the upfront risk.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FaUsers className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1-on-1 Success Coaching
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We succeed when we succeed. Our experienced coaches help agents with phone skills, offer strategies, and everything else to help them flourish.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FaTools className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Free Customer Management Tools
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Manage leads using the amazing VState Insights CRM. It’s optimized for mobile devices and fully integrated with customer web activity.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-light text-gray-800 mb-8">
            What Agents Are Saying
          </h2>

          {/* Testimonials */}
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <h2 className="text-3xl font-light text-gray-800 mb-6 mt-16">
            A Week in the Life
          </h2>
          <p className="text-base text-gray-600 mb-10 max-w-2xl">
            What your week could look like if you weren't spending all of your time trying to generate leads.
          </p>
          
          <div className="space-y-10">
            {weekSchedule.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/4 text-sm font-medium text-gray-500 md:text-right order-2 md:order-1 pt-2 md:pt-0">
                  {item.day}
                </div>
                <div className="md:w-3/4 flex space-x-4 border-b border-gray-200 pb-8 order-1 md:order-2">
                  <item.icon className="text-gray-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.task}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {item.description.split('. ').map((sentence, sIndex) => (
                        <React.Fragment key={sIndex}>
                          {sentence.trim()}.
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>

        </div>

        {/* Right Column */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-lg shadow-xl sticky top-4">
            
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Get Started Today!
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              Talk to Our Agent Success Team
            </p>
            

            {/* --- Form Fields */}
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium text-gray-500 mb-1">First name*</label>
                <input type="text" id="firstName" placeholder="First name" required className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-medium text-gray-500 mb-1">Last name*</label>
                <input type="text" id="lastName" placeholder="Last name" required className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1">Email*</label>
                <input type="email" id="email" placeholder="Email address" required className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-500 mb-1">Phone number*</label>
                <input type="tel" id="phone" placeholder="Phone number (Mobile)" required className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="choose" className="block text-xs font-medium text-gray-500 mb-1">Please choose from the following*</label>
                <select id="choose" required className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-sm appearance-none bg-white pr-8">
                  <option value="">Please select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <div className="relative pointer-events-none -mt-7 mr-3 flex justify-end">
                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-200 mt-2">
                Book a Call
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-sm text-gray-500">Or call</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center items-center space-x-2 text-xl font-medium text-gray-700">
              <FiPhone className="text-gray-500" size={20} />
              <span>416.898.8932</span>
            </div>
            
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
}