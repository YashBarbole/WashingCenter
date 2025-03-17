import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
 
      return (//yash testing
        <Router>
         
            <Navbar />
           
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
               
                <Route path="/contact" element={<Contact />} />
              </Routes>
       
            <Footer />
        
        </Router>
      );
    }
    

export default App;
