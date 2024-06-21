import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h4 className="text-center">All copyrights to shreekutty💕 </h4>
            <div className="text-center">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/policy">Privacy policy</Link>

            </div>

       </div>
    );
};

export default Footer;
