import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jobs from "./pages/jobs";

export default function App(){
  return (
    <Router>
    <div>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listing/:listingId" element={<PropertyDetail />} />
        <Route path="/jobs" element={<Jobs />}/>
      </Routes>
      <Footer />
     </div>
</Router>   
  )
}