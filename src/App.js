import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetails";
import Navbar from "./components/Navbar";
import Jobs from "./pages/jobs";
import Blog from "./pages/blog";
import Kamloops from "./buyPage/kamloop";
import OpenHouses from "./buyPage/openHouses";
import Townhouses from "./buyPage/town";
import Commercial from "./buyPage/commercial";
import Condos from "./buyPage/condos";
import Houses from "./buyPage/houses";
import SellPage from "./pages/sell";
import HomeWorthEstimate from "./pages/myWorth";
import SavedHome from "./pages/saveHome";
import SavedSearches from "./pages/saveSearch";
import Notification from "./pages/notification";
import LearnPage from "./pages/learn";
import LearnSellPage from "./pages/selling";
import Listing from "./pages/listing";

export default function App(){
  return (
    <Router>
    <div>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listing/:listingId" element={<PropertyDetail />} />
        <Route path="/jobs" element={<Jobs />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/kamloops-real-estate" element={<Kamloops />}/>
        <Route path="/commercial" element={<Commercial />}/>
        <Route path="/open-houses" element={<OpenHouses />}/>
        <Route path="/townhouses-for-sale" element={<Townhouses />}/>
        <Route path="/condos-for-sale" element={<Condos />}/>
        <Route path="/houses-for-sale" element={<Houses />}/>
        <Route path="/Sell-zolo" element={<SellPage />}/>
        <Route path="/home-worth" element={<HomeWorthEstimate />}/>
        <Route path="/saved-homes" element={<SavedHome />}/>
        <Route path="/saved-searches" element={<SavedSearches />}/>
        <Route path="/notifications" element={<Notification />}/>
        <Route path="/learn-buying" element={<LearnPage />}/>
        <Route path="/learn-selling" element={<LearnSellPage />}/>
        <Route path="/new-listings" element={<Listing />}/>

      </Routes>
     </div>
</Router>   
  )
}