import React from "react";

export default function Listing () {
  return (
    <section className="page-header container mx-auto mb-16 px-4">
      <div className="mt-16">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
          Kamloops Real Estate Listings
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Browse available properties in Kamloops, BC. Find your dream home
          today with Zolo!
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://photos.zolo.ca/303-860-nicolani-drive-kamloops-10367252-1-p.jpg?2025-10-31+14%3A44%3A07"
              alt="Property"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">
                3 Bed, 2 Bath — $750,000
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                123 Green Valley Rd, Kamloops, BC
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://photos.zolo.ca/309-1880-hugh-allan-drive-kamloops-10366653-1-p.jpg?2025-11-05+11%3A23%3A24"
              alt="Property"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">
                4 Bed, 3 Bath — $890,000
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                56 Riverbank St, Kamloops, BC
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://photos.zolo.ca/3402-1040-talasa-court-kamloops-10366464-1-p.jpg?2025-10-28+15%3A55%3A08"
              alt="Property"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">
                2 Bed, 1 Bath — $520,000
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                88 Lakeview Ave, Kamloops, BC
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


