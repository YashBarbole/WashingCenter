import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 flex justify-between items-center">
      <h1 className="text-5xl font-bold">B.D.R</h1>
      <div className=" text-3xl space-x-4 px-24">
        <Link to="/" className="hover:text-4xl transition-all">Home</Link>
        <Link to="/services" className="hover:text-4xl transition-all">Services</Link>
       
        <Link to="/contact" className="hover:text-4xl transition-all">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
