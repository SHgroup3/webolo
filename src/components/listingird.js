// ListingGrid.js
import React from 'react';
import ListingCard from '../components/listingcard';

// Sample Data (इमेज के अनुसार डेटा)
const listingsData = [
  {
    price: '$875,000',
    details: '2 bed 2 bath 1405 sqft Built in 1988',
    address: '8-11952 64 Avenue, Delta, BC · Sunshine Hills Woods',
    mls: 'R3061885',
    brokerage: 'Skystreet Real Estate Marketing',
    type: 'For Sale',
    image: 'https://photos.zolo.ca/8-11952-64-avenue-delta-R2653259-1.jpg',
    time: '2 minutes',
    isCommercial: false
  },
  {
    price: '$2,000',
    details: '– bed – bath 2000-2500 sqft',
    address: '71 Harris Place, Ottawa, ON · Meadowlands/St. Claire...',
    mls: 'X12483352',
    brokerage: 'HOUSESIGMA INC',
    type: 'For Rent',
    image: 'https://photos.zolo.ca/71-harris-place-ottawa-X12483352-1-p768.jpg?2025-10-27+09%3A45%3A12',
    time: '5 minutes',
    isCommercial: false
  },
  {
    price: '$800 gross lease',
    details: 'Office 22000 sqft',
    address: '200C-4275 Innes Road, Ottawa, ON · Fallingbrook/Gard...',
    mls: 'X12483398',
    brokerage: 'ROYAL LEPAGE PERFORMANCE RE...',
    type: 'For Lease',
    image: 'https://photos.zolo.ca/200c-4275-innes-road-ottawa-X12483398-1-p768.jpg?2025-10-27+09%3A45%3A13',
    time: '5 minutes',
    isCommercial: true
  },
    {
    price: '$875,000',
    details: '2 bed 2 bath 1405 sqft Built in 1988',
    address: '8-11952 64 Avenue, Delta, BC · Sunshine Hills Woods',
    mls: 'R3061885',
    brokerage: 'Skystreet Real Estate Marketing',
    type: 'For Sale',
    image: 'https://photos.zolo.ca/6-10-centennial-road-orangeville-W12483362-1-p768.jpg?2025-10-27+09%3A44%3A29',
    time: '2 minutes',
    isCommercial: false
  },
  {
    price: '$2,000',
    details: '– bed – bath 2000-2500 sqft',
    address: '71 Harris Place, Ottawa, ON · Meadowlands/St. Claire...',
    mls: 'X12483352',
    brokerage: 'HOUSESIGMA INC',
    type: 'For Rent',
    image: 'https://photos.zolo.ca/405-36-forest-manor-road-toronto-C12483354-1-p768.jpg?2025-10-27+09%3A43%3A08',
    time: '5 minutes',
    isCommercial: false
  },
  {
    price: '$800 gross lease',
    details: 'Office 22000 sqft',
    address: '200C-4275 Innes Road, Ottawa, ON · Fallingbrook/Gard...',
    mls: 'X12483398',
    brokerage: 'ROYAL LEPAGE PERFORMANCE RE...',
    type: 'For Lease',
    image: 'https://photos.zolo.ca/502-191-st-george-street-toronto-C12483360-1-p768.jpg?2025-10-27+09%3A43%3A09',
    time: '5 minutes',
    isCommercial: true
  },
  {
    price: '$875,000',
    details: '2 bed 2 bath 1405 sqft Built in 1988',
    address: '8-11952 64 Avenue, Delta, BC · Sunshine Hills Woods',
    mls: 'R3061885',
    brokerage: 'Skystreet Real Estate Marketing',
    type: 'For Sale',
    image: 'https://photos.zolo.ca/1515-85-north-park-road-vaughan-N12483296-1-p768.jpg?2025-10-27+09%3A29%3A08',
    time: '2 minutes',
    isCommercial: false
  },
  {
    price: '$2,000',
    details: '– bed – bath 2000-2500 sqft',
    address: '71 Harris Place, Ottawa, ON · Meadowlands/St. Claire...',
    mls: 'X12483352',
    brokerage: 'HOUSESIGMA INC',
    type: 'For Rent',
    image: 'https://photos.zolo.ca/906-200-sudbury-street-toronto-C12434208-1-p768.jpg?2025-09-30+19%3A43%3A07',
    time: '5 minutes',
    isCommercial: false
  },
  {
    price: '$800 gross lease',
    details: 'Office 22000 sqft',
    address: '200C-4275 Innes Road, Ottawa, ON · Fallingbrook/Gard...',
    mls: 'X12483398',
    brokerage: 'ROYAL LEPAGE PERFORMANCE RE...',
    type: 'For Lease',
    image: 'https://photos.zolo.ca/46-simpson-avenue-clarington-E12483300-1-p768.jpg?2025-10-27+09%3A32%3A08',
    time: '5 minutes',
    isCommercial: true
  },
];

const ListingGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 bg-gray-50">
      
      {/* Responsive Grid Layout */}
      <div className="grid gap-6 
        sm:grid-cols-1       
        md:grid-cols-2       
        lg:grid-cols-3
        xl:grid-cols-3"
      >
        {listingsData.map((listing, index) => (
          <ListingCard key={index} data={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingGrid;