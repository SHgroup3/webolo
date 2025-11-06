import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaShare, FaSave, FaBed, FaBath, FaHome, FaCheckCircle, FaPlayCircle, FaLock } from 'react-icons/fa'; // FaPlayCircle icon ke liye
import { Lock, Camera } from 'lucide-react';
import map from '../assets/map.jpeg'

const listingsData = [
    {
        id: '121',
        address: '806 - 151 Avenue Road',
        city: 'Toronto, Amex',
        price: '$3,525,000',
        est_mrg_pay: '$19,992 /mo',
        price_change: '-$55,000',
        beds: '2+1',
        baths: '3',
        sqft_range: '2230 - 2499 sqft',
        status: 'For Sale',
        added_days: '56 days ago',
        image: 'https://photos.zolo.ca/8-11952-64-avenue-delta-R2653259-1.jpg',
        description: 'Welcome to 45 Anne Street! This well built brick raised ranch is set on a wide lot on a peaceful crescent. It has an attached garage, concrete driveway, durable metal roof and plenty of upgrades! The main floor boasts modern open concept living with plenty of natural light throughout. The kitchen features an island, granite countertops, a convenient pantry with coffee nook area and stainless steel appliances to complete the modern look. Also on this level are three well appointed bedrooms and a full bathroom. On the lower level you’ll find a spacious room with above grade windows. It could be used as a second living area, gym, or recreational room. You’ll also find a fully finished laundry room with convenient storage solutions and the bright primary bedroom complete with a walk-in closet, updated ensuite and den which would be perfect for a home office or flex space. Outside, unwind in your fully fenced backyard from the comfort of your deck that spans the entire width of the home. Have you always wanted a swimming pool? This yard is a perfect spot for one, with plenty of room left over for gardening or a play area for the kids. This home is located close to parks and schools and has easy access to the 401. This is a must-see, book your showing today!',
        more_details: {
            property: {
                Status: 'Sale', Type: 'Detached', Style: 'Bungalow-Raised', Size: '700-1100', Age: '31-50', Retirement: 'N', Area: 'Elgin', Community: 'Aylmer', Assessment_Year: '2025'
            },
            inside: {
                Bedrooms: '3', 'Bedrooms Plus': '1', Bathrooms: '2', Kitchens: '1', Rooms: '11', 'Den/Family Room': 'Y', 'Central Vac': 'N', 'Ensuite Laundry': 'N', 'Air Conditioning': 'Central Air', Fireplace: 'N', Handicap_Equipped: 'N'
            },
            fees: {
                Taxes: '3996', 'Tax Year': '2025', 'Tax Legal Description': 'PCL 119-1 SEC ML3 LT 119 PL ML3 AYLMER', Utilities: { Electricity: 'Y', Gas: 'Y', Cable: 'A', Telephone: 'A' },
            },
            highlights: ['Rec./Commum Centre', 'School', 'School Bus Route', 'Electric Car Charger', 'Fenced Yard', 'Park'],
            land: {
                Fronting_On: 'E', Frontage: '55.67'
            }
    },
    sold_history: [
            { mls: '10366903', date: 'Oct 20, 2025', type: 'Listed', price: '$618,000' },
            { mls: '10366902', date: 'Sept 1, 2025', type: 'Sold', price: '$595,000' },
        ],
        home_value: {
            approximate_value: '$618,000',
            beds: '2 bedroom'
        },
        about_text: {
            homes_for_sale: 1006,
            city: 'Kamloops',
            neighbourhood_homes: 5,
            city_homes: 268,
            average_price: '$490,809',
            approx_mortgage: '$1,791',
            text: 'This home is located at 6709 Ashcroft Road in Kamloops, British Columbia. Nearby cities include Tobiano, Monte Lake (westwold) and Mclure/insula. Ashcroft Road has 5 homes currently for sale, while the city of Kamloops has 268 homes for sale. The average listed price of a property in the community near ashcroft-road is $490,809, with an approximate mortgage of $1,791 per month. Apartments make up less than one quarter of properties for sale in the neighbourhood around 6709 Ashcroft Road.',
            disclaimer: 'Monthly payments are an estimate based on a mortgage with 20% down @ 2.65% with a 5-yr Variable rate'
        },
        faqs: [
            { question: 'How many bedrooms and bathrooms does this home have?', answer: 'This property has 3 bedrooms and 2 bathrooms, as per the current listing data.' },
            { question: 'Is 6709 Ashcroft Road, Kamloops, walkable?', answer: 'Based on our analysis, this area has a car-dependent rating with limited transit and requires a car for most errands.' },
        ],
        footer_links: {
            nearby_cities: [
                'Kamloops Homes For Sale', 'Tobiano Homes For Sale', 'Logan Lake Homes For Sale', 
                'Barriere Homes For Sale', 'Merritt Homes For Sale', 'Chase Homes For Sale', 
                'Bridge Lake Homes For Sale', 'Falkland Homes For Sale', 'Sorrento Homes For Sale', 
                'Scotch Creek Homes For Sale'
            ],
            popular_cities: [
                'Coquitlam Homes For Sale', 'Richmond Hill Homes For Sale', 'Abbotsford Homes For Sale', 
                'Barrie Homes For Sale', 'St. Catharines Homes For Sale', 'Windsor Homes For Sale', 
                'Burlington Homes For Sale', 'North Vancouver Homes For Sale', 'London South Homes For Sale', 
                'Maple Ridge Homes For Sale'
            ],
            recent_listings: [
                '31-2171 Van Horne Drive, Kamloops', '158-8800 Dallas Drive, Kamloops', '891 Regent Crescent, Kamloops', 
                '203 Mattoch Mckeague Road, Kamloops', '1800 Paul Road, Kamloops', '2932 Piva Road, Kamloops', 
                '755 Barrie Drive, Kamloops', '38 2022 Pacific Way, Kamloops', '105-1993 Quappelle Boulevard, Kamloops', 
                '25-2860 Valleyview Drive, Kamloops'
            ]
        },
    },
      {
        id: '122',
        address: '806 - 151 Avenue Road',
        city: 'Toronto, Amex',
        price: '$3,525,000',
        est_mrg_pay: '$19,992 /mo',
        price_change: '-$55,000',
        beds: '2+1',
        baths: '3',
        sqft_range: '2230 - 2499 sqft',
        status: 'For Sale',
        added_days: '56 days ago',
        image: 'https://photos.zolo.ca/8-11952-64-avenue-delta-R2653259-1.jpg',
        description: 'Welcome to 45 Anne Street! This well built brick raised ranch is set on a wide lot on a peaceful crescent. It has an attached garage, concrete driveway, durable metal roof and plenty of upgrades! The main floor boasts modern open concept living with plenty of natural light throughout. The kitchen features an island, granite countertops, a convenient pantry with coffee nook area and stainless steel appliances to complete the modern look. Also on this level are three well appointed bedrooms and a full bathroom. On the lower level you’ll find a spacious room with above grade windows. It could be used as a second living area, gym, or recreational room. You’ll also find a fully finished laundry room with convenient storage solutions and the bright primary bedroom complete with a walk-in closet, updated ensuite and den which would be perfect for a home office or flex space. Outside, unwind in your fully fenced backyard from the comfort of your deck that spans the entire width of the home. Have you always wanted a swimming pool? This yard is a perfect spot for one, with plenty of room left over for gardening or a play area for the kids. This home is located close to parks and schools and has easy access to the 401. This is a must-see, book your showing today!',
        more_details: {
            property: {
                Status: 'Sale', Type: 'Detached', Style: 'Bungalow-Raised', Size: '700-1100', Age: '31-50', Retirement: 'N', Area: 'Elgin', Community: 'Aylmer', Assessment_Year: '2025'
            },
            inside: {
                Bedrooms: '3', 'Bedrooms Plus': '1', Bathrooms: '2', Kitchens: '1', Rooms: '11', 'Den/Family Room': 'Y', 'Central Vac': 'N', 'Ensuite Laundry': 'N', 'Air Conditioning': 'Central Air', Fireplace: 'N', Handicap_Equipped: 'N'
            },
            fees: {
                Taxes: '3996', 'Tax Year': '2025', 'Tax Legal Description': 'PCL 119-1 SEC ML3 LT 119 PL ML3 AYLMER', Utilities: { Electricity: 'Y', Gas: 'Y', Cable: 'A', Telephone: 'A' },
            },
            highlights: ['Rec./Commum Centre', 'School', 'School Bus Route', 'Electric Car Charger', 'Fenced Yard', 'Park'],
            land: {
                Fronting_On: 'E', Frontage: '55.67'
            }
    },
    sold_history: [
            { mls: '10366903', date: 'Oct 20, 2025', type: 'Listed', price: '$618,000' },
            { mls: '10366902', date: 'Sept 1, 2025', type: 'Sold', price: '$595,000' },
        ],
        home_value: {
            approximate_value: '$618,000',
            beds: '2 bedroom'
        },
        about_text: {
            homes_for_sale: 1006,
            city: 'Kamloops',
            neighbourhood_homes: 5,
            city_homes: 268,
            average_price: '$490,809',
            approx_mortgage: '$1,791',
            text: 'This home is located at 6709 Ashcroft Road in Kamloops, British Columbia. Nearby cities include Tobiano, Monte Lake (westwold) and Mclure/insula. Ashcroft Road has 5 homes currently for sale, while the city of Kamloops has 268 homes for sale. The average listed price of a property in the community near ashcroft-road is $490,809, with an approximate mortgage of $1,791 per month. Apartments make up less than one quarter of properties for sale in the neighbourhood around 6709 Ashcroft Road.',
            disclaimer: 'Monthly payments are an estimate based on a mortgage with 20% down @ 2.65% with a 5-yr Variable rate'
        },
        faqs: [
            { question: 'How many bedrooms and bathrooms does this home have?', answer: 'This property has 3 bedrooms and 2 bathrooms, as per the current listing data.' },
            { question: 'Is 6709 Ashcroft Road, Kamloops, walkable?', answer: 'Based on our analysis, this area has a car-dependent rating with limited transit and requires a car for most errands.' },
        ],
        footer_links: {
            nearby_cities: [
                'Kamloops Homes For Sale', 'Tobiano Homes For Sale', 'Logan Lake Homes For Sale', 
                'Barriere Homes For Sale', 'Merritt Homes For Sale', 'Chase Homes For Sale', 
                'Bridge Lake Homes For Sale', 'Falkland Homes For Sale', 'Sorrento Homes For Sale', 
                'Scotch Creek Homes For Sale'
            ],
            popular_cities: [
                'Coquitlam Homes For Sale', 'Richmond Hill Homes For Sale', 'Abbotsford Homes For Sale', 
                'Barrie Homes For Sale', 'St. Catharines Homes For Sale', 'Windsor Homes For Sale', 
                'Burlington Homes For Sale', 'North Vancouver Homes For Sale', 'London South Homes For Sale', 
                'Maple Ridge Homes For Sale'
            ],
            recent_listings: [
                '31-2171 Van Horne Drive, Kamloops', '158-8800 Dallas Drive, Kamloops', '891 Regent Crescent, Kamloops', 
                '203 Mattoch Mckeague Road, Kamloops', '1800 Paul Road, Kamloops', '2932 Piva Road, Kamloops', 
                '755 Barrie Drive, Kamloops', '38 2022 Pacific Way, Kamloops', '105-1993 Quappelle Boulevard, Kamloops', 
                '25-2860 Valleyview Drive, Kamloops'
            ]
        },
    },
];
const InputGroup = ({ label, value, prefix, suffix, isDropdown }) => (
    <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-500 mb-1">{label}</label>
        <div className={`relative flex items-center ${isDropdown ? 'border border-gray-300 rounded-lg overflow-hidden' : ''}`}>
            {prefix && <span className="absolute left-3 text-gray-500">$</span>}
            
            {isDropdown ? (
                <select 
                    defaultValue={value} 
                    className="w-full p-2.5 pl-3 pr-10 border-0 focus:ring-green-500 focus:border-green-500 rounded-lg"
                >
                    <option value={value}>{value}</option>
                    <option value="15 Years">15 Years</option>
                </select>
            ) : (
                <input
                    type="text"
                    defaultValue={value}
                    className={`w-full p-2.5 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 ${prefix ? 'pl-8' : 'pl-3'} ${suffix ? 'pr-8' : 'pr-3'}`}
                />
            )}
            
            {suffix && <span className="absolute right-3 text-gray-500">%</span>}
        </div>
    </div>
);
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const Icon = isOpen ? '−' : '+'; 

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-gray-800 font-medium">{question}</span>
                <span className="text-xl font-bold text-gray-500">{Icon}</span>
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-600 text-sm leading-relaxed pr-8">
                    {answer}
                </div>
            )}
        </div>
    );
};
  const calculatorDefaults = {
        annualIncome: '100,000',
        interestRate: '4.84',
        monthlyDebt: '0',
        mortgageTerm: '25 Years',
        downPayment: '50,000',
        propertyPrice: '618,000'
    };

