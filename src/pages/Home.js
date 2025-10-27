import React from "react";
import ListingGrid from "../components/listingird";

export default function Home(){
    return(
        <div className="flex flex-col w-full">
  <div className="px-4 mr-auto">
    <h1 className="font-bold text-3xl flex items-center mt-4">
      Canada Real Estates
    </h1>
    <p className="text-xl mt-2">
      Refine your Canada real estate search by price, bedroom, or type (house, townhouse, or condo).
      View up-to-date MLS® listings in Canada.
    </p>
    <p className="text-md mt-4 text-black font-bold">
      247242 homes for sale in Canada
    </p>
  </div>
        <ListingGrid />
<hr className="border border-gray-200 my-4 w-full"/>
    

  <div className="flex justify-center w-full">
    <p className="text-lg">
        Shop with flexible financing plans at over 8,500 retail locations, in-store and online with Flexiti.
        <a href="/store" className="underline decoration-black-700 font-bold">Find a store</a>
        <p className="text-center text-sm mt-2">Conditions Apply,</p>
         <hr className="border border-gray-200 my-4 w-full"/>
    </p>
  </div>
  <div className="flex justify-center">
  <p className="font-normal text-lg mt-8" >Canada</p>
  </div>
    <div className="flex justify-center items-center">
      <div className="border-t-2 border-gray-200 w-full mt-8"></div>
    </div>
    <div className="flex flex-col justify-center mt-4">
       <h1 className="text-2xl font-bold text-center mb-4">Find Real Estate & MLS® Listings in Canada</h1>
       <p className="text-center text-xl max-w-2xl mx-auto px-4 text-lg text-gray-900 leading-relaxed">Whether you want to purchase a home for sale, looking for a place to rent,
        or selling your home, Zolo makes it easy for you to find Canada real estate. 
        On Zolo, you can search the latest Canadian MLS® listings. 
        Every 15 minutes, Zolo is updated with new real estate listings,
        so you'll see many of the same listings you'd find on Realtor.ca.
        Narrow your home search to exactly what you're looking for by filtering homes
        by property type, price, bedrooms, size, and custom keywords. You can browse homes 
        for sale on the 
        <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400"> Toronto MLS, Vancouver MLS, Calgary MLS, Edmonton MLS,</a>
         and more. Want to tour a home in person? Check out our 
         <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400">newest MLS listings </a>  in Canada as well 
        as <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400">open houses in Toronto, Vancouver open houses,  British Columbia, Alberta,</a> and
        <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400"> Ontario </a>
        real estate.</p>
        <div className="mt-8">
        <p className="text-center text-xl max-w-2xl mx-auto px-4 text-lg text-gray-900 leading-relaxed">
          Search MLS® listings by location with our
          <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400"> MLS® CA map </a> for Canada-wide real estate. 
          Zolo gives you local insights on condos, townhouses, and houses for sale, apartments 
          for rent, and the hottest neighborhoods in each city. Use current housing market trends 
          and stats so you can make a well-informed decision on buying a new home, including 
          <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400"> Toronto real estate trends, Vancouver market stats </a> and more. Use our
          <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400">  home value 
          calculator  </a>  to estimate how much your home is worth with current market trends and
           sold home data. Looking for a REALTOR®? 
           <a href="/bug"className="underline decoration-black-700 font-bold text-blue-400"> Contact us </a> 
           and talk to one of our local
            real estate agents today so you can get started on landing your dream home!
        </p>
        </div>
    </div>
        <div className="flex justify-center items-center">
      <div className="border-t-2 border-gray w-full mt-8"></div>
    </div>
        <div 
        className="grid gap-x-6 gap-y-4 justify-start 
          sm:grid-cols-2       /* Phone Screens (640px tak): 2 columns */
          md:grid-cols-3       /* Tablet Screens (768px tak): 3 columns */
          lg:grid-cols-4       /* Laptop/Large Screens (1024px aur upar): 4 columns */
        "
      >
          <div className="text-black leading-loose">
            <p className="text-2xl font-bold">Popular Cities</p>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Toronto Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Calgary Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Edmonton Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vancouver Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Surrey Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Ottawa Homes For Sale </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Hamilton Homes For Sale </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Mississauga Homes For Sale </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Brampton Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Richmond Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Kelowna Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Burnaby Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Langley Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vaughan Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Oakville Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Markham Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Coquitlam Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Kitchener Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Richmond Hill Homes For Sale</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Abbotsford Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Barrie Homes For Sale </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Chilliwack Homes For Sale </p></a>
          </div>
          <div className="text-black leading-loose">
            <p className="text-2xl font-bold">Condos for Sale</p>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Toronto Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Calgary Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Edmonton Condos</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vancouver Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Surrey Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Ottawa Condos </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Hamilton Condos </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Mississauga Condos </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Brampton Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Richmond Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Kelowna Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Burnaby Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Langley Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vaughan Condos </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Oakville Condos </p></a>
          </div>
<div className="text-black leading-loose">
            <p className="text-2xl font-bold">Townhouses for Sale</p>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Toronto Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl">
            <p>Calgary Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl">
            <p>Edmonton Townhouses</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vancouver Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Surrey Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Ottawa Townhouses </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Hamilton Townhouses </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Mississauga Townhouses</p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Brampton Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Richmond Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Kelowna Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Burnaby Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Langley Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vaughan Townhouses </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Oakville Townhouses </p></a>
          </div>
          <div className="text-black leading-loose">
            <p className="text-2xl font-bold">Popular Searches</p>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>All Homes In Canada </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Toronto Housing Market </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vancouver Housing Market </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Brampton Housing Market </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vaughan Housing Market </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Mississauga Housing Market </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Toronto Rentals </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Toronto Condo Rentals </p></a>
           <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Brampton Rentals </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Mississauga Rentals </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Richmond Hill Rentals </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Markham Rentals </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Vaughan Rentals </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Bram East Real Estate </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Malton Real Estate </p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>British Columbia</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Alberta</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Saskatchewan</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Ontario</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Prince Edward Island</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>Nova Scotia</p></a>
            <a href="/sale" className="text-black leading-normal text-2xl hover:underline">
            <p>New Brunswick</p></a>
          </div>
    </div>
    <div className="flex justify-center items-center">
      <div className="border-t-2 border-gray- w-full mt-8"></div>
    </div>
    <div className="flex justify-center mt-8">
      <p className="text-xl leading-relaxed px-4">
        The listing data is provided under copyright by the Toronto Regional Real Estate Board
         (TRREB). The information provided herein must only be used by consumers that have a 
         bona fide interest in the purchase, sale or lease of real estate and may not be used for
          any commercial purpose or any other purpose. The data is deemed reliable but is not guaranteed accurate by the Toronto Regional Real Estate Board nor Zolo. The information provided on this page, including the Affordability, Afford Score™, and Affordability Coach, are provided for informational purposes only and should not be used or construed as financial or investment advice by any individual. No representations or warranties, express or implied, are made by Zolo or its affiliates as to the accuracy or completeness of the information on this page.
      </p>
    </div>
        <div className="flex justify-center items-center">
      <div className="border-t-2 border-gray w-full mt-8"></div>
    </div>
</div>
   )
}