import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import Logo from "../assets/Mobile.jpg"
export const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      
    </div>
  );
};
