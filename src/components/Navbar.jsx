import React from "react";
import { FcCommandLine } from "react-icons/fc";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.png";
import { navbarIcons } from "./utils/navbarIcons";
function Navbar() {
    return (
        <nav className="bg-gray-900 p-3 flex justify-between items-center text-zinc-100">
            {/* logo */}
            <Link to="/">
                <div className="flex justify-start items-center gap-2">
                    <FcCommandLine className="text-2xl" />
                    <h4 className="uppercase text-2xl font-medium logo-font">Dashboard</h4>
                </div>
            </Link>
            {/* navbar menus and user account */}
            <div className="flex justify-start items-center gap-5">
                {navbarIcons.map((link) => {
                    return (
                        <span
                            key={link.title}
                            className="text-base  p-2 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                        >
                            {link.icon}
                        </span>
                    );
                })}
                {/* user account */}
                <div className="flex justify-start items-center gap-2 cursor-pointer px-2">
                    <img src={profileImage} alt="Profile" className="w-6 h-6 rounded-full" />
                    <span className="text-lg ">EDI</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
