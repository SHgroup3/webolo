import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App(){
  return (
    <Router>
       <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
     </div>
     <Footer />
</Router>
      
    
  )
}