const SpecsBlock = ({ title, data }) => (
    <div className="space-y-2">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-1">{title}</h3>
        {Object.entries(data).map(([key, value]) => (
            <p key={key} className="text-sm flex justify-between text-gray-700">
                <span className="font-semibold text-gray-500 mr-2">{key.replace('_', ' ')}:</span>
                <span className="text-gray-800 font-medium">{value}</span>
            </p>
        ))}
    </div>
);

function PropertyDetail() {
    const { listingId } = useParams();
    const currentId = listingId || '121'; 
    const property = listingsData.find(item => item.id === currentId);

    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    if (!property) {
        return <div className="text-center p-10 text-xl">Property Not Found.</div>;
    }
    const { 
        address, city, price, est_mrg_pay, price_change, beds, baths, sqft_range, status, added_days, image, sold_history, home_value, description, more_details, faqs, about_text, footer_links,
    } = property;


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
                    <a href="/" className="text-gray-500 hover:text-blue-600 transition">
                        &larr; Back to Search | ON &gt; Toronto &gt; 151 Avenue Road &gt; M5R 3K1
                    </a>
                </div>
            </div>
<div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex w-full overflow-hidden h-[500px] border border-gray-200 shadow-xl rounded-lg"> 
                    <div className="w-1/2 h-full">
                        <img
                            src={image}
                            alt="Modern residential building"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-1/2 h-full bg-white p-8 ml-5 flex flex-col justify-center border-l border-gray-200">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold flex items-center text-gray-800">
                                Free Account Required 
                                <Lock className="w-5 h-5 ml-2 text-gray-500" /> 
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Join 10 million+ Canadians searching for homes on VState each month.
                            </p>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm text-gray-700">
                            <li className="flex items-center">
                                • <span className="ml-2">Faster listings than **REALTOR.ca®**</span>
                            </li>
                            <li className="flex items-center">
                                • <span className="ml-2">See **27% more homes & sold history**</span>
                            </li>
                            <li className="flex items-center">
                                • <span className="ml-2">Instant access to **photos & features**</span>
                            </li>
                            <li className="flex items-center">
                                • <span className="ml-2">Save searches & homes across devices</span>
                            </li>
                        </ul>
                        <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                            Show me the photos! 
                            <Camera className="w-5 h-5 ml-2" /> 
                        </button>
                    </div> 
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">{address}</h1>
                                    <p className="text-gray-500">{city}</p>
                                </div>
                                <div className="flex space-x-3 text-sm text-gray-500">
                                    <button className="flex items-center hover:text-blue-500 transition"><FaMapMarkerAlt className="mr-1" /> View on Map</button>
                                    <button className="flex items-center hover:text-blue-500 transition"><FaShare className="mr-1" /> Share</button>
                                    <button className="flex items-center hover:text-red-500 transition"><FaSave className="mr-1" /> Save</button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between border-t mt-4 pt-4">
                                <div className="flex items-baseline space-x-2 mb-2 md:mb-0">
                                    <span className="text-3xl font-extrabold text-green-700">{price}</span>
                                    <span className="text-lg text-gray-500">est {est_mrg_pay}</span>
                                </div>
                                <div className="text-gray-700 font-semibold flex space-x-4">
                                    <span className="flex items-center"><FaBed className="mr-1" /> {beds} bed</span>
                                    <span className="flex items-center"><FaBath className="mr-1" /> {baths} bath</span>
                                    <span className="text-sm border p-1 rounded-md">{sqft_range} sqft</span>
                                </div>
                            </div>

                            <div className="mt-4 text-sm flex justify-between items-center text-gray-600 border-b pb-4">
                                <span>{status} | Added {added_days}</span>
                                <span className="text-blue-600 font-semibold cursor-pointer">Afford Score™ What's my score?</span>
                            </div>

                            <div className="mt-4">
                                <p className="text-red-500 text-sm mb-3">Price change on Oct 22: **{price_change}**</p>
                                <div className="bg-green-50 p-3 rounded-lg flex items-center text-sm text-green-800">
                                    <FaCheckCircle className="mr-2 text-green-600" />
                                    <span>Join or **Sign In** • Real estate boards need a verified account to see photos & sold data</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className={`text-gray-700 text-base leading-relaxed ${isDescriptionExpanded ? '' : 'max-h-40 overflow-hidden relative'}`}>
                                <p>{description}</p>
                                {!isDescriptionExpanded && (
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                                )}
                            </div>
                            {isDescriptionExpanded && (
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t pt-8">
                                    <div className="space-y-8">
                                        <SpecsBlock title="Property" data={more_details.property} />
                                        <SpecsBlock title="Inside" data={more_details.inside} />
                                    </div>
                                    <div className="space-y-8">
                                        <SpecsBlock title="Fees" data={{ Taxes: more_details.fees.Taxes, 'Tax Year': more_details.fees['Tax Year'], 'Tax Legal Description': more_details.fees['Tax Legal Description'] }} />
                                        <SpecsBlock title="Utilities" data={more_details.fees.Utilities} />
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-gray-800 border-b pb-1">Highlights</h3>
                                            <div className="flex flex-wrap gap-2 text-sm">
                                                {more_details.highlights.map(item => (
                                                    <span key={item} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <SpecsBlock title="Land" data={more_details.land} />
                                    </div>
                                </div>
                            )}
                            <button 
                                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                className="mt-4 px-4 py-2 border border-gray-300 text-sm font-semibold text-gray-700 rounded-md hover:bg-gray-50 transition"
                            >
                                {isDescriptionExpanded ? 'Hide Facts and Features' : 'See More Facts and Features'}
                            </button>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-800">Virtual Tour</h2>
                            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="https://via.placeholder.com/800x450?text=Video+Tour+Placeholder"
                                    alt="Virtual Tour Placeholder"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer">
                                    <FaPlayCircle className="text-white w-20 h-20 opacity-80 hover:opacity-100 transition duration-200" />
                                </div>
                                <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">Video Tour</span>
                            </div>

                            <p className="text-sm text-gray-600">
                                Sell your home with VState and get your own 3D Walkthrough or Video Tour.
                            </p>
                            <hr className="border border-gray-200 my-4 w-full"/>
                                                <div>
                        <div className="bg-white p-6 rounded-xl space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">Sold History</h2>
                            <p className="text-sm text-gray-600">
                                Listing records and last sold date for {address}
                            </p>
                            
                            {/* History Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            <th className="py-3">MLS#</th>
                                            <th className="py-3">Date</th>
                                            <th className="py-3">Type</th>
                                            <th className="py-3 text-right">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-gray-800">
                                        {sold_history && sold_history.map((record, index) => (
                                            <tr key={index} className="text-sm font-medium">
                                                <td className="py-3 whitespace-nowrap">{record.mls}</td>
                                                <td className="py-3 whitespace-nowrap">{record.date}</td>
                                                <td className="py-3 whitespace-nowrap">{record.type}</td>
                                                <td className="py-3 whitespace-nowrap text-right">{record.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg flex items-center text-sm text-green-800 mt-4">
                                <FaLock className="mr-2 text-green-600" />
                                <span>**Privacy & Terms** • Real estate boards need a verified account to see photos & sold data</span>
                            </div>
                        </div>
               <div className="bg-white p-6 rounded-xl space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">Home Value</h2>
                            <p className="text-sm text-gray-600">
                                Price estimate and comparables near {address}
                            </p>
                            <p className="text-base text-gray-700">
                                The approximate value of a **{home_value.beds}** in the area is:
                            </p>
                            <p className="text-4xl font-extrabold text-gray-900">
                                {home_value.approximate_value}
                            </p>
                        </div>
                        <hr className="border border-gray-300 my-4" />
                        <div className="bg-white p-6 rounded-xl space-y-4">
                            <h1 className='text-2xl font-bold text-gray-800'>Neighborhoods</h1>
                            <p>Schools, amenities, travel times, and market trends near 6709 Ashcroft Road</p>
                            <img src={map}
                            alt='map'
                            className="relative w-1/2 h-30 rounded-lg overflow-hidden shadow-lg">
                            </img>
                            <div className='flex flex-row space-x-2'>
                                <a href='#L1' className='text-md hover:text-blue-600 text-normal'>Stats</a>
                                <a href='#L1' className='text-md hover:text-blue-600 text-normal'>Nearby</a>
                                <a href='#L1' className='text-md hover:text-blue-600 text-normal'>Commute</a>
                                <a href='#L1' className='text-md hover:text-blue-600 text-normal'>Schools</a>
                            </div>
                            <hr className="border border-gray-300 my-4" />
                        <div className="p-6 space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Affordability</h2>
                            <div className="text-center space-y-1">
                                <p className="text-gray-700">You can afford a home up to</p>
                                <div className="text-3xl font-extrabold text-gray-900 flex justify-center items-end">
                                    <span className="text-green-700">$637,531</span> 
                                    <span className="text-xl font-normal text-gray-500 ml-2">or </span>
                                    <span className="text-green-700 ml-2">$3,380</span>
                                    <span className="text-xl font-normal text-gray-500 ml-1">/mo</span>
                                </div>
                            </div>
                            <div className="text-center pt-4">
                                <p className="text-lg text-gray-700">
                                    {address} at ${home_value.approximate_value || '618,000'} is <span className="text-red-600 font-bold">$3,369</span> /mo
                                </p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-center font-semibold text-gray-700">Afford Score™ <span className="text-xl text-orange-500">57</span></p>
                                <div className="relative h-2 rounded-full bg-gray-200">
                                    <div className="absolute top-0 left-0 h-2 w-1/4 bg-red-500 rounded-l-full"></div>
                                    <div className="absolute top-0 left-1/4 h-2 w-1/4 bg-orange-400"></div>
                                    <div className="absolute top-0 left-1/2 h-2 w-1/4 bg-green-500"></div>
                                    <div className="absolute top-1/2 -mt-2 h-4 w-4 rounded-full bg-black border-2 border-white shadow-lg" style={{ left: '57%' }}></div>
                                    <div className="flex justify-between text-xs font-medium text-gray-600 pt-3">
                                        <span>Aggressive</span>
                                        <span>Stretching</span>
                                        <span>Affordable</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                <InputGroup label="Annual Income" value={calculatorDefaults.annualIncome} prefix="$" />
                                <InputGroup label="Interest Rate" value={calculatorDefaults.interestRate} suffix="%" />
                                <InputGroup label="Monthly Debts" value={calculatorDefaults.monthlyDebt} prefix="$" />
                                <InputGroup label="Mortgage Term" value={calculatorDefaults.mortgageTerm} isDropdown={true} />
                                <InputGroup label="Down Payment" value={calculatorDefaults.downPayment} prefix="$" />
                                <InputGroup label="Property Price" value={calculatorDefaults.propertyPrice} prefix="$" />
                            </div>
                            <div className="pt-6 border-t mt-6">
                                <h3 className="text-lg font-bold mb-3">Affordability Coach</h3>
                                <ul className="text-sm space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Income: Increase to $115,000 ($15,000 more)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Down Payment: Increase to $123,600 to eliminate CMHC Loan Insurance (save $101/month)</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
            <div className="bg-white p-6 rounded-xl space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800">About {address}</h2>

                            <div className="text-sm">
                                Right now, there are <span className="font-semibold text-blue-600">{about_text.homes_for_sale} homes for sale ({about_text.city}).</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {about_text.text}
                            </p>
                            <p className="text-xs text-gray-500 border-t pt-4">
                                * {about_text.disclaimer}
                            </p>
                            <p className="text-sm font-medium text-gray-700 pt-2 border-t">
                                MLS#: 10366903 • ${home_value.approximate_value} • 2 bedroom Manufactured Home in {city}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs About {address}</h2>
                            
                            <div className="space-y-0">
                                {faqs && faqs.map((item, index) => (
                                    <FAQItem key={index} question={item.question} answer={item.answer} />
                                ))}</div></div></div></div></div></div>
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-4">
                            <h3 className="text-lg font-bold mb-4">Ask About This Home</h3>
                            <form className="space-y-4">
                                <div className="relative">
                                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 pr-10" />
                                    <FaHome className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 pr-10" />
                                    <FaHome className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input type="tel" placeholder="Phone Number (Mobile)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 pr-10" />
                                    <FaHome className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <textarea rows="3" placeholder={`I would like more information regarding a property at ${address}`} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 resize-none"></textarea>
                                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                                    Go Tour This Home
                                </button>
                                <p className="text-xs text-center text-gray-500">Learn more by viewing our privacy policy or contact us.</p>
                            </form>
                        </div>
                    </div>  
                </div>
                <div className="bg-gray-50 border-t border-gray-200 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-gray-800">Nearby Cities</h4>
                            <ul className="space-y-1 text-sm">
                                {footer_links.nearby_cities.map((link, index) => (
                                    <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer">{link}</li>
                                ))}
                            </ul></div><div>
                            <h4 className="font-bold text-lg mb-4 text-gray-800">Popular Cities</h4>
                            <ul className="space-y-1 text-sm">
                                {footer_links.popular_cities.map((link, index) => (
                                    <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer">{link}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-gray-800">Recent Listings</h4>
                            <ul className="space-y-1 text-sm">
                                {footer_links.recent_listings.map((link, index) => (
                                    <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer">{link}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div></div></div></div>
    );
}

export default PropertyDetail;